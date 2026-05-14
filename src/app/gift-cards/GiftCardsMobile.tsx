import React from 'react'
import Image from 'next/image'
import LargeTitle from '@/components/ios/LargeTitle'
import styles from './GiftCardsMobile.module.css'

export default function GiftCardsMobile() {
  return (
    <>
      <LargeTitle title="Gift Cards" subtitle="Give the gift of glow" />

      <div className={styles.imgWrap}>
        <Image
          src="/Images/estheticlyEgiftcard.png"
          alt="EstheticLY gift card"
          width={520}
          height={328}
          className={styles.img}
        />
      </div>

      <p className={styles.body}>
        Share the elegance of personalized skincare. Send a digital gift card
        instantly — perfect for birthdays, holidays, or simply because.
      </p>

      <div className={styles.cta}>
        <a
          href="https://app.squareup.com/gift/ML1PB9TVCHMXK/order"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Buy now →
        </a>
      </div>
    </>
  )
}
