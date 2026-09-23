# EstheticLY — Site Architecture

A complete reference for how this site is built, and for rebuilding it from scratch in a new environment. Read alongside `ESTHETICLY_DESIGN_SYSTEM.md` for the full picture.

---

## Tech Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | Next.js (App Router) | 15.4.10 |
| UI | React | 19.1.0 |
| Language | TypeScript (strict) | ^5 |
| Styling | CSS Modules + CSS custom properties | — |
| Fonts | System font stack for body, system serif for italic accents (no web fonts) | — |
| Node | 24 LTS (`.nvmrc`, `engines.node: "24.x"`) | — |
| Linting | ESLint + eslint-config-next | 15.4.4 |
| Booking | Acuity Scheduling iframe embed | — |
| Gift cards | Square e-gift card link | — |
| Retail | GlyMed Plus storefront link | — |
| Hosting | Vercel | — |

No state management library. No UI component library. No CSS preprocessor. Everything is vanilla TypeScript, CSS Modules, and Next.js primitives.

---

## Bootstrap a New Project

```bash
npx create-next-app@15.4.10 my-project \
  --typescript --eslint --app --src-dir --import-alias "@/*"
cd my-project
node --version  # confirm 24.x
```

Copy the `:root` token block from `ESTHETICLY_DESIGN_SYSTEM.md` (or this repo's `src/app/globals.css`) into `src/app/globals.css` as your first commit. Everything else layers on top of those tokens.

---

## Directory Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — metadata, JSON-LD, skip link, chrome
│   ├── globals.css             # Tokens, resets, focus + reduced-motion rules
│   ├── page.tsx                # / (homepage)
│   ├── page.module.css
│   ├── robots.ts               # /robots.txt
│   ├── sitemap.ts              # /sitemap.xml — hardcoded route list
│   ├── about/                  # /about
│   ├── aftercare/              # /aftercare
│   ├── book-now/
│   │   ├── page.tsx            # /book-now (server shell with metadata)
│   │   ├── BookDesktop.tsx     # Client component — policies, checkbox gate, Acuity
│   │   └── page.module.css
│   ├── contact/                # /contact
│   ├── gift-cards/             # /gift-cards
│   ├── learn-more/             # /learn-more (FAQ page)
│   └── prep/                   # /prep
│
├── components/
│   ├── marketing/              # Page-section components
│   │   ├── TopNav/             # Sticky header, desktop links + mobile drawer (client)
│   │   ├── Hero/               # Homepage hero — copy, CTAs, stats, portrait
│   │   ├── ServicesGrid/       # Service cards linking to /book-now
│   │   ├── AboutStrip/         # Bio card with portrait
│   │   ├── ShopBanner/         # GlyMed Plus storefront CTA banner
│   │   ├── GalleryRow/         # 5-image mosaic (desktop) + swipe carousel (mobile)
│   │   ├── FAQAccordion/       # <details>/<summary> accordion
│   │   ├── ContactGrid/        # Contact info + hours card
│   │   ├── CareGrid/           # Numbered card grid (Prep / Aftercare)
│   │   ├── SectionHeader/      # Eyebrow + heading + lead
│   │   ├── Footer/             # Site footer
│   │   ├── MobileBookBar/      # Sticky bottom Book Now bar on phones (client)
│   │   └── MidBanner/          # Tinted accent banner (currently unused)
│   │
│   └── ui/                     # Reusable primitives
│       ├── DisplaySerif/       # Italic serif accent <span> for headings
│       ├── AcuityScheduler/    # Acuity iframe + postMessage resize (client)
│       └── GoogleReviewBadge/  # Floating, dismissible review badge (client)
│
└── content/                    # Site copy and business data — no JSX
    ├── services.ts             # Service list (id, name, duration, price, description)
    ├── about.ts                # Bio, purpose, quote, certifications, stats
    ├── faqs.ts                 # FAQ array (id, question, answer, optional link)
    ├── contact.ts              # Email, phone, address, shop URL, socials, hours
    ├── prep.ts                 # Pre-appointment prep groups
    └── aftercare.ts            # Post-treatment advice
```

Each page directory contains `page.tsx` and `page.module.css`.

---

## Content Layer (`src/content/`)

Site copy lives in TypeScript modules rather than in components. This is the first thing to update when launching the site for a different business.

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
  { id: 'signature', name: 'Signature Facial', duration: '60 min', price: 130, description: '...' },
  { id: 'back-facial', name: 'Back Facial', duration: '60 min', price: 109, description: '...' },
  { id: '90-min-custom', name: '90 Minute Custom Facial', duration: '95 min', price: 180, description: '...' },
]
```

### `about.ts`

Exports: `aboutHeadline`, `bioParagraphs` (3 strings), `purpose`, `signatureQuote`, `certifications`, `aboutStats` (rendered in the Hero).

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
  shopUrl: 'https://glymedplus.com/launch/0507169',
  socials: {
    instagram: { handle: '@estheticlyskincare', url: '...' },
    facebook: { handle: '@EstheticLY', url: '...' },
  },
} as const

