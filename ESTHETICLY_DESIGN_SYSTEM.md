# EstheticLY Design System

The visual system as it is implemented in this repo. `src/app/globals.css` is the source of truth for tokens; this document explains how they are used and records the specs of the recurring patterns and components. For structure, routes, and behaviour see `ESTHETICLY_SITE_ARCHITECTURE.md`.

If this document and the CSS disagree, the CSS is right — fix the document.

---

## Brand

EstheticLY is a skincare and esthetics brand. The look is earthy, warm, and professional: a brown-taupe brand colour on cream surfaces, system sans-serif text, and one italic serif accent word per heading.

- Warm, not clinical
- Clean, not sterile
- Approachable, not corporate
- Mobile-first (most clients book on phones) and WCAG 2.2 AA

**Light mode only.** `:root` sets `color-scheme: light`; there is no dark theme.

**No web fonts.** Both font stacks resolve to fonts already on the device.

**Site icon.** "LY" from the header wordmark, outlined from Times New Roman Bold, cream (`#fdfcfa`) on a `--tint-dark` rounded tile. Source: `src/app/icon.svg`; `favicon.ico` and `apple-icon.png` are rasterised from it.

---

## Tokens

The complete `:root` block from `src/app/globals.css`:

```css
:root {
  color-scheme: light;
  /* Lets <details> animate open/closed to height: auto (progressive enhancement) */
  interpolate-size: allow-keywords;

  /* ============================================================
   * DESIGN TOKENS — one unified system
   * Brand = warm earthy brown; neutrals = iOS-style label grays.
   * Consolidated from the previous dual token systems; unused
   * iOS-shell tokens and duplicate legacy aliases were removed.
   * ============================================================ */

  /* Brand (earthy brown)
   * --tint (4.04:1 on white) is reserved for large text (≥24px) and
   * decorative accents. Small text and button fills use --tint-dark
   * (5.35:1) with --tint-deep as the hover state — WCAG 2.2 AA. */
  --tint: #937a62;
  --tint-dark: #7d6750;
  --tint-deep: #6a5743;
  --tint-ink: #5a4a39;   /* darkest brand brown — dark CTA surfaces */
  --tint-soft: rgba(147, 122, 98, 0.12);
  --tint-fade: rgba(147, 122, 98, 0.06);

  /* Text & labels
   * Secondary/tertiary alphas raised from 0.6/0.3 to 0.75 so body and
   * caption text meet the 4.5:1 AA contrast minimum on all surfaces. */
  --label: #1c1c1e;
  --label-secondary: rgba(60, 60, 67, 0.75);
  --label-tertiary: rgba(60, 60, 67, 0.75);
  --color-text-secondary: #666666;
  --color-text-light: #999999;

  /* Surfaces & backgrounds */
  --bg-page: #fdfcfa;
  --bg-warm: #efe8de;
  --bg-soft: #f6f2ec;
  --color-bg-white: #ffffff;

  /* Borders & dividers */
  --border-warm: #e5e1da;
  --color-border: #e5e5e5;

  /* Elevation shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-warm-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-warm-md: 0 8px 24px rgba(80, 60, 40, 0.07);
  --shadow-warm-lg: 0 24px 60px rgba(80, 60, 40, 0.1);

  /* Radii */
  --radius-card: 12px;
  --radius-large: 18px;
  --radius-button: 12px;
  --radius-pill: 999px;

  /* Font stacks */
  --font-system: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
    system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: "New York", "Times New Roman", Georgia, serif;

  /* Type scale */
  --text-h1: 48px;
  --text-h2: 36px;
  --text-h3: 24px;
  --text-h4: 20px;
  --text-h5: 18px;
  --text-lg: 18px;
  --text-base: 16px;
  --text-sm: 14px;
  --text-xs: 12px;

  /* Font weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Spacing scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 96px;

  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1760px;

  /* Container padding */
  --container-padding-mobile: 16px;
  --container-padding-tablet: 40px;
  --container-padding-desktop: 80px;

  /* Breakpoint reference values (note: CSS custom properties cannot be
   * used inside @media queries — these document the breakpoints only). */
  --screen-sm: 480px;
  --screen-md: 768px;
  --screen-lg: 1024px;
  --screen-xl: 1280px;
  --screen-2xl: 1760px;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### Tokens that components actually use

Component CSS mostly uses the colour, surface, border, shadow, and font-stack tokens, and writes sizes and spacing as literal pixel values.

| Group | Used by components |
|-------|--------------------|
| Brand | `--tint`, `--tint-dark`, `--tint-deep`, `--tint-ink`, `--tint-soft`, `--tint-fade` |
| Text | `--label`, `--label-secondary`, `--label-tertiary`; `--color-text-secondary` and `--color-text-light` once each |
| Surfaces | `--bg-page`, `--bg-warm`, `--bg-soft`, `--color-bg-white` |
| Borders | `--border-warm`; `--color-border` (review badge only) |
| Shadows | `--shadow-warm-md`, `--shadow-warm-lg`; `--shadow-sm/md/lg` (review badge only) |
| Radii | `--radius-pill`, `--radius-large` |
| Fonts | `--font-system`, `--font-serif` |
| Other | `--text-sm`, `--weight-semibold`, `--space-md`, `--transition-base` (review badge and scheduler skeleton) |

Defined but not referenced by any component: the rest of the type scale (`--text-*`), weights, line heights, the spacing scale, `--container-*`, `--screen-*`, `--radius-card`, `--radius-button`, `--shadow-warm-sm`, `--transition-fast`, `--transition-slow`. The global element styles in `globals.css` use some of them (heading sizes, weights, line heights); the remainder are available for new work. The `--screen-*` values are reference only — custom properties cannot be used in media queries.

---

## Colour

### Brand brown

Contrast ratios against each surface (AA needs 4.5:1 for normal text, 3:1 for large text — 24px, or 18.66px bold — and for UI components):

| Token | Value | on white | on `--bg-page` | on `--bg-soft` | on `--bg-warm` | Use |
|-------|-------|---------:|---------------:|---------------:|---------------:|-----|
| `--tint` | `#937a62` | 4.04 | 3.94 | 3.62 | 3.32 | Large text and decoration only: `DisplaySerif` accent words, card numerals, list markers, hairlines, focus ring, hover borders |
| `--tint-dark` | `#7d6750` | 5.35 | 5.21 | 4.79 | 4.39 | Button fills (white text on it is 5.35:1), eyebrows, small brand text, icon colour |
| `--tint-deep` | `#6a5743` | 6.87 | 6.70 | 6.16 | 5.65 | Hover state of `--tint-dark` fills; small brand text on `--bg-warm`; ShopBanner gradient start and button text |
| `--tint-ink` | `#5a4a39` | 8.49 | 8.28 | 7.61 | 6.98 | ShopBanner gradient end |
| `--tint-soft` | `rgba(147,122,98,0.12)` | — | — | — | — | Active nav pill, icon chips, checked accept row, card hover border |
| `--tint-fade` | `rgba(147,122,98,0.06)` | — | — | — | — | Accept-row background on `/book-now` |

