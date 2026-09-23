# EstheticLY Skincare

Website for **EstheticLY Skincare**, the practice of Amy Ly, a licensed esthetician in Charlotte, NC. Live at [estheticlyskincare.com](https://estheticlyskincare.com).

Visitors can browse facial services and pricing, read how to prepare for and care for their skin after a visit, find answers to common questions, book an appointment, buy a gift card, and shop the professional products used in treatment.

## Features

- **Online booking**: `/book-now` asks visitors to review and accept booking policies (deposit, cancellation, late policy), then loads an embedded Acuity Scheduling calendar and scrolls it into view.
- **Mobile-first booking prompts**: a sticky header and a Book Now bar pinned to the bottom of the screen on phones keep booking one tap away.
- **Services and pricing**: facial menu with durations and prices, managed in one content file.
- **Prep and aftercare guides**: before-visit and after-visit guidance as card layouts.
- **FAQ**: accessible accordion built on native `<details>`.
- **Gift cards**: links out to Square e-gift cards.
- **Shop**: links out to the GlyMed Plus online storefront.
- **Contact and hours**: contact details, location, and weekly hours.
- **Google reviews prompt**: dismissible floating badge.
- **SEO**: per-page metadata, Open Graph and Twitter cards, `BeautySalon` structured data, `robots.txt`, `sitemap.xml`.
- **Accessibility**: built to WCAG 2.2 AA (skip link, focus styles, contrast-checked colors, reduced-motion support, one `h1` per page).
- **Security headers**: strict Content Security Policy, HSTS, and related headers in `next.config.ts`.

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero, services, about, shop banner, gallery, FAQ, contact |
| `/about` | Esthetician bio |
| `/prep` | How to prepare for a facial |
| `/aftercare` | Post-treatment care |
| `/learn-more` | FAQ |
| `/contact` | Contact info and hours |
| `/gift-cards` | E-gift cards |
| `/book-now` | Booking policies and scheduler |

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router) with React 19 and TypeScript (strict)
- CSS Modules with design tokens in `src/app/globals.css`, no UI framework
- `next/image` for optimized images
- Deployed on [Vercel](https://vercel.com)

## Getting Started

Requires **Node.js 24** (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/              # Routes (one folder per page), root layout, robots, sitemap
├── components/
│   ├── marketing/    # Page sections: TopNav, Hero, ServicesGrid, MobileBookBar, Footer, ...
│   └── ui/           # Primitives: AcuityScheduler, DisplaySerif, GoogleReviewBadge
└── content/          # Site copy and business data (services, hours, FAQs, ...)
public/Images/        # Photography
```

## Editing Content

Most copy lives in `src/content/`:

| File | What it controls |
|------|------------------|
| `services.ts` | Service names, durations, prices, descriptions |
| `contact.ts` | Email, phone, address, shop URL, social links, hours |
| `faqs.ts` | FAQ questions and answers |
| `about.ts` | Bio, stats, certifications |
| `prep.ts` | Prep guidance |
| `aftercare.ts` | Aftercare guidance |

When changing hours, also update the `openingHoursSpecification` structured data in `src/app/layout.tsx`. Booking policies live in `src/app/book-now/BookDesktop.tsx`.

## Documentation

- [`ESTHETICLY_SITE_ARCHITECTURE.md`](ESTHETICLY_SITE_ARCHITECTURE.md): architecture, components, integrations, conventions
- [`ESTHETICLY_DESIGN_SYSTEM.md`](ESTHETICLY_DESIGN_SYSTEM.md): design tokens and visual system
- [`CLAUDE.md`](CLAUDE.md): guidance for Claude Code
