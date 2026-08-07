'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, Sparkles, ChevronDown, Shield, Play } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  if (!data || !data.isVisible) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 25);
    setRotateY(x / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden">
      {/* Ambient Radial Background Glows */}
      <div className="aura-glow-primary top-10 left-1/2 -translate-x-1/2" />
      <div className="aura-glow-secondary top-40 right-10" />

      <div className="max-w-6xl mx-auto text-center z-10 space-y-8">
        {/* Badge */}
        {data.badgeText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold tracking-widest text-indigo-300 border-indigo-500/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{data.badgeText}</span>
          </motion.div>
        )}

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
            {data.headline}{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              {data.highlightText}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed font-light"
        >
          {data.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {data.primaryCtaText && (
            <a href={data.primaryCtaUrl}>
              <GlassButton variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                {data.primaryCtaText}
              </GlassButton>
            </a>
          )}
          {data.secondaryCtaText && (
            <Link href={data.secondaryCtaUrl}>
              <GlassButton variant="secondary" size="lg" icon={<Shield className="w-4 h-4 text-indigo-400" />}>
                {data.secondaryCtaText}
              </GlassButton>
            </Link>
          )}
        </motion.div>

        {/* 3D Mouse Tilt Hero Visual */}
        {data.imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 max-w-4xl mx-auto perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative rounded-3xl p-3 glass-panel border border-white/20 shadow-2xl transition-transform duration-200 ease-out overflow-hidden group"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
                <img
                  src={data.imageUrl}
                  alt={data.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-xl">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Live Preview Engine</p>
                      <p className="text-sm text-slate-200 font-medium">Real-Time CMS Sync Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Down Indicator */}
      {data.showScrollIndicator && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4" />
        </motion.a>
      )}
    </section>
  );
};
