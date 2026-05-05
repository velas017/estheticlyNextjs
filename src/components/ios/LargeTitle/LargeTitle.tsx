import React from 'react'
import styles from './LargeTitle.module.css'

export interface LargeTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function LargeTitle({ title, subtitle, className = '' }: LargeTitleProps) {
  return (
    <div className={`${styles.wrap} ${className}`}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
    </div>
  )
}