Rules that follow from the table:

- Never use `--tint` for text under 24px or as a button fill.
- Small brand-coloured text uses `--tint-dark`, **except on `--bg-warm`**, where it falls to 4.39:1. There (the About card) use `--tint-deep`.

### Text

| Token | Value | Use |
|-------|-------|-----|
| `--label` | `#1c1c1e` | Headings, primary text, nav links (16.6:1 on `--bg-page`) |
| `--label-secondary` | `rgba(60,60,67,0.75)` | Leads, card body copy, descriptions (5.09:1 on `--bg-page`, 4.85 on `--bg-soft`, 4.61 on `--bg-warm`) |
| `--label-tertiary` | `rgba(60,60,67,0.75)` | Same value as secondary — captions, info labels, "Closed" rows. Kept as a separate name; the alpha was raised from 0.3 to pass AA |
| `--color-text-secondary` | `#666666` | Default colour of bare `<p>` elements (5.60:1 on `--bg-page`) |
| `--color-text-light` | `#999999` | Scheduler loading label only. 2.85:1 on white — not for real content |

### Surfaces and borders

| Token | Value | Use |
|-------|-------|-----|
| `--bg-page` | `#fdfcfa` | Page background; ShopBanner button fill |
| `--bg-soft` | `#f6f2ec` | Soft panels: aftercare panel, info rows, policy items, hover fills, image placeholders |
| `--bg-warm` | `#efe8de` | About card only |
| `--color-bg-white` | `#ffffff` | Scheduler and review badge. Most white cards write `#ffffff` literally |
| `--border-warm` | `#e5e1da` | Card borders, dividers, hairlines |
| `--color-border` | `#e5e5e5` | Review badge only |

