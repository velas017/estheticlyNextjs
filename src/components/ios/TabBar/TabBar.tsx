'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, PrepIcon, AftercareIcon, FAQIcon, BookIcon } from '../Icons'
import styles from './TabBar.module.css'

const tabs = [
  { href: '/', label: 'Home', Icon: HomeIcon, match: (p: string) => p === '/' || p === '/about' || p === '/contact' || p === '/gift-cards' },
  { href: '/prep', label: 'Prep', Icon: PrepIcon, match: (p: string) => p === '/prep' },
  { href: '/aftercare', label: 'Aftercare', Icon: AftercareIcon, match: (p: string) => p === '/aftercare' },
  { href: '/learn-more', label: 'FAQ', Icon: FAQIcon, match: (p: string) => p === '/learn-more' },
  { href: '/book-now', label: 'Book', Icon: BookIcon, match: (p: string) => p === '/book-now' },
]

export default function TabBar() {
  const pathname = usePathname()

  return (
    <nav className={styles.bar} aria-label="Tabs">
      {tabs.map((tab) => {
        const active = tab.match(pathname)
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.item} ${active ? styles.active : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <tab.Icon size={26} />
            <span className={styles.label}>{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
