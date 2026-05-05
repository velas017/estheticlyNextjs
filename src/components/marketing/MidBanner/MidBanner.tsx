import React from 'react'
import DisplaySerif from '@/components/ui/DisplaySerif'
import styles from './MidBanner.module.css'

export interface MidBannerProps {
  /** First line of the headline (sans). */
  before: React.ReactNode
  /** Italic-serif accent line (rendered on its own line). */
  accent: React.ReactNode
  body?: React.ReactNode
}

export default function MidBanner({ before, accent, body }: MidBannerProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          {before}
          {' '}
          <DisplaySerif className={styles.accent}>{accent}</DisplaySerif>
        </h2>
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </section>
  )
}
