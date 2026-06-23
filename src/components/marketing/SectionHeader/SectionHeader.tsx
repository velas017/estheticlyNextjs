import React from 'react'
import styles from './SectionHeader.module.css'

export interface SectionHeaderProps {
  eyebrow?: string
  /** The heading content. Wrap one word in a DisplaySerif element for the italic accent. */
  heading: React.ReactNode
  lead?: React.ReactNode
  className?: string
  /** When true, renders the lead under the heading instead of beside it. */
  stacked?: boolean
  id?: string
  /** Heading level. Use 'h1' when this is the page's primary heading; defaults to 'h2'. */
  as?: 'h1' | 'h2'
}

export default function SectionHeader({
  eyebrow,
  heading,
  lead,
  className = '',
  stacked = false,
  id,
  as: Heading = 'h2',
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={`${styles.head} ${stacked ? styles.stacked : ''} ${className}`}
    >
      <div>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <Heading className={styles.heading}>{heading}</Heading>
      </div>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  )
}
