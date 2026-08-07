'use client';

import React, { useState } from 'react';
import { GlassButton } from '@/components/ui/GlassButton';
import { GlassInput } from '@/components/ui/GlassInput';
import { Image as ImageIcon, Copy, Check, Plus, Trash2, Search } from 'lucide-react';

const presetMediaItems = [
  {
    id: 'm-1',
    title: 'Spatial Neon Glow',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    category: 'Hero',
  },
  {
    id: 'm-2',
    title: 'Modern Architecture',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    category: 'About',
  },
  {
    id: 'm-3',
    title: 'Cyber Desk Workspace',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    category: 'Gallery',
  },
  {
    id: 'm-4',
    title: 'Dark Financial Console',
    url: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1200&auto=format&fit=crop',
    category: 'Gallery',
  },
  {
    id: 'm-5',
    title: 'Generative Typography',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    category: 'Gallery',
  },
  {
    id: 'm-6',
    title: 'Mobile OS Interface',
    url: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1200&auto=format&fit=crop',
    category: 'Gallery',
  },
  {
    id: 'm-7',
    title: 'Executive Portrait 1',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    category: 'Avatar',
  },
  {
    id: 'm-8',
    title: 'Executive Portrait 2',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    category: 'Avatar',
  },
];

export const MediaManager: React.FC = () => {
  const [mediaList, setMediaList] = useState(presetMediaItems);
  const [search, setSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddMedia = () => {
    if (!newUrl) return;
    const newItem = {
      id: `m-${Date.now()}`,
      title: newTitle || 'Custom Upload Asset',
      url: newUrl,
      category: 'Custom',
    };
    setMediaList([newItem, ...mediaList]);
    setNewTitle('');
    setNewUrl('');
  };

  const handleDelete = (id: string) => {
    setMediaList(mediaList.filter((item) => item.id !== id));
  };

  const filtered = mediaList.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Media Assets Vault</h3>
          <p className="text-xs text-slate-400 mt-1">Manage photography assets, avatars, and hero visual graphics.</p>
        </div>
        <div className="w-full sm:w-72">
          <GlassInput
            icon={<Search className="w-4 h-4" />}
            placeholder="Search media assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Add New Media Asset Card */}
      <div className="p-6 rounded-3xl glass-panel border border-white/15 space-y-4">
        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Add Custom Image Asset</h4>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-4">
            <GlassInput
              placeholder="Image Title (Optional)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="sm:col-span-5">
            <GlassInput
              placeholder="Image Direct URL (https://...)"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3 flex items-end">
            <GlassButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={handleAddMedia}
              icon={<Plus className="w-4 h-4" />}
            >
              Add Asset
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Spacious Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group glass-panel rounded-2xl p-3 border border-white/10 space-y-3 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950">
              <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-white/10">
                {item.category}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 pt-1 px-1">
              <h5 className="text-xs font-bold text-white truncate">{item.title}</h5>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleCopy(item.url, item.id)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Image URL"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors cursor-pointer"
                  title="Delete Asset"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
