import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LiquidGlassFilter } from "@/components/ui/LiquidGlassFilter";
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
  metadataBase: new URL("https://project-neon-three-sage.vercel.app"),
  title: {
    default: "BIOCORE — Biocore Research LLP Translational Deep-Science Platform",
    template: "%s | BIOCORE",
  },
  description:
    "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biological science, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
  keywords: [
    "BIOCORE",
    "Biocore Research LLP",
    "Life Sciences",
    "Biotechnology",
    "Bioengineering",
    "Biosensors",
    "Microchips",
    "Scientific Instrumentation",
    "Laboratory Testing",
    "Analytical Services",
    "Sustainable Technology",
    "Zero-Waste Systems",
    "Biofuels",
    "Agrochemicals",
    "Technology Transfer",
  ],
  authors: [{ name: "Biocore Research LLP" }],
  creator: "Biocore Research LLP",
  publisher: "Biocore Research LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BIOCORE — Biocore Research LLP Translational Deep-Science Platform",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biological science, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    url: "https://project-neon-three-sage.vercel.app",
    siteName: "BIOCORE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Biocore Research LLP Primary Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOCORE — Biocore Research LLP Translational Deep-Science Platform",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biological science, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    creator: "@biocoreresearch",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    ],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Biocore Research LLP",
    alternateName: "BIOCORE",
    url: "https://project-neon-three-sage.vercel.app",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biological science, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    logo: "https://project-neon-three-sage.vercel.app/favicon.ico",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#05070a] text-slate-100">
        <LiquidGlassFilter />
        {children}
      </body>
    </html>
  );
}
