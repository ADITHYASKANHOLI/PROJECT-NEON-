'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CtaSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  data?: CtaSection;
}

export const CTA: React.FC<CTAProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const title = data?.title || 'DEPLOY YOUR DIGITAL INFRASTRUCTURE.';
  const subtitle =
    data?.subtitle ||
    'Lease a high-performance digital advertising platform with real-time remote Supabase CMS control today.';
  const primaryText = data?.primaryCtaText || 'Deploy Your Digital Platform';
  const primaryUrl = data?.primaryCtaUrl || '/admin';
  const secondaryText = data?.secondaryCtaText || 'Schedule Platform Consultation';
  const secondaryUrl = data?.secondaryCtaUrl || '#trust';

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel-neon p-8 sm:p-12 md:p-16 text-center space-y-6 sm:space-y-8 relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-950 border border-sky-500/40 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-sky-500/30 text-xs font-semibold text-sky-300 uppercase">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>EXECUTIVE DEPLOYMENT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto uppercase">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-2">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryUrl} className="w-full sm:w-auto px-4 sm:px-0">
              <GlassButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-bold shadow-lg shadow-sky-500/30"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryText}
              </GlassButton>
            </Link>

            <a href={secondaryUrl} className="w-full sm:w-auto px-4 sm:px-0">
              <GlassButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-semibold"
                icon={<Building2 className="w-4 h-4 text-sky-400" />}
              >
                {secondaryText}
              </GlassButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
