import type { Metadata } from 'next'
import ResponsiveSwitch from '@/components/ios/ResponsiveSwitch'
import BookDesktop from './BookDesktop'
import BookMobile from './BookMobile'

export const metadata: Metadata = {
  title: 'Book Now | EstheticLY Skincare',
  description: 'Book your facial appointment with EstheticLY in Charlotte, NC.',
}

export default function BookNowPage() {
  return <ResponsiveSwitch desktop={<BookDesktop />} mobile={<BookMobile />} />
}
