import { contact } from '@/content/contact'

export interface FAQ {
  id: string
  question: string
  answer: string
  link?: {
    label: string
    href: string
    external?: boolean
  }
}

export const faqs: FAQ[] = [
  {
    id: 'benefits',
    question: 'What are the benefits of a facial?',
    answer:
      "Your skin is the largest organ on your body — invest in it. Facials improve skin health, even tone and texture, increase absorption of skincare products, and much more. For best results, I recommend a professional treatment every 4–6 weeks to align with your skin's natural renewal cycle.",
  },
  {
    id: 'which',
    question: 'Which facial should I book?',
    answer:
      "All facials are catered and customized to your skin needs. During our consultation, we'll analyze your skin and discuss a treatment plan that fits your lifestyle and goals. Just choose the duration and leave the rest to me — no guesswork, just results.",
  },
  {
    id: 'first-facial',
    question: 'What to expect during your first facial?',
    answer:
      "Your first appointment is all about understanding your skin's needs and introducing it to active treatments safely. Achieving your skin goals is a marathon, not a sprint (consistency is essential for long-term results). Following your treatment, I will provide a customized home-care regimen to help you build resilience and get the most out of every visit.",
  },
  {
    id: 'sensitive-skin',
    question: 'I have sensitive skin. Can I get a facial?',
    answer:
      "Yes — facials are catered to all skin types. We'll use calmer, gentler products for sensitive skin.",
  },
  {
    id: 'purging',
    question: 'Will I break out after my treatment?',
    answer:
      "It's common for the skin to go through a \"purging\" phase as we draw out impurities, but this typically clears up quickly. We'll discuss how to manage this during your post-treatment consultation.",
  },
  {
    id: 'combine-services',
    question: 'Can I get a lash lift, brow lamination, and/or a facial at the same time?',
    answer:
      "Yes! You can absolutely receive these services on the same day. We will go over all the necessary aftercare instructions once your treatments are complete.",
  },
  {
    id: 'where-to-buy',
    question: 'Where can I buy the products used in my facial?',
    answer:
      'All the products I use are professional-grade GlyMed Plus, available through my online store. They ship directly to your door, so you can keep your routine consistent between visits — and you know every product is authentic and properly handled.',
    link: {
      label: 'Shop my skincare',
      href: contact.shopUrl,
      external: true,
    },
  },
]
