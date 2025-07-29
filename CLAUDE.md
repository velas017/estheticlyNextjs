# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Working directory: `/Users/edarvelasquez/Desktop/estheticlyNextJs/estheticly/`

```bash
# Development server
npm run dev           # Start development server on http://localhost:3000

# Build and deployment
npm run build         # Create production build
npm start             # Start production server

# Code quality
npm run lint          # Run ESLint for code linting
```

## Project Architecture

This is a Next.js 15.4.4 application using the App Router with TypeScript and React 19.1.0.

### Key Structure:
- **App Router**: Uses `src/app/` directory structure
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Styling**: CSS modules with dark/light mode support via CSS custom properties
- **Fonts**: Geist Sans and Geist Mono fonts from Google Fonts
- **ESLint**: Uses Next.js core web vitals and TypeScript configurations

### Core Files:
- `src/app/layout.tsx`: Root layout with font configuration and metadata
- `src/app/page.tsx`: Homepage component using CSS modules
- `src/app/globals.css`: Global styles with dark mode support
- `next.config.ts`: Next.js configuration (currently minimal)
- `tsconfig.json`: TypeScript configuration with strict mode

### Project Overview:
EstheticLY skincare and esthetics website featuring separate pages for each navigation item. Implements clean, professional design following the UI_DESIGN_GUIDE.md specifications and content from SITE_CONTENT.md.

### Technical Requirements:
- **Mobile-first responsive design** with breakpoints at 768px, 1024px, 1280px, 1760px
- **SEO optimized** with proper meta tags, structured data for business information
- **Accessibility compliant** (WCAG 2.2 AA) with proper contrast ratios, keyboard navigation
- **Multi-page architecture** - each navbar link has its own route/page
- **Acuity Scheduling integration** for booking functionality (iframe embed)
- **Image optimization** using Next.js Image component
- **Performance optimized** with lazy loading and font optimization

### Design System:
- **Color Palette**: Soft pink primary (#E27EAC), professional grays, clean whites
- **Typography**: Geist Sans (primary), clean hierarchy with defined font scales
- **Components**: Weather widget style cards, Airbnb-inspired navigation, shadow system
- **Layout**: Container system with responsive padding (16px mobile, 40px tablet, 80px desktop)
- **Animations**: Smooth transitions (0.3s ease), hover effects with translateY(-2px)

### Site Structure:
```
/ (homepage)     - Hero, overview, mid-banner
/about          - Biography, purpose, profile image  
/prep           - Before-care preparation cards
/aftercare      - Post-treatment advice
/learn-more     - FAQ section with accordions
/contact        - Business hours, contact info, location
/book-now       - Acuity scheduling integration
```

### Component Architecture:
- **Layout Components**: Navbar (fixed), Footer, Container
- **UI Components**: Button (primary/secondary/category), Card (weather/content/info), Form elements
- **Interactive**: Accordion, Mobile hamburger menu, Smooth scrolling navigation
- **SEO**: Metadata wrapper, structured data, Open Graph tags

### Code Standards:
- **TypeScript interfaces** for all component props and data structures
- **CSS Modules** for component styling with design system variables
- **Server components** by default, client components only for interactivity
- **Semantic HTML** with proper heading hierarchy and ARIA labels
- **DRY principles** with reusable components and shared utilities
- **Error boundaries** and loading states for enhanced UX

