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
  { src: '/Images/handsOn2.jpg', alt: 'Hands-on skincare work' },
  { src: '/Images/brows2.jpg', alt: 'Brow detail' },
  { src: '/Images/IMG_1500.jpg', alt: 'Treatment room' },
  { src: '/Images/IMG_1593.jpeg', alt: 'Studio detail' },
]

const [featured, ...rest] = cells
const stacks: GalleryCell[][] = [rest.slice(0, 2), rest.slice(2, 4), rest.slice(4, 6)]

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
        {stacks.map((stack, i) => (
          <div key={i} className={styles.stack}>
            {stack.map(({ src, alt }) => (
              <div key={src} className={styles.cell}>
                <Image src={src} alt={alt} fill sizes="(min-width: 1280px) 240px, 20vw" className={styles.img} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
