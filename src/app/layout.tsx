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

const PRODUCTION_URL = "https://project-neon-three-sage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_URL),
  title: {
    default: "BIOCORE | Biocore Research LLP — Translational Deep-Science",
    template: "%s | BIOCORE",
  },
  description:
    "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biotechnology, life sciences, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
  keywords: [
    "BIOCORE",
    "Biocore",
    "Biocore Research LLP",
    "Biocore Research",
    "Biocore biotechnology",
    "Biocore life sciences",
    "Advancing Science Enriching Life",
    "Biotechnology",
    "Life Sciences",
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
    "Commercialization",
  ],
  authors: [{ name: "Biocore Research LLP", url: PRODUCTION_URL }],
  creator: "Biocore Research LLP",
  publisher: "Biocore Research LLP",
  alternates: {
    canonical: PRODUCTION_URL,
  },
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
    title: "BIOCORE | Biocore Research LLP — Translational Deep-Science",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biotechnology, life sciences, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    url: PRODUCTION_URL,
    siteName: "BIOCORE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${PRODUCTION_URL}/biocore-logo.png`,
        width: 1200,
        height: 630,
        alt: "BIOCORE — Biocore Research LLP (Advancing Science, Enriching Life)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIOCORE | Biocore Research LLP — Translational Deep-Science",
    description:
      "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biotechnology, life sciences, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
    creator: "@biocoreresearch",
    images: [`${PRODUCTION_URL}/biocore-logo.png`],
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
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${PRODUCTION_URL}/#organization`,
        name: "Biocore Research LLP",
        legalName: "Biocore Research LLP",
        alternateName: ["BIOCORE", "Biocore Research", "Biocore Biotechnology", "Biocore Life Sciences"],
        slogan: "Advancing Science, Enriching Life",
        url: PRODUCTION_URL,
        logo: `${PRODUCTION_URL}/biocore-logo.png`,
        image: `${PRODUCTION_URL}/biocore-logo.png`,
        description:
          "Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biotechnology, life sciences, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.",
        knowsAbout: [
          "Biotechnology",
          "Life Sciences",
          "Bioengineering",
          "Biosensors",
          "Microchips",
          "Scientific Instrumentation",
          "Laboratory Testing",
          "Analytical Services",
          "Sustainable Technology",
          "Technology Transfer",
          "Commercialization"
        ],
        founder: {
          "@type": "Person",
          name: "Aditya S Kanholi",
          jobTitle: "Co-Founder",
          worksFor: {
            "@type": "Organization",
            name: "Biocore Research LLP"
          },
          sameAs: [
            "https://www.linkedin.com/in/adithyaskanholi?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${PRODUCTION_URL}/#website`,
        url: PRODUCTION_URL,
        name: "BIOCORE",
        alternateName: "Biocore Research LLP",
        description: "Official Website of Biocore Research LLP — Translational Deep-Science Company",
        publisher: {
          "@id": `${PRODUCTION_URL}/#organization`
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050a07] text-slate-100">
        <LiquidGlassFilter />
        {children}
      </body>
    </html>
  );
}
