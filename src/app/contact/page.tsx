import type { Metadata } from 'next'
import ContactGrid from '@/components/marketing/ContactGrid'

export const metadata: Metadata = {
  title: 'Contact | EstheticLY Skincare',
  description:
    'Contact EstheticLY Skincare in Charlotte, NC. Get in touch for appointments, questions, or skincare consultations.',
}

export default function ContactPage() {
  return <ContactGrid />
}
