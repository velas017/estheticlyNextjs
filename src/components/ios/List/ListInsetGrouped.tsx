import React from 'react'
import styles from './List.module.css'

export interface ListInsetGroupedProps {
  children: React.ReactNode
  className?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}

export default function ListInsetGrouped({
  children,
  className = '',
  header,
  footer,
}: ListInsetGroupedProps) {
  return (
    <>
      {header && <div className={styles.sectionHeader}>{header}</div>}
      <div className={`${styles.list} ${className}`}>{children}</div>
      {footer && <div className={styles.sectionFooter}>{footer}</div>}
    </>
  )
}
