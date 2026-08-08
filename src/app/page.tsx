import React from 'react';
import type { Metadata } from 'next';
import { fetchPublishedContentFromDB } from '@/lib/supabase/service';
import { Navbar } from '@/components/public/Navbar';
import { Hero } from '@/components/public/Hero';
import { About } from '@/components/public/About';
import { Features } from '@/components/public/Features';
import { Solutions } from '@/components/public/Solutions';
import { CommandCenter } from '@/components/public/CommandCenter';
import { TrustSection } from '@/components/public/TrustSection';
import { DeploymentWorkflow } from '@/components/public/DeploymentWorkflow';
import { Founders } from '@/components/public/Founders';
import { Stats } from '@/components/public/Stats';
import { Gallery } from '@/components/public/Gallery';
import { Timeline } from '@/components/public/Timeline';
import { Testimonials } from '@/components/public/Testimonials';
import { CTA } from '@/components/public/CTA';
import { Footer } from '@/components/public/Footer';

export const revalidate = 0; // Dynamic rendering for instant live publish updates

const PRODUCTION_URL = 'https://project-neon-three-sage.vercel.app';

export async function generateMetadata(): Promise<Metadata> {
  const content = await fetchPublishedContentFromDB();
  const siteTitle =
    content.settings?.siteTitle || 'BIOCORE | Biocore Research LLP — Translational Deep-Science';
  const siteDescription =
    content.settings?.siteDescription ||
    'Biocore Research LLP (BIOCORE) is a translational deep-science company connecting biotechnology, life sciences, advanced engineering, scientific instrumentation, laboratory testing, sustainable technology, and commercialization.';

  return {
    title: siteTitle,
    description: siteDescription,
    alternates: {
      canonical: PRODUCTION_URL,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: PRODUCTION_URL,
      siteName: 'BIOCORE',
      images: [
        {
          url: `${PRODUCTION_URL}/biocore-logo.png`,
          width: 1200,
          height: 630,
          alt: 'BIOCORE — Biocore Research LLP',
        },
      ],
    },
    twitter: {
      title: siteTitle,
      description: siteDescription,
      images: [`${PRODUCTION_URL}/biocore-logo.png`],
    },
  };
}

export default async function HomePage() {
  const content = await fetchPublishedContentFromDB();

  return (
    <main className="min-h-screen relative bg-[#050a07] text-slate-100 overflow-x-hidden">
      <Navbar items={content.navigation || []} siteTitle={content.settings?.siteTitle || 'BIOCORE'} />
      <Hero data={content.hero} />
      <About data={content.about} />
      <Features data={content.features} />
      <CommandCenter />
      <TrustSection />
      <Solutions />
      <DeploymentWorkflow />
      <Founders />
      <Stats data={content.stats} />
      <Gallery data={content.gallery} />
      <Timeline data={content.timeline} />
      <Testimonials data={content.testimonials} />
      <CTA data={content.cta} />
      <Footer data={content.footer} />
    </main>
  );
}
