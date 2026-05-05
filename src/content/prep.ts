export interface PrepGroup {
  id: string
  segmentLabel: string
  title: string
  items: string[]
}

export const prepGroups: PrepGroup[] = [
  {
    id: 'before',
    segmentLabel: 'Before',
    title: 'Preparing for the facial',
    items: [
      'Discard retinol or acids for a week — no exfoliating 3 days prior; it can make the skin sensitive.',
      'Avoid waxing or tanning for 24 hours.',
      "Try to avoid heavy makeup; it's not a hassle if you can't — I will remove it.",
      'Remove any necklaces.',
      'Get cozy! Robes are provided to your comfort level.',
    ],
  },
  {
    id: 'using',
    segmentLabel: 'Using',
    title: 'Can I still get a facial while using…?',
    items: [
      'Contraindications: tretinoin and accutane (must stop use for 6 months).',
      'No injections, botox, laser, etc. for a month prior.',
      "Reach out for further info if you're using any prescribed dermatologist medication.",
      "I work with inflamed acne but can't diagnose your skin — see a dermatologist for serious conditions.",
    ],
  },
  {
    id: 'home',
    segmentLabel: 'Home',
    title: "I don't know what products to use at home",
    items: [
      'A consultation and skin analysis will guide us into the correct at-home routine.',
      "This lets me see your skin type and start you on the right journey — important to know what you're already doing.",
    ],
  },
  {
    id: 'first',
    segmentLabel: '1st time',
    title: 'Expectations for your first facial',
    items: [
      "Expect thorough questions in the beginning so I know what we're working with.",
      "I'll go step by step in depth with each product we are using and why.",
      'Double cleanse, exfoliate, extract if needed, mask, neck and shoulder massage, serums, moisturizer.',
    ],
  },
  {
    id: 'undress',
    segmentLabel: 'Robe',
    title: 'Is undressing required?',
    items: [
      "Undressing waist up is optional — it's to your comfort level.",
      "It helps with the neck and shoulder area, but it's not required.",
    ],
  },
]
