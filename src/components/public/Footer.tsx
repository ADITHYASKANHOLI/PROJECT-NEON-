'use client';

import React from 'react';
import { FooterSection } from '@/lib/types';
import { Sparkles, Globe, Share2, MessageSquare, Send, Mail, MapPin, Shield } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  data: FooterSection;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data || !data.isVisible) return null;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">{data.brandName}</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
              {data.tagline}
            </p>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-widest uppercase text-indigo-400">CONNECT</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href={`mailto:${data.contactEmail}`} className="hover:text-white transition-colors">
                  {data.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{data.contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Admin & Social Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-widest uppercase text-indigo-400">ADMIN CONTROL</h4>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-white transition-colors"
            >
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>Launch Admin Dashboard</span>
            </Link>

            <div className="flex items-center gap-3 pt-2 text-slate-400">
              {data.socialLinks?.github && (
                <a href={data.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" title="GitHub">
                  <Globe className="w-4 h-4" />
                </a>
              )}
              {data.socialLinks?.twitter && (
                <a href={data.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" title="Twitter">
                  <Share2 className="w-4 h-4" />
                </a>
              )}
              {data.socialLinks?.linkedin && (
                <a href={data.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" title="LinkedIn">
                  <MessageSquare className="w-4 h-4" />
                </a>
              )}
              {data.socialLinks?.instagram && (
                <a href={data.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors" title="Instagram">
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
          <p>{data.copyrightText}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link href="/admin" className="text-indigo-400 hover:text-indigo-300 font-semibold">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
