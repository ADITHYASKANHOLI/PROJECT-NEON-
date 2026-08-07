'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Calendar } from 'lucide-react';

interface TimelineProps {
  data: TimelineSection;
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  const visibleMilestones = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="timeline" className="py-28 px-4 sm:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {data.title}
          </h2>
          <p className="text-slate-300 text-base font-light">
            {data.subtitle}
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          {visibleMilestones.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Dot Connector */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-indigo-600 border-4 border-slate-950 shadow-lg shadow-indigo-500/50 group-hover:scale-125 transition-transform" />

              {/* Year Pill (Desktop Left Offset) */}
              <div className="hidden sm:flex absolute -left-36 top-5 items-center gap-1.5 text-xs font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.year}</span>
              </div>

              {/* Milestone Glass Card */}
              <GlassCard hoverEffect className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="sm:hidden text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {item.tag && (
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/15">
                      {item.tag}
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {item.imageUrl && (
                  <div className="mt-4 rounded-xl overflow-hidden aspect-[21/9]">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
