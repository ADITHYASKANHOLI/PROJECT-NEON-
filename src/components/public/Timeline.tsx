'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineSection, MilestoneItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Calendar } from 'lucide-react';

interface TimelineProps {
  data: TimelineSection;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  const visibleItems: MilestoneItem[] = (data.items || []).filter((item: MilestoneItem) => item.isVisible);

  return (
    <section id="timeline" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
            EVOLUTION ROADMAP
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-2">
            {data.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
          {visibleItems.map((item: MilestoneItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-start gap-4 sm:gap-8"
            >
              <div className="w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0 z-10 shadow-lg shadow-cyan-500/50">
                <Calendar className="w-3.5 h-3.5" />
              </div>

              <GlassCard className="flex-1 p-5 sm:p-7 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">{item.year}</span>
                  {item.tag && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
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
