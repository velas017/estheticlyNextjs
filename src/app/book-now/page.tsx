import BookDesktop from './BookDesktop'
import { pageMetadata } from '@/lib/pageMetadata'

export const metadata = pageMetadata({
  title: 'Book Now | EstheticLY Skincare',
  description: 'Book your facial appointment with EstheticLY in Charlotte, NC.',
  path: '/book-now',
})

export default function BookNowPage() {
  return <BookDesktop />
}
