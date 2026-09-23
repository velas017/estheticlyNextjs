# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Working directory: `/Users/edarvelasquez/Projects/estheticly/`

Node 24 (see `.nvmrc` and `engines` in `package.json`).

```bash
npm run dev           # Development server on http://localhost:3000
npm run build         # Production build
npm start             # Serve the production build
npm run lint          # ESLint (next lint)
```

There is no test suite. Verify changes with `npm run build` plus a visual check in the browser.

## Project Overview

Marketing site for **EstheticLY Skincare** — Amy Ly, licensed esthetician in Charlotte, NC. Live at https://estheticlyskincare.com. Visitors browse services, read prep/aftercare guidance and FAQs, book through an embedded Acuity scheduler, buy Square e-gift cards, and shop GlyMed Plus products through an external storefront.

## Stack

- Next.js 15.4.10 (App Router), React 19.1.0, TypeScript (strict), path alias `@/*` → `./src/*`
- CSS Modules + CSS custom properties (tokens in `src/app/globals.css`). No UI library, no Tailwind, no state library.
- Light mode only (`color-scheme: light`); dark mode was deliberately removed.

## Site Structure

```
/             Hero, services, about strip, shop banner, gallery, FAQ, contact
/about        Full bio (AboutStrip full)
/prep         Before-visit prep cards (CareGrid)
/aftercare    Aftercare cards (CareGrid) + shop CTA
/learn-more   FAQ accordion + "Ask Me" mailto card (nav label: "FAQ")
/contact      Contact info + hours (ContactGrid)
/gift-cards   Square e-gift card link
/book-now     Policies accordion → accept checkbox → Acuity iframe
```

Also: `src/app/robots.ts` and `src/app/sitemap.ts` (update the sitemap route list when adding a page).

## Where Things Live

- **Copy and business data**: `src/content/*.ts` (services, about, contact, faqs, prep, aftercare). Edit content here, not in components. Exceptions that are still hardcoded: booking policies in `src/app/book-now/BookDesktop.tsx`, footer service links in `Footer.tsx`, gallery images in `GalleryRow.tsx`, Square URL in `gift-cards/page.tsx`.
- **Page sections**: `src/components/marketing/*` (TopNav, Hero, ServicesGrid, AboutStrip, ShopBanner, GalleryRow, FAQAccordion, ContactGrid, CareGrid, SectionHeader, Footer, MobileBookBar, MidBanner — MidBanner is currently unused).
- **Primitives**: `src/components/ui/*` (DisplaySerif, AcuityScheduler, GoogleReviewBadge).
- **Root layout** `src/app/layout.tsx`: site-wide metadata/OG, BeautySalon JSON-LD, skip link, TopNav, `<main id="main-content">`, Footer, MobileBookBar, GoogleReviewBadge.
- **Security headers / CSP**: `next.config.ts`. Any new third-party script, iframe, image host, or form target must be added to the CSP or it will be blocked.

## Things to Keep in Sync

- Opening hours: `hours` in `src/content/contact.ts` **and** `openingHoursSpecification` in `layout.tsx`.
- Storefront URL: `contact.shopUrl` is the single source (used by TopNav, ShopBanner, Footer, aftercare page, FAQ).
- Routes: `sitemap.ts` and TopNav `navItems`.
- Fixed bottom UI on phones: `MobileBookBar` sets `data-bookbar="visible"` on `<html>`; `GoogleReviewBadge` lifts above it via that attribute. Keep the badge offset in step with the bar's height.

## Booking Emphasis (mobile-first — most clients book on phones)

- Sticky header (TopNav) keeps the Book Now pill on screen. It relies on `overflow-x: clip` (not `hidden`) on `html`/`body` in `globals.css` — `hidden` makes `<body>` a scroll container and silently breaks `position: sticky`.
- `MobileBookBar`: full-width Book Now bar pinned to the bottom below 768px; shows after scrolling past ~60% of the first screen, hides when the footer is in view, never renders on `/book-now`.
- Hero "View services" jumps to `#services` (price cards); "Book your facial" goes to `/book-now`.
- `/book-now`: after the policy checkbox is ticked, the scheduler scrolls into view (always on phones; on wider screens only if its top is below 75% of the viewport).

## Design System

- Brand: `--tint` #937a62 is for large text (≥24px) and decoration only. Small text and button fills use `--tint-dark` (#7d6750), hover `--tint-deep` — required for WCAG AA contrast. `--tint-ink` (#5a4a39) is the darkest brown, used with `--tint-deep` for the dark ShopBanner band (white/sand text on it).
- Body text uses `--font-system`; headings get an italic serif accent word via `<DisplaySerif>` (`--font-serif`). No web fonts are loaded.
- Breakpoints actually used: `min-width: 768px` (tablet+) and `min-width: 1024px` (desktop); max content width 1280px.
- Full token list and component specs: `ESTHETICLY_DESIGN_SYSTEM.md`. Architecture reference: `ESTHETICLY_SITE_ARCHITECTURE.md`.

## Code Standards

- Server Components by default; `'use client'` only for interactivity (currently TopNav, BookDesktop, AcuityScheduler, GoogleReviewBadge, MobileBookBar).
- Each component lives in `ComponentName/{ComponentName.tsx, ComponentName.module.css, index.ts}`; export a TypeScript props interface.
- Reference tokens in CSS Modules — no hardcoded hex colors.
- Accessibility (WCAG 2.2 AA): one `<h1>` per page (section components accept `as="h1"`), `aria-label` noting "(opens in new tab)" on external links, `aria-hidden` on decorative glyphs, visible `:focus-visible` styles, reduced-motion support.
- Use `next/image` for images (`public/Images/`).
