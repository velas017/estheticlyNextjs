import Hero from '@/components/marketing/Hero'
import ServicesGrid from '@/components/marketing/ServicesGrid'
import AboutStrip from '@/components/marketing/AboutStrip'
import GalleryRow from '@/components/marketing/GalleryRow'
import FAQAccordion from '@/components/marketing/FAQAccordion'
import SectionHeader from '@/components/marketing/SectionHeader'
import ContactGrid from '@/components/marketing/ContactGrid'
import DisplaySerif from '@/components/ui/DisplaySerif'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutStrip />
      <GalleryRow />
      <section className={styles.faqSection} id="faq">
        <SectionHeader
          eyebrow="FAQ"
          heading={<>Frequently <DisplaySerif>asked.</DisplaySerif></>}
          lead="Below you'll find resources related to facial care practices and answers to common questions."
        />
        <FAQAccordion />
      </section>
      <ContactGrid />
    </>
  )
}
