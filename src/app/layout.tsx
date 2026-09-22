import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Cursor from "@/components/fx/Cursor";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Preloader from "@/components/layout/Preloader";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://odoocrafts.com"),
  title: {
    default: "Odoocrafts | Official Odoo Partner & Implementation Experts",
    template: "%s | Odoocrafts",
  },
  description:
    "Odoocrafts is a leading Odoo implementation partner. We build, customize, and automate ERP systems, CRM, and bespoke software solutions for global businesses.",
  keywords: [
    "Odoo",
    "Odoo Partner",
    "Odoo Implementation",
    "ERP",
    "CRM",
    "Business Automation",
    "Custom Software Development",
  ],
  openGraph: {
    title: "Odoocrafts | Official Odoo Partner",
    description: "Expert Odoo implementation, customization, and automation services.",
    url: "https://odoocrafts.com",
    siteName: "Odoocrafts",
    images: [{ url: "/social-share.png", width: 1200, height: 630, alt: "Odoocrafts - Business Systems" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoocrafts | Official Odoo Partner",
    description: "Expert Odoo implementation, customization, and automation services.",
    images: ["/social-share.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07060b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ink text-cream antialiased">
        <Preloader />
        <Cursor />
        <div className="grain" aria-hidden />
        <Nav />
        <SmoothScrollProvider>
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScrollProvider>
        <FloatingActions />
      </body>
    </html>
  );
}
