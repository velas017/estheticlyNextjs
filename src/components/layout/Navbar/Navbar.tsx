'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/prep', label: 'Prep' },
    { href: '/aftercare', label: 'Aftercare' },
    { href: '/learn-more', label: 'Learn More' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoTop}>EstheticLY</div>
          <div className={styles.logoBottom}>Facials and skincare</div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className={styles.ctaDesktop}>
          <Button href="/book-now" variant="primary">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavContent}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileNavLink} ${pathname === item.href ? styles.mobileNavLinkActive : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.ctaMobile}>
            <Button 
              href="/book-now" 
              variant="primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}