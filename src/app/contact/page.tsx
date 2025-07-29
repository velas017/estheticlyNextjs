import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact | EstheticLY Skincare',
  description: 'Contact EstheticLY Skincare in Charlotte, NC. Get in touch for appointments, questions, or skincare consultations.',
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">We&apos;re here when you need us</h1>
          <p className="body-large">
            Professional skincare support is available throughout the week. Contact us directly, 
            book your appointment, or follow our journey on social media.
          </p>
        </section>

        <section className={styles.contactGrid}>
          <div className={styles.contactCategory}>
            <h3 className={styles.categoryTitle}>Business Hours →</h3>
            <div className={styles.categoryContent}>
              <div className={styles.hourItem}>
                <span className={styles.dayLabel}>Tuesday / Wednesday</span>
                <span className={styles.timeLabel}>10:30am - 7:00pm</span>
              </div>
              <div className={styles.hourItem}>
                <span className={styles.dayLabel}>Friday / Saturday</span>
                <span className={styles.timeLabel}>10:00am - 5:00pm</span>
              </div>
              <p className={styles.hoursNote}>
                Hours may vary, after hour appointments available upon request
              </p>
            </div>
          </div>

          <div className={styles.contactCategory}>
            <h3 className={styles.categoryTitle}>Get in Touch →</h3>
            <div className={styles.categoryContent}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:amyly.esthetics@gmail.com" className={styles.contactLink}>
                  amyly.esthetics@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone</span>
                <a href="tel:+19809993115" className={styles.contactLink}>
                  980.999.3115
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactCategory}>
            <h3 className={styles.categoryTitle}>Visit Us →</h3>
            <div className={styles.categoryContent}>
              <div className={styles.addressInfo}>
                <p className={styles.businessName}>Sassy Salon</p>
                <p className={styles.addressLine}>7211 E Independence Blvd</p>
                <p className={styles.addressLine}>Charlotte, NC 28227</p>
                <p className={styles.appointmentNote}>Appointment-based - <strong>No Walk-Ins!</strong></p>
              </div>
            </div>
          </div>

          <div className={styles.contactCategory}>
            <h3 className={styles.categoryTitle}>Follow Our Work →</h3>
            <div className={styles.categoryContent}>
              <div className={styles.socialLinks}>
                <a 
                  href="https://www.instagram.com/estheticlyskincare/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61564316234527" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}