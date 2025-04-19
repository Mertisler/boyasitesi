import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollAnimator from "@/components/ScrollAnimator";
import dynamic from 'next/dynamic';
import "./globals.css";

// Dynamically import components as client components
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const ScrollingText = dynamic(() => import('@/components/ScrollingText'), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "İstanbul'daki Boyacınız | Profesyonel Boya ve Tadilat Hizmetleri",
  description: "İstanbul'da 20 yıllık tecrübemizle ev, ofis ve iş yerlerinizde profesyonel boya ve tadilat hizmetleri sunuyoruz. Ücretsiz keşif ve uygun fiyat garantisi.",
  keywords: "istanbul, istanbul boya ustası, boya, tadilat, inşaat, ev boyama, ofis boyama, profesyonel boya hizmetleri, istanbul tadilat ustası",
  authors: [{ name: "İstanbul'daki Boyacınız" }],
  creator: "İstanbul'daki Boyacınız",
  publisher: "İstanbul'daki Boyacınız",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: "İstanbul'daki Boyacınız | Profesyonel Boya ve Tadilat Hizmetleri",
    description: "İstanbul'da 20 yıllık tecrübemizle ev, ofis ve iş yerlerinizde profesyonel boya ve tadilat hizmetleri sunuyoruz.",
    url: "https://www.istanbuldakiboyaciniz.com",
    siteName: "İstanbul'daki Boyacınız",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification=DfcmrtsUyzEw9vmOclkDZ9SNZ5SgtI0CPsZOobdJWqU", // Google Search Console'dan alacağınız kodu buraya ekleyin
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://www.istanbuldakiboyaciniz.com" />
        <meta name="geo.region" content="TR" />
        <meta name="geo.placename" content="İstanbul" />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <ScrollingText />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
