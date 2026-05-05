'use client'

import React, { useState } from 'react'
import LargeTitle from '@/components/ios/LargeTitle'
import Segmented from '@/components/ios/Segmented'
import { prepGroups } from '@/content/prep'
import styles from './PrepMobile.module.css'

type PrepId = (typeof prepGroups)[number]['id']

export default function PrepMobile() {
  const [tab, setTab] = useState<PrepId>('before')
  const card = prepGroups.find((g) => g.id === tab) ?? prepGroups[0]

  return (
    <>
      <LargeTitle title="Prep" subtitle="Before your appointment" />
      <p className={styles.bodyText}>
        Follow these tips before you arrive. Reach out anytime with questions.
      </p>

      <Segmented<PrepId>
        value={tab}
        onChange={setTab}
        options={prepGroups.map((g) => ({ value: g.id, label: g.segmentLabel }))}
      />

      <div className={styles.sectionHeader}>{card.title}</div>
      <div className={styles.card}>
        <ul className={styles.list}>
          {card.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.sectionFooter}>
        Have a question not covered here? Reach out anytime.
      </div>
    </>
  )
}
