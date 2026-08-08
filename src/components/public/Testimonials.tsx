'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialSection, TestimonialItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Quote, Star } from 'lucide-react';

interface TestimonialsProps {
  data: TestimonialSection;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  const visibleItems: TestimonialItem[] = (data.items || []).filter((item: TestimonialItem) => item.isVisible);

  return (
    <section id="testimonials" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
            PARTNER VOICES
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed px-2">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-emerald-400/40" />
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-emerald-500/30"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400">
                      {item.role} • <span className="text-emerald-400 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
