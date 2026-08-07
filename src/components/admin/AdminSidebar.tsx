'use client';

import React from 'react';
import {
  LayoutDashboard,
  Sparkles,
  User,
  Zap,
  BarChart3,
  Image as ImageIcon,
  Calendar,
  MessageSquare,
  Navigation,
  FileText,
  FolderOpen,
  Settings,
  LogOut,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

export type AdminTab =
  | 'overview'
  | 'hero'
  | 'about'
  | 'features'
  | 'stats'
  | 'gallery'
  | 'timeline'
  | 'testimonials'
  | 'navigation'
  | 'footer'
  | 'media'
  | 'settings';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  onTabChange,
  onLogout,
  collapsed,
  onToggleCollapse,
}) => {
  const menuGroups = [
    {
      title: 'MAIN',
      items: [{ id: 'overview' as AdminTab, label: 'Overview', icon: LayoutDashboard }],
    },
    {
      title: 'PAGE SECTIONS',
      items: [
        { id: 'hero' as AdminTab, label: 'Hero Section', icon: Sparkles },
        { id: 'about' as AdminTab, label: 'About Section', icon: User },
        { id: 'features' as AdminTab, label: 'Features & Services', icon: Zap },
        { id: 'stats' as AdminTab, label: 'Statistics', icon: BarChart3 },
        { id: 'gallery' as AdminTab, label: 'Showcase Gallery', icon: ImageIcon },
        { id: 'timeline' as AdminTab, label: 'Timeline Journey', icon: Calendar },
        { id: 'testimonials' as AdminTab, label: 'Testimonials', icon: MessageSquare },
      ],
    },
    {
      title: 'SYSTEM & MEDIA',
      items: [
        { id: 'navigation' as AdminTab, label: 'Navigation Links', icon: Navigation },
        { id: 'footer' as AdminTab, label: 'Footer Content', icon: FileText },
        { id: 'media' as AdminTab, label: 'Media Library', icon: FolderOpen },
        { id: 'settings' as AdminTab, label: 'Site Settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside
      className={`h-full flex flex-col justify-between glass-panel border-r border-white/10 bg-[#06080e]/95 transition-all duration-300 z-30 shrink-0 select-none ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="flex flex-col h-full">
        <div className="h-16 px-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-4 h-4" />
            </div>
            {!collapsed && (
              <div className="leading-none">
                <span className="text-xs font-black tracking-widest text-white uppercase block">
                  PROJECT <span className="text-cyan-400">NEON</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 block">
                  SUPABASE CMS
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Independent Vertical Scroll Navigation */}
        <nav className="flex-1 p-3 space-y-6 overflow-y-auto custom-scrollbar">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {!collapsed && (
                <h4 className="px-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  {group.title}
                </h4>
              )}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                    } ${collapsed ? 'justify-center px-0' : ''}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer Actions */}
        <div className="p-3 border-t border-white/10 space-y-1 shrink-0 bg-slate-950/40">
          <Link
            href="/"
            target="_blank"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors ${
              collapsed ? 'justify-center px-0' : ''
            }`}
            title="Open Public Website"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
            {!collapsed && <span>Public Website</span>}
          </Link>

          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer ${
              collapsed ? 'justify-center px-0' : ''
            }`}
            title="Log Out"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Log Out</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};
