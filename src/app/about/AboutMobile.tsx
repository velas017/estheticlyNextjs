import React from 'react'
import LargeTitle from '@/components/ios/LargeTitle'
import HeroCard from '@/components/ios/HeroCard'
import { ListInsetGrouped, ListRow } from '@/components/ios/List'
import Callout from '@/components/ios/Callout'
import { CheckIcon } from '@/components/ios/Icons'
import { aboutHeadline, bioParagraphs, certifications, purpose } from '@/content/about'
import styles from './AboutMobile.module.css'

export default function AboutMobile() {
  return (
    <>
      <LargeTitle title="About" subtitle={aboutHeadline.subtitle} />

      <div className={styles.heroWrap}>
        <HeroCard
          image={{ src: '/Images/amyPortait2.jpg', alt: 'Amy Ly' }}
          eyebrow="Meet"
          title={aboutHeadline.name}
          body={`${aboutHeadline.role} · ${aboutHeadline.location}`}
          square
        />
      </div>

      {bioParagraphs.map((p, i) => (
        <p key={i} className={styles.bodyText}>{p}</p>
      ))}

      <div className={styles.sectionHeader}>My purpose</div>
      <Callout className={styles.purpose}>{purpose}</Callout>

      <ListInsetGrouped header="Certifications">
        {certifications.map((cert) => (
          <ListRow
            key={cert}
            leading={<CheckIcon size={16} color="#fff" />}
            leadingColor="var(--tint)"
            title={cert}
            noChevron
          />
        ))}
      </ListInsetGrouped>
    </>
  )
}
