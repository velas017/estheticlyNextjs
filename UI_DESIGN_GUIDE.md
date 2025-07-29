# UI Design Guide - Reusable Design System

This guide extracts all UI patterns, components, and styles from the Chinchillas Screen Porches website for reuse in other projects.

## Table of Contents
1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Component Library](#component-library)
6. [Animation & Transitions](#animation--transitions)
7. [Responsive Design](#responsive-design)
8. [Implementation Guide](#implementation-guide)

---

## Design Philosophy

### Core Principles
- **Clean & Minimalist**: Airbnb-inspired design with plenty of whitespace
- **Weather Widget Aesthetic**: Rounded corners, subtle shadows, glass-morphism effects
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Accessibility**: WCAG 2.2 compliant with proper contrast and keyboard navigation
- **Professional & Trustworthy**: Business-focused design that builds credibility

---

## Color System

### Primary Colors
```css
/* Brand Colors */
--color-primary: #ff6b6b;        /* Coral Red - CTAs, buttons */
--color-primary-hover: #ff5252;  /* Darker Red - Hover states */
--color-primary-shadow: rgba(255, 107, 107, 0.3);

/* Text Colors */
--color-text-primary: #222222;   /* Main text */
--color-text-secondary: #666666; /* Secondary text */
--color-text-light: #999999;     /* Muted text */

/* Background Colors */
--color-bg-white: #ffffff;       /* Primary background */
--color-bg-light: #f7f7f7;       /* Light gray background */
--color-bg-gray: #f5f5f5;        /* Section backgrounds */

/* Border & Divider Colors */
--color-border: #e5e5e5;         /* Light borders */
--color-divider: #dddddd;        /* Divider lines */

/* Utility Colors */
--color-success: #4caf50;        /* Success states */
--color-error: #f44336;          /* Error states */
--color-warning: #ff9800;        /* Warning states */
--color-info: #2196f3;           /* Info states */
```

### Shadow System
```css
/* Elevation Shadows */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.15);

/* Colored Shadows */
--shadow-primary: 0 4px 12px rgba(255, 107, 107, 0.3);
--shadow-primary-hover: 0 6px 16px rgba(255, 107, 107, 0.4);
```

---

## Typography

### Font Stack
```css
/* Using Next.js optimized fonts */
--font-primary: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'Geist Mono', 'Courier New', monospace;
```

### Type Scale
```css
/* Headings */
--text-h1: 48px;    /* Page titles */
--text-h2: 36px;    /* Section headings */
--text-h3: 24px;    /* Sub-headings */
--text-h4: 20px;    /* Card titles */
--text-h5: 18px;    /* Small headings */

/* Body Text */
--text-lg: 18px;    /* Large body */
--text-base: 16px;  /* Default body */
--text-sm: 14px;    /* Small text */
--text-xs: 12px;    /* Extra small */

/* Font Weights */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

### Text Styles
```css
/* Heading Styles */
.heading-1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #222222;
  letter-spacing: -0.02em;
}

.heading-2 {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  color: #222222;
}

/* Body Styles */
.body-large {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.75;
  color: #666666;
}

.body-base {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #666666;
}

/* Uppercase Labels */
.label-uppercase {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999999;
}
```

---

## Spacing & Layout

### Spacing Scale
```css
/* Base unit: 8px */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 80px;
--space-5xl: 96px;
```

### Container System
```css
/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1760px;  /* Main container max-width */

/* Container Padding */
--container-padding-mobile: 16px;
--container-padding-tablet: 40px;
--container-padding-desktop: 80px;
```

### Grid System
```css
/* 12-column grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Common Grid Patterns */
.grid-2-cols { grid-template-columns: repeat(2, 1fr); }
.grid-3-cols { grid-template-columns: repeat(3, 1fr); }
.grid-4-cols { grid-template-columns: repeat(4, 1fr); }
```

---

## Component Library

### 1. Navigation Bar
```css
/* Fixed navbar with logo and CTA */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  z-index: 1000;
}

/* Two-line logo */
.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  text-align: center;
}

.logo-top {
  font-size: 20px;
  font-weight: 600;
  color: #222222;
}

.logo-bottom {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
}

/* Nav links with hover effect */
.nav-link {
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #f7f7f7;
}

/* Active state indicator */
.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: #000000;
}
```

### 2. Buttons
```css
/* Primary Button (Red CTA) */
.button-primary {
  background-color: #ff6b6b;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

.button-primary:hover {
  background-color: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
}

/* Secondary Button (Outline) */
.button-secondary {
  background-color: transparent;
  color: #222222;
  padding: 12px 24px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-secondary:hover {
  background-color: #f7f7f7;
  border-color: #222222;
}

/* Category Button (Tab Style) */
.button-category {
  background-color: transparent;
  color: #666666;
  padding: 10px 20px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-category.active {
  background-color: #222222;
  color: #ffffff;
  border-color: #222222;
}
```

### 3. Cards
```css
/* Weather Widget Style Card */
.card-weather {
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Content Card */
.card-content {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Info Card (Contact/Footer) */
.card-info {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}
```

### 4. Carousel
```css
/* Carousel Container */
.carousel-container {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Navigation Buttons */
.carousel-nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-nav-button:hover {
  background: #ffffff;
  transform: translateY(-50%) scale(1.1);
}

/* Dots Navigation */
.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot.active {
  width: 24px;
  border-radius: 4px;
  background: #ffffff;
}
```

### 5. Forms
```css
/* Form Container */
.form-container {
  background: #ffffff;
  border-radius: 20px;
  padding: 48px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Form Input */
.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #ffffff;
}

.form-input:focus {
  outline: none;
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

/* Form Select */
.form-select {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  background: #ffffff;
  cursor: pointer;
}

/* Form Textarea */
.form-textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
}
```

### 6. Footer
```css
/* Footer Container */
.footer {
  background-color: #222222;
  color: #ffffff;
  padding: 80px 0 40px;
}

/* Footer Links */
.footer-link {
  color: #cccccc;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

/* Footer CTA Card */
.footer-cta {
  background: #333333;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
}
```

---

## Animation & Transitions

### Transition Timing
```css
/* Standard transitions */
--transition-fast: 0.2s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;

/* Hover effects */
--hover-lift: translateY(-2px);
--hover-scale: scale(1.05);
```

### Common Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide In */
@keyframes slideIn {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Smooth Transition */
.transition-smooth {
  transition: all 0.3s ease;
}

/* Hover Lift Effect */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--screen-sm: 480px;   /* Small phones */
--screen-md: 768px;   /* Tablets */
--screen-lg: 1024px;  /* Small laptops */
--screen-xl: 1280px;  /* Desktops */
--screen-2xl: 1760px; /* Large screens */
```

### Media Query Patterns
```css
/* Mobile First */
/* Base styles for mobile */

/* Tablet and up */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop and up */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large screens */
@media (min-width: 1760px) {
  /* Large screen styles */
}
```

### Responsive Patterns
```css
/* Container padding */
.container {
  padding: 0 16px;  /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 40px;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 80px;  /* Desktop */
  }
}

/* Grid responsive */
.grid {
  grid-template-columns: 1fr;  /* Mobile: 1 column */
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);  /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 columns */
  }
}
```

---

## Implementation Guide

### 1. Project Setup
```bash
# Install dependencies
npm install next@15.4.4 react@19.1.0 react-dom@19.1.0
npm install -D typescript @types/react @types/node

# CSS Modules are built-in with Next.js
```

### 2. Global Styles Setup
```css
/* globals.css */
:root {
  /* Add all CSS variables here */
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);
  background-color: var(--color-bg-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography defaults */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-primary);
}

a {
  color: inherit;
  text-decoration: none;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 3. Component Structure
```tsx
// Example component structure
import styles from './Component.module.css'

interface ComponentProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Component({ 
  children, 
  variant = 'primary',
  className 
}: ComponentProps) {
  return (
    <div className={`${styles.component} ${styles[variant]} ${className || ''}`}>
      {children}
    </div>
  )
}
```

### 4. CSS Module Pattern
```css
/* Component.module.css */
.component {
  /* Base styles */
}

.primary {
  /* Primary variant */
}

.secondary {
  /* Secondary variant */
}

/* Responsive */
@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}
```

### 5. Accessibility Checklist
- [ ] Semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Alt text for images
- [ ] Form labels and error messages
- [ ] Skip links for navigation

### 6. Performance Optimizations
- Use Next.js Image component for optimized images
- Implement lazy loading for off-screen content
- Use CSS Modules for scoped styles
- Minimize bundle size with dynamic imports
- Optimize fonts with next/font

---

## Quick Start Template

```tsx
// layout.tsx - Root layout with all providers
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## Notes for Reuse

1. **Color Customization**: Replace the primary color (#ff6b6b) with your brand color
2. **Font Selection**: Update font stack to match your brand guidelines
3. **Component Adaptation**: Modify components to fit your specific use case
4. **Content Structure**: Maintain the same layout patterns but adjust content
5. **Image Assets**: Replace placeholder images with your own
6. **Animation Preferences**: Adjust transition timings to match your brand feel
7. **Accessibility**: Always maintain WCAG 2.2 compliance

This design system can be adapted for any professional service website, e-commerce platform, or corporate site while maintaining the clean, modern aesthetic.