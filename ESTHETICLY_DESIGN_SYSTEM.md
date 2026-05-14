# EstheticLY Design System

A portable design system extracted from the EstheticLY brand. Copy the tokens, component interfaces, and patterns into any project.

---

## Brand Identity

**EstheticLY** is a skincare and esthetics brand. The visual language is earthy, warm, and professional — rooted in a brown-taupe palette (`#937a62`) that conveys natural ingredients and approachable luxury. Typography pairs a clean modern sans (Geist) with occasional serif accents (New York / Georgia) for editorial warmth.

**Design pillars:**
- Warm, not clinical
- Clean, not minimal to the point of sterile
- Approachable, not corporate
- Mobile-forward, accessible by default

---

## Design Tokens

Paste this entire `:root` block into your project's global CSS file.

```css
:root {
  /* ─── Brand ─────────────────────────────────────────────── */
  --tint:             #937a62;
  --tint-dark:        #7d6750;
  --tint-soft:        rgba(147, 122, 98, 0.12);
  --tint-fade:        rgba(147, 122, 98, 0.06);

  /* Legacy aliases (same values) */
  --color-primary:       #937a62;
  --color-primary-hover: #7d6750;
  --color-primary-shadow: rgba(147, 122, 98, 0.3);

  /* ─── Text ───────────────────────────────────────────────── */
  --label:            #1c1c1e;
  --label-secondary:  rgba(60, 60, 67, 0.6);
  --label-tertiary:   rgba(60, 60, 67, 0.3);

  /* Legacy text tokens */
  --color-text-primary:   #222222;
  --color-text-secondary: #666666;
  --color-text-light:     #999999;

  /* ─── Backgrounds ────────────────────────────────────────── */
  --bg:               #f2f2f7;   /* iOS system grouped background */
  --bg-grouped:       #f2f2f7;
  --bg-elevated:      #ffffff;   /* Cards, sheets, modals */
  --bg-warm:          #efe8de;   /* Desktop hero background */
  --bg-soft:          #f6f2ec;   /* Subtle warm surface */
  --bg-page:          #fdfcfa;   /* Page body background */

  /* Legacy background tokens */
  --color-bg-white:   #ffffff;
  --color-bg-light:   #f7f7f7;
  --color-bg-gray:    #f5f5f5;

  /* ─── Borders & Separators ───────────────────────────────── */
  --separator:        rgba(60, 60, 67, 0.12);
  --separator-strong: rgba(60, 60, 67, 0.29);
  --border-warm:      #e5e1da;
  --color-border:     #e5e5e5;
  --color-divider:    #dddddd;

  /* ─── iOS System Fills ───────────────────────────────────── */
  --fill-quat:        rgba(116, 116, 128, 0.08);
  --fill-tert:        rgba(118, 118, 128, 0.12);
  --fill-sec:         rgba(120, 120, 128, 0.16);

  /* ─── Chrome / Glass ─────────────────────────────────────── */
  --chrome-blur:      rgba(255, 255, 255, 0.72);
  --tabbar-bg:        rgba(249, 249, 249, 0.82);
  --destructive:      #ff3b30;

  /* ─── Semantic Colors ────────────────────────────────────── */
  --color-success:    #4caf50;
  --color-error:      #f44336;
  --color-warning:    #ff9800;
  --color-info:       #2196f3;

  /* ─── Shadows ────────────────────────────────────────────── */
  --shadow-sm:            0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md:            0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg:            0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl:            0 20px 40px rgba(0, 0, 0, 0.15);
  --shadow-warm-sm:       0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-warm-md:       0 8px 24px rgba(80, 60, 40, 0.07);
  --shadow-warm-lg:       0 24px 60px rgba(80, 60, 40, 0.1);
  --shadow-primary:       0 4px 12px rgba(147, 122, 98, 0.3);
  --shadow-primary-hover: 0 6px 16px rgba(147, 122, 98, 0.4);

  /* ─── Radii ──────────────────────────────────────────────── */
  --radius-button:    12px;
  --radius-card:      12px;
  --radius-large:     18px;
  --radius-pill:      999px;

  /* ─── Typography ─────────────────────────────────────────── */
  --font-primary:  'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-system:   -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
                   system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif:    "New York", "Times New Roman", Georgia, serif;
  --font-mono:     'Geist Mono', 'Courier New', monospace;

  --text-h1:    48px;
  --text-h2:    36px;
  --text-h3:    24px;
  --text-h4:    20px;
  --text-h5:    18px;
  --text-lg:    18px;
  --text-base:  16px;
  --text-sm:    14px;
  --text-xs:    12px;

  --weight-regular:   400;
  --weight-medium:    500;
  --weight-semibold:  600;
  --weight-bold:      700;

  --leading-tight:    1.2;
  --leading-normal:   1.5;
  --leading-relaxed:  1.75;

  /* ─── Spacing (8px base) ─────────────────────────────────── */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   32px;
  --space-2xl:  48px;
  --space-3xl:  64px;
  --space-4xl:  80px;
  --space-5xl:  96px;

  /* ─── Layout ─────────────────────────────────────────────── */
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1760px;

  --container-padding-mobile:  16px;
  --container-padding-tablet:  40px;
  --container-padding-desktop: 80px;

  --screen-sm:  480px;
  --screen-md:  768px;
  --screen-lg:  1024px;
  --screen-xl:  1280px;
  --screen-2xl: 1760px;

  /* ─── Transitions ────────────────────────────────────────── */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

---

## Dark Mode

Add this block immediately after `:root`. Only the redesign tokens flip — legacy `--color-*` tokens stay light so older components are not affected.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg:               #000000;
    --bg-grouped:       #000000;
    --bg-elevated:      #1c1c1e;
    --separator:        rgba(84, 84, 88, 0.65);
    --separator-strong: rgba(84, 84, 88, 1);
    --label:            #ffffff;
    --label-secondary:  rgba(235, 235, 245, 0.6);
    --label-tertiary:   rgba(235, 235, 245, 0.3);
    --fill-quat:        rgba(118, 118, 128, 0.18);
    --fill-tert:        rgba(118, 118, 128, 0.24);
    --fill-sec:         rgba(120, 120, 128, 0.32);
    --chrome-blur:      rgba(28, 28, 30, 0.78);
    --tabbar-bg:        rgba(22, 22, 23, 0.85);
  }
}
```

