'use client';

import React from 'react';
import { GlassButton } from '@/components/ui/GlassButton';
import {
  Save,
  Send,
  Eye,
  EyeOff,
  CheckCircle2,
  Clock,
  Laptop,
  Tablet,
  Smartphone,
  AlertTriangle,
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
  showPreview: boolean;
  onTogglePreview: () => void;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
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
  showPreview,
  onTogglePreview,
  previewDevice,
  onDeviceChange,
}) => {
  const formatTime = (isoString: string) => {
    if (!isoString) return 'Never';
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    } catch {
      return isoString;
    }
  };

  return (
    <header className="glass-panel border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-20 bg-slate-950/80 backdrop-blur-xl">
      {/* Title & Status Badge */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-white capitalize">{activeTabTitle}</h1>
          <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              Saved: {formatTime(lastSavedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Published: {formatTime(lastPublishedAt)}
            </span>
          </div>
        </div>

        {/* Live Status Pill */}
        {hasUnsavedChanges ? (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 animate-pulse">
            <AlertTriangle className="w-3.5 h-3.5" /> Unsaved Changes
          </span>
        ) : (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" /> All Changes Saved
          </span>
        )}
      </div>

      {/* Device Viewport Selector (If Preview is active) */}
      {showPreview && (
        <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-md">
          <button
            onClick={() => onDeviceChange('desktop')}
            className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
              previewDevice === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop View"
          >
            <Laptop className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDeviceChange('tablet')}
            className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
              previewDevice === 'tablet' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Tablet View"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDeviceChange('mobile')}
            className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
              previewDevice === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={onTogglePreview}
          className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
            showPreview
              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-lg shadow-indigo-500/10'
              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
          }`}
          title="Toggle Split Screen Live Preview"
        >
          {showPreview ? <Eye className="w-4 h-4 text-indigo-400" /> : <EyeOff className="w-4 h-4" />}
          <span className="hidden sm:inline">{showPreview ? 'Hide Preview' : 'Live Preview'}</span>
        </button>

        <GlassButton
          variant="secondary"
          size="sm"
          isLoading={isSaving}
          onClick={onSaveDraft}
          icon={<Save className="w-4 h-4 text-indigo-400" />}
        >
          Save Draft
        </GlassButton>

        <GlassButton
          variant="primary"
          size="sm"
          isLoading={isPublishing}
          onClick={onPublishLive}
          icon={<Send className="w-4 h-4" />}
        >
          Publish Live
        </GlassButton>
      </div>
    </header>
  );
};
