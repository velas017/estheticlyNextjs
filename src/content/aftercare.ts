export interface AftercareItem {
  id: string
  /** Tone hint used by mobile list rows; desktop ignores. */
  tone: 'positive' | 'caution' | 'neutral'
  label: string
}

export const first72Hours: AftercareItem[] = [
  { id: 'no-exfol', tone: 'positive', label: 'No exfoliation for 3 days' },
  { id: 'spf', tone: 'caution', label: 'Wear SPF every day' },
  { id: 'hydrate', tone: 'neutral', label: 'Stay hydrated' },
  { id: 'no-touch', tone: 'caution', label: 'Avoid touching your face' },
  { id: 'no-heat', tone: 'caution', label: 'No sweating, heat, or sauna' },
]

export const cadence = {
  headline: 'Every 4–8 weeks',
  body: "Skin renews on a cycle. Consistency promotes cell turnover and collagen production, and improves texture. Concerns? We'll get there quicker together.",
}

export const makeupNotice = {
  hours: 24,
  body: 'Avoid makeup for at least 24 hours so products can absorb fully into the skin.',
}

export const aftercareIntro =
  "After your appointment, follow these to ensure the best results post-treatment. I'll also walk through specifics during your visit."
