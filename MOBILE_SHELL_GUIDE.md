# iOS Mobile Shell — Archive Reference

> **Status: Retired from EstheticLY.**
> The mobile shell is intentionally disabled in this project. EstheticLY now uses the desktop layout at all screen sizes. This document exists as an archive and replication guide for use in other projects.

---

## What It Was

The iOS mobile shell was a full native-feeling mobile experience built in **Phase 3** (commit `b88fb10`, May 4 2026). At viewport widths below 1024px, the site swapped out the standard TopNav/Footer layout and rendered a pinned iOS-style chrome: a top navigation bar, an internal scrolling content area, and a bottom tab bar — all with frosted glass, safe-area-inset handling, and dark mode support.

**StatusBar** (a 54px decorative bar with a live clock, signal bars, WiFi icon, and battery indicator) was subsequently removed in commit `c06e8ed` — it had no functional purpose on web. The shell continued to work without it.

**Final disabled state (current):**
- `useIsMobile.ts`: returns hardcoded `false` instead of the real `matchMedia` result
- `globals.css` lines 201–209: body `height/overflow` media query is commented out

These two lines are the only changes needed to restore the shell in a different project that wants it.

---

## Architecture

```
┌─────────────────────────────────┐
│  src/app/layout.tsx             │
│    └─ <ResponsiveChrome>        │  ← client component, reads useIsMobile()
│         ├─ [≥1024px] TopNav     │
│         │   <main>{children}    │
│         │   Footer              │
│         └─ [<1024px] AppShell   │  ← iOS chrome
│               ├─ NavBar (44px)  │  fixed top
│               ├─ .page scroller │  overflow-y: auto, -webkit-overflow-scrolling: touch
│               │    └─ {children}│  ← page content via ResponsiveSwitch mobile prop
│               └─ TabBar (83px)  │  fixed bottom
└─────────────────────────────────┘
```

Each page switches content using `ResponsiveSwitch`:

```tsx
// src/app/some-page/page.tsx (server component)
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

export default function Page() {
  return <ResponsiveSwitch desktop={<DesktopView />} mobile={<MobileView />} />
}
```

---

## Shell Dimensions

| Layer | Height | Variable |
|-------|--------|----------|
| StatusBar *(deleted)* | 54px | `--status-bar` |
| NavBar | 44px | `--nav-bar` |
| TabBar | 83px | `--tab-bar` |
| Safe top (legacy alias) | 54px | `--safe-top` |
| Safe bottom (legacy alias) | 34px | `--safe-bottom` |

Safe-area insets are consumed via `env(safe-area-inset-top, 0)` and `env(safe-area-inset-bottom, 0)` — not from the CSS variable aliases.

---

## StatusBar (Deleted — commit `c06e8ed`)

The StatusBar was a decorative 54px fixed overlay mimicking a native iOS status bar. It had no interactive function — it was purely visual.

**File:** `src/components/ios/StatusBar/` *(deleted)*

**CSS spec:**
```css
.bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--status-bar); /* 54px */
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 26px 8px;
  font-family: var(--font-system);
  font-weight: 600;
  font-size: 17px;
  z-index: 50;
  pointer-events: none;
  color: var(--label);
  padding-top: env(safe-area-inset-top, 0);
}
/* Signal bars: 4 spans, heights 4px/6px/8px/10px, gap 3px */
/* Battery: inline SVG rect with dynamic fill width via JS */
```

**Behavior:**
- Time updated every 30s via `setInterval`, formatted as `h:mm` (e.g., `9:41`)
- 4 signal bars rendered as `<span>` elements with ascending heights
- WiFi icon: inline SVG
- Battery: inline SVG with a `<rect>` whose width updated to reflect a mocked level
- All `pointer-events: none` — decorative only

**Why it was removed:** A fake status bar showing incorrect time/signal data has no utility on web and could confuse users. Removed in favor of starting content directly at the NavBar.

---

## Component Inventory

All components live in `src/components/ios/`.

### Chrome Components

#### `AppShell`
**Path:** `src/components/ios/AppShell/AppShell.tsx`

```tsx
interface AppShellProps {
  children: React.ReactNode
}
```

