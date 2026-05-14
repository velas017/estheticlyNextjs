import React from 'react'
import Image from 'next/image'
import DisplaySerif from '@/components/ui/DisplaySerif'
import SectionHeader from '@/components/marketing/SectionHeader'
import styles from './GalleryRow.module.css'

const cells = [
  { src: '/Images/facial.jpg', alt: 'Facial treatment' },
  { src: '/Images/handsOn2.jpg', alt: 'Hands-on skincare work' },
  { src: '/Images/brows2.jpg', alt: 'Brow detail' },
  { src: '/Images/IMG_1500.jpg', alt: 'Treatment room' },
  { src: '/Images/IMG_1593.jpeg', alt: 'Studio detail' },
]

export default function GalleryRow() {
  return (
    <section className={styles.section}>
      <SectionHeader
        eyebrow="Behind the scenes"
        heading={<>Calm, clean, <DisplaySerif>considered.</DisplaySerif></>}
        lead="Every visit is unhurried. Take a look around the space and the work."
      />
      <div className={styles.mobileStrip}>
        {cells.map(({ src, alt }) => (
          <div key={src} className={styles.mobileSlide}>
            <Image src={src} alt={alt} fill sizes="85vw" className={styles.img} />
          </div>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.featured}>
          <Image src={cells[0].src} alt={cells[0].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={styles.img} />
        </div>
        <div className={styles.stack}>
          <div className={styles.cell}>
            <Image src={cells[1].src} alt={cells[1].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className={styles.img} />
          </div>
          <div className={styles.cell}>
            <Image src={cells[2].src} alt={cells[2].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className={styles.img} />
          </div>
        </div>
        <div className={styles.stack}>
          <div className={styles.cell}>
            <Image src={cells[3].src} alt={cells[3].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className={styles.img} />
          </div>
          <div className={styles.cell}>
            <Image src={cells[4].src} alt={cells[4].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  )
}
