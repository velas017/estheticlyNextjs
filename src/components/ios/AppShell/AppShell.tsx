'use client'

import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import StatusBar from '@/components/ios/StatusBar'
import NavBar from '@/components/ios/NavBar'
import TabBar from '@/components/ios/TabBar'
import styles from './AppShell.module.css'

const titleByRoute: Record<string, string> = {
  '/': 'EstheticLY',
  '/about': 'About',
  '/contact': 'Contact',
  '/prep': 'Prep',
  '/aftercare': 'Aftercare',
  '/learn-more': 'FAQ',
  '/book-now': 'Book',
  '/gift-cards': 'Gift Cards',
}

const tabRootRoutes = new Set(['/', '/prep', '/aftercare', '/learn-more', '/book-now'])

export interface AppShellProps {
  children: React.ReactNode
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setScrolled(false)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [pathname])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 12)
  }

  const title = titleByRoute[pathname] ?? ''
  const showBack = !tabRootRoutes.has(pathname)

  return (
    <div className={styles.shell}>
      <StatusBar />
      <NavBar title={title} scrolled={scrolled} showBack={showBack} />
      <div
        ref={scrollRef}
        className={styles.page}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <TabBar />
    </div>
  )
}
