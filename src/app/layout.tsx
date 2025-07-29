import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: "EstheticLY | Facials and skincare",
  description: "Estheticly Skincare offers expert skincare treatments, premium products, and personalized beauty solutions to enhance your natural glow. Discover radiant skin with our tailored services and tips for all skin types.",
  keywords: "esthetician, facial, skincare, Charlotte NC, dermaplaning, microdermabrasion, beauty treatments",
  authors: [{ name: "Amy Ly", url: "https://estheticlyskincare.com" }],
  creator: "EstheticLY Skincare",
  publisher: "EstheticLY Skincare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://estheticlyskincare.com",
    siteName: "EstheticLY Skincare",
    title: "EstheticLY | Facials and skincare",
    description: "Expert skincare treatments and personalized beauty solutions in Charlotte, NC",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstheticLY | Facials and skincare",
    description: "Expert skincare treatments and personalized beauty solutions in Charlotte, NC",
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
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
