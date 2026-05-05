import type { Metadata } from 'next'
import AboutStrip from '@/components/marketing/AboutStrip'
import MidBanner from '@/components/marketing/MidBanner'

export const metadata: Metadata = {
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician specializing in personalized facials and corrective skincare treatments in Charlotte, NC.',
}

export default function AboutPage() {
  return (
    <>
      <AboutStrip full />
      <MidBanner
        before="Healthy skin is"
        accent="perfect skin."
        body="Personalized, corrective skincare guided by science — and patience."
      />
    </>
  )
}
