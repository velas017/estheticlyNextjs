import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroCard from '@/components/ios/HeroCard'
import ShortcutCard from '@/components/ios/ShortcutCard'
import { ListInsetGrouped, ListRow } from '@/components/ios/List'
import Callout from '@/components/ios/Callout'
import {
  LeafIcon,
  DropIcon,
  FAQIcon,
  GiftcardIcon,
  AboutIcon,
  ContactIcon,
  BookIcon,
} from '@/components/ios/Icons'
import styles from './HomeMobile.module.css'

const galleryCells = [
  '/Images/facial.jpg',
  '/Images/handsOn2.jpg',
  '/Images/brows2.jpg',
  '/Images/IMG_1500.jpg',
  '/Images/IMG_1593.jpeg',
  '/Images/amyPortait2.jpg',
]

export default function HomeMobile() {
  return (
    <>
      <HeroCard
        image={{ src: '/Images/DSC08642.jpeg', alt: 'Esthetician at work' }}
        eyebrow="EstheticLY · Charlotte, NC"
        title="Start your skincare journey."
        body="Personalized facials, science-based skincare, calm and unhurried care."
      >
        <Link href="/book-now" className={`${styles.btn} ${styles.btnPrimary}`}>
          Book Now
        </Link>
        <Link href="/about" className={`${styles.btn} ${styles.btnGlass}`}>
          Learn more
        </Link>
      </HeroCard>

      <div className={styles.sectionHeader}>Quick actions</div>
      <div className={styles.shortcutGrid}>
        <ShortcutCard
          href="/prep"
          icon={<LeafIcon size={18} color="#fff" />}
          iconBg="var(--tint)"
          title="Prep for your facial"
          subtitle="5 quick tips before you arrive"
        />
        <ShortcutCard
          href="/aftercare"
          icon={<DropIcon size={18} color="#fff" />}
          iconBg="#6b8e7a"
          title="Aftercare advice"
          subtitle="Make results last"
        />
        <ShortcutCard
          href="/learn-more"
          icon={<FAQIcon size={18} color="#fff" />}
          iconBg="#7a6b8e"
          title="FAQ"
          subtitle="Common questions answered"
        />
        <ShortcutCard
          href="/gift-cards"
          icon={<GiftcardIcon size={18} color="#fff" />}
          iconBg="#b88a5a"
          title="Gift cards"
          subtitle="Give the gift of glow"
        />
      </div>

      <div className={styles.sectionHeader}>Featured</div>
      <Callout>
        Your skin is the largest organ on your body — invest in it. Facials
        improve skin health, even tone and texture, and increase absorption of
        skincare products.
      </Callout>

      <ListInsetGrouped header="More">
        <ListRow
          href="/about"
          leading={<AboutIcon size={18} color="#fff" />}
          leadingColor="#937a62"
          title="About Amy"
          subtitle="Licensed esthetician · 10+ certifications"
        />
        <ListRow
          href="/contact"
          leading={<ContactIcon size={18} color="#fff" />}
          leadingColor="#5a8aa8"
          title="Contact"
          subtitle="Hours, location, phone"
        />
        <ListRow
          href="/book-now"
          leading={<BookIcon size={18} color="#fff" />}
          leadingColor="#c08a5a"
          title="Booking policies"
          subtitle="Please review before booking"
        />
      </ListInsetGrouped>

      <div className={styles.sectionHeader}>Recent work</div>
      <div className={styles.galleryScroll}>
        {galleryCells.map((src) => (
          <div key={src} className={styles.gallerySlide}>
            <Image src={src} alt="" fill sizes="85vw" className={styles.gallerySlideImg} />
          </div>
        ))}
      </div>

      <div className={styles.appFooter}>
        EstheticLY · estheticlyskincare.com
        <br />
        7211 E Independence Blvd, Charlotte NC
      </div>
    </>
  )
}
