import type { Metadata } from 'next'

export const SITE_NAME = 'EstheticLY Skincare'

export const shareImage = {
  url: '/Images/IMG_6201.jpeg',
  alt: 'EstheticLY Skincare — facials in Charlotte, NC',
}

export interface PageMetadataInput {
  title: string
  description: string
  /** Route path, e.g. '/about'. Resolved against `metadataBase` in the root layout. */
  path: string
  /** Shorter description for link previews; defaults to `description`. */
  shareDescription?: string
}

/**
 * Per-route metadata. Next.js merges metadata shallowly, so a canonical URL
 * or `openGraph` block set once in the root layout is inherited verbatim by
 * every page — each route would then claim to be the homepage. Every page
 * exports `pageMetadata(...)` so it gets its own canonical, og:url, and
 * share title/description.
 */
export function pageMetadata({
  title,
  description,
  path,
  shareDescription = description,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
      title,
      description: shareDescription,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: shareDescription,
      images: [shareImage.url],
    },
  }
}
