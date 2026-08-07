'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sliders, ShieldCheck, Zap, Layers, Activity, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const CommandCenter: React.FC = () => {
  const capabilities = [
    {
      id: 'content',
      icon: <Sliders className="w-5 h-5 text-cyan-400" />,
      title: 'Content Control',
      description: 'Update headlines, text content, image assets, and promotional banners remotely without touching code.',
    },
    {
      id: 'campaign',
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      title: 'Campaign Management',
      description: 'Launch seasonal promotions, product announcements, and event landing pages instantly on global edge nodes.',
    },
    {
      id: 'monitoring',
      icon: <Activity className="w-5 h-5 text-cyan-300" />,
      title: 'Platform Monitoring',
      description: 'Real-time telemetry showing website health SLA, sub-second sync speeds, and Supabase cloud security status.',
    },
    {
      id: 'workflow',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'Approval Workflow',
      description: 'Isolated draft workspace allowing your marketing team to stage and preview edits safely before live publishing.',
    },
  ];

  return (
    <section id="command-center" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Ambient Neon Radial Glow */}
      <div className="neon-aura-cyan top-1/2 left-1/3 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase"
          >
            CLIENT EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            YOUR DIGITAL <span className="text-cyan-400">COMMAND CENTER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light"
          >
            Every PROJECT NEON subscriber receives secure, remote control over their digital platform through an intuitive liquid glass dashboard.
          </motion.p>
        </div>

        {/* Dashboard Visualization & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Command Center Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="glass-panel-neon border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Mock Dashboard Top Control Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">NEON-COMMAND-CENTER // v3.0</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE • 100% HEALTH</span>
                </div>
              </div>

              {/* Mock Controls Preview Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Active Mode</span>
                    <span className="text-cyan-400 font-mono">LIVE PUBLISHED</span>
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Supabase Postgres Synced</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Sync Speed</span>
                    <span className="text-cyan-400 font-mono">340ms SLA</span>
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>Edge Node Distributed</span>
                  </div>
                </div>
              </div>

              {/* Mock Campaign Editor Preview Box */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Hero Headline Campaign Text</span>
                  <span className="text-cyan-400 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">Remote Editable</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 font-mono text-xs text-cyan-300 border border-white/10">
                  "YOUR DIGITAL PLATFORM, ALWAYS LIVE."
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Live Preview Isolation Active</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">Last edited 2m ago</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: 4 Key Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              {capabilities.map((cap) => (
                <GlassCard key={cap.id} className="p-5 flex items-start gap-4">
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

            {/* CTA Button */}
            <div className="pt-2">
              <Link href="/admin" className="block w-full">
                <GlassButton
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  icon={<ShieldCheck className="w-5 h-5" />}
                >
                  Access Your Digital Command Center
                </GlassButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
