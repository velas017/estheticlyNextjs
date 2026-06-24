import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNav from "@/components/marketing/TopNav";
import Footer from "@/components/marketing/Footer";
import GoogleReviewBadge from "@/components/ui/GoogleReviewBadge";
import { contact } from "@/content/contact";
import "./globals.css";

const SITE_URL = "https://estheticlyskincare.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EstheticLY | Skincare & Facials in Charlotte, NC",
  description: "Personalized facials, science-based skincare, and unhurried care in Charlotte, NC. Licensed esthetician offering customized treatments for every skin type.",
  keywords: "esthetician, facial, skincare, Charlotte NC, dermaplaning, microdermabrasion, chemical peel, beauty treatments",
  authors: [{ name: "Amy Ly", url: SITE_URL }],
  creator: "EstheticLY Skincare",
  publisher: "EstheticLY Skincare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "EstheticLY Skincare",
    title: "EstheticLY | Skincare & Facials in Charlotte, NC",
    description: "Personalized, science-based skincare in Charlotte, NC.",
    images: [
      {
        url: "/Images/IMG_6201.jpeg",
        alt: "EstheticLY Skincare — facials in Charlotte, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EstheticLY | Skincare & Facials in Charlotte, NC",
    description: "Personalized, science-based skincare in Charlotte, NC.",
    images: ["/Images/IMG_6201.jpeg"],
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <TopNav />
        <main>{children}</main>
        <Footer />
        <GoogleReviewBadge />
      </body>
    </html>
  );
}