---

## Color System

### Brand Colors

| Token | Value | Use |
|-------|-------|-----|
| `--tint` | `#937a62` | Primary CTAs, active states, accents |
| `--tint-dark` | `#7d6750` | Hover state for tinted elements |
| `--tint-soft` | `rgba(147,122,98,0.12)` | Subtle tinted backgrounds |
| `--tint-fade` | `rgba(147,122,98,0.06)` | Very subtle tint (callouts, hover fills) |

### Text

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--label` | `#1c1c1e` | `#ffffff` | Primary body text |
| `--label-secondary` | `rgba(60,60,67,0.6)` | `rgba(235,235,245,0.6)` | Supporting copy, subtitles |
| `--label-tertiary` | `rgba(60,60,67,0.3)` | `rgba(235,235,245,0.3)` | Placeholders, disabled |

### Backgrounds

| Token | Light | Use |
|-------|-------|-----|
| `--bg-page` | `#fdfcfa` | Default page body |
| `--bg-warm` | `#efe8de` | Desktop hero sections |
| `--bg-soft` | `#f6f2ec` | Soft warm surfaces |
| `--bg` | `#f2f2f7` | iOS-style grouped backgrounds |
| `--bg-elevated` | `#ffffff` | Cards, sheets |

### Separators & Borders

| Token | Use |
|-------|-----|
| `--separator` | Default list row separators |
| `--separator-strong` | Bolder dividers |
| `--border-warm` | Warm-palette card borders |

---

## Typography System

### Font Stacks

| Variable | Use |
|----------|-----|
| `--font-primary` | Headings and UI text (Geist) |
| `--font-system` | Body text (system sans — fastest to load) |
| `--font-serif` | Accent words via `DisplaySerif` component |
| `--font-mono` | Code, labels |

### Type Scale

| Token | Size | Typical use |
|-------|------|-------------|
| `--text-h1` | 48px | Hero headlines |
| `--text-h2` | 36px | Section headings |
| `--text-h3` | 24px | Sub-section headings |
| `--text-h4` | 20px | Card titles |
| `--text-h5` | 18px | Small headings |
| `--text-lg` | 18px | Lead paragraphs |
| `--text-base` | 16px | Default body |
| `--text-sm` | 14px | Captions, labels |
| `--text-xs` | 12px | Tags, badges, timestamps |

