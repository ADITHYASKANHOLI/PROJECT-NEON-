'use client';

import React from 'react';
import { FooterSection } from '@/lib/types';
import { Sparkles, Mail, MapPin, Shield } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  data: FooterSection;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data?.isVisible) return null;

  return (
    <footer className="border-t border-white/10 bg-[#06080e] pt-12 sm:pt-16 pb-8 text-slate-400 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-black tracking-widest text-white uppercase">
                PROJECT <span className="text-cyan-400">NEON</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm font-light text-slate-400 max-w-md leading-relaxed">
              {data.tagline}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">CONNECT</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{data.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{data.contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Admin CMS Portal Link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">PORTAL</h4>
            <Link href="/admin" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-cyan-500/30 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/10 transition-all">
              <Shield className="w-3.5 h-3.5" />
              <span>Admin CMS Portal</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>{data.copyrightText}</p>
          <p className="text-[11px]">POWERED BY NEXT.JS 16 & SUPABASE ENGINE</p>
        </div>
      </div>
    </footer>
  );
};
