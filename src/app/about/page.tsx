import type { Metadata } from 'next'
import AboutStrip from '@/components/marketing/AboutStrip'
import MidBanner from '@/components/marketing/MidBanner'
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import AboutMobile from './AboutMobile'

export const metadata: Metadata = {
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician specializing in personalized facials and corrective skincare treatments in Charlotte, NC.',
}

const AboutDesktop = () => (
  <>
    <AboutStrip full />
    <MidBanner
      before="Healthy skin is"
      accent="perfect skin."
      body="Personalized, corrective skincare guided by science — and patience."
    />
  </>
)

export default function AboutPage() {
  return <ResponsiveSwitch desktop={<AboutDesktop />} mobile={<AboutMobile />} />
}
