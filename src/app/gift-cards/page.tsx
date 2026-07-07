import type { Metadata } from 'next'
import Image from 'next/image'
import DisplaySerif from '@/components/ui/DisplaySerif'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Gift Cards | EstheticLY Skincare',
  description:
    'Give the gift of professional skincare with EstheticLY e-gift cards.',
}

const GiftCardsDesktop = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      <div className={styles.imageWrap}>
        <Image
          src="/Images/estheticlyEgiftcard.png"
          alt="EstheticLY Skincare Gift Card"
          width={520}
          height={328}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.copy}>
        <div className={styles.eyebrow}>Gift Cards</div>
        <h1 className={styles.heading}>
          Give the gift of <DisplaySerif>glow.</DisplaySerif>
        </h1>
        <p className={styles.lead}>
          Share the elegance of personalized skincare. Send a digital gift card
          instantly — perfect for birthdays, holidays, or simply because.
        </p>
        <a
          href="https://app.squareup.com/gift/ML1PB9TVCHMXK/order"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          aria-label="Buy a gift card (opens in new tab)"
        >
          Buy now →
        </a>
      </div>
    </div>
  </section>
)

export default function GiftCardsPage() {
  return <GiftCardsDesktop />
}
