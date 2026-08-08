'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Dna,
  Cpu,
  Microscope,
  Leaf,
  GraduationCap,
  Building2,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';

interface AboutProps {
  data?: AboutSection;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const title =
    data?.title ||
    'Translating biological science and precision engineering into industrial technologies, testing infrastructure, and commercial impact.';
  const description =
    data?.description ||
    'Biocore Research LLP (operating publicly as BIOCORE) is a translational deep-science company structured to bridge molecular biology with hardware-level engineering, scientific instrumentation, testing & certification, sustainable technology, and commercialization.';
  const imageUrl =
    data?.imageUrl ||
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop';

  const scopeAreas = [
    {
      icon: <Dna className="w-5 h-5 text-emerald-400" />,
      title: 'Biopharmaceuticals & Life Sciences',
      desc: 'Research, development, formulation, and commercialization across biotechnology, microbiology, molecular biology, agrobiogenics, and tissue culture.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Bioengineering & Advanced Electronics',
      desc: 'Design and production of microchips, biosensors, bioelectronics, embedded systems, and precision scientific instrumentation.',
    },
    {
      icon: <Microscope className="w-5 h-5 text-teal-400" />,
      title: 'Laboratory Testing & Analytical Services',
      desc: 'High-precision testing, analytical validation, quality control, and certification for food, water, agriculture, environment, pharma, and biologicals.',
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-300" />,
      title: 'Sustainable & Environmental Technology',
      desc: 'Zero-waste and zero-carbon processing systems, renewable biofuels, eco-friendly agrochemicals, biofertilizers, and environmental remediation.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      title: 'Consultancy, Training & Tech Transfer',
      desc: 'Technical consultancy, technology transfer, professional training, defence research support, and industrial innovation advisory.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-indigo-400" />,
      title: 'Institutional & Research Collaboration',
      desc: 'Strategic research partnerships with national and international institutions, industries, government agencies, and research organizations.',
    },
  ];

  const pillars = [
    {
      title: 'Translational Science',
      desc: 'Converting laboratory-level biological discovery into validated, scalable industrial technologies.',
    },
    {
      title: 'Engineering & Instrumentation',
      desc: 'Combining microelectronics, embedded systems, and biosensors with scientific hardware.',
    },
    {
      title: 'Scientific Integrity & Quality',
      desc: 'Rigorous analytical testing, quality control, and empirical validation across all operational domains.',
    },
    {
      title: 'Sustainable Technology',
      desc: 'Developing eco-friendly formulations, biofertilizers, zero-waste processes, and green systems.',
    },
    {
      title: 'Technology Transfer',
      desc: 'Enabling seamless commercial adoption, training, and IP deployment for industry partners.',
    },
    {
      title: 'Institutional Collaboration',
      desc: 'Fostering research synergy with universities, government bodies, and defence research organizations.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Ambient Sapphire & Emerald Glow Diffusions */}
      <div className="neon-aura-cyan top-1/4 -left-20 opacity-75" />
      <div className="neon-aura-violet top-2/3 -right-20 opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>ABOUT BIOCORE RESEARCH LLP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight"
          >
            TRANSLATING DEEP-SCIENCE INTO <span className="text-teal-400">COMMERCIAL REALITY</span>
          </motion.h2>
        </div>

        {/* Top Grid: Mission & Primary Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <GlassCard className="p-6 sm:p-10 space-y-6 border-teal-500/30">
              <div className="space-y-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  OUR MISSION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">{title}</h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {description}
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Registered Deep-Science Scope</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Translational Technology Pipeline</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-2 glass-panel-neon overflow-hidden border border-teal-500/40 shadow-2xl">
              <img
                src={imageUrl}
                alt="Biocore Research LLP Translational Deep Science Laboratory"
                className="w-full h-auto max-h-[420px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Middle Block: What BIOCORE Does (6 Registered Business Domains) */}
        <div className="space-y-8 mb-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
              WHAT <span className="text-teal-400">BIOCORE</span> DOES
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Overview of the company's business scope across research, testing, instrumentation, and technology transfer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.08 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between space-y-4 hover:border-teal-500/40">
                  <div className="space-y-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                      {area.icon}
                    </div>
                    <h4 className="text-base font-bold text-white">{area.title}</h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">{area.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars Block: What We Stand For */}
        <div className="space-y-8 mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase">
              WHAT WE <span className="text-sky-400">STAND FOR</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Core operational pillars guiding Biocore Research LLP’s scientific and engineering initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <GlassCard key={i} className="p-5 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{p.title}</h4>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">{p.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Forward-Looking Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center max-w-4xl mx-auto"
        >
          <GlassCard className="glass-panel-neon p-8 sm:p-10 border-teal-500/40">
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed italic">
              "At the intersection of molecular biology, hardware engineering, laboratory validation, and industrial application, Biocore Research LLP turns scientific discovery into scalable, real-world impact."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