### Colours outside the token set

These are written as literals in component CSS:

| Where | Value | Purpose |
|-------|-------|---------|
| Footer | `#1c1814` background, `#e8e2d8` text, `#c9b39c` link hover | Dark footer. Links are white at 85% opacity; `--tint` is too dark to use as a hover colour here |
| ShopBanner | `#e9dccb` | Sand colour for the `DisplaySerif` accent on the dark band (`--tint` has no contrast there) |
| ContactGrid | `#4caf50` with a 16%-alpha halo | Status dot beside "Hours" |
| TopNav, MobileBookBar | `rgba(253,252,250,0.92)` | Frosted `--bg-page` behind `backdrop-filter: saturate(180%) blur(18px)` |
| Buttons | `rgba(106,87,67,0.2–0.28)` | Brown drop shadows under primary buttons (`--tint-deep` as RGB) |
| Scheduler skeleton | `rgba(147,122,98,0.08–0.22)` | Shimmer bar (`--tint` as RGB) |
| Many modules | `#ffffff` | Card backgrounds and text on brown fills |

---

## Typography

### Font stacks

| Token | Stack | Notes |
|-------|-------|-------|
| `--font-system` | `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif` | All body, heading, and UI text |
| `--font-serif` | `"New York", "Times New Roman", Georgia, serif` | Brand wordmark, `DisplaySerif` accents, card numerals, the About signature |

New York is not available to web pages under that name (checked in Chrome on macOS, where the stack falls through to Times New Roman), so the first entry does not match. The stack resolves to **Times New Roman** wherever it is installed — macOS, iOS, Windows — and to the platform's default serif elsewhere, such as Android.

### Global element defaults (`globals.css`)

| Element | Size | Weight | Line height | Other |
|---------|------|--------|-------------|-------|
| `body` | 16px | 400 | 1.55 | `--font-system`, `--label` on `--bg-page`, antialiased |
| `h1` | 48px | 700 | 1.2 | letter-spacing −0.02em |
| `h2` | 36px | 600 | 1.3 | |
| `h3` / `h4` / `h5` | 24 / 20 / 18px | 700 | 1.2 | |
| `p` | 16px | 400 | 1.5 | `--color-text-secondary` |

Headings and paragraphs use `text-wrap: pretty`. Components override most of these with their own sizes.

### Sizes components actually use

| Role | Spec | Where |
|------|------|-------|
| Display heading | 44px → 56px at 768px (→ 64px at 1024px in the Hero); weight 700; line-height 1.1; letter-spacing −0.02em | Hero, `/book-now`, `/gift-cards` |
| Section heading | 36px → 42px at 768px; weight 600; line-height 1.15; letter-spacing −0.01em | `SectionHeader`, AboutStrip, ContactGrid |
| Banner heading | 36px → 48px at 768px; weight 700; line-height 1.1; letter-spacing −0.02em | ShopBanner |
| Card title | 22px; weight 600; letter-spacing −0.01em | Service name, CareGrid title, Hours, "Have a specific question?" |
| Eyebrow | 11px; weight 600; uppercase; letter-spacing 0.2em; `--tint-dark`; 16px below | Section openers (12px in the Hero, with a 24px `--tint` hairline before it) |
| Lead | 17px; line-height 1.5–1.55; `--label-secondary` (16px in ContactGrid; 17px → 18px with line-height 1.6 in the Hero) | Under headings |
| Card body | 14–15px; line-height 1.5–1.65; `--label-secondary` | Service descriptions, lists, policies, FAQ answers |
| Brand wordmark | `--font-serif` 22px; weight 600; letter-spacing −0.01em; sub-line 11px uppercase, letter-spacing 0.18em | TopNav, Footer |
| Price | 26px; weight 600; letter-spacing −0.02em; `tabular-nums` | Service cards |

### `DisplaySerif`

`src/components/ui/DisplaySerif/` — props `children`, `className?`. An inline `<span>` with `font-family: var(--font-serif); font-style: italic; font-weight: 400; color: var(--tint)`. One accent word or phrase per major heading:

```tsx
<h1>Start your <DisplaySerif>skincare</DisplaySerif> journey.</h1>
```

