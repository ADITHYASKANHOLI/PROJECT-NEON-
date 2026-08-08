'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Compass, Cpu, Layers, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const DeploymentWorkflow: React.FC = () => {
  const stages = [
    {
      id: 'stage-1',
      number: '01',
      icon: <Compass className="w-6 h-6 text-sky-400" />,
      title: 'Discovery & Digital Strategy',
      badge: 'STAGE 01',
      description:
        'We align with your executive team to analyze brand identity, target demographics, campaign goals, and enterprise conversion objectives.',
    },
    {
      id: 'stage-2',
      number: '02',
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: 'Platform Architecture',
      badge: 'STAGE 02',
      description:
        'We configure your dedicated cloud environment, PostgreSQL database schemas, Row Level Security (RLS) policies, and high-availability edge nodes.',
    },
    {
      id: 'stage-3',
      number: '03',
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: 'Brand Experience Deployment',
      badge: 'STAGE 03',
      description:
        'We deploy your bespoke liquid glass digital platform populated with structured brand media, marketing messaging, and conversion architecture.',
    },
    {
      id: 'stage-4',
      number: '04',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Client Command Center Activation',
      badge: 'STAGE 04',
      description:
        'Your marketing team receives isolated Supabase Auth portal access to remotely publish announcements, campaign updates, and brand assets live in seconds.',
    },
    {
      id: 'stage-5',
      number: '05',
      icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
      title: 'Continuous Evolution & SLA',
      badge: 'STAGE 05',
      description:
        'PROJECT NEON continuously manages cloud hosting, security compliance, performance optimizations, and design system upgrades under your platform lease.',
    },
  ];

  return (
    <section id="workflow" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Executive Sapphire Ambient Glow */}
      <div className="neon-aura-violet top-1/2 right-1/4 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wider uppercase"
          >
            ENTERPRISE DEPLOYMENT LIFECYCLE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            FROM PARTNERSHIP TO <span className="text-sky-400">LIVE PLATFORM</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light"
          >
            We do not build static websites. We deploy and continuously operate managed digital advertising infrastructure for growing enterprises.
          </motion.p>
        </div>

        {/* Spatial Timeline Grid */}
        <div className="relative">
          {/* Spatial Connecting Glass Node Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500/40 via-blue-500/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {stages.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glass Card Side */}
                  <div className="w-full lg:w-1/2">
                    <GlassCard className="p-6 sm:p-8 space-y-4 relative">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{stage.icon}</div>
                        <span className="text-[11px] font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                          {stage.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{stage.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {stage.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full glass-panel border border-sky-400/40 shrink-0 shadow-xl z-20 bg-slate-950">
                    <span className="text-xs font-mono font-bold text-sky-400">{stage.number}</span>
                  </div>

                  {/* Empty Side for Layout Balance */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section Action CTA */}
        <div className="mt-16 text-center">
          <a href="#solutions">
            <GlassButton
              variant="primary"
              size="lg"
              className="px-10 justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Initiate Your Digital Platform Deployment
            </GlassButton>
          </a>
        </div>
      </div>
    </section>
  );
};
