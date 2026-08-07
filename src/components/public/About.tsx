'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutSection } from '@/lib/types';
import { ShieldCheck, Zap } from 'lucide-react';

interface AboutProps {
  data: AboutSection;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
                {data.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                {data.title}
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              {data.description}
            </p>

            {data.secondaryDescription && (
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {data.secondaryDescription}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel border border-white/10">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Supabase Engine</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl glass-panel border border-white/10">
                <Zap className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Real-Time CMS Sync</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image & Stat Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 glass-panel-neon overflow-hidden border border-cyan-500/30 shadow-2xl">
              <img
                src={data.imageUrl}
                alt="About PROJECT NEON"
                className="w-full h-auto max-h-[360px] sm:max-h-[460px] object-cover rounded-xl sm:rounded-2xl"
              />
            </div>

            {/* Stat Floating Badge */}
            {data.statValue && (
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass-panel rounded-2xl p-4 sm:p-6 border border-cyan-500/40 shadow-2xl bg-slate-950/90 backdrop-blur-2xl">
                <div className="text-2xl sm:text-4xl font-black text-cyan-400">{data.statValue}</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider mt-0.5">
                  {data.statLabel}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
