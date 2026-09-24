import React from 'react'
import Image from 'next/image'
import DisplaySerif from '@/components/ui/DisplaySerif'
import SectionHeader from '@/components/marketing/SectionHeader'
import styles from './GalleryRow.module.css'

interface GalleryCell {
  src: string
  alt: string
}

const cells: GalleryCell[] = [
  { src: '/Images/before-after-acne-cheek.jpg', alt: 'Before and after: acne on the cheek, visibly clearer after treatment' },
  { src: '/Images/before-after-forehead.jpg', alt: 'Before and after: forehead texture and breakouts, smoother after treatment' },
  { src: '/Images/led-light-therapy.jpg', alt: 'LED light therapy under a Celluma panel during a treatment' },
  { src: '/Images/brows2.jpg', alt: 'Brow detail' },
  { src: '/Images/IMG_1500.jpg', alt: 'Treatment room' },
  { src: '/Images/IMG_1593.jpeg', alt: 'Studio detail' },
]

// Desktop: the first cell is the featured tile; the remaining five form a mosaic
// (three portrait tiles on top, two wider tiles below). See GalleryRow.module.css.
const [featured, ...rest] = cells

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
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            sizes="(min-width: 1280px) 480px, 40vw"
            className={styles.img}
          />
        </div>
        <div className={styles.mosaic}>
          {rest.map(({ src, alt }) => (
            <div key={src} className={styles.cell}>
              <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 360px, 30vw" className={styles.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
