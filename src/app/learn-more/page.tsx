import type { Metadata } from 'next'
import SectionHeader from '@/components/marketing/SectionHeader'
import FAQAccordion from '@/components/marketing/FAQAccordion'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { contact } from '@/content/contact'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'FAQ | EstheticLY Skincare',
  description:
    'Frequently asked questions about facial treatments, skincare products, and services at EstheticLY in Charlotte, NC.',
}

const FAQDesktop = () => (
  <section className={styles.section} id="faq">
    <SectionHeader
      as="h1"
      eyebrow="FAQ"
      heading={<>Frequently <DisplaySerif>asked.</DisplaySerif></>}
      lead="Below you'll find resources related to facial care practices and answers to common questions."
    />
    <FAQAccordion />

    <div className={styles.askCard}>
      <h3 className={styles.askTitle}>Have a specific question?</h3>
      <p className={styles.askBody}>
        Can&apos;t find what you&apos;re looking for? Feel free to reach out directly.
      </p>
      <a href={`mailto:${contact.email}`} className={styles.askBtn}>
        Ask Me
      </a>
    </div>
  </section>
)

export default function LearnMorePage() {
  return <FAQDesktop />
}
