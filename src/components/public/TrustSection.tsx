'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { ShieldCheck, TestTube2, Microscope, Users, ArrowRight, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const qualityPillars = [
    {
      id: 'empirical',
      icon: <TestTube2 className="w-6 h-6 text-emerald-400" />,
      title: 'Empirical Analytical Standards',
      description:
        'Every biological formulation, testing service, and instrumentation module is subject to empirical validation protocols.',
    },
    {
      id: 'integrity',
      icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
      title: 'Data Integrity & Quality Control',
      description:
        'Strict analytical accuracy, standardized sample preparation, and quality control covering food, water, environmental, and bio-materials.',
    },
    {
      id: 'engineering',
      icon: <Microscope className="w-6 h-6 text-teal-400" />,
      title: 'Hardware & Sensor Reliability',
      description:
        'Precision design of biosensors, microchips, and bioelectronics built to withstand industrial and laboratory environments.',
    },
    {
      id: 'institutional',
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      title: 'Institutional & Technical Partnership',
      description:
        'Collaborative research framework supporting universities, government agencies, defence research initiatives, and industrial partners.',
    },
  ];

  const operationalMetrics = [
    { label: 'Operational Scope', value: 'Translational Science', highlight: true },
    { label: 'Research Focus', value: 'Biology + Engineering' },
    { label: 'Quality Framework', value: 'Empirical Testing' },
    { label: 'Collaboration', value: 'Institutional & Industry' },
  ];

  return (
    <section id="quality-trust" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="biocore-aura-green top-1/2 left-1/4 -translate-y-1/2 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>SCIENTIFIC INTEGRITY & QUALITY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight"
          >
            ENGINEERED FOR RIGOR, REPEATABILITY & <span className="text-emerald-400">QUALITY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed"
          >
            Biocore Research LLP is dedicated to scientific credibility, empirical testing standards, and robust bio-engineering principles.
          </motion.p>
        </div>

        {/* Four Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {qualityPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between hover:border-emerald-500/30">
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit">{pillar.icon}</div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Operational Scope Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12"
        >
          <GlassCard className="glass-panel-biocore p-6 sm:p-8 border-emerald-500/40">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {operationalMetrics.map((m, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">{m.label}</span>
                  <div className="flex items-center justify-center gap-2">
                    {m.highlight && <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />}
                    <span className="text-sm sm:text-base font-bold font-mono text-white">{m.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Section Action CTA */}
        <div className="text-center">
          <a href="#solutions">
            <GlassButton
              variant="primary"
              size="lg"
              className="px-10 justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Sustainable Technology Solutions
            </GlassButton>
          </a>
        </div>
      </div>
    </section>
  );
};
