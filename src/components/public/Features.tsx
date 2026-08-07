'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { DynamicIcon } from '@/components/ui/IconPicker';
import { ArrowUpRight } from 'lucide-react';

interface FeaturesProps {
  data: FeatureSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  const visibleItems = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="features" className="py-28 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {data.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect glow className="h-full flex flex-col justify-between group">
                <div className="space-y-4">
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                      <DynamicIcon name={item.iconName} className="w-6 h-6" />
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-indigo-300">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Optional Link */}
                {item.linkText && (
                  <div className="pt-6 flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <span>{item.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
