# EstheticLY — Site Architecture

A complete reference for rebuilding this site from scratch in a new environment. Read alongside `ESTHETICLY_DESIGN_SYSTEM.md` for the full picture.

---

## Tech Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 15.4.10 |
| UI | React | 19.1.0 |
| Language | TypeScript (strict) | ^5 |
| Styling | CSS Modules + CSS custom properties | — |
| Fonts | Geist Sans, Geist Mono (next/font/google) | — |
| Node | 20 (`.nvmrc`) | — |
| Linting | ESLint + eslint-config-next | 15.4.4 |
| Booking | Acuity Scheduling iframe embed | — |
| Gift cards | Square e-gift card link | — |

No state management library. No UI component library. No CSS preprocessor. Everything is vanilla TypeScript, CSS Modules, and Next.js primitives.

---

## Bootstrap a New Project

```bash
npx create-next-app@15.4.10 my-project \
  --typescript --eslint --app --src-dir --import-alias "@/*"
cd my-project
node --version  # confirm 20.x
```

Copy the `:root` token block from `ESTHETICLY_DESIGN_SYSTEM.md` into `src/app/globals.css` as your first commit. Everything else layers on top of those tokens.

---

## Directory Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout — fonts, metadata, chrome
│   ├── globals.css             # CSS tokens + resets (single source of truth)
│   ├── page.tsx                # / (homepage)
│   ├── page.module.css
│   ├── HomeMobile.tsx          # Dead code — useIsMobile() always false
│   ├── HomeMobile.module.css
│   ├── about/
│   │   ├── page.tsx            # /about
│   │   ├── page.module.css
│   │   ├── AboutMobile.tsx     # Dead code
│   │   └── AboutMobile.module.css
│   ├── book-now/
│   │   ├── page.tsx            # /book-now (thin shell)
│   │   ├── BookDesktop.tsx     # Real booking UI — policies + Acuity iframe
│   │   ├── page.module.css
│   │   ├── BookMobile.tsx      # Dead code
│   │   └── BookMobile.module.css
│   ├── contact/
│   │   ├── page.tsx            # /contact
│   │   └── ...
│   ├── learn-more/
│   │   ├── page.tsx            # /learn-more (FAQ page)
│   │   └── ...
│   ├── prep/
│   │   ├── page.tsx            # /prep
│   │   └── ...
│   ├── aftercare/
│   │   ├── page.tsx            # /aftercare
│   │   └── ...
│   └── gift-cards/
│       ├── page.tsx            # /gift-cards
│       └── ...
│
├── components/
│   ├── ios/                    # Responsive shell (currently disabled)
│   │   ├── useIsMobile.ts      # Always returns false — mobile shell off
│   │   ├── ResponsiveChrome.tsx # Wraps entire app — TopNav+Footer vs AppShell
│   │   ├── ResponsiveSwitch.tsx # Per-page desktop/mobile content switch
│   │   ├── AppShell/           # iOS-style layout shell (unused)
│   │   ├── NavBar/             # iOS NavBar (unused)
│   │   ├── TabBar/             # iOS TabBar (unused)
│   │   └── [10 more iOS primitives — see MOBILE_SHELL_GUIDE.md]
│   │
│   ├── layout/
│   │   ├── Navbar/             # Desktop sticky navigation
│   │   └── Footer/             # Desktop footer
│   │
│   ├── marketing/              # Page-section components
│   │   ├── Hero/               # Homepage hero — copy + portrait image
│   │   ├── ServicesGrid/       # Service cards grid
│   │   ├── AboutStrip/         # Esthetician bio card with portrait
│   │   ├── GalleryRow/         # 5-image mosaic (desktop) + swipe carousel (mobile)
│   │   ├── FAQAccordion/       # <details>/<summary> accordion
│   │   ├── ContactGrid/        # Contact info + hours card
│   │   ├── CareGrid/           # Numbered card grid (Prep / Aftercare pages)
│   │   ├── SectionHeader/      # Eyebrow + heading + lead text
│   │   ├── TopNav/             # Desktop sticky top nav (used by ResponsiveChrome)
│   │   ├── Footer/             # Marketing footer
│   │   └── MidBanner/          # Tinted accent banner (currently unused on any page)
│   │
│   └── ui/                     # Reusable primitives
│       ├── Button/             # primary / secondary / category variants
│       ├── Card/               # Generic card shell
│       ├── ServiceCard/        # Single service card
│       ├── DisplaySerif/       # Italic serif accent <span> for headings
│       ├── AcuityScheduler/    # Acuity iframe + postMessage resize
│       ├── Carousel/           # Fade-based carousel (unused in current pages)
│       └── GoogleReviewBadge/  # Floating review badge
│
└── content/                    # All site copy — no JSX
    ├── services.ts             # Service list (id, name, duration, price, description)
    ├── about.ts                # Bio, stats, certifications, signature quote
    ├── faqs.ts                 # FAQ array (id, question, answer)
    ├── contact.ts              # Email, phone, address, social links, hours
    ├── prep.ts                 # Pre-appointment prep groups + items
    └── aftercare.ts            # Post-treatment advice groups
