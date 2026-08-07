'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { ShieldCheck, Server, RefreshCw, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      id: 'availability',
      icon: <Server className="w-6 h-6 text-sky-400" />,
      title: 'Always Available',
      description: 'Managed hosting infrastructure engineered for continuous 24/7 business presence and high-traffic campaign spikes.',
    },
    {
      id: 'security',
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Secure by Design',
      description: 'Protected Supabase authentication, database-enforced Row Level Security (RLS), encrypted sessions, and enterprise guards.',
    },
    {
      id: 'evolution',
      icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
      title: 'Continuously Evolving',
      description: 'Digital platforms are not static assets. Campaigns, branding, and customer experiences continuously improve under your lease.',
    },
    {
      id: 'partnership',
      icon: <Users className="w-6 h-6 text-slate-300" />,
      title: 'Human-Managed Technology',
      description: 'A dedicated technology partnership with specialized engineering support, not just automated software.',
    },
  ];

  const metrics = [
    { label: 'Platform Status', value: 'Operational', highlight: true },
    { label: 'Infrastructure', value: 'Cloud Managed' },
    { label: 'Updates', value: 'Remote Publishing' },
    { label: 'Support SLA', value: 'Continuous Partnership' },
  ];

  return (
    <section id="trust" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Executive Sapphire Glow */}
      <div className="neon-aura-cyan top-1/2 left-1/4 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wider uppercase"
          >
            ENTERPRISE TRUST & RELIABILITY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            BUILT FOR BUSINESSES THAT <span className="text-sky-400">CANNOT PAUSE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light"
          >
            PROJECT NEON delivers mission-critical digital advertising infrastructure engineered for security, continuous availability, and long-term brand authority.
          </motion.p>
        </div>

        {/* Four Executive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
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

        {/* Executive Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12"
        >
          <GlassCard className="glass-panel-neon p-6 sm:p-8 border-sky-500/40">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {metrics.map((m, i) => (
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

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/admin">
            <GlassButton
              variant="primary"
              size="lg"
              className="px-10 justify-center"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Partner With PROJECT NEON
            </GlassButton>
          </Link>
        </div>
      </div>
    </section>
  );
};
