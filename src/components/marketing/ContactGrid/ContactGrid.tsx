import React from 'react'
import Link from 'next/link'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { contact, hours, hoursNote } from '@/content/contact'
import styles from './ContactGrid.module.css'

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <path d="m4 8 8 6 8-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 5a2 2 0 0 1 2-2h2l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v2a2 2 0 0 1-2 2A14 14 0 0 1 5 5z" />
  </svg>
)

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const IGIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

const formatHours = (open: string | null, close: string | null) => {
  if (!open || !close) return 'Closed'
  return `${open} – ${close}`
}

export interface ContactGridProps {
  /** Heading level. Use 'h1' when this is the page's primary heading; defaults to 'h2'. */
  as?: 'h1' | 'h2'
}

export default function ContactGrid({ as: Heading = 'h2' }: ContactGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>Get in touch</div>
          <Heading className={styles.heading}>
            Let&apos;s stay in <DisplaySerif>touch.</DisplaySerif>
          </Heading>
          <p className={styles.lead}>
            Send a message or give me a call. I&apos;m happy to help and be a part of your skincare journey.
          </p>

          <div className={styles.infoList}>
            <a href={`mailto:${contact.email}`} className={styles.infoRow}>
              <span className={styles.infoIcon}><MailIcon /></span>
              <span>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{contact.email}</span>
              </span>
            </a>
            <a href={`tel:${contact.phoneTel}`} className={styles.infoRow}>
              <span className={styles.infoIcon}><PhoneIcon /></span>
              <span>
                <span className={styles.infoLabel}>Phone · call or text</span>
                <span className={styles.infoValue}>{contact.phone}</span>
              </span>
            </a>
            <div className={styles.infoRow}>
              <span className={styles.infoIcon}><PinIcon /></span>
              <span>
                <span className={styles.infoLabel}>{contact.business}</span>
                <span className={styles.infoValue}>
                  {contact.addressLine1}, {contact.addressLine2}
                </span>
              </span>
            </div>
            <a
              href={contact.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoRow}
              aria-label={`Instagram ${contact.socials.instagram.handle} (opens in new tab)`}
            >
              <span className={styles.infoIcon}><IGIcon /></span>
              <span>
                <span className={styles.infoLabel}>Instagram</span>
                <span className={styles.infoValue}>{contact.socials.instagram.handle}</span>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.hoursCard}>
          <h2 className={styles.hoursHeading}>
            <span className={styles.dot} aria-hidden="true" />
            Hours
          </h2>
          {hours.map((row) => (
            <div key={row.day} className={styles.hoursRow}>
              <span className={styles.day}>{row.day}</span>
              <span className={`${styles.time} ${!row.open ? styles.closed : ''}`}>
                {formatHours(row.open, row.close)}
              </span>
            </div>
          ))}
          <p className={styles.hoursNote}>{hoursNote} {contact.appointmentNote}</p>
          <Link href="/book-now" className={styles.bookBtn}>Book your visit</Link>
        </div>
      </div>
    </section>
  )
}
