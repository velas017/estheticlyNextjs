import React from 'react'
import Link from 'next/link'
import DisplaySerif from '@/components/ui/DisplaySerif'
import SectionHeader from '@/components/marketing/SectionHeader'
import { services } from '@/content/services'
import styles from './ServicesGrid.module.css'

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <SectionHeader
        eyebrow="Services"
        heading={<>Treatments tailored to <DisplaySerif>your skin.</DisplaySerif></>}
        lead="All facials begin with a thorough skin analysis so the treatment is shaped around your goals — not a checklist."
      />
      <div className={styles.grid}>
        {services.map((service) => (
          <Link
            href="/book-now"
            key={service.id}
            className={styles.card}
            aria-label={`Book ${service.name}`}
          >
            <div className={styles.duration}>{service.duration}</div>
            <h3 className={styles.name}>{service.name}</h3>
            <p className={styles.desc}>{service.description}</p>
            <div className={styles.priceRow}>
              <span>${service.price}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
