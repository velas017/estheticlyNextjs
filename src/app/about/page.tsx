import type { Metadata } from 'next'
import AboutStrip from '@/components/marketing/AboutStrip'
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import AboutMobile from './AboutMobile'

export const metadata: Metadata = {
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician specializing in personalized facials and corrective skincare treatments in Charlotte, NC.',
}

const AboutDesktop = () => <AboutStrip full />

export default function AboutPage() {
  return <ResponsiveSwitch desktop={<AboutDesktop />} mobile={<AboutMobile />} />
}
