'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './TopNav.module.css'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/prep', label: 'Prep' },
  { href: '/aftercare', label: 'Aftercare' },
  { href: '/learn-more', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/gift-cards', label: 'Gift Cards' },
]

export default function TopNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className={styles.topnav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandTop}>EstheticLY</span>
          <span className={styles.brandBottom}>Skincare · Charlotte, NC</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${pathname === item.href ? styles.linkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book-now" className={styles.cta}>
            Book Now
          </Link>
        </nav>

        <div className={styles.mobileActions}>
          <Link href="/book-now" className={styles.ctaCompact}>
            Book
          </Link>
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`${styles.hamburgerBox} ${open ? styles.hamburgerOpen : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.drawerLink} ${pathname === item.href ? styles.drawerLinkActive : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book-now" className={styles.drawerCta} onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
