'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CtaSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface CTAProps {
  data?: CtaSection;
}

export const CTA: React.FC<CTAProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const title = data?.title || 'PARTNER WITH BIOCORE RESEARCH LLP.';
  const subtitle =
    data?.subtitle ||
    'Connect your research initiatives, industrial bio-applications, testing needs, or government projects with our translational deep-science infrastructure.';
  const primaryText = data?.primaryCtaText || 'Initiate Research Collaboration';
  const primaryUrl = data?.primaryCtaUrl || '#capabilities';
  const secondaryText = data?.secondaryCtaText || 'Explore Technology Transfer';
  const secondaryUrl = data?.secondaryCtaUrl || '#transfer-lifecycle';

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel-neon p-8 sm:p-12 md:p-16 text-center space-y-6 sm:space-y-8 relative overflow-hidden bg-gradient-to-r from-slate-950 via-teal-950/60 to-slate-950 border border-teal-500/40 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-teal-500/30 text-xs font-semibold text-teal-300 uppercase">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>STRATEGIC COLLABORATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto uppercase">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto px-2">
            {subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={primaryUrl} className="w-full sm:w-auto px-4 sm:px-0">
              <GlassButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-bold shadow-lg shadow-teal-500/30"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {primaryText}
              </GlassButton>
            </a>

            <a href={secondaryUrl} className="w-full sm:w-auto px-4 sm:px-0">
              <GlassButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-semibold"
                icon={<Building2 className="w-4 h-4 text-teal-400" />}
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
