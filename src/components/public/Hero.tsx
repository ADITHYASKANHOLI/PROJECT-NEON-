'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1BgRef = useRef<HTMLDivElement>(null);
  const layer2GlassRef = useRef<HTMLDivElement>(null);
  const layer4ContentRef = useRef<HTMLImageElement>(null);
  const layer5BadgeRef = useRef<HTMLDivElement>(null);

  if (!data?.isVisible) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!layer2GlassRef.current) return;
    const rect = layer2GlassRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;

    // Weighted physical response limits: rotateX ±3deg, rotateY ±5deg
    const rotateX = -offsetY * 3;
    const rotateY = offsetX * 5;

    // Layer 2: Glass Body 3D Rotation + Floating Z-axis Lift
    layer2GlassRef.current.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(20px) scale3d(1.015, 1.015, 1.015)`;
    layer2GlassRef.current.style.setProperty('--mouse-x', `${x}px`);
    layer2GlassRef.current.style.setProperty('--mouse-y', `${y}px`);
    layer2GlassRef.current.style.setProperty('--mouse-opacity', '1');

    // Layer 1: Environmental Background (-80px Z-depth, 0.25x movement)
    if (layer1BgRef.current) {
      layer1BgRef.current.style.transform = `translate3d(${(offsetX * 14).toFixed(2)}px, ${(offsetY * 14).toFixed(2)}px, -80px)`;
    }

    // Layer 4: Display Content Image (60px Z-depth)
    if (layer4ContentRef.current) {
      layer4ContentRef.current.style.transform = `translate3d(${(offsetX * 10).toFixed(2)}px, ${(offsetY * 10).toFixed(2)}px, 60px)`;
    }

    // Layer 5: Foreground Badge Overlays (90px Z-depth)
    if (layer5BadgeRef.current) {
      layer5BadgeRef.current.style.transform = `translate3d(${(offsetX * 16).toFixed(2)}px, ${(offsetY * 16).toFixed(2)}px, 90px)`;
    }
  };

  const handleMouseLeave = () => {
    if (layer2GlassRef.current) {
      layer2GlassRef.current.style.transform = `perspective(1400px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
      layer2GlassRef.current.style.setProperty('--mouse-opacity', '0');
    }
    if (layer1BgRef.current) {
      layer1BgRef.current.style.transform = `translate3d(0px, 0px, -80px)`;
    }
    if (layer4ContentRef.current) {
      layer4ContentRef.current.style.transform = `translate3d(0px, 0px, 60px)`;
    }
    if (layer5BadgeRef.current) {
      layer5BadgeRef.current.style.transform = `translate3d(0px, 0px, 90px)`;
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden">
      {/* Layer 1: Background Environmental Sapphire Glow (-80px Z-depth) */}
      <div
        ref={layer1BgRef}
        className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: 'translateZ(-80px)' }}
      >
        <div className="neon-aura-cyan -top-20 -left-20 opacity-75" />
        <div className="neon-aura-violet top-1/3 -right-20 opacity-75" />
      </div>

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

          {/* Action CTAs */}
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

          {/* 5-Layer True 3D Spatial Glass Display Object */}
          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-10 max-w-4xl mx-auto"
              style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
            >
              <div
                ref={layer2GlassRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 glass-panel-neon liquid-bubble-container border border-sky-500/40 shadow-2xl transition-all duration-400 ease-out will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow:
                    'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.45), inset 0 -1.5px 3px 0 rgba(0, 0, 0, 0.6), 0 30px 70px -15px rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* Layer 3: Glass Surface Reflection Layer (30px Z-depth) */}
                <div
                  className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(56,189,248,0.2),transparent_65%)] pointer-events-none z-20 opacity-90 transition-opacity"
                  style={{ transform: 'translateZ(30px)' }}
                />

                {/* Layer 4: Display Content Showcase Image (60px Z-depth) */}
                <img
                  ref={layer4ContentRef}
                  src={data.imageUrl}
                  alt="PROJECT NEON WaaS Showcase"
                  className="w-full h-auto max-h-[320px] sm:max-h-[500px] object-cover rounded-xl sm:rounded-2xl relative z-10 transition-transform duration-400 ease-out will-change-transform shadow-xl"
                  style={{
                    transform: 'translateZ(60px)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />

                {/* Layer 5: Floating Spatial Badge Overlay (90px Z-depth) */}
                <div
                  ref={layer5BadgeRef}
                  className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-sky-400/40 shadow-xl transition-transform duration-400 ease-out pointer-events-none"
                  style={{
                    transform: 'translateZ(90px)',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-white font-bold">MANAGED WAAS INFRASTRUCTURE</span>
                </div>
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
