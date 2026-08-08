'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { CheckCircle2, Rocket, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Solutions: React.FC = () => {
  const tiers = [
    {
      id: 'launch',
      icon: <Rocket className="w-6 h-6 text-sky-400" />,
      badge: 'FOR STARTUPS',
      name: 'Launch Platform',
      target: 'Startups and emerging brands',
      description: 'A custom-designed liquid glass advertising platform with remote content management to establish market authority.',
      features: [
        'Premium digital advertising platform',
        'Remote Supabase CMS portal access',
        'Managed cloud hosting & SSL',
        'Standard campaign & media updates',
        'Mobile-first responsive liquid design',
      ],
      isPopular: false,
    },
    {
      id: 'growth',
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      badge: 'MOST POPULAR',
      name: 'Growth Platform',
      target: 'Growing businesses & marketing teams',
      description: 'Full-spectrum WaaS infrastructure engineered for active marketing campaigns, rapid iteration, and business expansion.',
      features: [
        'Everything included in Launch',
        'Advanced multi-section CMS controls',
        'Instant live campaign updates',
        'Analytics & telemetry integration',
        'Priority technical support SLA',
        'Continuous design & security updates',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      badge: 'ENTERPRISE WaaS',
      name: 'Enterprise Platform',
      target: 'Large organizations & global brands',
      description: 'Dedicated digital ecosystem with enterprise RLS security, multi-channel content deployment, and 24/7 dedicated support.',
      features: [
        'Custom digital ecosystem architecture',
        'Multiple content channels & domains',
        'Enterprise Row Level Security (RLS)',
        'Dedicated account director & team',
        'Custom API & CRM integrations',
        '99.99% high-availability uptime SLA',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Ambient Sapphire Glow */}
      <div className="neon-aura-violet top-1/3 right-1/4 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wider uppercase"
          >
            ENTERPRISE SOLUTIONS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase"
          >
            PROJECT NEON <span className="text-sky-400">SOLUTIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light"
          >
            We don’t sell static websites. We provide companies with continuously managed digital advertising infrastructure tailored to your growth stage.
          </motion.p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15 }}
              className="flex"
            >
              <GlassCard
                className={`w-full flex flex-col justify-between relative ${
                  tier.isPopular ? 'glass-panel-neon border-sky-500/50 shadow-2xl' : ''
                }`}
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{tier.icon}</div>
                    <span
                      className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase ${
                        tier.isPopular
                          ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                          : 'bg-white/10 text-slate-300 border border-white/10'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  {/* Title & Target */}
                  <h3 className="text-2xl font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-xs text-sky-400 font-medium mb-4">{tier.target}</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4">
                  <a href="#trust" className="w-full block">
                    <GlassButton
                      variant={tier.isPopular ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Request Platform Consultation
                    </GlassButton>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
