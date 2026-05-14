import React from 'react'
import LargeTitle from '@/components/ios/LargeTitle'
import { ListInsetGrouped, ListRow } from '@/components/ios/List'
import {
  MailIcon,
  PhoneIcon,
  IGIcon,
  FBIcon,
  ClockIcon,
  PinIcon,
} from '@/components/ios/Icons'
import { contact, hours, hoursNote } from '@/content/contact'
import styles from './ContactMobile.module.css'

const formatDay = (d: { day: string; open: string | null; close: string | null }) => {
  if (!d.open || !d.close) return null
  return `${d.open} – ${d.close}`
}

export default function ContactMobile() {
  const openDays = hours.filter((h) => h.open && h.close)

  return (
    <>
      <LargeTitle title="Contact" subtitle="Send a message · Call · Visit" />

      <p className={styles.bodyText}>
        I&apos;m happy to help and be a part of your skincare journey.
      </p>

      <ListInsetGrouped header="Reach out">
        <ListRow
          href={`mailto:${contact.email}`}
          leading={<MailIcon size={18} color="#fff" />}
          leadingColor="#5a8aa8"
          title="Email"
          subtitle={contact.email}
        />
        <ListRow
          href={`tel:${contact.phoneTel}`}
          leading={<PhoneIcon size={18} color="#fff" />}
          leadingColor="#6b8e7a"
          title="Phone"
          subtitle={`${contact.phone} · Call or text`}
        />
        <ListRow
          href={contact.socials.instagram.url}
          leading={<IGIcon size={18} color="#fff" />}
          leadingColor="#c0598a"
          title="Instagram"
          subtitle={contact.socials.instagram.handle}
        />
        <ListRow
          href={contact.socials.facebook.url}
          leading={<FBIcon size={18} color="#fff" />}
          leadingColor="#5a78c0"
          title="Facebook"
          subtitle={contact.socials.facebook.handle}
        />
      </ListInsetGrouped>

      <ListInsetGrouped header="Hours" footer={hoursNote}>
        {openDays.map((row) => (
          <ListRow
            key={row.day}
            leading={<ClockIcon size={16} color="#fff" />}
            leadingColor="var(--tint)"
            title={row.day}
            trailing={formatDay(row)}
            noChevron
          />
        ))}
      </ListInsetGrouped>

      <div className={styles.sectionHeader}>Location</div>
      <div className={styles.locationCard}>
        <div className={styles.mapPlaceholder} aria-hidden="true">
          <PinIcon size={26} color="var(--tint)" />
        </div>
        <div className={styles.locationBody}>
          <div className={styles.locationName}>{contact.business}</div>
          <div className={styles.locationAddress}>
            {contact.addressLine1}
            <br />
            {contact.addressLine2}
          </div>
          <div className={styles.locationPill}>{contact.appointmentNote}</div>
        </div>
      </div>
    </>
  )
}
