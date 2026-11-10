import type { Metadata } from "next";
import TopNav from "@/components/marketing/TopNav";
import Footer from "@/components/marketing/Footer";
import MobileBookBar from "@/components/marketing/MobileBookBar";
import GoogleReviewBadge from "@/components/ui/GoogleReviewBadge";
import { contact } from "@/content/contact";
import { SITE_NAME } from "@/lib/pageMetadata";
import "./globals.css";

const SITE_URL = "https://estheticlyskincare.com";

// Site-wide defaults. Anything route-specific (title, description, canonical,
// Open Graph, Twitter) is set per page with pageMetadata() — see
// src/lib/pageMetadata.ts for why it must not live here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EstheticLY | Skincare & Facials in Charlotte, NC",
  description: "Personalized facials, science-based skincare, and unhurried care in Charlotte, NC. Licensed esthetician offering customized treatments for every skin type.",
  keywords: "esthetician, facial, skincare, Charlotte NC, dermaplaning, microdermabrasion, chemical peel, beauty treatments",
  authors: [{ name: "Amy Ly", url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "EstheticLY Skincare",
  description:
    "Personalized facials and science-based skincare by a licensed esthetician in Charlotte, NC.",
  image: `${SITE_URL}/Images/IMG_6201.jpeg`,
  url: SITE_URL,
  telephone: contact.phoneTel,
  email: contact.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLine1,
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28227",
    addressCountry: "US",
  },
  // Keep in sync with `hours` in src/content/contact.ts
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday"],
      opens: "10:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  sameAs: [contact.socials.instagram.url, contact.socials.facebook.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a href="#main-content" className="skipLink">
          Skip to main content
        </a>
        <TopNav />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBookBar />
        <GoogleReviewBadge />
      </body>
    </html>
  );
}