Because it uses `--tint`, it belongs only in large headings. On the dark ShopBanner the colour is overridden to `#e9dccb`.

---

## Layout

**Section container** — repeated in each section's CSS module, not a shared class:

```css
.section {
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 24px;
}
@media (min-width: 768px) {
  .section { padding: 80px 40px; }
}
```

**Breakpoints in use**

| Query | Use |
|-------|-----|
| `max-width: 479.98px` | Hero CTAs stack full-width |
| `min-width: 640px` | ServicesGrid goes to 2 columns |
| `min-width: 768px` | Tablet and up: larger padding and type (the most common query) |
| `max-width: 767.98px` | Phone-only UI: gallery carousel, MobileBookBar |
| `max-width: 768px` | Review badge compact layout |
| `min-width: 1024px` | Desktop: full nav links, two- and three-column grids |
| `min-width: 1024px` and `max-width: 1199.98px` | TopNav link padding tightened so the row fits |

**Radii in use:** pill (`--radius-pill`) for buttons, nav links, and chips; 12px for small panels; 14px for service cards, gallery tiles, info rows, and the policies card; 16px for CareGrid cards and CTA cards; 18px (`--radius-large`) for the Hero image, hours card, and ShopBanner; 24px for the About card and aftercare panel; 50% for round chips.

**Stacking:** TopNav 50, MobileBookBar 60, skip link 100, review badge 900.

**Unused global utilities.** `globals.css` also defines `.container`, `.grid-container`, `.grid-2-cols` / `-3-` / `-4-cols`, `.heading-1`, `.heading-2`, `.body-large`, `.body-base`, `.label-uppercase`, `.transition-smooth`, `.hover-lift`, and the `fadeIn` / `slideIn` keyframes. No component uses them. The global classes that are used are `.skipLink` and `.visuallyHidden`.

---

