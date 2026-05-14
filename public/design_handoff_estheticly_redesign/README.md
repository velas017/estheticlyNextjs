# Handoff: EstheticLY UI Redesign — iOS-Native Mobile + Desktop Marketing Site

## Overview
This handoff covers a full UI redesign of the EstheticLY website. The redesign produces **two coordinated surfaces** that share one brand system but optimize for very different contexts:

1. **Mobile experience** — styled and structured to feel like a **native iOS app**: status bar, large titles, inset grouped lists, segmented controls, sheet modals, push-style navigation, and a 5-tab bottom tab bar.
2. **Desktop experience** — a traditional, editorial-feeling marketing website: sticky translucent header, full-bleed hero, multi-column services grid, gallery, FAQ accordion, footer.

Both surfaces serve the same content (Hero, Services, About, Prep, Aftercare, FAQ, Contact, Book) but the **information architecture diverges by viewport**:

- On mobile, navigation is tab-driven, screens push/pop, and content is arranged as scannable rows. There is no traditional "footer" — the tab bar is always present.
- On desktop, navigation is anchor-link driven within one long page, sections are full-width, and content is arranged in 2–3 column grids.

## About the Design Files
The files in this bundle are **design references created in HTML** — interactive prototypes that demonstrate the intended look, behavior, and structure. They are **not production code to copy directly**.

Your task is to **recreate these designs inside the existing Next.js 15 / React 19 codebase**, using:
- The existing App Router structure (`src/app/...`)
- CSS Modules (existing pattern) — the prototype's flat `styles.css` should be split per-component
- The existing component scaffolding under `src/components/layout/*` and `src/components/ui/*`
- Server components by default; client components only where interactivity is needed (segmented control, sheet, accordion, booking flow, tab bar state)

## Fidelity
**High-fidelity.** All colors, spacing, typography, radii, and shadows are final. Recreate pixel-perfectly in the codebase.

---

## Architecture: How the Two Surfaces Coexist

You have two reasonable options. **Pick option A unless you have strong reason otherwise.**

### Option A (recommended): One Next.js app, viewport-adaptive layout
- A single set of routes (`/`, `/about`, `/prep`, `/aftercare`, `/learn-more`, `/contact`, `/book-now`).
- A top-level `<ResponsiveShell>` client component reads viewport width and renders **either** the iOS-style shell (status bar + nav bar + tab bar + push transitions) **or** the desktop layout (sticky header + footer).
- Breakpoint: **`< 768px` → iOS shell; `≥ 768px` → desktop layout.**
- Page content modules export both a `<MobileView>` and a `<DesktopView>`; the shell picks one. Where content is similar enough, a shared `<ContentBlock>` is fine.
- Pros: one source of truth for content + routes; SEO works for both; no duplicate URLs.

