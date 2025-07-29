import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'category'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`

  if (href) {
    return (
      <a 
        href={href}
        className={baseClasses}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  )
}