## Elevation and motion

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-warm-md` | `0 8px 24px rgba(80,60,40,0.07)` | Hours card, card hover, gift card image, lock chip |
| `--shadow-warm-lg` | `0 24px 60px rgba(80,60,40,0.1)` | Hero image, ShopBanner |
| `--shadow-sm` / `-md` / `-lg` | neutral black at 8–12% | Review badge and its dismiss button |

- Hover feedback is a small lift (`translateY(-1px)` on buttons, `-2px` on cards) with a deeper shadow, over 0.15–0.3s.
- `<details>` panels (FAQ, booking policies) animate open and closed through `::details-content`, which needs `interpolate-size: allow-keywords` on `:root`. Browsers without it open instantly.
- Gallery images zoom to 1.04 on hover, inside `@media (hover: hover)`.
- `prefers-reduced-motion: reduce` disables animations, transitions, and smooth scrolling globally.

---

## Recurring patterns

These are CSS patterns repeated across modules. There is no shared `Button` or `Card` component.

### Primary button

Pill; `background: var(--tint-dark)`; white text; 15px, weight 600; padding `14px 26px`. Hover: `--tint-deep` and `translateY(-1px)`.

| Instance | Differences |
|----------|-------------|
| Hero "Book your facial", ContactGrid "Book your visit" | Shadow `0 6px 16px rgba(106,87,67,0.22)`, deeper on hover. ContactGrid's is full width |
| Gift cards "Buy now", aftercare "Shop skincare" | No shadow |
| FAQ "Ask Me" | Padding `12px 22px`, no lift |
| TopNav "Book Now" | 14px text, padding `10px 20px`, shadow `0 4px 12px rgba(106,87,67,0.2)` |
| TopNav compact "Book" (below 1024px) | 13px text, padding `8px 16px`, no shadow or lift |
| TopNav drawer "Book Now" | 16px text, padding `12px 22px`, full width of the drawer |
| MobileBookBar "Book Now" | Full width, min-height 52px, 16px text, shadow, no lift |

### Ghost button

Hero "View services": transparent, `--label` text, `1px solid var(--border-warm)`. Hover: `--bg-soft` fill, `--tint` border.

### Inverse button

ShopBanner "Shop skincare": `--bg-page` fill, `--tint-deep` text, padding `14px 28px`, black drop shadow. Hover turns it white. Its focus outline is white, since the default `--tint` ring would not show on the band.

### Card

White background, `1px solid var(--border-warm)`, radius 14–16px, padding 24–40px. Linked cards (services) lift 2px on hover with `--shadow-warm-md` and a `--tint-soft` border.

### Round chip

A circle with a `--border-warm` border that fills with `--tint-dark` and turns its glyph white when active: the 40px arrow on service cards (on hover and focus) and the 36px +/− on FAQ items (when open). Contact icons sit in a 40px `--tint-soft` circle with a `--tint-dark` icon.

---

## Components

Visual specs only; props and behaviour are in the architecture reference. All paths are under `src/components/`.

### `marketing/SectionHeader`

Props: `eyebrow?`, `heading`, `lead?`, `className?`, `stacked?`, `id?`, `as?: 'h1' | 'h2'`. Eyebrow, section heading (max-width 580px), and lead (max-width 480px). One column with a 20px gap and 40px below; at 1024px and up the heading and lead sit side by side (`1fr 1fr`, 60px gap, bottom-aligned) unless `stacked`.

### `marketing/TopNav`

Sticky at the top with a frosted `--bg-page` background and a `--border-warm` bottom border. Inner row max-width 1280px, padding `18px 24px` (`18px 40px` from 768px).

- **1024px and up:** links at 14px, weight 500, pill-shaped with padding `8px 14px` (`8px 10px` up to 1199px); hover `--bg-soft`; the current page gets a `--tint-soft` pill. Primary "Book Now" button at the end.
- **Below 1024px:** compact "Book" button and a 40px hamburger that animates to an X. The drawer lists links at 16px, weight 500, divided by `--border-warm`; the current page is `--tint-dark`, weight 600, on `--bg-soft`. The drawer scrolls when it is taller than the screen.

### `marketing/Hero`

One column (40px gap) becoming `1.1fr 1fr` (60px gap) at 1024px. Eyebrow with hairline, display heading, lead (max-width 460px), primary and ghost buttons, then a stats row above a `--border-warm` hairline: 20px weight-600 figures over 13px `--label-tertiary` labels, divided by vertical hairlines. Image at 4:5, `--radius-large`, `--shadow-warm-lg`.

### `marketing/ServicesGrid`

1, 2 (640px), then 3 (1024px) columns with 16 / 20 / 24px gaps. Each card: duration (11px, uppercase, letter-spacing 0.15em, `--tint-dark`, weight 600), name (card title), description (14px `--label-secondary`), then a price row above a `--border-warm` divider with the arrow chip on the right.

### `marketing/AboutStrip`

A `--bg-warm` panel, radius 24px, padding 32 / 48 / 64px. One column, then `1fr 1.3fr` at 1024px. Portrait at 4:5 with 16px radius. Eyebrow and signature quote use `--tint-deep` (see the contrast rule above); the signature is `--font-serif` italic at 22px. Paragraphs are 16px `--label-secondary`, line-height 1.6.

### `marketing/ShopBanner`

Dark band: a faint white radial highlight over `linear-gradient(160deg, var(--tint-deep), var(--tint-ink))`, `--radius-large`, `--shadow-warm-lg`, centred content, padding `48px 28px` (`72px 48px` from 768px). White banner heading with a sand accent word, lead at 17px in white at 85%, eyebrow and trust line in white at 78%, inverse button. It is dark on purpose so it reads differently from the tinted About card above it.

### `marketing/GalleryRow`

Tiles have a 14px radius and a `--bg-soft` placeholder. Desktop: `2fr 3fr` grid, 440px tall (640px from 1024px), with one featured tile and a five-tile mosaic (three over two, 16px gaps). Phones: horizontal scroll-snap strip of 3:4 slides, each `85vw − 24px` wide, with hidden scrollbars.

### `marketing/FAQAccordion`

Native `<details>`. Items are divided by `--border-warm` with 20px (24px from 768px) vertical padding. Question at 17px (19px from 768px), weight 500, turning `--tint-dark` on hover, with the +/− round chip on the right. Answer at 15px `--label-secondary`, line-height 1.6, max-width 720px; optional link in `--tint-dark`, weight 600.

### `marketing/CareGrid`

One column, then two from 768px (gaps 20 / 32 / 40px). Each card: white, 16px radius, padding 32px (40px from 768px); a `--font-serif` italic numeral in `--tint` at 48px (56px from 768px); card title; a bulleted list at 15px `--label-secondary`, line-height 1.65, with `--tint` markers.

### `marketing/ContactGrid`

Two columns from 1024px. Left: info rows on `--bg-soft` (14px radius, padding `16px 20px`) with an icon chip, a 12px uppercase `--label-tertiary` label, and a 15px weight-500 value; linked rows turn white with a border and `--shadow-warm-md` on hover. Right: the hours card — white, `--radius-large`, `--shadow-warm-md` — with a green status dot, 15px tabular rows divided by `--border-warm`, italic `--label-tertiary` for closed days, a 13px note, and a full-width primary button.

### `marketing/Footer`

Background `#1c1814`, 80px top margin. One column, then `2fr 1fr 1fr 1fr` from 768px. Serif wordmark in white, a 14px blurb, column titles at 13px uppercase (letter-spacing 0.15em, white at 50%), links at 14px (white at 85%, `#c9b39c` on hover), and a 13px bottom bar at 55% opacity above a faint divider.