export const hours: HoursRow[] = [
  { day: 'Monday', open: null, close: null },       // null = Closed
  { day: 'Tuesday', open: '10:30am', close: '7:00pm' },
  // ...
]

export const hoursNote = 'Hours may vary. After-hour appointments available upon request.'
```

`contact.shopUrl` is the single source for the storefront link (TopNav, ShopBanner, Footer, aftercare CTA, FAQ).

**Keep in sync:** `hours` here must match `openingHoursSpecification` in the JSON-LD in `layout.tsx`.

### `faqs.ts`

Array of `{ id, question, answer, link? }` consumed by `FAQAccordion`. `link` is `{ label, href, external? }` and renders a CTA under the answer.

### `prep.ts`

`prepGroups: { id, segmentLabel, title, items: string[] }[]` — mapped to numbered `CareGrid` cards on `/prep`.

### `aftercare.ts`

Exports `first72Hours` (items with `id`, `tone`, `label`), `cadence`, `makeupNotice`, `aftercareIntro`. The `/aftercare` page assembles these into two `CareGrid` cards.

### Copy that is still hardcoded

- Booking policies — `src/app/book-now/BookDesktop.tsx`
- Footer "Services" links — `Footer.tsx`
- Gallery images and alt text — `GalleryRow.tsx`
- Square gift card URL — `src/app/gift-cards/page.tsx`
- Google review URL — `GoogleReviewBadge.tsx`
- Section headings and leads — in each page/component

---

## Root Layout (`src/app/layout.tsx`)

```tsx
<html lang="en">
  <body>
    <script type="application/ld+json" ... />   {/* BeautySalon structured data */}
    <a href="#main-content" className="skipLink">Skip to main content</a>
    <TopNav />
    <main id="main-content">{children}</main>
    <Footer />
    <MobileBookBar />
    <GoogleReviewBadge />
  </body>
</html>
```

Also defines:
- `metadata` — `metadataBase` (`https://estheticlyskincare.com`), default title/description, keywords, canonical, Open Graph and Twitter cards (image `/Images/IMG_6201.jpeg`), robots.
- `localBusinessJsonLd` — `BeautySalon` schema with address, phone, email, opening hours, and social `sameAs` links, built from `src/content/contact.ts`.

There is a single responsive layout for all viewports. The earlier iOS-style mobile shell (`components/ios/`, `ResponsiveChrome`, `*Mobile.tsx` pages) was removed; see `MOBILE_SHELL_GUIDE.md` for the archive.

---

## Page Inventory

Every page except `/` exports its own `metadata` and renders exactly one `<h1>`. Section components that can serve as the page heading accept `as="h1"` (default `h2`).

### `/` — Homepage

**File:** `src/app/page.tsx`

1. `<Hero />` — h1, lead, CTAs ("Book your facial" → `/book-now`, "View services" → `#services`), `aboutStats`, portrait
2. `<ServicesGrid />` — 3 service cards → `/book-now`
3. `<AboutStrip />` — first 2 bio paragraphs + signature quote
4. `<ShopBanner />` — GlyMed Plus storefront CTA
5. `<GalleryRow />` — 5 photos
6. FAQ section — `<SectionHeader />` + `<FAQAccordion />`
7. `<ContactGrid />` — contact info + hours

### `/about`

`<AboutStrip full as="h1" />` — all 3 bio paragraphs.

### `/prep`

`<SectionHeader as="h1" />` + `<CareGrid />` — cards numbered `01`–`05` from `prepGroups`.

### `/aftercare`

`<SectionHeader as="h1" />` + `<CareGrid />` with 2 cards ("First 72 hours" marked `3d`, "Cadence & maintenance" marked `4–8`), followed by a "Keep your results going at home" shop CTA linking to `contact.shopUrl`.

### `/learn-more` (nav label "FAQ")

`<SectionHeader as="h1" />` + `<FAQAccordion />` + "Have a specific question?" card with a mailto "Ask Me" button.

### `/contact`

