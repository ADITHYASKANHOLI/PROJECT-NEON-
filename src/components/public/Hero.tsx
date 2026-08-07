'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  if (!data?.isVisible) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max rotation limits: rotateX ±4deg, rotateY ±6deg
    const rotateX = -((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 6;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    containerRef.current.style.setProperty('--mouse-opacity', '1');
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    containerRef.current.style.setProperty('--mouse-opacity', '0');
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Executive Sapphire Glow Diffusions */}
      <div className="neon-aura-cyan -top-20 -left-20 opacity-75" />
      <div className="neon-aura-violet top-1/3 -right-20 opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Badge Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-sky-500/30 text-[11px] sm:text-xs font-semibold text-sky-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{data.badgeText}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]"
          >
            {data.headline}{' '}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-300 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
              {data.highlightText}
            </span>
          </motion.h1>

          {/* Subtitle Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto px-2"
          >
            {data.subtitle}
          </motion.p>

          {/* Touch-Friendly Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a href={data.primaryCtaUrl} className="w-full sm:w-auto">
              <GlassButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-bold shadow-lg shadow-sky-500/25"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {data.primaryCtaText}
              </GlassButton>
            </a>
            <a href={data.secondaryCtaUrl} className="w-full sm:w-auto">
              <GlassButton
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-semibold"
              >
                {data.secondaryCtaText}
              </GlassButton>
            </a>
          </motion.div>

          {/* Interactive Spatial 3D Tilt Display Showcase Container */}
          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-10 perspective-1000"
            >
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 glass-panel-neon liquid-bubble-container border border-sky-500/30 max-w-4xl mx-auto shadow-2xl transition-transform duration-400 ease-out will-change-transform"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Internal Sapphire Light Shift Overlay */}
                <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(56,189,248,0.15),transparent_70%)] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <img
                  src={data.imageUrl}
                  alt="PROJECT NEON WaaS Showcase"
                  className="w-full h-auto max-h-[320px] sm:max-h-[500px] object-cover rounded-xl sm:rounded-2xl relative z-10"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {data.showScrollIndicator && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce hidden sm:block">
          <ChevronDown className="w-5 h-5 text-sky-400" />
        </div>
      )}
    </section>
  );
};
