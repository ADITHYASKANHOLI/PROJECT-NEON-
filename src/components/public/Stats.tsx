'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatSection, StatItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';

interface StatsProps {
  data: StatSection;
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  const visibleItems: StatItem[] = (data.items || []).filter((item: StatItem) => item.isVisible);

  return (
    <section id="stats" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
            IMPACT METRICS
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-2">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleItems.map((item: StatItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 sm:p-8 text-center space-y-2 flex flex-col justify-center h-full">
                <div className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-400 tracking-tight">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {item.label}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-normal">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