`<ContactGrid as="h1" />` — two columns:
- Left: email, phone, address, Instagram
- Right: hours card, hours note, "Book your visit" CTA

### `/gift-cards`

Two-column layout: gift card image (`estheticlyEgiftcard.png`) + copy block with a Square purchase link (opens in new tab).

### `/book-now`

**Files:** `page.tsx` (server, metadata) → `BookDesktop.tsx` (client)

1. Eyebrow + h1 + lead
2. `<details>` accordion — Payment Information, Cancellation Policy, Late Policy
3. Checkbox — visitor must accept policies
4. Unchecked: pre-booking placeholder (`role="status"`, inline SVG lock in a white circle, arrow)
5. Checked: `<AcuityScheduler owner="30825696" accepted />` in a full-bleed `.scheduler` wrapper; the accept row highlights, and the scheduler scrolls into view (always on phones; on wider screens only when its top is below 75% of the viewport). Focus stays on the checkbox; reduced motion uses an instant jump.
6. Note linking to `/contact`

---

## Component Reference

### `TopNav` (client)

Sticky header. Brand lockup, primary nav, "Book Now" CTA, and a hamburger-toggled mobile drawer (`aria-expanded`, `aria-controls="mobile-drawer"`). Active link via `usePathname()`.

Nav items: Home, About, Prep, Aftercare, FAQ (`/learn-more`), Contact, Gift Cards, Shop (external → `contact.shopUrl`).

### `DisplaySerif`

The typographic signature of the design — an italic serif `<span>` used once per major heading.

```tsx
<h1>Start your <DisplaySerif>skincare</DisplaySerif> journey.</h1>
```

Props: `children`, `className?`.

### `SectionHeader`

Standard section opener.

```tsx
<SectionHeader
  as="h1"
  eyebrow="Before your visit"
  heading={<>How to <DisplaySerif>prepare.</DisplaySerif></>}
  lead="I strongly encourage these tips before your appointment..."
/>
```

Props: `eyebrow?`, `heading: ReactNode`, `lead?`, `stacked?` (lead below heading instead of beside it), `className?`, `id?`, `as?: 'h1' | 'h2'`.

### `Hero`

No props. h1, lead, two CTAs ("Book your facial" → `/book-now`, "View services" → `#services`; stacked full-width below 480px), stats from `aboutStats` in a hairline-divided row, `IMG_6201.jpeg` with `priority`.

### `ServicesGrid`

No props. Reads `services`. Each card is a `<Link href="/book-now">` showing duration, name (h3), description, price, and an arrow in a round chip that fills on hover. The section has `id="services"` and a `scroll-margin-top` so the hero link lands clear of the sticky nav.

### `AboutStrip`

```tsx
<AboutStrip />               // homepage — first 2 paragraphs, h2
<AboutStrip full as="h1" />  // /about — all 3 paragraphs
```

Portrait: `/Images/amyPortait2.jpg`.

### `ShopBanner`

No props. Dark brand band (`--tint-deep` → `--tint-ink` gradient) with white heading, sand-colored `DisplaySerif` accent, lead, cream "Shop skincare" button → `contact.shopUrl` (new tab), and trust line. Deliberately dark so it doesn't blend into the tinted AboutStrip above it; all text meets AA on the band.

### `GalleryRow`

**Desktop (≥768px):** CSS Grid mosaic — 1 featured image + 2 stacks of 2.
**Mobile (<768px):** grid hidden; `.mobileStrip` scroll-snap carousel with `85vw` slides.

Images (hardcoded): `facial.jpg`, `handsOn2.jpg`, `brows2.jpg`, `IMG_1500.jpg`, `IMG_1593.jpeg`.

### `FAQAccordion`

Native `<details>`/`<summary>` — no JavaScript. First item open by default (`defaultOpenFirst`, default `true`). Renders an optional per-FAQ link. The +/− indicator is a round chip that fills with `--tint-dark` when open; open/close animates via `::details-content` where supported (needs `interpolate-size` on `:root`).

### `CareGrid`

Props: `cards: { num: string; title: string; items: string[] }[]`. Each card is an `<article>` with an h2 title. Used by `/prep` and `/aftercare`.

### `ContactGrid`

Props: `as?: 'h1' | 'h2'`. Reads `contact`, `hours`, `hoursNote`. Inline SVG icons (no icon library). `formatHours()` returns `"Closed"` when `open` is null.

### `Footer`

Brand column plus three link columns: Services (→ `/book-now`, plus external Shop Products), Visit (internal pages), Connect (Instagram, Facebook, email, phone). Copyright year is computed at render.

