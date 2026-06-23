import type { Metadata } from 'next'
import SectionHeader from '@/components/marketing/SectionHeader'
import CareGrid from '@/components/marketing/CareGrid'
import DisplaySerif from '@/components/ui/DisplaySerif'
import { prepGroups } from '@/content/prep'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Prep | EstheticLY Skincare',
  description:
    'Essential preparation tips for your facial appointment at EstheticLY. Learn what to expect and how to prepare for your treatment.',
}

const numerals = ['01', '02', '03', '04', '05']

const PrepDesktop = () => {
  const cards = prepGroups.map((group, i) => ({
    num: numerals[i] ?? `${i + 1}`,
    title: group.title,
    items: group.items,
  }))
  return (
    <section className={styles.section} id="prep">
      <SectionHeader
        as="h1"
        eyebrow="Before your visit"
        heading={<>How to <DisplaySerif>prepare.</DisplaySerif></>}
        lead="I strongly encourage these tips before your appointment. Reach out anytime with questions."
      />
      <CareGrid cards={cards} />
    </section>
  )
}

export default function PrepPage() {
  return <PrepDesktop />
}
