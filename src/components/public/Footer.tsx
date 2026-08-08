'use client';

import React from 'react';
import { FooterSection } from '@/lib/types';
import { BiocoreLogo } from '@/components/ui/BiocoreLogo';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  data?: FooterSection;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  if (data && !data.isVisible) return null;

  const tagline =
    data?.tagline ||
    'Biocore Research LLP is a translational deep-science company connecting biological research, laboratory testing, precision instrumentation, sustainable technology, and commercialization.';
  const email = data?.contactEmail || 'contact@biocoreresearch.com';
  const address = data?.contactAddress || 'Biocore Research LLP, Innovation & Technology Park';
  const copyright = data?.copyrightText || '© 2026 Biocore Research LLP. All rights reserved.';

  return (
    <footer className="border-t border-white/10 bg-[#050a07] pt-12 sm:pt-16 pb-8 text-slate-400 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/">
              <BiocoreLogo size="md" variant="emblem" showTagline={true} />
            </Link>
            <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">CONNECT</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Institutional Compliance & Quality */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">QUALITY & INTEGRITY</h4>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-4 h-4" />
              <span>EMPIRICAL VALIDATION</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>{copyright}</p>
          <p className="text-[11px] font-mono text-slate-400 uppercase">
            BIOCORE RESEARCH LLP • ADVANCING SCIENCE, ENRICHING LIFE
          </p>
        </div>
      </div>
    </footer>
  );
};
