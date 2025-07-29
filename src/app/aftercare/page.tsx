import type { Metadata } from 'next'
import Card from '@/components/ui/Card'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Aftercare | EstheticLY Skincare',
  description: 'Post-treatment aftercare advice for your facial at EstheticLY. Learn how to maintain and protect your skin after your treatment.',
}

export default function AftercarePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">Aftercare Advice</h1>
          <p className="body-large">
            After your appointment, follow the details below to ensure the best results post-treatment. 
            After care advice will be given during the appointment to ensure the client understands what to avoid.
          </p>
        </section>

        <section className={styles.aftercareCards}>
          <div className={styles.cardsGrid}>
            
            <Card variant="content" className={styles.aftercareCard}>
              <h3 className={styles.cardTitle}>How often should I get a facial?</h3>
              <p className="body-base">
                Recommended every 4-8 weeks as the skin cycle renews itself to remove dead skin to maintain 
                and promote cell turnover and collagen production, improves skin texture. It is a process and 
                being consistent is the best way to see optimal results. If you have any specific concerns, 
                it will help us get to the goal quicker.
              </p>
            </Card>

            <Card variant="content" className={styles.aftercareCard}>
              <h3 className={styles.cardTitle}>Post-treatment exfoliation</h3>
              <div className={styles.cardContent}>
                <p className="body-base">
                  <strong>For the next 3 days:</strong> No exfoliation
                </p>
                <ul className={styles.cardList}>
                  <li>Continue wearing SPF everyday</li>
                  <li>Stay hydrated</li>
                  <li>Avoid touching face</li>
                  <li>Avoid sweating or heat</li>
                  <li>No sauna</li>
                </ul>
              </div>
            </Card>

            <Card variant="content" className={styles.aftercareCard}>
              <h3 className={styles.cardTitle}>How long until I can wear makeup?</h3>
              <p className="body-base">
                Avoid makeup for at least 24 hours so the products are able to absorb thoroughly into the skin.
              </p>
            </Card>

          </div>
        </section>

        <section className={styles.tipsBanner}>
          <Card variant="weather" className={styles.tipsCard}>
            <h3 className={styles.tipsTitle}>Essential Aftercare Tips</h3>
            <div className={styles.tipsGrid}>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>☀️</div>
                <div className={styles.tipText}>
                  <h4>SPF Protection</h4>
                  <p>Wear sunscreen daily to protect your newly treated skin</p>
                </div>
              </div>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>💧</div>
                <div className={styles.tipText}>
                  <h4>Stay Hydrated</h4>
                  <p>Drink plenty of water to support skin healing</p>
                </div>
              </div>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>🚫</div>
                <div className={styles.tipText}>
                  <h4>Avoid Touching</h4>
                  <p>Keep hands away from your face to prevent irritation</p>
                </div>
              </div>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>❄️</div>
                <div className={styles.tipText}>
                  <h4>Keep Cool</h4>
                  <p>Avoid heat, sweating, and saunas for best results</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className={styles.consistencySection}>
          <Card variant="info" className={styles.consistencyCard}>
            <h3 className={styles.consistencyTitle}>Consistency is Key</h3>
            <p className="body-base">
              Regular facial treatments every 4-8 weeks will help you achieve and maintain optimal skin health. 
              Each treatment builds upon the last, creating cumulative benefits for your skin.
            </p>
            <a href="/book-now" className={styles.bookButton}>
              Schedule Your Next Appointment
            </a>
          </Card>
        </section>
      </div>
    </div>
  )
}