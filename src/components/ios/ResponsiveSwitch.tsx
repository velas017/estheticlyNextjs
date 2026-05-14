'use client'

import React from 'react'
import { useIsMobile } from './useIsMobile'

export interface ResponsiveSwitchProps {
  desktop: React.ReactNode
  mobile: React.ReactNode
}

/**
 * Renders one of two trees based on viewport. Accepts pre-rendered
 * Server Component subtrees as `desktop` / `mobile` props so each path
 * can stay server-rendered and only the switcher is client.
 */
export default function ResponsiveSwitch({ desktop, mobile }: ResponsiveSwitchProps) {
  const isMobile = useIsMobile()
  return <>{isMobile ? mobile : desktop}</>
}
