'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Award, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  data: AboutSection;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  return (
    <section id="about" className="py-28 px-4 sm:px-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {data.badge && (
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
                {data.badge}
              </span>
            )}

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              {data.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {data.description}
            </p>

            {data.secondaryDescription && (
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {data.secondaryDescription}
              </p>
            )}

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Next.js 14 App Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Split-Screen Live CMS</span>
              </div>
            </div>
          </motion.div>

          {/* Right Imagery + Floating Metric Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border border-white/15 shadow-2xl">
              <img
                src={data.imageUrl}
                alt={data.title}
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 to-transparent pointer-events-none" />
            </div>

            {/* Floating Metric Card */}
            {data.statValue && (
              <GlassCard className="absolute -bottom-6 -left-6 max-w-xs shadow-2xl bg-slate-900/90 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold text-white">{data.statValue}</h4>
                    <p className="text-xs text-slate-300 font-medium">{data.statLabel}</p>
                  </div>
                </div>
              </GlassCard>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
