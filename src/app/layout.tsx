import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopNav from "@/components/marketing/TopNav";
import Footer from "@/components/marketing/Footer";
import GoogleReviewBadge from "@/components/ui/GoogleReviewBadge";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EstheticLY | Skincare & Facials in Charlotte, NC",
  description: "Personalized facials, science-based skincare, and unhurried care in Charlotte, NC. Licensed esthetician offering customized treatments for every skin type.",
  keywords: "esthetician, facial, skincare, Charlotte NC, dermaplaning, microdermabrasion, chemical peel, beauty treatments",
  authors: [{ name: "Amy Ly", url: "https://estheticlyskincare.com" }],
  creator: "EstheticLY Skincare",
  publisher: "EstheticLY Skincare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://estheticlyskincare.com",
    siteName: "EstheticLY Skincare",
    title: "EstheticLY | Skincare & Facials in Charlotte, NC",
    description: "Personalized, science-based skincare in Charlotte, NC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstheticLY | Skincare & Facials in Charlotte, NC",
    description: "Personalized, science-based skincare in Charlotte, NC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopNav />
        <main>{children}</main>
        <Footer />
        <GoogleReviewBadge />
      </body>
    </html>
  );
}
