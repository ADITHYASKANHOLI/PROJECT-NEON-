'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CtaSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  data: CtaSection;
}

export const CTA: React.FC<CTAProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  return (
    <section className="py-28 px-4 sm:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel p-10 sm:p-20 text-center relative overflow-hidden border border-white/20 shadow-2xl bg-slate-950/70"
        >
          {/* Radial Light Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-40 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold tracking-widest text-indigo-300 border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE CMS DEMO READY</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {data.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {data.primaryCtaText && (
                <Link href={data.primaryCtaUrl}>
                  <GlassButton variant="primary" size="lg" icon={<Shield className="w-4 h-4" />}>
                    {data.primaryCtaText}
                  </GlassButton>
                </Link>
              )}
              {data.secondaryCtaText && (
                <a href={data.secondaryCtaUrl}>
                  <GlassButton variant="secondary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    {data.secondaryCtaText}
                  </GlassButton>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
