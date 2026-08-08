'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GallerySection, GalleryItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';

interface GalleryProps {
  data: GallerySection;
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  const visibleItems: GalleryItem[] = (data.items || []).filter((item: GalleryItem) => item.isVisible);

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
            SHOWCASE VAULT
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-2">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item: GalleryItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="group overflow-hidden p-3.5 sm:p-4 space-y-4">
                <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-white/10">
                    {item.category}
                  </span>
                </div>
                <div className="px-1 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
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