The root mobile layout wrapper. Client component. Renders NavBar, an internal scroller div, and TabBar. Tracks scroll position via `onScroll` event — passes `scrolled: boolean` to NavBar when `scrollTop > 12`. Resets scroll to top on pathname change. Routes map to titles via `titleByRoute`. Shows back button on non-tab routes.

**CSS key classes:**
- `.shell` — `position: fixed; inset: 0; display: flex; flex-direction: column`
- `.page` — `flex: 1; overflow-y: auto; -webkit-overflow-scrolling: touch; padding-top: calc(var(--nav-bar) + env(safe-area-inset-top, 0)); padding-bottom: calc(var(--tab-bar) + 8px + env(safe-area-inset-bottom, 0))`

---

#### `NavBar`
**Path:** `src/components/ios/NavBar/NavBar.tsx`

```tsx
interface NavBarProps {
  title?: string
  showBack?: boolean      // defaults to true on non-home routes
  backLabel?: string      // defaults to "Back"
  scrolled: boolean       // when true: frosted glass + inline title visible
}
```

Fixed top bar. Transparent when not scrolled; applies `--chrome-blur` backdrop-filter when scrolled. Back button uses `router.back()`. Title fades in with scroll.

**CSS key classes:**
- `.bar` — `position: fixed; top: 0; top: env(safe-area-inset-top, 0); left: 0; right: 0; height: var(--nav-bar); z-index: 40`
- `.scrolled` — adds `background: var(--chrome-blur); backdrop-filter: blur(20px) saturate(180%)`
- `.button` — back button with chevron SVG + label
- `.title` — center-aligned, opacity transitions with scroll state

---

#### `TabBar`
**Path:** `src/components/ios/TabBar/TabBar.tsx`

No props — self-contained. Uses `usePathname()` to determine active tab.

**Tabs:**
| Label | Route | Match logic |
|-------|-------|-------------|
| Home | `/` | `/`, `/about`, `/contact`, `/gift-cards` |
| Prep | `/prep` | `/prep` |
| Aftercare | `/aftercare` | `/aftercare` |
| FAQ | `/learn-more` | `/learn-more` |
| Book | `/book-now` | `/book-now` |

Each tab: 26px icon (`Icons.tsx`) + 10px label. Active state applies `var(--tint)` color.

**CSS key classes:**
- `.bar` — `position: fixed; bottom: 0; left: 0; right: 0; height: var(--tab-bar); display: flex; background: var(--tabbar-bg); backdrop-filter: blur(20px) saturate(180%); padding-bottom: env(safe-area-inset-bottom, 0)`
- `.item` — `flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px; color: var(--label-secondary)`
- `.active` — `color: var(--tint)`
- `.label` — `font-size: 10px; font-weight: 500`

---

### Primitive Components

#### `LargeTitle`
**Path:** `src/components/ios/LargeTitle/LargeTitle.tsx`

```tsx
interface LargeTitleProps {
  title: string
  subtitle?: string
}
```

Page-level heading block. Title: 34px bold. Subtitle: 13px uppercase, `var(--label-secondary)`, letter-spacing 0.08em. Used at the top of mobile page views.

---

#### `ListInsetGrouped` + `ListRow`
**Path:** `src/components/ios/List/`

```tsx
interface ListInsetGroupedProps {
  header?: string
  footer?: string
  children: React.ReactNode
}

interface ListRowProps {
  leading?: React.ReactNode    // icon element (rendered in 28×28 tinted bubble)
  title: string
  subtitle?: string
  onPress?: () => void
  href?: string
}
```

iOS Settings-style inset grouped list. Each `ListRow` has a minimum height of 44px, 0.5px top separator, leading icon slot, body (title 17px + subtitle 14px), and trailing chevron. `onPress` or `href` makes the row interactive with `var(--fill-tert)` active state.

---

#### `Disclosure`
**Path:** `src/components/ios/Disclosure/Disclosure.tsx`

```tsx
interface DisclosureProps {
  summary: string
  children: React.ReactNode
  defaultOpen?: boolean
}
```

HTML `<details>` based expandable. Summary row with a rotating chevron (0° closed → 135° open). Used for FAQ-style content in mobile views.

---

