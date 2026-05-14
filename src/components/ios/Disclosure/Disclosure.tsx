import React from 'react'
import styles from './Disclosure.module.css'

export interface DisclosureProps {
  summary: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function Disclosure({ summary, children, defaultOpen = false }: DisclosureProps) {
  return (
    <details className={styles.disclosure} open={defaultOpen}>
      <summary className={styles.summary}>
        <span className={styles.summaryText}>{summary}</span>
        <span className={styles.icon} aria-hidden="true" />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  )
}
