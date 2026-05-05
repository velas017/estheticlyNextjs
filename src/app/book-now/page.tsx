'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import AcuityScheduler from '@/components/ui/AcuityScheduler'
import styles from './page.module.css'

export default function BookNowPage() {
  const [policiesAccepted, setPoliciesAccepted] = useState(false)

  const handlePolicyAcceptance = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoliciesAccepted(e.target.checked)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">Book your Appointment</h1>
          <p className="body-large">
            Ready to start your skincare journey? Schedule your personalized facial treatment today.
          </p>
        </section>

        <section className={styles.policiesSection}>
          <Card variant="weather" className={styles.policiesCard}>
            <details className={styles.policiesAccordion}>
              <summary className={styles.policiesSummary}>
                <h3 className={styles.policiesTitle}>Please Review & Accept Our Policies Before Booking</h3>
                <span className={styles.toggleIcon}>+</span>
              </summary>
              <div className={styles.policiesContent}>
                
                <div className={styles.policyItem}>
                  <h4 className={styles.policyTitle}>Payment Information</h4>
                  <p className="body-base">
                    A valid card on file and a $25 non-refundable deposit are required at the time of booking.
                    The deposit will be applied toward your remaining balance, which is due at the conclusion of
                    your service.
                  </p>
                  <p className="body-base">
                    Remaining balance are available to be paid Cash, Zelle, Venmo, Apple Pay, or Square ($3 service charge)
                  </p>
                </div>

                <div className={styles.policyItem}>
                  <h4 className={styles.policyTitle}>Cancellation Policy</h4>
                  <p className="body-base">
                    Appointments may be cancelled up to 24 hours in advance; however, please note that deposits are
                    non-refundable. Cancellations made with less than 24 hours notice will result in a forfeited deposit,
                    and a new $25 deposit will be required to book any future services.
                  </p>
                </div>

                <div className={styles.policyItem}>
                  <h4 className={styles.policyTitle}>Late Policy</h4>
                  <p className="body-base">
                    Please notify me in advance if you anticipate being late. A 15-minute grace period is provided.
                    After 15 minutes, you may choose to reschedule; however, your deposit will be forfeited and a
                    new $25 deposit will be required to secure a future appointment. Alternatively, you may opt to
                    proceed with the remaining time allocated for your scheduled service but the full service fee will
                    still apply. Other services besides facials may be charged a +$10 late fee.
                  </p>
                </div>

              </div>
            </details>
          </Card>
        </section>

        <section className={styles.policyCheckbox}>
          <div className={styles.checkboxContainer}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={policiesAccepted}
                onChange={handlePolicyAcceptance}
                className={styles.checkbox}
              />
              <span className={styles.checkboxText}>
                I have read and accept the booking policies including the late policy and deposit requirements
              </span>
            </label>
          </div>
        </section>

        <section className={styles.bookingSection}>
          <div className={styles.bookingContent}>
            <h3 className={styles.bookingTitle}>Schedule Your Appointment</h3>
            <p className={styles.bookingDescription}>
              Use the booking system below to find available appointment times and schedule your facial treatment.
            </p>
            
            {policiesAccepted ? (
              <AcuityScheduler owner="30825696" accepted={policiesAccepted} />
            ) : (
              <div className={styles.preBookingNotice} role="status">
                <div className={styles.preBookingIcon} aria-hidden="true">🔒</div>
                <h4 className={styles.preBookingTitle}>
                  Accept policies above to load the scheduler
                </h4>
                <p className={styles.preBookingText}>
                  Once you check the box above, the booking system will appear
                  here.
                </p>
                <div className={styles.preBookingArrow} aria-hidden="true">↑</div>
              </div>
            )}
            
            <div className={styles.bookingNote}>
              <p className="body-base">
                <strong>Note:</strong> If you have any questions about which service to book or need assistance 
                with scheduling, please <a href="/contact" className={styles.contactLink}>contact me directly</a>.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.prepReminder}>
          <Card variant="info" className={styles.prepCard}>
            <h3 className={styles.prepTitle}>Before Your Appointment</h3>
            <p className="body-base">
              Don&apos;t forget to review our preparation guidelines to ensure you get the most out of your facial treatment.
            </p>
            <a href="/prep" className={styles.prepLink}>
              View Preparation Tips
            </a>
          </Card>
        </section>
      </div>
    </div>
  )
}