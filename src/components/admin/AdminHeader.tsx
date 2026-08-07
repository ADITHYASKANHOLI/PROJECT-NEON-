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
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return isoString;
    }
  };

  return (
    <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between gap-6 shrink-0 bg-[#06080e]/90 backdrop-blur-xl z-20 select-none">
      {/* Title & Metadata */}
      <div className="flex items-center gap-4 min-w-0">
        <div>
          <h1 className="text-base font-bold text-white capitalize truncate">{activeTabTitle}</h1>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              Saved: {formatTime(lastSavedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Published: {formatTime(lastPublishedAt)}
            </span>
          </div>
        </div>

        {/* Live Status Pill */}
        {hasUnsavedChanges ? (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="w-3 h-3" /> Unsaved
          </span>
        ) : (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Saved
          </span>
        )}
      </div>

      {/* Right Action Controls */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Device Viewport Selector */}
        {showPreview && (
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
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

        {/* Hide/Show Live Preview */}
        <button
          onClick={onTogglePreview}
          className={`px-3 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            showPreview
              ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30 shadow-sm shadow-cyan-500/10'
              : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
          }`}
          title="Toggle Split Screen Live Preview"
        >
          {showPreview ? <Eye className="w-4 h-4 text-cyan-400" /> : <EyeOff className="w-4 h-4" />}
          <span className="hidden sm:inline">{showPreview ? 'Hide Preview' : 'Live Preview'}</span>
        </button>

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

        {/* Publish Live */}
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
