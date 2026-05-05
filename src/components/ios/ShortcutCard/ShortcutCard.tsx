'use client'

import React from 'react'
import Link from 'next/link'
import styles from './ShortcutCard.module.css'

export interface ShortcutCardProps {
  href?: string
  onClick?: () => void
  icon: React.ReactNode
  iconBg?: string
  title: string
  subtitle: string
}

export default function ShortcutCard({
  href,
  onClick,
  icon,
  iconBg = 'var(--tint)',
  title,
  subtitle,
}: ShortcutCardProps) {
  const content = (
    <>
      <div className={styles.iconBubble} style={{ background: iconBg }}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.sub}>{subtitle}</div>
    </>
  )
  if (href) {
    return (
      <Link href={href} className={styles.card}>
        {content}
      </Link>
    )
  }
  return (
    <button type="button" onClick={onClick} className={styles.card}>
      {content}
    </button>
  )
}
