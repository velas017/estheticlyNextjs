import React from 'react'
import Link from 'next/link'
import { contact } from '@/content/contact'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <span className={styles.brand}>
            <span className={styles.brandTop}>EstheticLY</span>
            <span className={styles.brandBottom}>Skincare · Charlotte, NC</span>
          </span>
          <p className={styles.blurb}>
            Personalized, science-based skincare. Helping you build healthy,
            confident skin — one appointment at a time.
          </p>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Services</h2>
          <Link href="/book-now" className={styles.colLink}>Signature Facial</Link>
          <Link href="/book-now" className={styles.colLink}>Dermaplaning</Link>
          <Link href="/book-now" className={styles.colLink}>Microdermabrasion</Link>
          <Link href="/book-now" className={styles.colLink}>Chemical Peel</Link>
          <Link href="/book-now" className={styles.colLink}>Teen Facial</Link>
          <a
            href={contact.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
            aria-label="Shop products (opens in new tab)"
          >
            Shop Products <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Visit</h2>
          <Link href="/about" className={styles.colLink}>About</Link>
          <Link href="/prep" className={styles.colLink}>Prep</Link>
          <Link href="/aftercare" className={styles.colLink}>Aftercare</Link>
          <Link href="/learn-more" className={styles.colLink}>FAQ</Link>
          <Link href="/contact" className={styles.colLink}>Contact</Link>
        </div>

        <div className={styles.col}>
          <h2 className={styles.colTitle}>Connect</h2>
          <a
            href={contact.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Instagram
          </a>
          <a
            href={contact.socials.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Facebook
          </a>
          <a href={`mailto:${contact.email}`} className={styles.colLink}>
            Email
          </a>
          <a href={`tel:${contact.phoneTel}`} className={styles.colLink}>
            Call · Text
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} EstheticLY · estheticlyskincare.com</span>
        <span>Made with care in Charlotte, NC</span>
      </div>
    </footer>
  )
}
