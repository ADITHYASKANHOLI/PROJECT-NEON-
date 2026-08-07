import React from 'react';
import { fetchPublishedContentFromDB } from '@/lib/supabase/service';
import { Navbar } from '@/components/public/Navbar';
import { Hero } from '@/components/public/Hero';
import { About } from '@/components/public/About';
import { Features } from '@/components/public/Features';
import { Stats } from '@/components/public/Stats';
import { Gallery } from '@/components/public/Gallery';
import { Timeline } from '@/components/public/Timeline';
import { Testimonials } from '@/components/public/Testimonials';
import { CTA } from '@/components/public/CTA';
import { Footer } from '@/components/public/Footer';

export const revalidate = 0; // Dynamic rendering for instant live publish updates

export default async function HomePage() {
  const content = await fetchPublishedContentFromDB();

  return (
    <main className="min-h-screen relative bg-[#06080e] text-slate-100 overflow-x-hidden">
      <Navbar items={content.navigation || []} siteTitle={content.settings?.siteTitle || 'PROJECT NEON'} />
      <Hero data={content.hero} />
      <About data={content.about} />
      <Features data={content.features} />
      <Stats data={content.stats} />
      <Gallery data={content.gallery} />
      <Timeline data={content.timeline} />
      <Testimonials data={content.testimonials} />
      <CTA data={content.cta} />
      <Footer data={content.footer} />
    </main>
  );
}
