import AboutStrip from '@/components/marketing/AboutStrip'
import { pageMetadata } from '@/lib/pageMetadata'

export const metadata = pageMetadata({
  title: 'About | EstheticLY Skincare',
  description: 'Meet Amy Ly, licensed esthetician specializing in personalized facials and corrective skincare treatments in Charlotte, NC.',
  path: '/about',
})

export default function AboutPage() {
  return <AboutStrip full as="h1" />
}
