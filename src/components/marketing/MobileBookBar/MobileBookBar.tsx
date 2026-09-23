'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './MobileBookBar.module.css'

/**
 * Sticky bottom "Book Now" bar for phones (hidden ≥768px via CSS).
 * Appears once the visitor scrolls past the first screen, and steps aside
 * when the footer is in view or on /book-now itself. While visible it sets
 * `data-bookbar="visible"` on <html> so other fixed UI (GoogleReviewBadge)
 * can lift above it.
 */
export default function MobileBookBar() {
  const pathname = usePathname()
  const onBookingPage = pathname === '/book-now'
  const [pastFold, setPastFold] = useState(false)
  const [footerInView, setFooterInView] = useState(false)

  useEffect(() => {
    if (onBookingPage) return

    const onScroll = () => setPastFold(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const footer = document.querySelector('footer')
    const observer = footer
      ? new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting))
      : null
    if (footer && observer) observer.observe(footer)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [onBookingPage])

  const visible = !onBookingPage && pastFold && !footerInView

  useEffect(() => {
    const root = document.documentElement
    if (visible) root.dataset.bookbar = 'visible'
    else delete root.dataset.bookbar
    return () => {
      delete root.dataset.bookbar
    }
  }, [visible])

  if (onBookingPage) return null

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <Link href="/book-now" className={styles.cta} tabIndex={visible ? undefined : -1}>
        Book Now <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
