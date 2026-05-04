'use client'

import { useState } from 'react'
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
  const [scriptError, setScriptError] = useState(false)

  if (!accepted) return null

  const containerClass = [
    styles.container,
    styles.fullBleed,
    scriptError ? styles.scriptFailed : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClass}>
      {!iframeLoaded && (
        <div className={styles.skeleton} aria-hidden="true">
          <div className={styles.skeletonShimmer} />
          <p className={styles.skeletonLabel}>Loading scheduler…</p>
        </div>
      )}

      <iframe
        src={`https://app.acuityscheduling.com/schedule.php?owner=${owner}&ref=embedded_csp`}
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="payment *; clipboard-write; publickey-credentials-get *"
        onLoad={() => setIframeLoaded(true)}
        className={styles.frame}
      />

      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="afterInteractive"
        onError={() => setScriptError(true)}
      />

      {scriptError && (
        <p className={styles.fallbackNotice}>
          The auto-resize helper failed to load. You can still book — scroll
          inside the booking area to see all options.
        </p>
      )}
    </div>
  )
}
