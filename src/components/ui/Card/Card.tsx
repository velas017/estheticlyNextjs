import React from 'react'
import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  variant?: 'weather' | 'content' | 'info'
  className?: string
}

export default function Card({
  children,
  variant = 'content',
  className = ''
}: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      {children}
    </div>
  )
}