'use client'

import React from 'react'
import { useIsMobile } from './useIsMobile'
import AppShell from './AppShell'
import TopNav from '@/components/marketing/TopNav'
import Footer from '@/components/marketing/Footer'

export interface ResponsiveChromeProps {
  children: React.ReactNode
}

/**
 * Top-level layout switch. Renders the desktop marketing chrome
 * (TopNav + main + Footer) at ≥1024px, and the iOS-style AppShell
 * (StatusBar + NavBar + scrolling content + TabBar) at <1024px.
 *
 * Per user direction, tablets (768–1023px) use the mobile shell.
 */
export default function ResponsiveChrome({ children }: ResponsiveChromeProps) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <AppShell>{children}</AppShell>
  }

  return (
    <>
      <TopNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