```

---

## Content Layer (`src/content/`)

All site copy lives in TypeScript modules, never hardcoded in components. This is the first thing to update when launching the site for a different business.

### `services.ts`

```typescript
export interface Service {
  id: string
  name: string
  duration: string
  price: number
  description: string
}

export const services: Service[] = [
  { id: 'signature', name: 'Signature Facial', duration: '60 min', price: 100,
    description: 'Customized double cleanse, exfoliation, mask, neck and shoulder massage, serums, moisturizer.' },
  { id: 'back-facial', name: 'Back Facial', duration: '60 min', price: 109,
    description: "Perfect for a deep cleanse since it's a hard to reach area. Customized to your concerns." },
  { id: '90-min-custom', name: '90 Minute Custom Facial', duration: '95 min', price: 150,
    description: 'Want a longer facial to address concerns and more relaxation time? Perfect to wind down and create a moment for you.' },
]
```

### `about.ts`

Key exports: `aboutHeadline`, `bioParagraphs` (array of 3 strings), `purpose`, `signatureQuote`, `certifications`, `aboutStats`.

### `contact.ts`

```typescript
export const contact = {
  email: 'amyly.esthetics@gmail.com',
  phone: '980.999.3115',
  phoneTel: '+19809993115',
  business: 'Sassy Salon',
  addressLine1: '7211 E Independence Blvd',
  addressLine2: 'Charlotte, NC 28227',
  appointmentNote: 'Appointment-based — no walk-ins.',
  socials: {
    instagram: { handle: '@estheticlyskincare', url: '...' },
    facebook: { handle: '@EstheticLY', url: '...' },
  },
}

