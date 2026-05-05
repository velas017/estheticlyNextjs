'use client'

import React, { useState } from 'react'
import LargeTitle from '@/components/ios/LargeTitle'
import Sheet from '@/components/ios/Sheet'
import { ListInsetGrouped, ListRow } from '@/components/ios/List'
import AcuityScheduler from '@/components/ui/AcuityScheduler'
import styles from './BookMobile.module.css'

export default function BookMobile() {
  const [accepted, setAccepted] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)

  return (
    <>
      <LargeTitle title="Book" subtitle="Schedule your visit" />
      <p className={styles.bodyText}>
        Pick a time that works for you — appointments are kept unhurried so we
        can focus on your skin.
      </p>

      <ListInsetGrouped header="Before you book">
        <ListRow
          onClick={() => setPoliciesOpen(true)}
          title="Booking policies"
          subtitle="Payment, cancellation, and late terms"
        />
      </ListInsetGrouped>

      <label className={styles.acceptRow}>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className={styles.checkbox}
        />
        <span className={styles.acceptText}>
          I have read and accept the booking policies including the late policy and
          deposit requirements.
        </span>
      </label>

      <div className={styles.scheduler}>
        {accepted ? (
          <AcuityScheduler owner="30825696" accepted={accepted} />
        ) : (
          <div className={styles.preBooking}>
            <div className={styles.preIcon} aria-hidden="true">🔒</div>
            <div className={styles.preTitle}>
              Accept policies above to load the scheduler
            </div>
            <div className={styles.preText}>
              Once you check the box, the booking system will appear here.
            </div>
          </div>
        )}
      </div>

      <Sheet open={policiesOpen} onClose={() => setPoliciesOpen(false)} title="Booking policies">
        <div className={styles.policyItem}>
          <h4>Payment Information</h4>
          <p>
            A valid card on file and a $25 non-refundable deposit are required
            at the time of booking. The deposit will be applied toward your
            remaining balance, which is due at the conclusion of your service.
          </p>
          <p>
            Remaining balance are available to be paid Cash, Zelle, Venmo, Apple
            Pay, or Square ($3 service charge).
          </p>
        </div>
        <div className={styles.policyItem}>
          <h4>Cancellation Policy</h4>
          <p>
            Appointments may be cancelled up to 24 hours in advance; however,
            please note that deposits are non-refundable. Cancellations made with
            less than 24 hours notice will result in a forfeited deposit, and a
            new $25 deposit will be required to book any future services.
          </p>
        </div>
        <div className={styles.policyItem}>
          <h4>Late Policy</h4>
          <p>
            Please notify me in advance if you anticipate being late. A 15-minute
            grace period is provided. After 15 minutes, you may choose to
            reschedule; however, your deposit will be forfeited and a new $25
            deposit will be required to secure a future appointment.
            Alternatively, you may opt to proceed with the remaining time
            allocated for your scheduled service but the full service fee will
            still apply. Other services besides facials may be charged a +$10
            late fee.
          </p>
        </div>
      </Sheet>
    </>
  )
}
