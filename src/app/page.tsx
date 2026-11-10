import Hero from '@/components/marketing/Hero'
import ServicesGrid from '@/components/marketing/ServicesGrid'
import AboutStrip from '@/components/marketing/AboutStrip'
import ShopBanner from '@/components/marketing/ShopBanner'
import GalleryRow from '@/components/marketing/GalleryRow'
import FAQAccordion from '@/components/marketing/FAQAccordion'
import SectionHeader from '@/components/marketing/SectionHeader'
import ContactGrid from '@/components/marketing/ContactGrid'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { pageMetadata } from '@/lib/pageMetadata'
import styles from './page.module.css'

export const metadata = pageMetadata({
  title: 'EstheticLY | Skincare & Facials in Charlotte, NC',
  description:
    'Personalized facials, science-based skincare, and unhurried care in Charlotte, NC. Licensed esthetician offering customized treatments for every skin type.',
  path: '/',
  shareDescription: 'Personalized, science-based skincare in Charlotte, NC.',
})

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutStrip />
      <ShopBanner />
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
