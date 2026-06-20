import type { MetadataRoute } from 'next'

const SITE_URL = 'https://estheticlyskincare.com'

const routes = [
  '',
  '/about',
  '/prep',
  '/aftercare',
  '/learn-more',
  '/contact',
  '/gift-cards',
  '/book-now',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
