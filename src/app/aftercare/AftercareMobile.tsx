import React from 'react'
import Link from 'next/link'
import LargeTitle from '@/components/ios/LargeTitle'
import { ListInsetGrouped, ListRow } from '@/components/ios/List'
import Callout from '@/components/ios/Callout'
import {
  CheckIcon,
  SparkIcon,
  DropIcon,
  CloseIcon,
} from '@/components/ios/Icons'
import { first72Hours, cadence, makeupNotice } from '@/content/aftercare'
import styles from './AftercareMobile.module.css'

const iconForTone = (tone: 'positive' | 'caution' | 'neutral', label: string) => {
  if (tone === 'caution') {
    if (label.includes('SPF')) return { Icon: SparkIcon, bg: '#c08a5a' }
    return { Icon: CloseIcon, bg: '#a85a5a' }
  }
  if (tone === 'neutral') return { Icon: DropIcon, bg: '#5a8aa8' }
  return { Icon: CheckIcon, bg: '#6b8e7a' }
}

export default function AftercareMobile() {
  return (
    <>
      <LargeTitle title="Aftercare" subtitle="Make results last" />
      <p className={styles.bodyText}>
        After your appointment, follow these to ensure the best results
        post-treatment. I&apos;ll also walk through specifics during your visit.
      </p>

      <div className={styles.sectionHeader}>How often should I come?</div>
      <div className={styles.card}>
        <div className={styles.cardHeading}>{cadence.headline}</div>
        <p className={styles.cardBody}>{cadence.body}</p>
      </div>

      <ListInsetGrouped header="First 72 hours">
        {first72Hours.map((item) => {
          const { Icon, bg } = iconForTone(item.tone, item.label)
          return (
            <ListRow
              key={item.id}
              leading={<Icon size={16} color="#fff" />}
              leadingColor={bg}
              title={item.label}
              noChevron
            />
          )
        })}
      </ListInsetGrouped>

      <div className={styles.sectionHeader}>Makeup</div>
      <Callout>
        Avoid makeup for at least <strong>{makeupNotice.hours} hours</strong> so
        products can absorb fully into the skin.
      </Callout>

      <div className={styles.cta}>
        <Link href="/book-now" className={styles.btn}>
          Book your next visit
        </Link>
      </div>
    </>
  )
}
