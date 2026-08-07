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
      className={`h-screen flex flex-col justify-between glass-panel border-r border-white/10 bg-slate-950/90 transition-all duration-300 z-30 shrink-0 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div>
        <div className="p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="text-base font-extrabold tracking-wider text-white">AURA</h2>
                <p className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest">LIVE CMS OS</p>
              </div>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Menu Navigation */}
        <nav className="p-3 space-y-6 overflow-y-auto max-h-[calc(100vh-160px)]">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {!collapsed && (
                <h4 className="px-3 text-[10px] font-extrabold tracking-widest text-slate-300 uppercase mb-2">
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
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/10 border border-transparent'
                    } ${collapsed ? 'justify-center px-0' : ''}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    {!collapsed && <span>{item.label}</span>}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Controls */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <Link
          href="/"
          target="_blank"
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors ${
            collapsed ? 'justify-center px-0' : ''
          }`}
          title="View Public Website"
        >
          <ExternalLink className="w-4 h-4 text-indigo-400 shrink-0" />
          {!collapsed && <span>Public Website</span>}
        </Link>

        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors cursor-pointer ${
            collapsed ? 'justify-center px-0' : ''
          }`}
          title="Log Out"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Log Out</span>}
        </button>
      </div>
    </aside>
  );
};
