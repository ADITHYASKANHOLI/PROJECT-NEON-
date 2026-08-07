'use client';

import React from 'react';
import { GlassButton } from '@/components/ui/GlassButton';
import { WorkspaceMode } from '@/app/admin/dashboard/page';
import {
  Save,
  Send,
  Eye,
  Edit3,
  CheckCircle2,
  Clock,
  Laptop,
  Tablet,
  Smartphone,
  AlertTriangle,
  Menu,
} from 'lucide-react';

interface AdminHeaderProps {
  activeTabTitle: string;
  hasUnsavedChanges: boolean;
  isSaving: boolean;
  isPublishing: boolean;
  lastSavedAt: string;
  lastPublishedAt: string;
  onSaveDraft: () => void;
  onPublishLive: () => void;
  workspaceMode: WorkspaceMode;
  onWorkspaceModeChange: (mode: WorkspaceMode) => void;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenMobileDrawer: () => void;
  isMediaTab?: boolean;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  activeTabTitle,
  hasUnsavedChanges,
  isSaving,
  isPublishing,
  lastSavedAt,
  lastPublishedAt,
  onSaveDraft,
  onPublishLive,
  workspaceMode,
  onWorkspaceModeChange,
  previewDevice,
  onDeviceChange,
  onOpenMobileDrawer,
  isMediaTab = false,
}) => {
  const formatTime = (isoString: string) => {
    if (!isoString) return 'Never';
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return isoString;
    }
  };

  return (
    <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between gap-6 shrink-0 bg-[#06080e]/95 backdrop-blur-xl z-20 select-none">
      {/* Left: Mobile Toggle & Section Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onOpenMobileDrawer}
          className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-base font-bold text-white capitalize truncate">{activeTabTitle} Workspace</h1>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              Saved: {formatTime(lastSavedAt)}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Published: {formatTime(lastPublishedAt)}
            </span>
          </div>
        </div>
      </div>

      {/* Center: Status Indicator */}
      <div className="hidden md:flex items-center">
        {hasUnsavedChanges ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="w-3.5 h-3.5" /> Unsaved Changes
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> All Saved
          </span>
        )}
      </div>

      {/* Right: Workspace Mode Selector & Actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Viewport Switcher when in Preview Mode */}
        {!isMediaTab && workspaceMode === 'preview' && (
          <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => onDeviceChange('desktop')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                previewDevice === 'desktop' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop Viewport"
            >
              <Laptop className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDeviceChange('tablet')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                previewDevice === 'tablet' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet Viewport"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDeviceChange('mobile')}
              className={`p-1.5 rounded-lg text-xs transition-colors ${
                previewDevice === 'mobile' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile Viewport"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Workspace Mode Segment Toggle (EDITOR vs PREVIEW) */}
        {!isMediaTab && (
          <div className="flex items-center gap-1 bg-white/5 border border-white/15 rounded-xl p-1">
            <button
              onClick={() => onWorkspaceModeChange('editor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                workspaceMode === 'editor'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Editor</span>
            </button>
            <button
              onClick={() => onWorkspaceModeChange('preview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                workspaceMode === 'preview'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/10'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>Live Preview</span>
            </button>
          </div>
        )}

        {/* Save Draft */}
        <GlassButton
          variant="secondary"
          size="sm"
          isLoading={isSaving}
          onClick={onSaveDraft}
          icon={<Save className="w-3.5 h-3.5 text-cyan-400" />}
        >
          Save Draft
        </GlassButton>

        {/* Publish Live (Prominent CTA) */}
        <GlassButton
          variant="primary"
          size="sm"
          isLoading={isPublishing}
          onClick={onPublishLive}
          icon={<Send className="w-3.5 h-3.5" />}
        >
          Publish Live
        </GlassButton>
      </div>
    </header>
  );
};
