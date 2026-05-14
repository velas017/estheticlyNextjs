'use client'

import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import styles from './AcuityScheduler.module.css'

export interface AcuitySchedulerProps {
  owner: string
  accepted: boolean
  className?: string
}

export default function AcuityScheduler({
  owner,
  accepted,
  className,
}: AcuitySchedulerProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (!iframeRef.current) return
      if (e.origin !== 'https://app.acuityscheduling.com') return
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data
        const h = data?.height ?? data?.frameHeight
        if (typeof h === 'number' && h > 0) {
          iframeRef.current.style.height = `${h}px`
        }
      } catch {
        // ignore malformed messages
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (!accepted) return null

  const containerClass = [styles.container, className ?? ''].filter(Boolean).join(' ')

  return (
    <div className={containerClass}>
      {!iframeLoaded && (
        <div className={styles.skeleton} aria-hidden="true">
          <div className={styles.skeletonShimmer} />
          <p className={styles.skeletonLabel}>Loading scheduler…</p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={`https://app.acuityscheduling.com/schedule.php?owner=${owner}&ref=embedded_csp`}
        title="Schedule Appointment"
        width="100%"
        scrolling="no"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="payment *; clipboard-write; publickey-credentials-get *"
        onLoad={() => setIframeLoaded(true)}
        className={styles.frame}
      />

      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
