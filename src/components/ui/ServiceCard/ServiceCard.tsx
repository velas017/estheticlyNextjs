import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import styles from './ServiceCard.module.css'

export interface ServiceCardProps {
  title: string
  duration: string
  details: string
  description: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export default function ServiceCard({
  title,
  duration,
  details,
  description,
  imageSrc,
  imageAlt,
  className = ''
}: ServiceCardProps) {
  return (
    <div className={`${styles.serviceCard} ${className}`}>
      {/* Service Image */}
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.serviceImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <div className={styles.serviceInfo}>
          <h3 className={styles.serviceTitle}>{title}</h3>
          <div className={styles.serviceDetails}>
            <span className={styles.duration}>{duration}</span>
            <span className={styles.details}>{details}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.cardActions}>
          <Button href="/book-now" variant="primary" className={styles.bookButton}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}