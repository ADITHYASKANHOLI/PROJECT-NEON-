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
import { Laptop, Tablet, Smartphone, Sparkles, X } from 'lucide-react';

interface LivePreviewProps {
  draft: SiteContent;
  device: 'desktop' | 'tablet' | 'mobile';
  onClosePreview?: () => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ draft, device, onClosePreview }) => {
  const getDeviceWidthClass = () => {
    switch (device) {
      case 'mobile':
        return 'max-w-[375px] h-[680px] rounded-[36px] border-[8px] border-slate-800 shadow-2xl';
      case 'tablet':
        return 'max-w-[720px] h-[760px] rounded-[24px] border-[6px] border-slate-800 shadow-2xl';
      case 'desktop':
      default:
        return 'w-full h-full rounded-2xl border border-white/15 shadow-2xl';
    }
  };

  return (
    <div className="h-full flex flex-col glass-panel rounded-3xl overflow-hidden border border-white/15 bg-slate-950/70 p-4 isolate z-0 relative">
      {/* Live Preview Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 mb-3 bg-white/5 rounded-xl shrink-0">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>LIVE DRAFT PREVIEW</span>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            REAL-TIME SYNC
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            {device === 'desktop' && <Laptop className="w-4 h-4 text-slate-300" />}
            {device === 'tablet' && <Tablet className="w-4 h-4 text-slate-300" />}
            {device === 'mobile' && <Smartphone className="w-4 h-4 text-slate-300" />}
            <span className="capitalize">{device} Viewport</span>
          </div>

          {onClosePreview && (
            <button
              onClick={onClosePreview}
              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-1 transition-colors cursor-pointer"
              title="Close Live Preview and return to Editor"
            >
              <X className="w-3.5 h-3.5" />
              <span>Exit Preview</span>
            </button>
          )}
        </div>
      </div>

      {/* Frame Container with Containing Block Isolating Fixed Positioning */}
      <div className="flex-1 flex justify-center items-center overflow-hidden bg-slate-900/90 rounded-2xl p-2 relative isolate z-0">
        <div
          className={`w-full overflow-y-auto overflow-x-hidden bg-[#06080e] transition-all duration-300 relative custom-scrollbar isolate z-0 ${getDeviceWidthClass()}`}
          style={{ transform: 'translate3d(0, 0, 0)', contain: 'layout paint' }}
        >
          {draft ? (
            <div className="w-full min-h-full">
              <Navbar items={draft.navigation || []} siteTitle={draft.settings?.siteTitle} isPreviewMode={true} />
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
            <div className="p-8 text-center text-slate-400 text-sm font-medium">Loading Preview...</div>
          )}
        </div>
      </div>
    </div>
  );
};
