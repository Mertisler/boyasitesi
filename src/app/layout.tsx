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
  title: "Profesyonel Boya Hizmetleri",
  description: "Evinizi ve iş yerinizi uzman ekibimizle yeniliyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <ScrollingText />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