### Option B: Separate route trees
- `/m/...` for mobile-shell routes; `/...` for desktop. Use a middleware `redirect` based on user agent / viewport.
- Only worth it if the two experiences are dramatically divergent (they aren't, here).

---

## Design Tokens

Add these to `src/app/globals.css` (extend, don't replace):

```css
:root {
  /* Brand */
  --tint: #937a62;
  --tint-dark: #7d6750;
  --tint-soft: rgba(147, 122, 98, 0.12);
  --tint-fade: rgba(147, 122, 98, 0.06);

  /* iOS system grays (light) */
  --bg: #f2f2f7;
  --bg-elevated: #ffffff;
  --separator: rgba(60, 60, 67, 0.12);
  --separator-strong: rgba(60, 60, 67, 0.29);
  --label: #1c1c1e;
  --label-secondary: rgba(60, 60, 67, 0.6);
  --label-tertiary: rgba(60, 60, 67, 0.3);
  --fill-quat: rgba(116, 116, 128, 0.08);
  --fill-tert: rgba(118, 118, 128, 0.12);
  --fill-sec: rgba(120, 120, 128, 0.16);
  --chrome-blur: rgba(255, 255, 255, 0.72);
  --tabbar-bg: rgba(249, 249, 249, 0.82);

  /* Desktop warm palette */
  --bg-warm: #efe8de;
  --bg-soft: #f6f2ec;
  --bg-page: #fdfcfa;
  --border-warm: #e5e1da;

  /* Type scale */
  --font-system: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
    system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: "New York", "Times New Roman", Georgia, serif;

  /* iOS layout dimensions */
  --status-bar: 54px;
  --nav-bar: 44px;
  --tab-bar: 83px;

  /* Radii */
  --radius-card: 12px;
  --radius-large: 18px;
  --radius-button: 12px;
  --radius-pill: 999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 8px 24px rgba(80, 60, 40, 0.07);
  --shadow-lg: 0 24px 60px rgba(80, 60, 40, 0.1);
}

[data-theme="dark"] {
  --bg: #000000;
  --bg-elevated: #1c1c1e;
  --separator: rgba(84, 84, 88, 0.65);
  --label: #ffffff;
  --label-secondary: rgba(235, 235, 245, 0.6);
  --label-tertiary: rgba(235, 235, 245, 0.3);
  --chrome-blur: rgba(28, 28, 30, 0.78);
  --tabbar-bg: rgba(22, 22, 23, 0.85);
}
```

Brand color note: `#937a62` is the same earthy brown used in the existing `UI_DESIGN_GUIDE_EARTHY_BROWN.md` — **keep it**.

---

## Mobile (iOS-Style) Surface

### Shell components to build
Create these under `src/components/ios/`:

| Component | Responsibility |
|---|---|
| `AppShell.tsx` | Wraps every mobile route. Renders `StatusBar`, `NavBar`, scroll container (`<main>`), `TabBar`, and a portal-mounted `Sheet` host. Manages per-tab navigation stacks (so switching tabs preserves scroll/depth). |
| `StatusBar.tsx` | Live time + signal/wifi/battery glyphs. Pure presentational. |
| `NavBar.tsx` | 44px high. Inline title is hidden until `scrollTop > 12`. Optional back button (left), optional icon action (right). |
| `LargeTitle.tsx` | Renders `<h1>` at 34px / 700 / -0.02em letter-spacing with optional uppercase 13px subtitle. Sits inside the page scroller (not in NavBar). |
| `ListInsetGrouped.tsx` + `ListRow.tsx` | iOS inset grouped list. 16px horizontal margin, `--bg-elevated` rows, 12px corner radius, separator inset 52px from left when there's a leading icon (otherwise 16px). |
| `Disclosure.tsx` | Native `<details>` styled as iOS-style accordion row with rotating chevron. |
| `Segmented.tsx` | Pill segmented control with sliding white indicator (cubic-bezier `0.32, 0.72, 0, 1`, 250ms). |
| `Sheet.tsx` | Bottom sheet with backdrop, drag handle, "Done" button. Slides up over the entire shell (z-index above tab bar). |
| `TabBar.tsx` | 83px, translucent (`backdrop-filter: blur(28px)`), 5 items: Home, Prep, Aftercare, FAQ, Book. Active item uses `--tint`. |
| `Calendar.tsx` + `SlotPicker.tsx` | Used by Book flow. |

### Routes / screens

| Route | Tab | Notes |
|---|---|---|
| `/` | Home | Hero card (4:5 aspect, image + scrim + glass CTA), 2×2 shortcut grid, callout, "More" list (About, Contact, Booking policies → opens sheet), 3-col gallery, footer text. |
| `/about` | Home (pushed) | Hero portrait card, biography paragraphs, expandable "My purpose", certifications list. |
| `/contact` | Home (pushed) | Inset list of email/phone/IG/FB, hours list, location card with placeholder map + address. |
| `/prep` | Prep | Large title, segmented control with 5 segments (Before / Using / Home / 1st time / Robe), card with bulleted content for active segment. |
| `/aftercare` | Aftercare | Large title, "Every 4–8 weeks" card, "First 72 hours" inset list with colored leading icons, 24-hour-makeup callout, "Book your next visit" CTA. |
| `/learn-more` (FAQ) | FAQ | Large title, inset list of 5 `<Disclosure>` items, "Ask Me" mailto CTA card. |
| `/book-now` | Book | 3-step flow: (1) service list, (2) calendar + time slots, (3) review + confirm. Confirmation state with checkmark. "Review booking policies" opens shared `<Sheet>`. |

### Interactions
- **Push transitions**: 320ms cubic-bezier `0.32, 0.72, 0, 1`. New screen translates from `100%` to `0`; outgoing screen translates to `-30%` with opacity 0.6.
- **Tab switching**: instant, no transition; each tab keeps its own navigation stack.
- **NavBar background**: transparent at top; `var(--chrome-blur)` + 0.5px bottom separator once `scrollTop > 12`.
- **List row press**: background flashes to `var(--fill-tert)` for 100ms.
- **Sheet open**: backdrop fades in 300ms; sheet slides up 350ms.
- **Disclosure**: chevron rotates 180° in 250ms; content height animates via CSS `interpolate-size: allow-keywords` if available, otherwise un-animated.

---

## Desktop Surface

### Layout structure
Single long marketing page (`/`) with anchor sections. Build as composable section components under `src/components/marketing/`:

| Section | Notes |
|---|---|
| `<TopNav>` | Sticky, 80px tall, `rgba(253,252,250,0.92)` + `backdrop-filter: blur(18px)`, 1px bottom border. Brand mark left (two-line: "EstheticLY" + "Skincare · Charlotte, NC" small caps), nav links + Book Now CTA right. Max-width 1280px. |
| `<Hero>` | 1.1fr / 1fr two-column, 60px gap. Left: tint eyebrow with 24px hairline, 64px headline with one italic-serif word in tint, 18px lead, primary + ghost buttons, meta row (3 stats divided by hairline). Right: 4:5 portrait. **No floating cards or badges** on the image. |
| `<ServicesGrid>` | 3-column grid, 24px gap. White cards, 1px `--border-warm` border, 14px radius, 28px padding. Tint duration eyebrow, h3, body, then `border-top` divider with price row + tint arrow. Hover: lift -2px + shadow + border becomes transparent. |
| `<AboutStrip>` | `--bg-warm` rounded card (24px radius, 64px padding), 1fr / 1.3fr columns, photo left, copy right with serif italic accent and signature quote. |
| `<GalleryRow>` | 2fr / 1fr / 1fr grid, 480px tall, 16px gap. Featured image left, two stacks of two images right. |
| `<MidBanner>` | Full-bleed `--tint`, white text, 100px vertical padding, centered. 56px headline with serif italic second line. |
| `<CareGrid>` (used twice: Prep + Aftercare) | 2-column white cards with serif italic numeral (`01`, `02`, `3d`, `4–8`) in tint, h3, bulleted list. Aftercare section sits inside a `--bg-soft` rounded container. |
| `<FAQAccordion>` | Max-width 880px, centered. `<details>` with bottom border, +/− tint indicator, 19px summary. |
| `<ContactGrid>` | 1fr / 1fr columns. Left: copy + 4 info-rows (email/phone/address/IG) with white icon bubble on `--bg-soft`. Right: white hours card with status dot, 7 day rows with dashed dividers, "closed" rows italic + tertiary. |
| `<Footer>` | Dark `#1c1814`, 4-column layout (brand+blurb / Services / Visit / Connect), bottom row with copyright. |

### Typography rules
- System UI sans for everything except **one italic-serif word per heading** rendered with `font-family: var(--font-serif); font-style: italic; color: var(--tint);`. This is the signature pattern — apply it to: "skincare" in hero, "your skin" in Services, "Amy Ly" in About, "considered" in Gallery, "skincare routine" in Mid-Banner, "prepare" in Prep, "last" in Aftercare, "asked" in FAQ, "touch" in Contact.
- All buttons are pill (`border-radius: 999px`).

---

## Shared Content Source

Move all copy out of components and into typed content modules so both surfaces stay in sync:

```
src/content/
  services.ts       // 6 services with id, name, duration, price, description
  prep.ts           // 5 prep card groups
  aftercare.ts      // first-72h items, cadence copy
  faqs.ts           // 5 FAQ Q&A pairs
  about.ts          // bio paragraphs + purpose copy
  contact.ts        // email, phone, address, hours, socials
```

Both `<MobileView>` and `<DesktopView>` import from these. **No copy duplicated in two places.**

---

## State Management

Most pages are static. The interactive parts are:

| Surface | Component | State |
|---|---|---|
| Mobile | `AppShell` | `activeTab`, `stack: { tab: screenStack[] }`, `policiesSheetOpen`, `scrolledNavBar` |
| Mobile | `Segmented` | `selectedSegment` (Prep page) |
| Mobile | `BookFlow` | `step` (1/2/3), `serviceId`, `selectedDate`, `selectedTime`, `confirmed` |
| Both | `Disclosure`/FAQ | local `<details open>` — no JS state needed |
| Desktop | `TopNav` | none unless adding mobile-menu hamburger |

No data fetching is required for the redesign itself — the existing Acuity scheduling iframe can remain on `/book-now` as a fallback below the custom UI, or replace it entirely once your Acuity API mapping is decided.

---

## Assets

All hero / portrait / gallery imagery is already in `public/Images/`. The redesign uses:

- `DSC08642.jpeg` — hero (mobile + desktop)
- `amyPortait2.jpg` — About portrait
- `facial.jpg`, `handsOn2.jpg`, `brows2.jpg`, `IMG_1500.jpg`, `IMG_1593.jpeg` — gallery cells
- `estheticlyEgiftcard.png` — gift card screen (mobile only)

Use `next/image` everywhere with explicit `width`/`height` and `priority` on the hero.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| `< 768px` | Render `<AppShell>` (iOS surface). All routes use the shell. |
| `≥ 768px` | Render desktop layout. The single `/` page contains all marketing sections; existing standalone routes (`/about`, `/prep`, etc.) can either redirect to the matching anchor on `/` or keep their own dedicated pages — your call. Recommended: keep dedicated pages because the existing nav links them, but reuse the same section components. |

The breakpoint switch should **not** depend on user-agent sniffing — use a viewport media-query / `useSyncExternalStore` over `window.matchMedia('(max-width: 767px)')` so it works in dev tools and on tablets.

---

## Implementation Plan (suggested order)

1. **Tokens** — extend `globals.css` with the variables above. Verify nothing existing breaks.
2. **Content modules** — extract copy into `src/content/*.ts` so both surfaces consume the same source.
3. **Desktop sections** — build `<TopNav>`, `<Hero>`, `<ServicesGrid>`, etc. Wire them into `src/app/page.tsx` for desktop.
4. **iOS shell** — build `<AppShell>` and primitives (`StatusBar`, `NavBar`, `TabBar`, `ListRow`, `Disclosure`, `Sheet`, `Segmented`).
5. **iOS pages** — port `Home`, `Prep`, `Aftercare`, `FAQ`, `Book`, `About`, `Contact` screens. Use the same `src/content/*.ts` modules.
6. **Responsive shell** — at the layout level, switch between `<AppShell>` and the desktop chrome based on viewport.
7. **Booking flow** — wire the 3-step UI to your real Acuity backend (or keep iframe fallback).
8. **Polish** — push transitions, scroll-state nav bar, sheet drag-to-dismiss (optional), dark mode toggle.

---

## Screenshots

Reference renders of every screen are in `screenshots/`. Use them as the visual ground-truth alongside the live HTML prototypes.

**iOS (mobile) shell**
- `screenshots/ios-01-home.png` — Home tab (hero card, 2×2 shortcuts, "More" list, gallery)
- `screenshots/ios-02-prep.png` — Prep tab with segmented control
- `screenshots/ios-03-aftercare.png` — Aftercare tab
- `screenshots/ios-04-faq.png` — FAQ tab with disclosure rows
- `screenshots/ios-05-book.png` — Booking flow (service select / calendar / review)
- `screenshots/ios-06-about.png` — About (pushed from Home)
- `screenshots/ios-07-contact.png` — Contact (pushed from Home)
- `screenshots/ios-08-giftcard.png` — Gift card (pushed from Home shortcut)

**Desktop marketing site**
- `screenshots/desktop-01-hero.png` — Top nav + hero
- `screenshots/desktop-02-services.png` — 6-card services grid
- `screenshots/desktop-03-about.png` — About strip
- `screenshots/desktop-04-prep.png` — Prep care grid
- `screenshots/desktop-05-aftercare.png` — Aftercare care grid (warm panel)
- `screenshots/desktop-06-faq.png` — FAQ accordion
- `screenshots/desktop-07-contact.png` — Contact + hours grid

## Files in this Bundle

| File | Purpose |
|---|---|
| `EstheticLY iOS App.html` | Mobile prototype — open in browser to inspect interactions, copy exact spacing/colors. |
| `EstheticLY Desktop Website.html` | Desktop prototype — single self-contained file with all sections. |
| `Side by Side Preview.html` | Both prototypes shown together in framed devices. |
| `styles.css` | All iOS-shell CSS (the source of truth for tokens, lists, segmented, sheet, tab bar). Split per-component when you port. |
| `components.jsx` | iOS primitive components (StatusBar, NavBar, ListRow, Disclosure, Sheet, Segmented, Icon set). |
| `pages.jsx` | iOS screen components (HomePage, PrepPage, AftercarePage, FAQPage, AboutPage, ContactPage, GiftcardPage). |
| `book.jsx` | Booking flow (Calendar, BookPage, PoliciesContent). |
| `app.jsx` | Top-level shell wiring tabs, stacks, sheet, theme tokens. |

The HTML prototypes use plain inline `<script type="text/babel">` Babel transpilation — your production target is server-rendered Next.js with TypeScript and CSS Modules, so **read the prototypes as visual + behavioral specs, not implementation templates**.

---

## Open Questions to Resolve in Code

- Booking: keep Acuity iframe, or build the custom 3-step UI against Acuity's API directly?
- Dark mode: ship the toggle, or default to system preference only?
- Tablet (768–1023px): render desktop or mobile shell? (Default recommendation: desktop.)
- About page: separate route on desktop, or merge into `/` as the About strip section only?
