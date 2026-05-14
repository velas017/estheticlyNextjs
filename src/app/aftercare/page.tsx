import type { Metadata } from 'next'
import SectionHeader from '@/components/marketing/SectionHeader'
import CareGrid from '@/components/marketing/CareGrid'
import DisplaySerif from '@/components/ui/DisplaySerif'
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import AftercareMobile from './AftercareMobile'
import {
  first72Hours,
  cadence,
  makeupNotice,
  aftercareIntro,
} from '@/content/aftercare'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Aftercare | EstheticLY Skincare',
  description:
    'Post-treatment aftercare advice for your facial at EstheticLY. Learn how to maintain and protect your skin after your treatment.',
}

const AftercareDesktop = () => {
  const cards = [
    {
      num: '3d',
      title: 'First 72 hours',
      items: first72Hours.map((item) => item.label),
    },
    {
      num: '4–8',
      title: 'Cadence & maintenance',
      items: [
        'Recommended every 4–8 weeks as the skin cycle renews.',
        'Consistency promotes cell turnover and collagen production.',
        makeupNotice.body,
        cadence.body,
      ],
    },
  ]
  return (
    <section className={styles.section} id="aftercare">
      <div className={styles.panel}>
        <SectionHeader
          eyebrow="After your visit"
          heading={<>Make results <DisplaySerif>last.</DisplaySerif></>}
          lead={aftercareIntro}
        />
        <CareGrid cards={cards} />
      </div>
    </section>
  )
}

export default function AftercarePage() {
  return (
    <ResponsiveSwitch desktop={<AftercareDesktop />} mobile={<AftercareMobile />} />
  )
}
