export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 'benefits',
    question: 'What are the benefits of a facial?',
    answer:
      'Your skin is the largest organ on your body — invest in it. Facials improve skin health, even tone and texture, increase absorption of skincare products, and much more.',
  },
  {
    id: 'product-line',
    question: 'What product line will be used?',
    answer:
      'My back bar is a variety of brands: skinscript, glymed, dermalogica, circadia and more. Most are pharmaceutical lines or developed by estheticians, so I can cater to different clients and concerns.',
  },
  {
    id: 'age',
    question: 'What is the age requirement for a facial?',
    answer:
      "The minimum age allowed is 13. Teen facials are available with a guardian's consent. Facials are recommended for any age and gender.",
  },
  {
    id: 'sensitive-skin',
    question: 'I have sensitive skin. Can I get a facial?',
    answer:
      "Yes — facials are catered to all skin types. We'll use calmer, gentler products for sensitive skin.",
  },
  {
    id: 'which',
    question: 'Which facial should I book?',
    answer:
      "If this is your first facial, any customized facial is ideal. During the skin analysis, I'll determine your current condition, sensitivities, and underlying issues to ensure the best treatment for you.",
  },
]
