import ContactGrid from '@/components/marketing/ContactGrid'
import { pageMetadata } from '@/lib/pageMetadata'

export const metadata = pageMetadata({
  title: 'Contact | EstheticLY Skincare',
  description:
    'Contact EstheticLY Skincare in Charlotte, NC. Get in touch for appointments, questions, or skincare consultations.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactGrid as="h1" />
}
