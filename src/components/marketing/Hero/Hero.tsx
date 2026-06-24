import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { aboutStats } from '@/content/about'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>Licensed Esthetician</div>
        <h1 className={styles.headline}>
          Start your <DisplaySerif>skincare</DisplaySerif> journey.
        </h1>
        <p className={styles.lead}>
          Personalized facials, science-based skincare, and unhurried care.
          Whether you&apos;re looking to relax or address specific concerns,
          your skin health matters.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/book-now" className={styles.btnPrimary}>
            Book your facial →
          </Link>
          <Link href="/book-now" className={styles.btnGhost}>
            View services
          </Link>
        </div>
        <div className={styles.meta}>
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src="/Images/IMG_6201.jpeg"
          alt="Esthetician performing a facial"
          width={640}
          height={800}
          className={styles.image}
          priority
        />
      </div>
    </section>
  )
}
