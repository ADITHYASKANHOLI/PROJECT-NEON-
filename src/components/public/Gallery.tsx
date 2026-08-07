'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GallerySection, GalleryItem } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { ExternalLink, X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  data: GallerySection;
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  if (!data || !data.isVisible) return null;

  const visibleItems = data.items
    .filter((item) => item.isVisible)
    .sort((a, b) => a.order - b.order);

  const filteredItems =
    activeCategory === 'All'
      ? visibleItems
      : visibleItems.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-28 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {data.title}
            </h2>
            <p className="text-slate-300 text-base font-light">
              {data.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          {data.categories && data.categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {data.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                    activeCategory.toLowerCase() === cat.toLowerCase()
                      ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-md shadow-indigo-600/30'
                      : 'bg-white/5 text-slate-300 hover:text-white border-white/10 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <GlassCard
                  onClick={() => setSelectedItem(item)}
                  hoverEffect
                  className="p-3 group cursor-pointer overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Glass Overlay Details */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white">
                          {item.category}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Zoom Viewer */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full glass-panel rounded-3xl p-6 border border-white/20 space-y-6 relative max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-indigo-400">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed font-light">
                  {selectedItem.description}
                </p>

                {selectedItem.linkUrl && (
                  <div className="pt-2">
                    <a
                      href={selectedItem.linkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
                    >
                      <span>Visit Live Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
