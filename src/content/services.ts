export interface Service {
  id: string
  name: string
  duration: string
  price: number
  description: string
}

export const services: Service[] = [
  {
    id: 'signature',
    name: 'Signature Facial',
    duration: '60 min',
    price: 95,
    description:
      'Customized double cleanse, exfoliation, mask, neck and shoulder massage, serums, moisturizer.',
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning Facial',
    duration: '75 min',
    price: 120,
    description:
      'Manual exfoliation removes peach fuzz and dead skin for a luminous, makeup-ready finish.',
  },
  {
    id: 'microdermabrasion',
    name: 'Microdermabrasion',
    duration: '75 min',
    price: 130,
    description:
      'Resurfacing facial that improves texture, tone, and product absorption.',
  },
  {
    id: 'teen',
    name: 'Teen Facial',
    duration: '45 min',
    price: 70,
    description:
      "Gentle, education-focused facial for ages 13+, with a guardian's consent.",
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    duration: '60 min',
    price: 140,
    description:
      'Customized peel addressing tone, texture, and underlying concerns.',
  },
  {
    id: 'express',
    name: 'Express Facial',
    duration: '30 min',
    price: 60,
    description:
      'A streamlined cleanse + treat + protect for between full appointments.',
  },
]
