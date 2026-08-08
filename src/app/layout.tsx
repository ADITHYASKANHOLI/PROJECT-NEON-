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
    default: "BIOCORE — Advancing Science, Enriching Life | Biocore Research LLP",
    template: "%s | BIOCORE",
  },
  description:
    "BIOCORE (Biocore Research LLP) — Advancing Science, Enriching Life. A translational deep-science company connecting biological research, laboratory testing, precision instrumentation, sustainable technology, and commercialization.",
  keywords: [
    "BIOCORE",
    "Biocore Research LLP",
    "Advancing Science Enriching Life",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BIOCORE — Advancing Science, Enriching Life | Biocore Research LLP",
    description:
      "BIOCORE (Biocore Research LLP) — Advancing Science, Enriching Life. A translational deep-science company connecting biological research, laboratory testing, precision instrumentation, sustainable technology, and commercialization.",
    url: "https://project-neon-three-sage.vercel.app",
    siteName: "BIOCORE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/biocore-logo.png",
        width: 1200,
        height: 630,
        alt: "BIOCORE — Advancing Science, Enriching Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOCORE — Advancing Science, Enriching Life | Biocore Research LLP",
    description:
      "BIOCORE (Biocore Research LLP) — Advancing Science, Enriching Life. A translational deep-science company connecting biological research, laboratory testing, precision instrumentation, sustainable technology, and commercialization.",
    creator: "@biocoreresearch",
    images: ["/biocore-logo.png"],
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
    slogan: "Advancing Science, Enriching Life",
    url: "https://project-neon-three-sage.vercel.app",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biological science, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    logo: "https://project-neon-three-sage.vercel.app/biocore-logo.png",
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
      <body className="min-h-full flex flex-col bg-[#050a07] text-slate-100">
        <LiquidGlassFilter />
        {children}
      </body>
    </html>
  );
}