### Predefined Text Utility Classes

```css
.heading-1      { font-size: 48px; font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
.heading-2      { font-size: 36px; font-weight: 600; line-height: 1.3; }
.body-large     { font-size: 18px; font-weight: 400; line-height: 1.75; }
.body-base      { font-size: 16px; font-weight: 400; line-height: 1.5; }
.label-uppercase{ font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
```

### `DisplaySerif` Pattern

A typographic accent that renders a single word or phrase in italic serif, colored `--tint`. Used to soften headlines.

```tsx
// src/components/ui/DisplaySerif/DisplaySerif.tsx
<h1>
  Elevate your <DisplaySerif>natural</DisplaySerif> beauty
</h1>
```

CSS: `font-family: var(--font-serif); font-style: italic; font-weight: 400; color: var(--tint)`

---

## Spacing System

Base unit: **8px**. Scale builds on multiples.

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-xs` | 4px | Tight gaps (icon + label) |
| `--space-sm` | 8px | Component internal padding |
| `--space-md` | 16px | Default card padding, row gaps |
| `--space-lg` | 24px | Section internal spacing |
| `--space-xl` | 32px | Card padding on desktop |
| `--space-2xl` | 48px | Between component groups |
| `--space-3xl` | 64px | Section top/bottom padding |
| `--space-4xl` | 80px | Large section spacing |
| `--space-5xl` | 96px | Hero vertical rhythm |

---

## Shadow System

### Standard
```
--shadow-sm:  0 1px 2px rgba(0,0,0,0.08)   — subtle lift (cards at rest)
--shadow-md:  0 4px 12px rgba(0,0,0,0.1)   — hover state
--shadow-lg:  0 8px 24px rgba(0,0,0,0.12)  — modals, popovers
--shadow-xl:  0 20px 40px rgba(0,0,0,0.15) — floating elements
```

### Warm (brand-tinted, softer)
```
--shadow-warm-sm:  0 1px 2px rgba(80,60,40,0.04)
--shadow-warm-md:  0 8px 24px rgba(80,60,40,0.07)   — desktop cards
--shadow-warm-lg:  0 24px 60px rgba(80,60,40,0.1)   — hero images
```

### Colored (primary CTA shadows)
```
--shadow-primary:       0 4px 12px rgba(147,122,98,0.3)   — button at rest
--shadow-primary-hover: 0 6px 16px rgba(147,122,98,0.4)   — button hover
```

---

## Animation & Interaction

### Transition Variables
```
--transition-fast: 0.2s ease   — micro-interactions (checkboxes, toggle)
--transition-base: 0.3s ease   — standard hover/focus transitions
--transition-slow: 0.5s ease   — page transitions, carousels
```

### Keyframes
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Utility Classes
```css
.transition-smooth { transition: var(--transition-base); }
.hover-lift:hover  { transform: translateY(-2px); box-shadow: var(--shadow-md); }
```

---

## Layout System

### Container

```css
.container {
  width: 100%;
  max-width: var(--container-2xl); /* 1760px */
  margin: 0 auto;
  padding: 0 var(--container-padding-mobile); /* 16px */
}

