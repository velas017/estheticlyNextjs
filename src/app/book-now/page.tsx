import type { Metadata } from 'next'
import BookDesktop from './BookDesktop'

export const metadata: Metadata = {
  title: 'Book Now | EstheticLY Skincare',
  description: 'Book your facial appointment with EstheticLY in Charlotte, NC.',
}

export default function BookNowPage() {
  return <BookDesktop />
}