### `MidBanner`

Props: `before`, `accent`, `body?`. Currently not used on any page.

### `AcuityScheduler` (client)

Props: `owner: string`, `accepted: boolean`, `className?`.

- Returns `null` if `accepted` is false
- iframe `scrolling="no"`; height set from `postMessage` events whose origin is `https://app.acuityscheduling.com` (`height` or `frameHeight`), so the page grows with the iframe and there is no nested scroll
- Skeleton shimmer until the iframe's `onLoad`
- Loads `embed.acuityscheduling.com/js/embed.js` via `next/script` (`afterInteractive`)

Full-bleed wrapper in `book-now/page.module.css`:
```css
.scheduler {
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
```

### `MobileBookBar` (client)

Full-width Book Now bar fixed to the bottom of the screen below 768px (tablet and desktop rely on the nav CTA). Mounted once in the root layout.

- Shows after scrolling past ~60% of the first screen; hides while the `<footer>` is in view (IntersectionObserver); returns `null` on `/book-now`.
- Hidden state slides off-screen with `visibility: hidden` and `tabIndex={-1}`, so it's out of the tab order and accessibility tree.
- Pads for `env(safe-area-inset-bottom)`.
- While visible, sets `data-bookbar="visible"` on `<html>`; other fixed UI can respond to it.

### `GoogleReviewBadge` (client)

Floating "Review us on Google" pill linking to the business's Google review URL. Dismissible; dismissal is stored in `sessionStorage`, so the badge returns on the next session. Renders nothing until mounted, which avoids a hydration mismatch. On phones it lifts above `MobileBookBar` when `html[data-bookbar="visible"]` is set.

---

## Image Assets (`public/Images/`)

| File | Used in |
|------|---------|
| `IMG_6201.jpeg` | Hero; Open Graph / Twitter / JSON-LD image |
| `amyPortait2.jpg` | AboutStrip |
| `facial.jpg` | GalleryRow (featured) |
| `handsOn2.jpg` | GalleryRow |
| `brows2.jpg` | GalleryRow |
| `IMG_1500.jpg` | GalleryRow |
| `IMG_1593.jpeg` | GalleryRow |
| `estheticlyEgiftcard.png` | Gift Cards page |
| `DSC08632.jpeg`, `amy@work.png`, `amyPortait.jpg`, `brows3.jpg` | Unused |

All images render through `next/image`.

---

## Third-Party Integrations

### Acuity Scheduling

- Embed URL: `https://app.acuityscheduling.com/schedule.php?owner={owner}&ref=embedded_csp`
- Script: `https://embed.acuityscheduling.com/js/embed.js`
- Height auto-resize via `window.postMessage`
- Owner ID: `30825696`

### Square Gift Cards

- Purchase URL: `https://app.squareup.com/gift/ML1PB9TVCHMXK/order` (new tab)

### GlyMed Plus Storefront

- `contact.shopUrl` = `https://glymedplus.com/launch/0507169` (new tab)

### Google Reviews

- `REVIEW_URL` in `GoogleReviewBadge.tsx`

---

## Security Headers (`next.config.ts`)

Applied to every route via `headers()`:

- **Content-Security-Policy** — `default-src 'self'`, with allowances only for Acuity (`script-src`, `frame-src`, `img-src`, `connect-src`, `form-action`). `'unsafe-inline'` is required for Next.js inline scripts/styles; dev builds also allow `'unsafe-eval'` and HMR websockets. Production adds `upgrade-insecure-requests`.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera, mic, geolocation, topics disabled), `Strict-Transport-Security` (2 years, preload).

**Adding a new embed, script, image host, or form target requires updating the CSP**, or the browser will block it. Plain outbound links (Square, GlyMed, Google, socials) don't need CSP changes.

---

## SEO

- Per-page `metadata` (title + description) on every route except `/`, which uses the root metadata.
- `robots.ts` allows all crawlers and points to the sitemap.
- `sitemap.ts` lists routes by hand — add new pages there.
- `BeautySalon` JSON-LD in the root layout.

---

## CSS Architecture

All tokens live in `:root` in `src/app/globals.css`. Component CSS modules reference tokens rather than hardcoded hex values.

**Token groups:**

