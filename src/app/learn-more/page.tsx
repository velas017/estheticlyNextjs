import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'FAQ | EstheticLY Skincare',
  description: 'Frequently asked questions about facial treatments, skincare products, and services at EstheticLY in Charlotte, NC.',
}

export default function LearnMorePage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <section className={styles.heroSection}>
          <h1 className="heading-1">Frequently asked questions</h1>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqGrid}>
            
            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <h3 className={styles.faqQuestion}>What are the benefits of a facial?</h3>
                <span className={styles.toggleIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className="body-base">
                  Your skin is the largest organ on your body, you should want to invest and take care of it. 
                  Overall, facials improve skin health, allows to even skin tone and texture, increase absorption 
                  of skincare products, and many more!
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <h3 className={styles.faqQuestion}>What product line will be used?</h3>
                <span className={styles.toggleIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className="body-base">
                  My back bar is a variety of brands like <em>skinscript, glymed, dermalogica, circadia</em> and more. 
                  Options are available to cater towards different clients and concerns. Majority of these brands are 
                  pharmaceutical skincare lines or developed by estheticians.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <h3 className={styles.faqQuestion}>What is the age requirement for a facial?</h3>
                <span className={styles.toggleIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className="body-base">
                  The minimum age allowed is 13 yrs. Offering teen facials with a guardian&apos;s consent. 
                  Facials are welcomed and recommended for any age and gender.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <h3 className={styles.faqQuestion}>I have sensitive skin. Can I get a facial?</h3>
                <span className={styles.toggleIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className="body-base">
                  Yes of course, facials are catered to all skin types. We will be using more calm gentle 
                  products for those with sensitive skin.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>
                <h3 className={styles.faqQuestion}>Which facial should I book?</h3>
                <span className={styles.toggleIcon}></span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className="body-base">
                  If this is your first facial, any customized facial is ideal. During the skin analysis, 
                  I will be looking closely to determine the current condition of the skin, its sensitivities, 
                  and underlying issues to ensure you are getting the treatment best suited for your skin.
                </p>
              </div>
            </details>

          </div>
        </section>

        <section className={styles.helpSection}>
          <div className={styles.helpContent}>
            <h3 className={styles.helpTitle}>Have a specific question you need answered?</h3>
            <p className="body-base">
              Can&apos;t find what you&apos;re looking for? Feel free to reach out directly.
            </p>
            <a href="mailto:amyly.esthetics@gmail.com" className={styles.askButton}>
              Ask Me
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}