### `marketing/MobileBookBar`

Phones only (below 768px). Fixed to the bottom with the same frosted background as the nav, a `--border-warm` top border, padding `12px 16px` plus the bottom safe-area inset, and a full-width primary button. Slides in and out with a 0.3s transform.

### `marketing/MidBanner`

Not used on any page. A full-width `--tint` band with white text. White on `--tint` is 4.04:1, so its 16–17px body text would fail AA as written — switch the background to `--tint-dark` or darker before using it.

### `ui/GoogleReviewBadge`

Fixed bottom-right (24px inset; 16px at 768px and below). A white pill with a `--color-border` border, `--shadow-md`, the Google "G", and a 14px weight-600 label; hover lifts it and turns the label `--tint-dark`. At 768px and below it shows the icon only. A 24px round dismiss button overlaps the top-right corner. While the MobileBookBar is showing, it moves up to `92px` plus the safe-area inset.

### `ui/AcuityScheduler`

White container holding the Acuity iframe (min-height 800px, no border). Until the iframe loads, a centred skeleton shows a 12px shimmer bar in translucent `--tint` and a "Loading scheduler…" label.

### Booking page pieces (`src/app/book-now/page.module.css`)

- **Policies card:** white `<details>`, 14px radius; summary at 16px weight 600 with an 18px +/− in `--tint`; each policy on a `--bg-soft` panel with 12px radius.
- **Accept row:** `--tint-fade` background, `--tint-soft` border, 12px radius. When checked it becomes `--tint-soft` with a `--tint` border.
- **Checkbox:** custom, 22px, 6px radius, 2px `--border-warm` border; checked is `--tint-dark` with a white ✓.
- **Pre-booking panel:** `--bg-soft`, with a 56px white circle holding a `--tint-dark` lock icon and a bouncing `--tint` arrow.
- **Scheduler wrapper:** full-bleed (`width: 100vw`), with `scroll-margin-top: 80px` for the sticky nav.

---

## Accessibility

- **Focus:** `*:focus-visible { outline: 2px solid var(--tint); outline-offset: 2px; }` globally (3.94:1 against `--bg-page`). ShopBanner's button overrides the colour to white.
- **Contrast:** follow the brand table above. Text on brown fills is white on `--tint-dark` or darker.
- **Skip link:** `.skipLink` is off-screen until focused, then appears at the top-left above the nav.
- **Screen-reader text:** `.visuallyHidden` hides text visually while keeping it in the accessibility tree.
- **Current page:** marked visually in the nav (tint pill; bold on `--bg-soft` in the drawer). `aria-current` is not set.
- **Decorative glyphs** (arrows, the +/− chips, icons) carry `aria-hidden="true"`.
- **Motion:** the global reduced-motion block applies to every component.

---

## Changing the brand colour

1. Replace the six `--tint*` tokens in `globals.css`, then re-check the contrast table: the fill colour needs 4.5:1 against white text, and small brand text needs 4.5:1 on every surface it sits on.
2. Update the literals that encode the brand colour as RGB: the `rgba(106, 87, 67, …)` button shadows in Hero, ContactGrid, MobileBookBar, and TopNav, and the `rgba(147, 122, 98, …)` shimmer in AcuityScheduler.
3. Review the colours outside the token set (Footer, ShopBanner sand accent) and the frosted `rgba(253, 252, 250, …)` backgrounds, which follow `--bg-page`.
4. Recolour `src/app/icon.svg` and regenerate `favicon.ico` and `apple-icon.png`.
