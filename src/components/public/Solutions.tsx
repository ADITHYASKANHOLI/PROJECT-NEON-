'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Leaf, Flame, Recycle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const Solutions: React.FC = () => {
  const domains = [
    {
      id: 'zero-waste',
      icon: <Recycle className="w-6 h-6 text-emerald-400" />,
      badge: 'CIRCULAR ECONOMY',
      name: 'Zero-Waste & Zero-Carbon Systems',
      target: 'Industrial & Environmental Processing',
      description:
        'Development of closed-loop processing frameworks that minimize industrial carbon output and eliminate biological waste.',
      features: [
        'Biological waste valorization & conversion',
        'Zero-carbon process engineering modeling',
        'Effluent & liquid waste biomanagement',
        'Industrial carbon offset bio-systems',
        'Circular bio-economy implementation',
      ],
      isPopular: false,
    },
    {
      id: 'biofuels',
      icon: <Flame className="w-6 h-6 text-teal-400" />,
      badge: 'RENEWABLE ENERGY',
      name: 'Renewable Biofuels & Energy',
      target: 'Energy Sector & Bio-Refineries',
      description:
        'Formulation and process development for second and third-generation renewable liquid biofuels and biogas systems.',
      features: [
        'Algal & lignocellulosic biofuel research',
        'Microbial fermentation process optimization',
        'Biogas & biomethane purification models',
        'Sustainable fuel standard validation',
        'Energy density & emission analytical testing',
      ],
      isPopular: true,
    },
    {
      id: 'agro-chem',
      icon: <Leaf className="w-6 h-6 text-sky-400" />,
      badge: 'SUSTAINABLE AGRI',
      name: 'Eco-Agrochemicals & Biofertilizers',
      target: 'Agriculture, Forestry & Land Management',
      description:
        'Formulation of eco-friendly biofertilizers, botanical crop protectants, biostimulants, and biological soil remediation agents.',
      features: [
        'Bio-formulation for soil microbiome enhancement',
        'Botanical & microbial crop protection agents',
        'Organic nitrogen & phosphorus bio-fixation',
        'Heavy metal & pesticide bio-remediation',
        'Agronomic testing & field sample validation',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="sustainability" className="py-20 sm:py-28 md:py-36 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="neon-aura-violet top-1/3 right-1/4 -translate-y-1/2 opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>SUSTAINABLE & ENVIRONMENTAL TECH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight"
          >
            SUSTAINABLE TECHNOLOGY & <span className="text-teal-400">ENVIRONMENTAL INNOVATION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed"
          >
            Biocore Research LLP pioneers biological solutions for environmental restoration, renewable biofuels, zero-waste processing, and sustainable agro-technology.
          </motion.p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15 }}
              className="flex"
            >
              <GlassCard
                className={`w-full flex flex-col justify-between relative hover:border-teal-500/40 ${
                  domain.isPopular ? 'glass-panel-neon border-teal-500/50 shadow-2xl' : ''
                }`}
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{domain.icon}</div>
                    <span
                      className={`text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase ${
                        domain.isPopular
                          ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30'
                          : 'bg-white/10 text-slate-300 border border-white/10'
                      }`}
                    >
                      {domain.badge}
                    </span>
                  </div>

                  {/* Title & Target */}
                  <h3 className="text-xl font-bold text-white mb-1">{domain.name}</h3>
                  <p className="text-xs text-teal-400 font-medium mb-4">{domain.target}</p>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mb-6 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                    {domain.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4">
                  <a href="#workflow" className="w-full block">
                    <GlassButton
                      variant={domain.isPopular ? 'primary' : 'secondary'}
                      size="md"
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Inquire About Environmental Solutions
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
