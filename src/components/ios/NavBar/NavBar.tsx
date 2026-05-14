'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styles from './NavBar.module.css'

export interface NavBarProps {
  title?: string
  /** When true, shows the back button. Defaults to true on non-home routes. */
  showBack?: boolean
  /** Override the back-button label (defaults to "Back"). */
  backLabel?: string
  /** When true, the bar is in scrolled state — translucent background and inline title. */
  scrolled: boolean
}

export default function NavBar({ title, showBack, backLabel, scrolled }: NavBarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isHomeRoot = pathname === '/'
  const back = showBack ?? !isHomeRoot

  return (
    <div className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>
        {back && (
          <button
            type="button"
            className={styles.button}
            onClick={() => router.back()}
            aria-label="Back"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
              <path d="M10 2 2 10l8 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.backLabel}>{backLabel ?? 'Back'}</span>
          </button>
        )}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.right} />
    </div>
  )
}
