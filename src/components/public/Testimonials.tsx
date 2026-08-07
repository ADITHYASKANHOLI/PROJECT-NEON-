'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  data: TestimonialSection;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  const visibleTestimonials = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="testimonials" className="py-28 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {data.title}
          </h2>
          <p className="text-slate-300 text-base font-light">
            {data.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full flex flex-col justify-between space-y-6 relative group">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-indigo-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/40 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.role} • <span className="text-indigo-400">{item.company}</span>
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