#### `Sheet`
**Path:** `src/components/ios/Sheet/Sheet.tsx`

```tsx
interface SheetProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}
```

Bottom sheet modal. Slides up from `translateY(100%)` to `translateY(0)` in 0.35s `cubic-bezier(0.32, 0.72, 0, 1)`. Backdrop: `rgba(0,0,0,0.4)`. Drag handle bar: 36×5px rounded. Header: title (centered) + "Done" button. Body: scrollable. Closes on Escape key or backdrop tap.

---

#### `Segmented`
**Path:** `src/components/ios/Segmented/Segmented.tsx`

```tsx
interface SegmentedOption<T extends string> {
  value: T
  label: string
}

interface SegmentedProps<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
}
```

Sliding pill segmented control. Indicator animates position with `0.25s cubic-bezier(0.34, 1.56, 0.64, 1)`. Background: `var(--fill-tert)`. Active segment indicator: white, shadow.

---

#### `ShortcutCard`
**Path:** `src/components/ios/ShortcutCard/ShortcutCard.tsx`

```tsx
interface ShortcutCardProps {
  icon: React.ReactNode
  iconBg?: string
  title: string
  subtitle?: string
  href?: string
  onPress?: () => void
}
```

Icon + title/subtitle card. Scales to 0.97 on active press. Rounded corners (`var(--radius-card)`). Icon rendered in a tinted bubble with `iconBg` background.

---

#### `HeroCard`
**Path:** `src/components/ios/HeroCard/HeroCard.tsx`

```tsx
interface HeroCardProps {
  image: { src: string; alt: string }
  eyebrow?: string
  title: string
  body?: string
  children?: React.ReactNode  // CTA buttons
  square?: boolean            // 4:4 ratio (default: 4:5)
}
```

Full-bleed image card with dark gradient scrim. Scrim: `linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.35) 35%, rgba(0,0,0,0) 60%)`. Title: 30px, white, weight 700. Border-radius: `var(--radius-large)` (18px). Uses Next.js `<Image fill>`.

---

#### `Callout`
**Path:** `src/components/ios/Callout/Callout.tsx`

```tsx
interface CalloutProps {
  children: React.ReactNode
  className?: string
}
```

Tinted info box. Background: `var(--tint-fade)`. Border: 1px `var(--border-warm)`. Border-radius: `var(--radius-card)`. Emphasizes `<strong>` and `<em>` children.

---

### Utilities

#### `Icons.tsx`
**Path:** `src/components/ios/Icons.tsx`

All icons accept `{ size?: number; color?: string; strokeWidth?: number }`.

Available icons:
`HomeIcon`, `PrepIcon`, `AftercareIcon`, `FAQIcon`, `BookIcon`, `AboutIcon`, `ContactIcon`, `MailIcon`, `PhoneIcon`, `PinIcon`, `ClockIcon`, `IGIcon`, `FBIcon`, `SparkIcon`, `LeafIcon`, `GiftcardIcon`, `DropIcon`, `CheckIcon`, `CloseIcon`

All are SF-symbol-style stroked SVGs. Default size: 24. Default strokeWidth: 1.8.

---

#### `useIsMobile`
**Path:** `src/components/ios/useIsMobile.ts`

```tsx
// SSR-safe viewport detection using useSyncExternalStore
// Breakpoint: (max-width: 1023.98px)
// SSR returns false (desktop), hydrates to real value
export function useIsMobile(): boolean
```

Currently hardcoded to return `false`. The real implementation is commented out on line 32.

---

#### `ResponsiveChrome`
**Path:** `src/components/ios/ResponsiveChrome.tsx`

```tsx
interface ResponsiveChromeProps {
  children: React.ReactNode
}
```

Top-level layout switch in `src/app/layout.tsx`. Renders `<AppShell>` when `useIsMobile()` is true, otherwise `<TopNav> <main> <Footer>`.

---

#### `ResponsiveSwitch`
**Path:** `src/components/ios/ResponsiveSwitch.tsx`

```tsx
interface ResponsiveSwitchProps {
  desktop: React.ReactNode
  mobile: React.ReactNode
}
```

Per-page content switch. Accepts pre-rendered Server Component trees as props so only the switcher itself is a client component.

