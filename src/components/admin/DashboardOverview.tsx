'use client';

import React from 'react';
import { SiteContent } from '@/lib/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { AdminTab } from './AdminSidebar';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  ImageIcon,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Eye,
} from 'lucide-react';
import Link from 'next/link';

interface OverviewProps {
  draft: SiteContent;
  lastSavedAt: string;
  lastPublishedAt: string;
  onNavigateTab: (tab: AdminTab) => void;
  onPublishLive: () => void;
  onSwitchToPreview?: () => void;
}

export const DashboardOverview: React.FC<OverviewProps> = ({
  draft,
  lastSavedAt,
  lastPublishedAt,
  onNavigateTab,
  onPublishLive,
  onSwitchToPreview,
}) => {
  const countVisible = () => {
    let count = 0;
    if (draft.hero?.isVisible) count++;
    if (draft.about?.isVisible) count++;
    if (draft.features?.isVisible) count++;
    if (draft.stats?.isVisible) count++;
    if (draft.gallery?.isVisible) count++;
    if (draft.timeline?.isVisible) count++;
    if (draft.testimonials?.isVisible) count++;
    if (draft.cta?.isVisible) count++;
    if (draft.footer?.isVisible) count++;
    return count;
  };

  const quickActions: { label: string; tab: AdminTab; icon: any; count: number }[] = [
    { label: 'Hero Section', tab: 'hero', icon: Sparkles, count: 1 },
    { label: 'Features & Services', tab: 'features', icon: Zap, count: draft.features?.items?.length || 0 },
    { label: 'Showcase Gallery', tab: 'gallery', icon: ImageIcon, count: draft.gallery?.items?.length || 0 },
    { label: 'Testimonials', tab: 'testimonials', icon: MessageSquare, count: draft.testimonials?.items?.length || 0 },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-3xl glass-panel-neon p-8 sm:p-10 relative overflow-hidden bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-slate-950">
        <div className="relative z-10 space-y-4 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            PROJECT NEON • SUPABASE CMS
          </span>
          <h2 className="text-3xl font-extrabold text-white">Central Content Store Active</h2>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            Select a section from the sidebar to edit content in a dedicated workspace, or switch to <span className="font-semibold text-purple-300">Live Preview</span> mode to inspect your draft in full viewport scale.
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <GlassButton variant="primary" size="md" onClick={onPublishLive} icon={<CheckCircle2 className="w-4 h-4" />}>
              Publish Live Changes
            </GlassButton>
            {onSwitchToPreview && (
              <GlassButton variant="secondary" size="md" onClick={onSwitchToPreview} icon={<Eye className="w-4 h-4 text-purple-400" />}>
                Large Live Preview
              </GlassButton>
            )}
            <Link href="/" target="_blank">
              <GlassButton variant="ghost" size="md" icon={<ExternalLink className="w-4 h-4 text-cyan-400" />}>
                Public Website
              </GlassButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website Status</span>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xl font-extrabold text-white">LIVE ONLINE</span>
            </div>
            <p className="text-xs text-slate-400">Public route: /</p>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Published Sections</span>
            <div className="text-3xl font-black text-cyan-400">{countVisible()} / 9</div>
            <p className="text-xs text-slate-400">Active public sections</p>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Draft Saved</span>
            <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{lastSavedAt ? new Date(lastSavedAt).toLocaleTimeString() : 'Just now'}</span>
            </div>
            <p className="text-xs text-slate-400">Draft store synced</p>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Published</span>
            <div className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{lastPublishedAt ? new Date(lastPublishedAt).toLocaleTimeString() : 'Just now'}</span>
            </div>
            <p className="text-xs text-slate-400">Database store synced</p>
          </div>
        </GlassCard>
      </div>

      {/* Quick Edit Shortcuts Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white uppercase tracking-wider">Quick Section Editors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.tab}
                hoverEffect
                onClick={() => onNavigateTab(item.tab)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-400">{item.count} items active in draft</p>
                </div>
                <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Edit Content</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
