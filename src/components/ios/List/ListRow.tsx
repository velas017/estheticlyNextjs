'use client'

import React from 'react'
import Link from 'next/link'
import styles from './List.module.css'

export interface ListRowProps {
  /** Leading icon node — typically an SVG icon. Renders inside a colored bubble. */
  leading?: React.ReactNode
  /** Background color for the leading bubble. */
  leadingColor?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  trailing?: React.ReactNode
  /** When true, hides the trailing chevron. */
  noChevron?: boolean
  /** When provided, the row becomes a Link. */
  href?: string
  /** Click handler — alternative to href. */
  onClick?: () => void
  className?: string
}

export default function ListRow({
  leading,
  leadingColor = 'var(--tint)',
  title,
  subtitle,
  trailing,
  noChevron = false,
  href,
  onClick,
  className = '',
}: ListRowProps) {
  const content = (
    <>
      {leading && (
        <div className={styles.leading} style={{ background: leadingColor }}>
          {leading}
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      <div className={styles.trailing}>
        {trailing}
        {!noChevron && (href || onClick) && <span className={styles.chevron} aria-hidden="true" />}
      </div>
    </>
  )

  const rowClass = `${styles.row} ${!leading ? styles.noLeading : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={rowClass}>
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={rowClass}>
        {content}
      </button>
    )
  }

  return <div className={rowClass}>{content}</div>
}
