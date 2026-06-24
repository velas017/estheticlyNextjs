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
    price: 130,
    description:
      'Customized double cleanse, exfoliation, mask, neck and shoulder massage, serums, moisturizer.',
  },
  {
    id: 'back-facial',
    name: 'Back Facial',
    duration: '60 min',
    price: 109,
    description:
      "Perfect for a deep cleanse since it's a hard to reach area. Customized to your concerns.",
  },
  {
    id: '90-min-custom',
    name: '90 Minute Custom Facial',
    duration: '95 min',
    price: 180,
    description:
      'Want a longer facial to address concerns and more relaxation time? Perfect to wind down and create a moment for you.',
  },
]
