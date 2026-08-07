'use client';

import React from 'react';
import { SiteContent } from '@/lib/types';
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
import { Laptop, Tablet, Smartphone, Sparkles } from 'lucide-react';

interface LivePreviewProps {
  draft: SiteContent;
  device: 'desktop' | 'tablet' | 'mobile';
}

export const LivePreview: React.FC<LivePreviewProps> = ({ draft, device }) => {
  const getDeviceWidthClass = () => {
    switch (device) {
      case 'mobile':
        return 'max-w-[395px] h-[720px] rounded-[40px] border-[10px] border-slate-800 shadow-2xl';
      case 'tablet':
        return 'max-w-[780px] h-[800px] rounded-[28px] border-[8px] border-slate-800 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-full rounded-2xl border border-white/15 shadow-2xl';
    }
  };

  return (
    <div className="h-full flex flex-col glass-panel rounded-3xl overflow-hidden border border-white/15 bg-slate-950/60 p-4">
      {/* Live Preview Header Pill */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-4 bg-white/5 rounded-xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>LIVE DRAFT PREVIEW (REAL-TIME SYNC)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          {device === 'desktop' && <Laptop className="w-4 h-4" />}
          {device === 'tablet' && <Tablet className="w-4 h-4" />}
          {device === 'mobile' && <Smartphone className="w-4 h-4" />}
          <span className="capitalize">{device} Viewport</span>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 flex justify-center items-center overflow-hidden bg-slate-900/80 rounded-2xl p-2">
        <div
          className={`w-full overflow-y-auto overflow-x-hidden bg-[#07090e] transition-all duration-300 relative ${getDeviceWidthClass()}`}
        >
          {draft ? (
            <div className="w-full min-h-full">
              <Navbar items={draft.navigation || []} siteTitle={draft.settings?.siteTitle} />
              <Hero data={draft.hero} />
              <About data={draft.about} />
              <Features data={draft.features} />
              <Stats data={draft.stats} />
              <Gallery data={draft.gallery} />
              <Timeline data={draft.timeline} />
              <Testimonials data={draft.testimonials} />
              <CTA data={draft.cta} />
              <Footer data={draft.footer} />
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400">Loading Preview...</div>
          )}
        </div>
      </div>
    </div>
  );
};