@media (min-width: 768px) {
  .container { padding: 0 var(--container-padding-tablet); }  /* 40px */
}
@media (min-width: 1024px) {
  .container { padding: 0 var(--container-padding-desktop); } /* 80px */
}
```

### Grid

```css
.grid-container { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--space-lg); }
.grid-2-cols    { grid-template-columns: repeat(2, 1fr); }
.grid-3-cols    { grid-template-columns: repeat(3, 1fr); }
.grid-4-cols    { grid-template-columns: repeat(4, 1fr); }
```

### Responsive Breakpoints

| Name | Width | Use |
|------|-------|-----|
| `--screen-sm` | 480px | Small phones |
| `--screen-md` | 768px | Tablets, show desktop nav |
| `--screen-lg` | 1024px | Laptops, multi-column layouts |
| `--screen-xl` | 1280px | Desktops |
| `--screen-2xl` | 1760px | Max container width |

---

## Component Catalog

### `Button`
**Path:** `src/components/ui/Button/`

```tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'category'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}
```

| Variant | Style |
|---------|-------|
| `primary` | `background: var(--tint)`, white text, `box-shadow: var(--shadow-primary)`, hover lifts + deepens shadow |
| `secondary` | Transparent, `border: 1px solid var(--separator-strong)`, hover fills with `var(--tint-soft)` |
| `category` | Pill tab — transparent default, `background: var(--label)` + white text when active |

| Size | Padding | Font |
|------|---------|------|
| `small` | `8px 18px` | 14px |
| `medium` | `12px 22px` | 15px |
| `large` | `14px 26px` | 15px |

All buttons: `border-radius: var(--radius-pill)`, `font-weight: 500`, `transition: var(--transition-base)`.

Focus: `outline: 2px solid var(--tint); outline-offset: 2px`

**Usage:**
```tsx
<Button variant="primary" size="large" href="/book-now">Book Now</Button>
<Button variant="secondary" onClick={handleClick}>Learn More</Button>
```

---

### `Card`
**Path:** `src/components/ui/Card/`

```tsx
interface CardProps {
  children: React.ReactNode
  variant?: 'weather' | 'content' | 'info'
  className?: string
}
```

| Variant | Style |
|---------|-------|
| `weather` | `border-radius: 20px; padding: 32px; background: var(--bg-elevated); box-shadow: var(--shadow-lg); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1)` |
| `content` | `border-radius: 16px; padding: 40px; background: var(--bg-elevated); box-shadow: var(--shadow-md); display: flex; flex-direction: column` |
| `info` | `border-radius: 12px; padding: 24px; background: var(--bg-soft); text-align: center` |

Hover on all variants: `transform: translateY(-2px); box-shadow: var(--shadow-lg); transition: var(--transition-base)`

---

### `SectionHeader`
**Path:** `src/components/marketing/SectionHeader/`

```tsx
interface SectionHeaderProps {
  eyebrow?: string
  heading: React.ReactNode
  lead?: React.ReactNode
  className?: string
  stacked?: boolean  // single column, centered — default is 2-column grid
  id?: string
}
```

**Eyebrow:** 11px, weight 600, `var(--tint)`, uppercase, letter-spacing 0.2em  
**Heading:** 36px (42px at 768px+), weight 600, line-height 1.15  
**Lead:** 17px, `var(--label-secondary)`

Default layout: `display: grid; grid-template-columns: 1fr 1fr; gap: 60px` (heading left, lead right).  
`stacked`: single column, heading + lead stacked.

---

### `Hero`
**Path:** `src/components/marketing/Hero/`

Two-column layout with image. No required props — content is hardcoded for EstheticLY but the pattern is extractable.

**Structure:**
```
Hero
├── .copy
│   ├── .eyebrow (tint-colored, with decorative line)
│   ├── .headline (h1 with DisplaySerif accent)
│   ├── .lead (body-large text)
│   └── .ctaRow (primary Button + ghost Button)
└── .imageWrap (4:5 aspect ratio image with warm shadow)
```

**Responsive:**
- Mobile: single column, stacked
- 768px+: 2 columns with 48px gap
- 1024px+: `1.1fr 1fr` grid, 60px gap

---

### `ServicesGrid`
**Path:** `src/components/marketing/ServicesGrid/`

Responsive grid of service cards. Each card has: duration label (12px, uppercase, `--tint`), name (22px, weight 600), description (14px, `--label-secondary`), price row (22px bold) with arrow icon, and a top border separator.

**Responsive columns:**
- Mobile: 1 column
- 640px+: 2 columns
- 1024px+: 3 columns

---

### `FAQAccordion`
**Path:** `src/components/marketing/FAQAccordion/`

HTML `<details>` + `<summary>` based. First item open by default. Summary row: question text (16px, weight 500) + rotating chevron indicator (0° → 135° when open). No JavaScript required for basic open/close.

---

### `Navbar` (Desktop)
**Path:** `src/components/layout/Navbar/`

Fixed top bar, 80px height. Logo: two-line text — `EstheticLY` (bold, tint) / `Facials and skincare` (13px secondary). Navigation links with 2px bottom border active indicator. Mobile hamburger with slide-down nav panel.

**Responsive breakpoints:**
- `<768px`: hamburger menu
- `768px+`: full nav links visible
- `1024px+`: wider padding

---

### `TopNav` (Marketing)
**Path:** `src/components/marketing/TopNav/`

The redesigned desktop navigation used in the current marketing shell. Sits above page content, transparent or with background.

---

### `Footer`
**Path:** `src/components/marketing/Footer/`

Dark background (`#1c1814`). Desktop: 4-column grid (`2fr 1fr 1fr 1fr`). Brand column with serif logo + tagline. Three link columns: Services, Visit, Connect. Bottom bar with copyright.

