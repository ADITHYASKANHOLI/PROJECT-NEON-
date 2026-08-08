'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { BiocoreLogo } from '@/components/ui/BiocoreLogo';
import { Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';

const FOUNDER_LINKEDIN_URL =
  'https://www.linkedin.com/in/adithyaskanholi?utm_source=share_via&utm_content=profile&utm_medium=member_ios';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="biocore-aura-green top-1/2 left-1/3 -translate-y-1/2 opacity-70" />
      <div className="biocore-aura-orange bottom-10 right-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>INSTITUTIONAL LEADERSHIP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight"
          >
            FOUNDERS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed"
          >
            Leadership guiding Biocore Research LLP in translational deep-science research, engineering, and commercial impact.
          </motion.p>
        </div>

        {/* Founder Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="glass-panel-biocore p-6 sm:p-10 md:p-12 border-emerald-500/40 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Founder Portrait Column */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-950">
                  <img
                    src="/founder-aditya-kanholi.jpg"
                    alt="Aditya S Kanholi, Co-Founder of Biocore Research LLP"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Glass Corner Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Founder Information & LinkedIn Action Column */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Biocore Research LLP</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    Aditya S Kanholi
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-orange-400">
                    Co-Founder, Biocore Research LLP
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-4">
                  <div className="flex justify-center md:justify-start">
                    <BiocoreLogo size="sm" showTagline={true} />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Co-Founder of Biocore Research LLP, advancing scientific research, precision engineering, analytical testing infrastructure, and technology transfer.
                  </p>
                </div>

                {/* LinkedIn Connection CTA Button */}
                <div className="pt-2">
                  <a
                    href={FOUNDER_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Aditya S Kanholi on LinkedIn"
                    className="inline-block w-full sm:w-auto"
                  >
                    <GlassButton
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto min-h-[48px] justify-center gap-2.5 text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400"
                      icon={<LinkedInIcon className="w-4 h-4 text-white" />}
                    >
                      <span>Connect on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-300 ml-1" />
                    </GlassButton>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
