import React from 'react'
import Image from 'next/image'
import styles from './HeroCard.module.css'

export interface HeroCardProps {
  image: { src: string; alt: string }
  eyebrow?: string
  title: string
  body?: string
  /** Optional content rendered below body (typically buttons). */
  children?: React.ReactNode
  /** When true, uses a 4:4 aspect ratio (used for portrait variant). Default 4:5. */
  square?: boolean
}

export default function HeroCard({
  image,
  eyebrow,
  title,
  body,
  children,
  square = false,
}: HeroCardProps) {
  return (
    <div className={`${styles.card} ${square ? styles.square : ''}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className={styles.img}
        priority
      />
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.body}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.text}>{body}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </div>
  )
}