export const hours: HoursRow[] = [
  { day: 'Monday', open: null, close: null },       // null = Closed
  { day: 'Tuesday', open: '10:30am', close: '7:00pm' },
  // ...
]
```

### `faqs.ts`

Array of `{ id, question, answer }` objects consumed by `FAQAccordion`.

### `prep.ts` / `aftercare.ts`

Arrays of groups `{ title, items: string[] }` consumed by `CareGrid`.

---

## Root Layout (`src/app/layout.tsx`)

```tsx
import { Geist, Geist_Mono } from "next/font/google"
import ResponsiveChrome from "@/components/ios/ResponsiveChrome"
import GoogleReviewBadge from "@/components/ui/GoogleReviewBadge"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ResponsiveChrome>{children}</ResponsiveChrome>
        <GoogleReviewBadge />
      </body>
    </html>
  )
}
```

`ResponsiveChrome` is the single top-level layout switch. It wraps every page with either the desktop chrome (TopNav + `<main>` + Footer) or the iOS AppShell — controlled by `useIsMobile()`.

**Current state:** `useIsMobile()` is hardcoded to `return false`, so every viewport always renders the desktop chrome.

---

## Responsive Architecture

Three files form the responsive system. Understand these before touching any layout.

### `useIsMobile.ts`

```typescript
// CURRENTLY DISABLED:
export function useIsMobile(): boolean {
  return false  // always desktop
  // Real implementation uses useSyncExternalStore + window.matchMedia('(max-width: 1023.98px)')
}
```

**To re-enable mobile shell:** Replace `return false` with the commented `useSyncExternalStore` call.

### `ResponsiveChrome.tsx`

Wraps the entire app. Reads `useIsMobile()` and renders either:
- **Desktop:** `<TopNav /> <main>{children}</main> <Footer />`
- **Mobile:** `<AppShell>{children}</AppShell>` (iOS-style shell with NavBar + TabBar)

### `ResponsiveSwitch.tsx`

Used inside each page to select content. Accepts `desktop` and `mobile` props — both are pre-rendered Server Component subtrees. Only the switcher itself is a Client Component.

```tsx
// Pattern used by every page:
export default function MyPage() {
  return <ResponsiveSwitch desktop={<MyDesktop />} mobile={<MyMobile />} />
}
```

---

## Page Inventory

### `/` — Homepage

**File:** `src/app/page.tsx`

**Section order:**
1. `<Hero />` — headline, lead, CTA buttons, portrait photo, stats
2. `<ServicesGrid />` — 3 service cards, each links to `/book-now`
3. `<AboutStrip />` — bio card (first 2 paragraphs + signature quote)
4. `<GalleryRow />` — 5 photos: mosaic on desktop, scroll-snap carousel on mobile
5. FAQ section — `<SectionHeader />` + `<FAQAccordion />`
6. `<ContactGrid />` — contact info + hours card

---

### `/about`

**File:** `src/app/about/page.tsx`

Single component: `<AboutStrip full />` — renders all 3 bio paragraphs + photo.

---

### `/book-now`

**File:** `src/app/book-now/page.tsx` → `BookDesktop.tsx`

**Flow:**
1. Heading + lead copy
2. `<details>` accordion — booking policies (payment, cancellation, late policy)
3. Checkbox — user must accept policies before scheduler appears
4. Once checked: `<AcuityScheduler owner="30825696" accepted={true} />`
5. Pre-booking state (lock icon, arrow animation) while unchecked
6. Footer note linking to `/contact`

**Acuity owner ID:** `30825696` — replace this when deploying for a different business.

---

### `/contact`

**File:** `src/app/contact/page.tsx`

`<ContactGrid />` — two-column layout:
- Left: email, phone, address, Instagram links
- Right: hours card with day-by-day table + book CTA

---

### `/learn-more`

**File:** `src/app/learn-more/page.tsx`

FAQ section (`<SectionHeader />` + `<FAQAccordion />`) + "Have a specific question?" card with mailto link.

---

### `/prep`

**File:** `src/app/prep/page.tsx`

`<SectionHeader />` + `<CareGrid />` — numbered cards (`01`, `02`, ...) sourced from `prepGroups` in `src/content/prep.ts`.

---

### `/aftercare`

**File:** `src/app/aftercare/page.tsx`

`<SectionHeader />` + `<CareGrid />` — 2 cards: "First 72 hours" and "Cadence & maintenance", sourced from `src/content/aftercare.ts`.

---

### `/gift-cards`

**File:** `src/app/gift-cards/page.tsx`

Two-column layout: gift card image + copy block with Square purchase link.

**Square link:** `https://app.squareup.com/gift/ML1PB9TVCHMXK/order` — replace when deploying for a different business.

---

## Component Reference

### `DisplaySerif`

The typographic signature of the design — an italic serif `<span>` used once per major heading to create a mixed-font effect.

```tsx
<h1>Start your <DisplaySerif>skincare</DisplaySerif> journey.</h1>
```

CSS: `font-family: var(--font-serif); font-style: italic; color: var(--tint);`

---

### `SectionHeader`

Standard section opener used on every page except the homepage hero.

```tsx
<SectionHeader
  eyebrow="Services"                                // small caps label
  heading={<>Treatments tailored to <DisplaySerif>your skin.</DisplaySerif></>}
  lead="All facials begin with a thorough skin analysis..."
/>
```

Props: `eyebrow?`, `heading: ReactNode`, `lead?`, `stacked?` (stacks lead below heading instead of beside it), `className?`, `id?`.

---

### `Button`

```tsx
<Button href="/book-now" variant="primary">Book Now</Button>
<Button variant="secondary">Learn more</Button>
```

When `href` is provided, renders an `<a>` tag. Otherwise renders `<button>`. Variants: `primary` (filled tint), `secondary` (outlined), `category` (pill).

---

### `ServicesGrid`

Reads from `src/content/services.ts`. Each card is a `<Link href="/book-now">`. Displays: duration, name, description, price. No props — content is data-driven.

---

### `AboutStrip`

```tsx
<AboutStrip />        // homepage — first 2 bio paragraphs
<AboutStrip full />   // about page — all 3 paragraphs
```

Portrait image: `/Images/amyPortait2.jpg`. Reads bio from `src/content/about.ts`.

---

### `GalleryRow`

**Desktop:** CSS Grid mosaic — 1 featured image (50% width) + 2 stacks of 2 images each.

