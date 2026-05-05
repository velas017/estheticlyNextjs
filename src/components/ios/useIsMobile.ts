'use client'

import { useSyncExternalStore } from 'react'

const QUERY = '(max-width: 1023.98px)'

const subscribe = (cb: () => void) => {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia(QUERY)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

const getSnapshot = () =>
  typeof window !== 'undefined' && window.matchMedia(QUERY).matches

const getServerSnapshot = () => false

/**
 * Returns true when the viewport is below the desktop breakpoint
 * (<1024px). User chose to use the iOS shell across phones AND tablets,
 * so this single hook drives the responsive switch for both chrome and
 * page content.
 *
 * SSR returns `false` (desktop) by default, then snaps to the real
 * value after hydration. Mobile users may briefly see desktop chrome
 * before the swap.
 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