---

## Safe-Area Inset Strategy

Three components consume `env(safe-area-inset-*)`:

| Component | Property | Value |
|-----------|----------|-------|
| `NavBar.module.css` | `top` | `env(safe-area-inset-top, 0)` |
| `TabBar.module.css` | `padding-bottom` | `env(safe-area-inset-bottom, 0)` |
| `AppShell.module.css` | `padding-top` | `calc(var(--nav-bar) + env(safe-area-inset-top, 0))` |
| `AppShell.module.css` | `padding-bottom` | `calc(var(--tab-bar) + 8px + env(safe-area-inset-bottom, 0))` |

Required meta tag in HTML `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```
Without `viewport-fit=cover`, `env(safe-area-inset-*)` values are always `0`.

---

## Per-Route Mobile Views

Each page in this project has a separate mobile Server Component:

| Route | Desktop | Mobile |
|-------|---------|--------|
| `/` | `HomeMobile.tsx` (shared) | — |
| `/about` | Desktop section in page.tsx | `AboutMobile.tsx` |
| `/prep` | `page.tsx` desktop | `PrepMobile.tsx` |
| `/aftercare` | Desktop | `AftercareMobile.tsx` |
| `/learn-more` | Desktop | `FAQMobile.tsx` |
| `/book-now` | `BookDesktop.tsx` | `BookMobile.tsx` |
| `/gift-cards` | Desktop | `GiftCardsMobile.tsx` |
| `/contact` | Desktop | `ContactMobile.tsx` |

Mobile views use iOS primitives (`LargeTitle`, `ListInsetGrouped`, `Disclosure`, `Sheet`, etc.) and reference icons from `Icons.tsx`.

---

## Dark Mode

Dark mode follows **system `prefers-color-scheme` only** — no manual toggle. The iOS-specific tokens (`--bg`, `--bg-elevated`, `--label`, `--separator`, `--chrome-blur`, `--tabbar-bg`, fills) invert automatically. See `globals.css` lines 159–175 for the full dark override block.

---

## Replication Guide (New Project)

To port this shell to a new Next.js App Router project:

### 1. Prerequisites
```bash
# Next.js 15+, React 19+, TypeScript
npm install next react react-dom typescript
```

### 2. Copy component folder
```
src/components/ios/          ← copy entire directory
```

### 3. Add CSS tokens to your globals.css
Copy the `:root` block from this project's `src/app/globals.css` — specifically these groups:
- iOS system grays (`--bg`, `--label`, `--separator`, `--fill-*`, `--chrome-blur`, `--tabbar-bg`)
- iOS layout dimensions (`--status-bar`, `--nav-bar`, `--tab-bar`, `--safe-top`, `--safe-bottom`)
- Radii (`--radius-card`, `--radius-large`, `--radius-pill`)
- Brand tint (`--tint`, `--tint-dark`, `--tint-soft`)

### 4. Add dark mode block
Copy the `@media (prefers-color-scheme: dark)` block from `globals.css` lines 159–175.

### 5. Add body overflow lock
```css
@media (max-width: 1023.98px) {
  html, body {
    height: 100%;
    overflow: hidden;
  }
}
```

### 6. Add viewport-fit meta tag
In your root `layout.tsx`:
```tsx
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}
```

### 7. Wire ResponsiveChrome into layout
```tsx
// src/app/layout.tsx
import ResponsiveChrome from '@/components/ios/ResponsiveChrome'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ResponsiveChrome>{children}</ResponsiveChrome>
      </body>
    </html>
  )
}
```

### 8. Enable the hook
In `src/components/ios/useIsMobile.ts`, swap:
```ts
// Remove this line:
return false

// Uncomment this line:
return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
```

### 9. Add per-page mobile views
For each route, create a `*Mobile.tsx` Server Component using the iOS primitives, then wrap in `ResponsiveSwitch` in the page:
```tsx
export default function Page() {
  return <ResponsiveSwitch desktop={<DesktopView />} mobile={<MobileView />} />
}
```

### 10. Customize TabBar routes
Edit `src/components/ios/TabBar/TabBar.tsx` — the `tabs` array defines routes, labels, icons, and active-match logic.
