'use client'

import React, { useEffect } from 'react'
import styles from './Sheet.module.css'

export interface SheetProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export default function Sheet({ open, onClose, title, children }: SheetProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <div
        className={`${styles.sheet} ${open ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.handle} aria-hidden="true" />
        <div className={styles.header}>
          <span className={styles.spacer} />
          <div className={styles.title}>{title}</div>
          <button type="button" onClick={onClose} className={styles.done}>
            Done
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </>
  )
}
