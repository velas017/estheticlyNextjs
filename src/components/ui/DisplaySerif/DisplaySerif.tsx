import React from 'react'
import styles from './DisplaySerif.module.css'

export interface DisplaySerifProps {
  children: React.ReactNode
  className?: string
}

/**
 * Renders the italic-serif accent word inside a heading. The redesign
 * uses one of these per major heading (e.g. "Start your <skincare>
 * journey") to introduce a single tinted, italicized word.
 */
export default function DisplaySerif({ children, className = '' }: DisplaySerifProps) {
  return <span className={`${styles.displaySerif} ${className}`}>{children}</span>
}
