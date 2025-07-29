import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Prep | EstheticLY Skincare',
  description: 'Essential preparation tips for your facial appointment at EstheticLY. Learn what to expect and how to prepare for your treatment.',
}

export default function PrepPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">Preparing for a Facial</h1>
          <p className="body-large">
            I strongly encourage you to follow these tips before you arrive to your appointment. 
            Feel free to contact me prior to your appointment for any other questions you may have.
          </p>
        </section>

        <section className={styles.prepContent}>
          <h2 className={styles.sectionTitle}>Preparing for Your Facial Treatment</h2>
          
          <div className={styles.cardsGrid}>
            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>How to prepare for your facial</h3>
              <p className={styles.cardDescription}>
                Essential steps to take before your appointment. Learn about skincare products to avoid, 
                what to wear, and how to prepare your skin for the best treatment results.
              </p>
            </article>

            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>What medications affect facial treatments?</h3>
              <p className={styles.cardDescription}>
                Important information about contraindications including tretinoin, accutane, and recent 
                cosmetic procedures. Know when to reschedule for your safety.
              </p>
            </article>

            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>What products should I use at home?</h3>
              <p className={styles.cardDescription}>
                Get personalized recommendations through consultation and skin analysis. We&apos;ll create 
                the perfect home care routine based on your skin type and concerns.
              </p>
            </article>

            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>What to expect during your first facial</h3>
              <p className={styles.cardDescription}>
                A complete walkthrough of your treatment experience including consultation, cleansing, 
                exfoliation, extractions, mask application, and relaxing massage.
              </p>
            </article>

            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>What should I wear to my appointment?</h3>
              <p className={styles.cardDescription}>
                Comfort is key! Learn about our optional draping procedures and what clothing choices 
                will help you feel most relaxed during your treatment.
              </p>
            </article>

            <article className={styles.prepCard}>
              <h3 className={styles.cardTitle}>Pre-treatment skincare guidelines</h3>
              <p className={styles.cardDescription}>
                Detailed timeline of when to stop using retinols, acids, and exfoliants. Plus tips on 
                makeup, sun exposure, and other factors that affect your treatment.
              </p>
            </article>
          </div>

          <div className={styles.viewAll}>
            <a href="#" className={styles.viewAllLink}>View all preparation guidelines</a>
          </div>
        </section>

      </div>
    </div>
  )
}