---

### `Carousel`
**Path:** `src/components/ui/Carousel/`

```tsx
interface CarouselSlide {
  src: string
  alt: string
}

interface CarouselProps {
  slides: CarouselSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number  // default: 5000ms
  className?: string
}
```

Auto-play pauses on hover. Previous/Next buttons: 48px circles, white background, `box-shadow: var(--shadow-md)`. Dot navigation: active dot animates to `24px` width with `border-radius: 4px`. Slide transition: opacity fade `1s ease-in-out`. Keyboard: left/right arrow keys.

---

## Accessibility

- **Focus ring:** `outline: 2px solid var(--tint); outline-offset: 2px` on `:focus-visible`
- **Contrast:** `--label` on `--bg-elevated` passes WCAG AA (4.5:1 minimum)
- **Touch targets:** All interactive elements minimum 44×44px
- **Keyboard nav:** All interactive components are keyboard-reachable
- **Semantic HTML:** Use heading hierarchy (`h1`→`h2`→`h3`), `<nav>`, `<main>`, `<footer>`, `<button>` for actions, `<a>` for navigation
- **ARIA:** `aria-current="page"` on active nav links, `aria-label` on icon-only buttons, `aria-hidden="true"` on decorative elements

---

## Global Base Styles

Add to your global CSS after the token block:

```css
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  font-family: var(--font-system);
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--label);
  background-color: var(--bg-page);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100vw;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition-base);
}

*:focus-visible {
  outline: 2px solid var(--tint);
  outline-offset: 2px;
}

h1 { font-size: var(--text-h1); font-weight: var(--weight-bold); line-height: var(--leading-tight); letter-spacing: -0.02em; }
h2 { font-size: var(--text-h2); font-weight: var(--weight-semibold); line-height: 1.3; }
h3 { font-size: var(--text-h3); font-weight: var(--weight-bold); line-height: var(--leading-tight); }
h4 { font-size: var(--text-h4); }
h5 { font-size: var(--text-h5); }

p  { font-size: var(--text-base); line-height: var(--leading-normal); color: var(--label-secondary); }
```

---

## Setup Guide: New Next.js Project

### 1. Install fonts (Geist)

```tsx
// src/app/layout.tsx
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then update `--font-primary` in your CSS to use the CSS variable:
```css
--font-primary: var(--font-geist-sans), -apple-system, sans-serif;
```

### 2. Copy globals.css tokens

Add the `:root` block and dark mode block from the **Design Tokens** section above.

### 3. Copy component folders

```
src/components/
  ui/
    Button/
    Card/
    Carousel/
    DisplaySerif/
  marketing/
    SectionHeader/
    Hero/
    ServicesGrid/
    FAQAccordion/
    Footer/
    TopNav/
  layout/
    Navbar/
```

### 4. Add container + grid utility classes

Copy the `.container`, `.grid-container`, `.grid-*-cols`, `.transition-smooth`, `.hover-lift`, `.heading-*`, `.body-*`, `.label-uppercase` classes from the **Design Tokens** section.

### 5. Add keyframe animations

```css
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### 6. Customize brand color

To swap the brand color to a different hue, only three values need to change:

```css
--tint:                  /* your primary color */
--tint-dark:             /* 10-15% darker for hover */
--color-primary:         /* same as --tint (legacy alias) */
--color-primary-hover:   /* same as --tint-dark */
--shadow-primary:        /* 0 4px 12px rgba(<r>,<g>,<b>, 0.3) */
--shadow-primary-hover:  /* 0 6px 16px rgba(<r>,<g>,<b>, 0.4) */
--tint-soft:             /* rgba(<r>,<g>,<b>, 0.12) */
--tint-fade:             /* rgba(<r>,<g>,<b>, 0.06) */
```

All other tokens (grays, separators, backgrounds) are neutral and work with any brand color.
