'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import AcuityScheduler from '@/components/ui/AcuityScheduler'
import DisplaySerif from '@/components/ui/DisplaySerif'
import styles from './page.module.css'

export default function BookDesktop() {
  const [policiesAccepted, setPoliciesAccepted] = useState(false)
  const schedulerRef = useRef<HTMLDivElement>(null)

  // Once accepted, bring the scheduler into view: always on phones, and on
  // wider screens only when it's barely visible. Focus stays on the checkbox.
  useEffect(() => {
    if (!policiesAccepted) return
    const el = schedulerRef.current
    if (!el) return
    const isPhone = window.matchMedia('(max-width: 767.98px)').matches
    if (!isPhone && el.getBoundingClientRect().top < window.innerHeight * 0.75) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }, [policiesAccepted])

  return (
    <section className={styles.section} id="book">
      <div className={styles.head}>
        <div className={styles.eyebrow}>Booking</div>
        <h1 className={styles.heading}>
          Schedule your <DisplaySerif>visit.</DisplaySerif>
        </h1>
        <p className={styles.lead}>
          Ready to start your skincare journey? Pick a time that works for you —
          appointments are kept unhurried so we can focus on your skin.
        </p>
      </div>

      <details className={styles.policies}>
        <summary className={styles.policiesSummary}>
          <span>Booking policies — please review before booking</span>
          <span className={styles.indicator} aria-hidden="true" />
        </summary>
        <div className={styles.policiesBody}>
          <div className={styles.policyItem}>
            <h2 className={styles.policyTitle}>Payment Information</h2>
            <p>
              A valid card on file and a $25 non-refundable deposit are required at
              the time of booking. The deposit will be applied toward your remaining
              balance, which is due at the conclusion of your service.
            </p>
            <p>
              The remaining balance can be paid with Cash, Zelle, Venmo, Apple
              Pay, or Square ($3 service charge).
            </p>
          </div>
          <div className={styles.policyItem}>
            <h2 className={styles.policyTitle}>Cancellation Policy</h2>
            <p>
              Appointments may be cancelled up to 24 hours in advance; however,
              please note that deposits are non-refundable. Cancellations made with
              less than 24 hours notice will result in a forfeited deposit, and a
              new $25 deposit will be required to book any future services.
            </p>
          </div>
          <div className={styles.policyItem}>
            <h2 className={styles.policyTitle}>Late Policy</h2>
            <p>
              Please notify me in advance if you anticipate being late. A 15-minute
              grace period is provided. After 15 minutes, you may choose to
              reschedule; however, your deposit will be forfeited and a new $25
              deposit will be required to secure a future appointment. Alternatively,
              you may opt to proceed with the remaining time allocated for your
              scheduled service but the full service fee will still apply. Other
              services besides facials may be charged a +$10 late fee.
            </p>
          </div>
        </div>
      </details>

      <label className={styles.acceptRow}>
        <input
          type="checkbox"
          checked={policiesAccepted}
          onChange={(e) => setPoliciesAccepted(e.target.checked)}
          className={styles.checkbox}
        />
        <span className={styles.acceptText}>
          I have read and accept the booking policies including the late policy and
          deposit requirements.
        </span>
      </label>

      <div className={styles.scheduler} ref={schedulerRef}>
        {policiesAccepted ? (
          <AcuityScheduler owner="30825696" accepted={policiesAccepted} />
        ) : (
          <div className={styles.preBooking} role="status">
            <div className={styles.preBookingIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
                <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
            <h2 className={styles.preBookingTitle}>
              Accept policies above to load the scheduler
            </h2>
            <p className={styles.preBookingText}>
              Once you check the box above, the booking system will appear here.
            </p>
            <div className={styles.preBookingArrow} aria-hidden="true">↑</div>
          </div>
        )}
      </div>

      <div className={styles.note}>
        <p>
          <strong>Note:</strong> If you have any questions about which service to
          book or need assistance with scheduling, please{' '}
          <Link href="/contact" className={styles.noteLink}>contact me directly</Link>.
        </p>
      </div>
    </section>
  )
}
