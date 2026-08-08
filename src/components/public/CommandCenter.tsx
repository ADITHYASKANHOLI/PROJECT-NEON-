'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import {
  Activity,
  Cpu,
  TestTube2,
  SlidersHorizontal,
  CheckCircle2,
  Zap,
  Sparkles,
  ArrowRight,
  Shield,
} from 'lucide-react';

export const CommandCenter: React.FC = () => {
  const telemetryFeatures = [
    {
      id: 'bio-telemetry',
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      title: 'Biomolecular & Formulation Data',
      description:
        'Continuous monitoring of formulation metrics, microbiological cultures, and chemical stability profiles.',
    },
    {
      id: 'sensor-hardware',
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Embedded Biosensors & Electronics',
      description:
        'Hardware telemetry linking microchips, biosensors, and bio-electronic measurement systems with lab data streams.',
    },
    {
      id: 'testing-qc',
      icon: <TestTube2 className="w-5 h-5 text-teal-400" />,
      title: 'Laboratory Testing & Quality Metrics',
      description:
        'Empirical quality assurance tracking across food, water, environmental, and pharmaceutical testing protocols.',
    },
    {
      id: 'tech-transfer',
      icon: <SlidersHorizontal className="w-5 h-5 text-indigo-400" />,
      title: 'Technology Transfer & Defence Support',
      description:
        'Secure documentation, IP protocols, and technical handovers for industrial partners and defence research initiatives.',
    },
  ];

  return (
    <section id="research-hub" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="neon-aura-cyan top-1/2 left-1/3 -translate-y-1/2 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>RESEARCH & INSTRUMENTATION TELEMETRY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight"
          >
            INTEGRATED SCIENTIFIC & <span className="text-teal-400">HARDWARE TELEMETRY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed"
          >
            Biocore Research LLP structures its scientific and hardware engineering workflows through real-time laboratory telemetry, analytical validation, and precision instrumentation.
          </motion.p>
        </div>

        {/* Display Card & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Scientific Console Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="glass-panel-biocore border-emerald-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Telemetry Console Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <div className="w-3 h-3 rounded-full bg-orange-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">BIOCORE-TELEMETRY-NODE // v4.2</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LAB TELEMETRY ACTIVE</span>
                </div>
              </div>

              {/* Status Indicator Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Assay System</span>
                    <span className="text-teal-400 font-mono">VALIDATED</span>
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Microbiological Protocol</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Biosensor Link</span>
                    <span className="text-sky-400 font-mono">4.8GHz BUS</span>
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>Embedded Circuit Active</span>
                  </div>
                </div>
              </div>

              {/* Formulation & Testing Monitor */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-teal-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Formulation & Analytical Protocol</span>
                  <span className="text-teal-400 font-mono bg-teal-500/10 px-2 py-0.5 rounded">Analytical Grade</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 font-mono text-xs text-teal-300 border border-white/10">
                  "BIOPHARMACEUTICAL FORMULATION // BATCH-882 // VALIDATED"
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-teal-400" />
                    <span>Quality Assurance Telemetry Verified</span>
                  </div>
                  <span className="text-slate-500 text-[11px] font-mono">Precision Log Active</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Telemetry Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {telemetryFeatures.map((cap) => (
                <GlassCard key={cap.id} className="p-5 flex items-start gap-4 hover:border-teal-500/30">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">{cap.icon}</div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white">{cap.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="pt-2">
              <a href="#workflow" className="block w-full">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Technology Transfer Workflow
                </GlassButton>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