**Mobile (≤767px):** The desktop grid hides. A `mobileStrip` div appears with CSS scroll-snap carousel:
```css
.mobileStrip {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.mobileSlide {
  flex: 0 0 calc(85vw - 24px);
  scroll-snap-align: start;
  aspect-ratio: 4 / 5;
}
```

Image list (hardcoded in component):
- `/Images/facial.jpg`
- `/Images/handsOn2.jpg`
- `/Images/brows2.jpg`
- `/Images/IMG_1500.jpg`
- `/Images/IMG_1593.jpeg`

---

### `FAQAccordion`

Pure HTML `<details>`/`<summary>` — no JavaScript. First item open by default (`defaultOpenFirst` prop). Reads from `src/content/faqs.ts`.

---

### `CareGrid`

Accepts `cards: { num: string, title: string, items: string[] }[]`. Renders numbered cards in a responsive grid. Used by both `/prep` and `/aftercare`.

---

### `ContactGrid`

Reads from `src/content/contact.ts`. Inline SVG icons (no icon library). `formatHours()` helper returns `"Closed"` when `open` is null.

---

### `AcuityScheduler`

**File:** `src/components/ui/AcuityScheduler/AcuityScheduler.tsx`

Client component. Props: `owner: string`, `accepted: boolean`, `className?: string`.

Key behaviors:
- Returns `null` if `accepted` is false — the parent controls visibility via checkbox
- `scrolling="no"` on the iframe prevents internal iframe scrollbar at the browser level
- `useEffect` listens for `window.postMessage` from `app.acuityscheduling.com` and sets `iframeRef.current.style.height` dynamically — the page grows with the iframe, no nested scroll
- Skeleton shimmer shown until iframe `onLoad` fires
- `min-height: 800px` on `.frame` gives Acuity's mobile layout headroom before the first postMessage arrives

```tsx
<AcuityScheduler owner="30825696" accepted={policiesAccepted} />
```

**Full-bleed layout** — the parent `.scheduler` div in `book-now/page.module.css` breaks out of the container:
```css
.scheduler {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
```

---

### `Navbar` (layout/Navbar)

Client component. Uses `usePathname()` for active link highlighting. Hamburger menu for viewports where the desktop nav collapses. CTA "Book Now" button in both desktop and mobile menu.

Nav items: Home, About, Prep, Aftercare, Gift Cards, Learn More, Contact.

---

### `TopNav` (marketing/TopNav)

Used by `ResponsiveChrome` for the desktop chrome. Wraps `Navbar`. Fixed-position sticky header.

---

## Image Assets (`public/Images/`)

| File | Used in |
|------|---------|
| `IMG_6201.jpeg` | Hero section (primary portrait) |
| `amyPortait2.jpg` | AboutStrip (bio card portrait) |
| `facial.jpg` | GalleryRow cell 1 |
| `handsOn2.jpg` | GalleryRow cell 2 |
| `brows2.jpg` | GalleryRow cell 3 |
| `IMG_1500.jpg` | GalleryRow cell 4 |
| `IMG_1593.jpeg` | GalleryRow cell 5 |
| `estheticlyEgiftcard.png` | Gift Cards page |
| `DSC08632.jpeg` | Available (unused in current build) |
| `amy@work.png` | Available (unused in current build) |
| `amyPortait.jpg` | Available (unused in current build) |
| `brows3.jpg` | Available (unused in current build) |

---

## Third-Party Integrations

### Acuity Scheduling

- Embed URL: `https://app.acuityscheduling.com/schedule.php?owner={owner}&ref=embedded_csp`
- Script: `https://embed.acuityscheduling.com/js/embed.js` (loaded via `next/script` with `strategy="afterInteractive"`)
- Height auto-resize via `window.postMessage` — Acuity sends `{ height: number }` from `app.acuityscheduling.com`
- Owner ID for Amy Ly: `30825696`

### Square Gift Cards

- Purchase URL: `https://app.squareup.com/gift/ML1PB9TVCHMXK/order`
- External link, opens in new tab (`target="_blank" rel="noopener noreferrer"`)

---

## CSS Architecture

All tokens live in `:root` in `src/app/globals.css`. Components reference tokens only — no hardcoded hex values in component CSS files.

**Token namespaces:**

