'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  data: HeroSection;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1BgRef = useRef<HTMLDivElement>(null);
  const masterGlassRef = useRef<HTMLDivElement>(null);
  const fresnelLayerRef = useRef<HTMLDivElement>(null);
  const layer4ContentRef = useRef<HTMLImageElement>(null);
  const layer5BadgeRef = useRef<HTMLDivElement>(null);

  // Cinematic Optical Realism Physics State (Zero React re-renders)
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const animFrameId = useRef<number | null>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const updatePhysics = () => {
      const lerpFactor = 0.065;
      currentX.current += (targetX.current - currentX.current) * lerpFactor;
      currentY.current += (targetY.current - currentY.current) * lerpFactor;

      const rotX = currentX.current;
      const rotY = currentY.current;
      const tiltMagnitude = Math.abs(rotX) + Math.abs(rotY);

      // Master Glass Container 3D Rotation + Floating Suspended Shadow
      if (masterGlassRef.current) {
        const shadowX = (-rotY * 3.5).toFixed(2);
        const shadowY = (rotX * 3.5 + 28).toFixed(2);
        const shadowBlur = (65 + tiltMagnitude * 3).toFixed(1);

        masterGlassRef.current.style.transform = `perspective(1400px) rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg) translateZ(16px) scale3d(1.012, 1.012, 1.012)`;
        masterGlassRef.current.style.boxShadow = `
          inset 0 2px 3px 0 rgba(255, 255, 255, 0.4),
          inset 0 -2px 4px 0 rgba(0, 0, 0, 0.6),
          inset 0 0 20px 0 rgba(255, 255, 255, 0.03),
          ${shadowX}px ${shadowY}px ${shadowBlur}px -12px rgba(0, 0, 0, 0.85),
          0 0 45px -10px rgba(16, 185, 129, 0.25)
        `;
      }

      // Fresnel Specular Edge Reflection Opacity Calibration
      if (fresnelLayerRef.current) {
        const fresnelOpacity = Math.min(0.75, 0.25 + tiltMagnitude * 0.08);
        fresnelLayerRef.current.style.opacity = fresnelOpacity.toFixed(2);
      }

      // Layer 1: Environmental Background Bio-Green Drift (-80px Z-depth)
      if (layer1BgRef.current) {
        const bgShiftX = (rotY / 4) * 7;
        const bgShiftY = (-rotX / 2.5) * 7;
        layer1BgRef.current.style.transform = `translate3d(${bgShiftX.toFixed(2)}px, ${bgShiftY.toFixed(2)}px, -80px)`;
      }

      // Layer 4: Display Content Image (45px Z-depth)
      if (layer4ContentRef.current) {
        const contentShiftX = (rotY / 4) * 3.5;
        const contentShiftY = (-rotX / 2.5) * 3.5;
        layer4ContentRef.current.style.transform = `translate3d(${contentShiftX.toFixed(2)}px, ${contentShiftY.toFixed(2)}px, 45px)`;
      }

      // Layer 5: Anchored Spatial Badge (75px Z-depth)
      if (layer5BadgeRef.current) {
        const badgeShiftX = (rotY / 4) * 6;
        const badgeShiftY = (-rotX / 2.5) * 6;
        layer5BadgeRef.current.style.transform = `translate3d(${badgeShiftX.toFixed(2)}px, ${badgeShiftY.toFixed(2)}px, 75px)`;
      }

      if (
        isHovering.current ||
        Math.abs(targetX.current - currentX.current) > 0.005 ||
        Math.abs(targetY.current - currentY.current) > 0.005
      ) {
        animFrameId.current = requestAnimationFrame(updatePhysics);
      } else {
        animFrameId.current = null;
      }
    };

    const startLoop = () => {
      if (!animFrameId.current) {
        animFrameId.current = requestAnimationFrame(updatePhysics);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!masterGlassRef.current) return;
      const rect = masterGlassRef.current.getBoundingClientRect();

      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      isHovering.current = true;

      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const normX = (rawX - centerX) / centerX;
      const normY = (rawY - centerY) / centerY;

      const distFromCenter = Math.sqrt(normX * normX + normY * normY);
      const resistanceFactor = 1 / (1 + Math.pow(distFromCenter, 2.5) * 0.35);

      const easedNormX = normX * resistanceFactor;
      const easedNormY = normY * resistanceFactor;

      targetX.current = Math.max(-2.5, Math.min(2.5, -easedNormY * 2.5));
      targetY.current = Math.max(-4.0, Math.min(4.0, easedNormX * 4.0));

      masterGlassRef.current.style.setProperty('--mouse-x', `${rawX}px`);
      masterGlassRef.current.style.setProperty('--mouse-y', `${rawY}px`);
      masterGlassRef.current.style.setProperty('--mouse-opacity', '1');

      startLoop();
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      targetX.current = 0;
      targetY.current = 0;
      if (masterGlassRef.current) {
        masterGlassRef.current.style.setProperty('--mouse-opacity', '0');
      }
      startLoop();
    };

    const glassEl = masterGlassRef.current;
    if (glassEl) {
      glassEl.addEventListener('mousemove', handleMouseMove);
      glassEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (glassEl) {
        glassEl.removeEventListener('mousemove', handleMouseMove);
        glassEl.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  if (!data?.isVisible) return null;

  const steps = [
    'BIOLOGY',
    'RESEARCH',
    'ENGINEERING',
    'TESTING',
    'SUSTAINABILITY',
    'TECH TRANSFER',
  ];

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden">
      {/* Layer 1: Environmental Background Bio-Green & Orange Drift (-80px Z-depth) */}
      <div
        ref={layer1BgRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{ transform: 'translateZ(-80px)' }}
      >
        <div className="biocore-aura-green -top-20 -left-20 opacity-80" />
        <div className="biocore-aura-orange top-1/3 -right-20 opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Badge Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-emerald-500/30 text-[11px] sm:text-xs font-semibold text-emerald-300"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate font-mono uppercase">{data.badgeText}</span>
          </motion.div>

          {/* Translational Pipeline Steps Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="hidden md:flex items-center justify-center gap-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase"
          >
            {steps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className={idx === 0 ? 'text-emerald-400 font-bold' : idx === steps.length - 1 ? 'text-orange-400 font-bold' : ''}>
                  {step}
                </span>
                {idx < steps.length - 1 && <span className="text-emerald-500/40">→</span>}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]"
          >
            {data.headline}{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-orange-400 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
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
                className="w-full sm:w-auto min-h-[48px] justify-center text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/25"
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

          {/* Master 3D Spatial Titanium Glass Display Object */}
          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 sm:pt-10 max-w-4xl mx-auto"
              style={{ perspective: '1400px', transformStyle: 'preserve-3d' }}
            >
              <div
                ref={masterGlassRef}
                className="relative rounded-3xl p-2.5 sm:p-3.5 glass-panel-biocore liquid-bubble-container border border-emerald-500/35 shadow-2xl overflow-hidden isolate will-change-transform bg-clip-padding"
                style={{
                  transformStyle: 'preserve-3d',
                  borderRadius: '28px',
                  clipPath: 'inset(0 round 28px)',
                }}
              >
                {/* Molded Curved Glass Edge Light Falloff Overlay */}
                <div
                  className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_60%)] pointer-events-none z-20"
                  style={{ transform: 'translateZ(10px)' }}
                />

                {/* Calibrated Fresnel Edge Reflection Layer */}
                <div
                  ref={fresnelLayerRef}
                  className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,rgba(16,185,129,0.08)_35%,transparent_70%,rgba(249,115,22,0.12)_100%)] pointer-events-none z-20 transition-opacity duration-200"
                  style={{ transform: 'translateZ(18px)', opacity: 0.25 }}
                />

                {/* Shared Light Sheen Layer */}
                <div
                  className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(16,185,129,0.2),transparent_65%)] pointer-events-none z-20 opacity-85"
                  style={{ transform: 'translateZ(30px)' }}
                />

                {/* Display Content Image (45px Z-depth) */}
                <img
                  ref={layer4ContentRef}
                  src={data.imageUrl}
                  alt="Biocore Research LLP Deep Science Infrastructure"
                  className="w-full h-auto max-h-[320px] sm:max-h-[500px] object-cover rounded-2xl relative z-10 will-change-transform"
                  style={{
                    transform: 'translateZ(45px)',
                    filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.55))',
                    borderRadius: '20px',
                  }}
                />

                {/* Layer 5: Anchored Spatial Badge Overlay with Standalone B Emblem */}
                <div
                  ref={layer5BadgeRef}
                  className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-emerald-500/40 shadow-2xl will-change-transform pointer-events-none"
                  style={{
                    transform: 'translateZ(75px)',
                    filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.65))',
                  }}
                >
                  <img src="/biocore-emblem.png" alt="BIOCORE Emblem" className="h-7 w-auto object-contain shrink-0" />
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-xs font-mono text-white font-bold tracking-wider uppercase">BIOCORE</span>
                    <span className="text-[10px] font-serif italic text-emerald-400 mt-0.5">Advancing Science, Enriching Life</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {data.showScrollIndicator && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce hidden sm:block">
          <ChevronDown className="w-5 h-5 text-emerald-400" />
        </div>
      )}
    </section>
  );
};
