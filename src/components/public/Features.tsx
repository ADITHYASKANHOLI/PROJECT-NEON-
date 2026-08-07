'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureSection, FeatureItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { DynamicIcon } from '@/components/ui/IconPicker';

interface FeaturesProps {
  data: FeatureSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  const visibleItems: FeatureItem[] = (data.items || []).filter((item: FeatureItem) => item.isVisible);

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block">
            CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-2">
            {data.subtitle}
          </p>
        </div>

        {/* Spacious Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item: FeatureItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
