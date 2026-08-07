'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatSection } from '@/lib/types';

interface StatsProps {
  data: StatSection;
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  const visibleStats = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="stats" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-white/15 relative overflow-hidden bg-gradient-to-b from-white/5 to-white/0">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {data.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light">
              {data.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {visibleStats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center pt-6 lg:pt-0 px-4 space-y-2"
              >
                <div className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs text-slate-400 leading-normal">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