| Prefix | Purpose |
|--------|---------|
| `--color-*` | Original brand palette (primary, text, bg, border) |
| `--tint`, `--tint-*` | Redesign alias for `--color-primary` (#937a62) |
| `--bg-*` | Warm page backgrounds (`--bg-page`, `--bg-soft`, `--bg-warm`) |
| `--border-warm` | Warm-tinted border color |
| `--shadow-warm-*` | Warm-tinted elevation shadows |
| `--label`, `--label-*` | iOS-style text hierarchy |
| `--bg-grouped`, `--bg-elevated` | iOS-style surface colors |
| `--separator`, `--separator-strong` | iOS-style divider colors |
| `--fill-*` | iOS-style fill colors |
| `--font-*` | Font stacks (system, serif, primary, mono) |
| `--radius-*` | Border radii (card, large, button, pill) |
| `--text-h1` through `--text-h4` | Type scale |
| `--status-bar`, `--nav-bar`, `--tab-bar` | iOS shell dimensions |

**Section layout pattern** (used across all pages):
```css
.section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 24px;   /* mobile */
}
@media (min-width: 768px) {
  .section { padding: 80px 40px; }
}
```

**Breakpoints:**

| Name | Value | Use |
|------|-------|-----|
| Tablet+ | `768px` | Desktop padding, typography scale |
| Desktop | `1024px` | `useIsMobile()` cutoff when re-enabled |
| Wide | `1280px` | Max content width |
| Ultra | `1760px` | Wide layout expansion |

---

## Metadata Pattern

Each page exports its own `Metadata` object:

```typescript
// src/app/about/page.tsx
export const metadata: Metadata = {
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician...',
}
```

Root metadata (with Open Graph, Twitter card, robots) lives in `src/app/layout.tsx`.

---

## Key Conventions

**Server vs Client Components**
- Default: Server Component (no directive needed)
- Client Component when: using hooks (`useState`, `useEffect`, `usePathname`), browser APIs, or event handlers
- Mark with `'use client'` at the top of the file

**Component file convention**
Each component lives in its own directory with three files:
```
ComponentName/
├── ComponentName.tsx     # Component implementation
├── ComponentName.module.css   # Scoped styles
└── index.ts              # Re-export: export { default } from './ComponentName'
```

**Content separation**
All copy (text, prices, hours, FAQs) lives in `src/content/`. Components read from content files — they contain no hardcoded business copy.

**Path alias**
`@/*` maps to `./src/*`. Use `@/components/...` and `@/content/...` everywhere — no relative `../../` paths.

---

## Rebuild Checklist

To rebuild this site for a new project:

- [ ] `npx create-next-app` with TypeScript, ESLint, App Router, src dir, `@/*` alias
- [ ] Copy `:root` token block from `ESTHETICLY_DESIGN_SYSTEM.md` into `globals.css`
- [ ] Create `src/content/` and populate all 6 content files with the new business's data
- [ ] Build components in order: `DisplaySerif` → `Button` → `SectionHeader` → marketing components → page components
- [ ] Create `src/components/ios/useIsMobile.ts` (hardcoded `false` to start; real implementation is in this repo)
- [ ] Create `ResponsiveChrome` + `ResponsiveSwitch` wrappers
- [ ] Create `src/components/layout/Navbar` and wire active link via `usePathname()`
- [ ] Create `AcuityScheduler` with `scrolling="no"` and postMessage resize listener
- [ ] Wire `BookDesktop` with policies accordion + checkbox gate + full-bleed `.scheduler` div
- [ ] Replace Acuity owner ID (`30825696`) with the new business's ID
- [ ] Replace Square gift card URL with the new business's link
- [ ] Replace all images in `public/Images/` with new business photos
- [ ] Update all content in `src/content/` (services, bio, contact info, hours, FAQs)
- [ ] Update `metadata` in `layout.tsx` and each page file
- [ ] Run `npm run build` — should compile clean with zero errors

---

## Reference Files in This Repo

| File | Purpose |
|------|---------|
| `ESTHETICLY_DESIGN_SYSTEM.md` | CSS tokens, typography, color palette, component TypeScript interfaces |
| `MOBILE_SHELL_GUIDE.md` | Archive of the retired iOS mobile shell — use to re-enable or replicate in new projects |
| `CLAUDE.md` | Dev commands and project conventions for Claude Code |
| `public/design_handoff_estheticly_redesign/` | Original design handoff: HTML previews, JSX sketches, screenshots |
