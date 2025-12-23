import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Gift Cards | EstheticLY Skincare',
  description: 'Give the gift of professional skincare with EstheticLY e-gift cards.',
}

export default function GiftCardsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          {/* Left: Gift Card Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/Images/estheticlyEgiftcard.png"
              alt="EstheticLY Skincare Gift Card"
              width={500}
              height={315}
              className={styles.giftCardImage}
              priority
            />
          </div>

          {/* Right: Content */}
          <div className={styles.content}>
            <h1 className="heading-1">EstheticLY<br />Gift Cards</h1>
            <p className={styles.tagline}>
              Share the elegance of skincare.
            </p>
            <Button
              href="https://app.squareup.com/gift/ML1PB9TVCHMXK/order"
              variant="primary"
              size="large"
            >
              Buy now
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
