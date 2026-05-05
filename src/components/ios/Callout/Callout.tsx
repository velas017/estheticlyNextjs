import React from 'react'
import styles from './Callout.module.css'

export interface CalloutProps {
  children: React.ReactNode
  className?: string
}

export default function Callout({ children, className = '' }: CalloutProps) {
  return <div className={`${styles.callout} ${className}`}>{children}</div>
}
