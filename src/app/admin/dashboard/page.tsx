'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SiteContent, DataStore } from '@/lib/types';
import { AdminSidebar, AdminTab } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { LivePreview } from '@/components/admin/LivePreview';
import { DashboardOverview } from '@/components/admin/DashboardOverview';
import { MediaManager } from '@/components/admin/MediaManager';
import { ToastContainer, ToastMessage } from '@/components/ui/Toast';
import {
  HeroEditor,
  AboutEditor,
  FeaturesEditor,
  StatsEditor,
  GalleryEditor,
  TimelineEditor,
  TestimonialsEditor,
  NavEditor,
  FooterEditor,
  SettingsEditor,
} from '@/components/admin/SectionEditors';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [collapsed, setCollapsed] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const [storeData, setStoreData] = useState<DataStore | null>(null);
  const [workingDraft, setWorkingDraft] = useState<SiteContent | null>(null);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', title: string, message?: string) => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // 1. Verify Authentication Session
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (!data.authenticated) {
          router.push('/admin/login');
        } else {
          setIsAuthLoading(false);
          loadStoreContent();
        }
      } catch {
        router.push('/admin/login');
      }
    }
    checkAuth();
  }, [router]);

  // 2. Load CMS Store Data
  const loadStoreContent = async () => {
    try {
      const res = await fetch('/api/content?full=true');
      const data = await res.json();
      if (data.success && data.store) {
        setStoreData(data.store);
        setWorkingDraft(JSON.parse(JSON.stringify(data.store.draft)));
        setHasUnsavedChanges(false);
      }
    } catch (err) {
      addToast('error', 'Store Load Failed', 'Could not fetch CMS data store.');
    }
  };

  // Handle Working Draft Changes (Triggered instantly by editors)
  const handleDraftChange = (newDraft: SiteContent) => {
    setWorkingDraft(newDraft);
    setHasUnsavedChanges(true);
  };

  // Save Draft to Store API
  const handleSaveDraft = async () => {
    if (!workingDraft) return;
    setIsSaving(true);
    try {
      const res = await fetch('/api/content/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: workingDraft }),
      });
      const data = await res.json();
      if (data.success) {
        setStoreData(data.store);
        setHasUnsavedChanges(false);
        addToast('success', 'Draft Saved', 'Your changes have been saved to the working draft.');
      } else {
        addToast('error', 'Save Failed', data.error || 'Could not save draft.');
      }
    } catch {
      addToast('error', 'Save Error', 'Connection failed while saving draft.');
    } finally {
      setIsSaving(false);
    }
  };

  // Publish Draft Live to Public Website API (Hackathon WOW #3)
  const handlePublishLive = async () => {
    if (hasUnsavedChanges) {
      await handleSaveDraft();
    }
    setIsPublishing(true);
    try {
      const res = await fetch('/api/content/publish', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        setStoreData(data.store);
        addToast('success', 'Published Live!', 'Website content has been updated on the public route /');
      } else {
        addToast('error', 'Publish Failed', data.error || 'Could not publish content.');
      }
    } catch {
      addToast('error', 'Publish Error', 'Connection error while publishing content.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (isAuthLoading || !workingDraft || !storeData) {
    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Loading CMS Workspace...</p>
        </div>
      </div>
    );
  }

  // Render Section Editor based on Active Tab
  const renderEditorContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <DashboardOverview
            draft={workingDraft}
            lastSavedAt={storeData.lastSavedAt}
            lastPublishedAt={storeData.lastPublishedAt}
            onNavigateTab={setActiveTab}
            onPublishLive={handlePublishLive}
          />
        );
      case 'hero':
        return <HeroEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'about':
        return <AboutEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'features':
        return <FeaturesEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'stats':
        return <StatsEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'gallery':
        return <GalleryEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'timeline':
        return <TimelineEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'testimonials':
        return <TestimonialsEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'navigation':
        return <NavEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'footer':
        return <FooterEditor draft={workingDraft} onChange={handleDraftChange} />;
      case 'media':
        return <MediaManager />;
      case 'settings':
        return <SettingsEditor draft={workingDraft} onChange={handleDraftChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex overflow-hidden">
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Header Bar */}
        <AdminHeader
          activeTabTitle={activeTab}
          hasUnsavedChanges={hasUnsavedChanges}
          isSaving={isSaving}
          isPublishing={isPublishing}
          lastSavedAt={storeData.lastSavedAt}
          lastPublishedAt={storeData.lastPublishedAt}
          onSaveDraft={handleSaveDraft}
          onPublishLive={handlePublishLive}
          showPreview={showPreview}
          onTogglePreview={() => setShowPreview(!showPreview)}
          previewDevice={previewDevice}
          onDeviceChange={setPreviewDevice}
        />

        {/* Content & Live Preview Split Screen */}
        <div className="flex-1 flex overflow-hidden p-6 gap-6">
          {/* Left Panel — CMS Editor */}
          <div
            className={`h-full overflow-y-auto pr-2 space-y-6 transition-all duration-300 ${
              showPreview ? 'w-full lg:w-1/2' : 'w-full max-w-4xl mx-auto'
            }`}
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 bg-slate-950/70">
              {renderEditorContent()}
            </div>
          </div>

          {/* Right Panel — Split Screen Live Preview (Hackathon WOW #2 & WOW #3) */}
          {showPreview && (
            <div className="hidden lg:block w-1/2 h-full">
              <LivePreview draft={workingDraft} device={previewDevice} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
