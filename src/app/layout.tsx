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
    default: "PROJECT NEON — Managed Website-as-a-Service Platform",
    template: "%s | PROJECT NEON",
  },
  description:
    "PROJECT NEON is a high-performance Website-as-a-Service (WaaS) infrastructure platform providing companies with managed digital advertising platforms.",
  keywords: [
    "PROJECT NEON",
    "Website-as-a-Service",
    "WaaS Platform",
    "Managed Web Infrastructure",
    "Digital Advertising Platform",
    "Next.js 16",
    "Supabase",
  ],
  authors: [{ name: "PROJECT NEON Team" }],
  creator: "PROJECT NEON",
  publisher: "PROJECT NEON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PROJECT NEON — Managed Website-as-a-Service Platform",
    description:
      "PROJECT NEON is a high-performance Website-as-a-Service (WaaS) infrastructure platform providing companies with managed digital advertising platforms.",
    url: "https://project-neon-three-sage.vercel.app",
    siteName: "PROJECT NEON",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "PROJECT NEON Visual Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJECT NEON — Managed Website-as-a-Service Platform",
    description:
      "PROJECT NEON is a high-performance Website-as-a-Service (WaaS) infrastructure platform providing companies with managed digital advertising platforms.",
    creator: "@projectneon",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
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
    "@type": "WebSite",
    name: "PROJECT NEON",
    url: "https://project-neon-three-sage.vercel.app",
    description:
      "PROJECT NEON is a high-performance Website-as-a-Service (WaaS) infrastructure platform providing companies with managed digital advertising platforms.",
    publisher: {
      "@type": "Organization",
      name: "PROJECT NEON",
      logo: "https://project-neon-three-sage.vercel.app/favicon.ico",
    },
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
