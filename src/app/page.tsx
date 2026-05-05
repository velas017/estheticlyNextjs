import Hero from '@/components/marketing/Hero'
import ServicesGrid from '@/components/marketing/ServicesGrid'
import AboutStrip from '@/components/marketing/AboutStrip'
import GalleryRow from '@/components/marketing/GalleryRow'
import MidBanner from '@/components/marketing/MidBanner'
import FAQAccordion from '@/components/marketing/FAQAccordion'
import SectionHeader from '@/components/marketing/SectionHeader'
import ContactGrid from '@/components/marketing/ContactGrid'
import DisplaySerif from '@/components/ui/DisplaySerif'
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import HomeMobile from './HomeMobile'
import styles from './page.module.css'

const HomeDesktop = () => (
  <>
    <Hero />
    <ServicesGrid />
    <AboutStrip />
    <GalleryRow />
    <MidBanner
      before="Elevate your"
      accent="skincare routine."
      body="Healthy skin is built between visits. Let's create a routine that works for you."
    />
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

export default function Home() {
  return <ResponsiveSwitch desktop={<HomeDesktop />} mobile={<HomeMobile />} />
}
