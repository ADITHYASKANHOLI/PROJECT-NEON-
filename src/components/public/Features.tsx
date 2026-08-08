'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureSection } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Dna,
  Cpu,
  Microscope,
  TestTube2,
  Leaf,
  GraduationCap,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface FeaturesProps {
  data?: FeatureSection;
}

export const Features: React.FC<FeaturesProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const title = data?.title || 'BIOCORE CAPABILITY AREAS';
  const subtitle =
    data?.subtitle ||
    'Comprehensive business scope connecting biological sciences, precision hardware engineering, laboratory testing, sustainable technology, and technology transfer.';

  const capabilities = [
    {
      id: 'cap-1',
      icon: <Dna className="w-6 h-6 text-emerald-400" />,
      title: 'Life Sciences & Biotechnology',
      badge: 'DEEP-SCIENCE',
      description:
        'Research, development, formulation, and analysis in biopharmaceuticals, biotechnology, agrobiogenics, tissue culture, microbiology, and molecular biology.',
    },
    {
      id: 'cap-2',
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: 'Bioengineering & Advanced Electronics',
      badge: 'HARDWARE ENGINEERING',
      description:
        'Design, engineering, and production of microchips, biosensors, bioelectronics, embedded electronic systems, and precision analytical hardware.',
    },
    {
      id: 'cap-3',
      icon: <Microscope className="w-6 h-6 text-teal-400" />,
      title: 'Scientific Instrumentation',
      badge: 'SYSTEMS & HARDWARE',
      description:
        'Development and manufacturing support for scientific laboratory instruments, optical-electronic measurement systems, and bio-analytical apparatus.',
    },
    {
      id: 'cap-4',
      icon: <TestTube2 className="w-6 h-6 text-emerald-300" />,
      title: 'Laboratory Testing & Analytical Services',
      badge: 'QUALITY CONTROL',
      description:
        'Analytical laboratory testing, quality control, certification, and standard validation for food, water, agricultural products, environmental samples, and pharmaceuticals.',
    },
    {
      id: 'cap-5',
      icon: <Leaf className="w-6 h-6 text-teal-300" />,
      title: 'Sustainable & Environmental Technology',
      badge: 'GREEN TECH',
      description:
        'Zero-waste and zero-carbon processing systems, renewable biofuels, eco-friendly agrochemicals, biofertilizers, and biological environmental remediation.',
    },
    {
      id: 'cap-6',
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      title: 'Consultancy, Training & Tech Transfer',
      badge: 'TRANSFER & ADVISORY',
      description:
        'Technical consultancy, project advisory, workforce training, technology transfer, defence research support, and industrial innovation implementation.',
    },
    {
      id: 'cap-7',
      icon: <Building2 className="w-6 h-6 text-indigo-400" />,
      title: 'Research & Institutional Collaboration',
      badge: 'COLLABORATION',
      description:
        'Joint research initiatives, strategic partnerships, and technical collaboration with national/international institutions, industries, and government bodies.',
    },
  ];

  return (
    <section id="capabilities" className="py-20 sm:py-28 md:py-36 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>BUSINESS & RESEARCH SCOPE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <GlassCard hoverEffect className="h-full p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-emerald-500/40">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {item.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