| Tokens | Purpose |
|--------|---------|
| `--tint`, `--tint-dark`, `--tint-deep`, `--tint-ink`, `--tint-soft`, `--tint-fade` | Brand brown. `--tint` (4.04:1) is large text / decoration only; small text and fills use `--tint-dark` (5.35:1), hover `--tint-deep`; `--tint-ink` (#5a4a39) is the darkest brown for dark CTA surfaces |
| `--label`, `--label-secondary`, `--label-tertiary`, `--color-text-secondary`, `--color-text-light` | Text colors |
| `--bg-page`, `--bg-warm`, `--bg-soft`, `--color-bg-white` | Surfaces |
| `--border-warm`, `--color-border` | Borders |
| `--shadow-sm/md/lg`, `--shadow-warm-sm/md/lg` | Elevation |
| `--radius-card`, `--radius-large`, `--radius-button`, `--radius-pill` | Radii |
| `--font-system`, `--font-serif` | Font stacks (body uses `--font-system`; accents use `--font-serif`) |
| `--text-xs` … `--text-lg`, `--text-h1` … `--text-h5` | Type scale |
| `--weight-*`, `--leading-*` | Weights, line heights |
| `--space-xs` … `--space-5xl` | Spacing |
| `--container-*`, `--screen-*` | Container widths/padding; breakpoint reference values (documentation only — custom properties can't be used in media queries) |
| `--transition-fast/base/slow` | Transitions |

**Global rules:** `overflow-x: clip` on `html`/`body` (with `hidden` fallback — `hidden` alone makes `<body>` a scroll container and breaks the sticky TopNav), `text-wrap: pretty` on headings and paragraphs, `interpolate-size: allow-keywords` for animated `<details>`, `color-scheme: light` (no dark mode), `*:focus-visible` outline, `.skipLink`, and a `prefers-reduced-motion: reduce` block that disables animations and smooth scrolling.

**Section layout pattern:**
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

**Breakpoints in use:**

| Query | Use |
|-------|-----|
| `min-width: 640px` | ServicesGrid 2-column step |
| `min-width: 768px` | Tablet+ layout, padding, type scale (most common) |
| `max-width: 767.98px` | Mobile-only rules (e.g. GalleryRow carousel) |
| `min-width: 1024px` | Desktop layout (TopNav full links, wider grids) |
| `1280px` | Max content width |

---

## Key Conventions

**Server vs Client Components**
- Server Components by default.
- Client Components (`'use client'`): `TopNav`, `BookDesktop`, `AcuityScheduler`, `GoogleReviewBadge`, `MobileBookBar`.

**Component file convention**
```
ComponentName/
├── ComponentName.tsx          # Implementation + exported props interface
├── ComponentName.module.css   # Scoped styles
└── index.ts                   # export { default } from './ComponentName'
```

**Accessibility (WCAG 2.2 AA)**
- One `<h1>` per page; logical heading order below it.
- External links: `target="_blank" rel="noopener noreferrer"` plus an `aria-label` ending in "(opens in new tab)".
- Decorative glyphs/icons get `aria-hidden="true"`.
- Brand-color contrast rules above.

**Path alias**
`@/*` maps to `./src/*`. Use `@/components/...` and `@/content/...` rather than relative `../../` paths.

---

## Rebuild Checklist

- [ ] `npx create-next-app` with TypeScript, ESLint, App Router, src dir, `@/*` alias; Node 24
- [ ] Copy the `:root` token block into `globals.css` (plus focus, skip link, reduced-motion rules)
- [ ] Create `src/content/` and populate the 6 content files with the new business's data
- [ ] Build components: `DisplaySerif` → `SectionHeader` → marketing components → pages
- [ ] Build `TopNav` with `usePathname()` active state and mobile drawer
- [ ] Build `AcuityScheduler` with `scrolling="no"` and origin-checked postMessage resize
- [ ] Wire `BookDesktop`: policies accordion + checkbox gate + full-bleed `.scheduler`
- [ ] Replace Acuity owner ID (`30825696`), Square URL, `shopUrl`, and Google review URL
- [ ] Replace images in `public/Images/`
- [ ] Update `metadata`, `SITE_URL`, and JSON-LD in `layout.tsx`; per-page metadata; `robots.ts` / `sitemap.ts`
- [ ] Update CSP in `next.config.ts` for any new embeds
- [ ] `npm run build` and `npm run lint` — clean

---

## Reference Files in This Repo

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Dev commands and project conventions for Claude Code |
| `ESTHETICLY_DESIGN_SYSTEM.md` | CSS tokens, typography, color palette, component interfaces |
| `SITE_CONTENT.md` | Original site copy |
| `UI_DESIGN_GUIDE.md`, `UI_DESIGN_GUIDE_EARTHY_BROWN.md` | Earlier design guides |
| `MOBILE_SHELL_GUIDE.md` | Archive of the retired iOS mobile shell |
