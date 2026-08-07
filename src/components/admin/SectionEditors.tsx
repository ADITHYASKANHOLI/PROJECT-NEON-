'use client';

import React from 'react';
import { SiteContent, FeatureItem, StatItem, GalleryItem, MilestoneItem, TestimonialItem, NavItem } from '@/lib/types';
import { GlassInput } from '@/components/ui/GlassInput';
import { GlassToggle } from '@/components/ui/GlassToggle';
import { GlassButton } from '@/components/ui/GlassButton';
import { availableIconNames, DynamicIcon } from '@/components/ui/IconPicker';
import { Plus, Trash2, ArrowUp, ArrowDown, Sparkles, FolderOpen } from 'lucide-react';

interface EditorProps {
  draft: SiteContent;
  onChange: (updatedDraft: SiteContent) => void;
  onOpenMedia?: (onSelect: (url: string) => void) => void;
}

/* ---------------- HERO EDITOR ---------------- */
export const HeroEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const hero = draft.hero;

  const update = (field: keyof typeof hero, value: any) => {
    onChange({
      ...draft,
      hero: { ...hero, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Hero Section Content</h3>
        <GlassToggle
          checked={hero.isVisible}
          onChange={(v) => update('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Headline Prefix"
          value={hero.headline}
          onChange={(e) => update('headline', e.target.value)}
        />
        <GlassInput
          label="Gradient Highlight Text"
          value={hero.highlightText}
          onChange={(e) => update('highlightText', e.target.value)}
        />
      </div>

      <GlassInput
        label="Badge Tagline Text"
        value={hero.badgeText}
        onChange={(e) => update('badgeText', e.target.value)}
      />

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Subtitle Statement
        </label>
        <textarea
          rows={3}
          value={hero.subtitle}
          onChange={(e) => update('subtitle', e.target.value)}
          className="w-full glass-input rounded-xl p-3 text-sm text-slate-100 placeholder-slate-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Primary CTA Text"
          value={hero.primaryCtaText}
          onChange={(e) => update('primaryCtaText', e.target.value)}
        />
        <GlassInput
          label="Primary CTA Target URL"
          value={hero.primaryCtaUrl}
          onChange={(e) => update('primaryCtaUrl', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Secondary CTA Text"
          value={hero.secondaryCtaText}
          onChange={(e) => update('secondaryCtaText', e.target.value)}
        />
        <GlassInput
          label="Secondary CTA Target URL"
          value={hero.secondaryCtaUrl}
          onChange={(e) => update('secondaryCtaUrl', e.target.value)}
        />
      </div>

      <GlassInput
        label="Hero Visual Image URL"
        value={hero.imageUrl}
        onChange={(e) => update('imageUrl', e.target.value)}
      />

      <GlassToggle
        checked={hero.showScrollIndicator}
        onChange={(v) => update('showScrollIndicator', v)}
        label="Show Animated Scroll Down Indicator"
      />
    </div>
  );
};

/* ---------------- ABOUT EDITOR ---------------- */
export const AboutEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const about = draft.about;

  const update = (field: keyof typeof about, value: any) => {
    onChange({
      ...draft,
      about: { ...about, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">About Section Content</h3>
        <GlassToggle
          checked={about.isVisible}
          onChange={(v) => update('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Badge Tag"
          value={about.badge}
          onChange={(e) => update('badge', e.target.value)}
        />
        <GlassInput
          label="Main Headline"
          value={about.title}
          onChange={(e) => update('title', e.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Primary Description
        </label>
        <textarea
          rows={3}
          value={about.description}
          onChange={(e) => update('description', e.target.value)}
          className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
        />
      </div>

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Secondary Description
        </label>
        <textarea
          rows={2}
          value={about.secondaryDescription}
          onChange={(e) => update('secondaryDescription', e.target.value)}
          className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
        />
      </div>

      <GlassInput
        label="Featured Image URL"
        value={about.imageUrl}
        onChange={(e) => update('imageUrl', e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Metric Badge Value"
          value={about.statValue}
          onChange={(e) => update('statValue', e.target.value)}
        />
        <GlassInput
          label="Metric Badge Label"
          value={about.statLabel}
          onChange={(e) => update('statLabel', e.target.value)}
        />
      </div>
    </div>
  );
};

/* ---------------- FEATURES EDITOR ---------------- */
export const FeaturesEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const features = draft.features;

  const updateHeader = (field: 'title' | 'subtitle' | 'isVisible', value: any) => {
    onChange({
      ...draft,
      features: { ...features, [field]: value },
    });
  };

  const updateItem = (id: string, field: keyof FeatureItem, value: any) => {
    const updatedItems = features.items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onChange({ ...draft, features: { ...features, items: updatedItems } });
  };

  const addItem = () => {
    const newItem: FeatureItem = {
      id: `feat-${Date.now()}`,
      iconName: 'Sparkles',
      title: 'New Feature Card',
      description: 'Enter feature description here.',
      order: features.items.length + 1,
      isVisible: true,
    };
    onChange({ ...draft, features: { ...features, items: [...features.items, newItem] } });
  };

  const deleteItem = (id: string) => {
    onChange({
      ...draft,
      features: { ...features, items: features.items.filter((i) => i.id !== id) },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Features & Services</h3>
        <GlassToggle
          checked={features.isVisible}
          onChange={(v) => updateHeader('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Title"
          value={features.title}
          onChange={(e) => updateHeader('title', e.target.value)}
        />
        <GlassInput
          label="Section Subtitle"
          value={features.subtitle}
          onChange={(e) => updateHeader('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
            Feature Cards List ({features.items.length})
          </h4>
          <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
            Add Feature
          </GlassButton>
        </div>

        {features.items.map((item, idx) => (
          <div key={item.id} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                  #{idx + 1}
                </span>
                <span className="text-sm font-bold text-white">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassToggle
                  checked={item.isVisible}
                  onChange={(v) => updateItem(item.id, 'isVisible', v)}
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassInput
                label="Card Title"
                value={item.title}
                onChange={(e) => updateItem(item.id, 'title', e.target.value)}
              />
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Select Icon
                </label>
                <select
                  value={item.iconName}
                  onChange={(e) => updateItem(item.id, 'iconName', e.target.value)}
                  className="w-full glass-input rounded-xl px-3 py-2 text-sm text-slate-100 bg-slate-900"
                >
                  {availableIconNames.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Description
              </label>
              <textarea
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassInput
                label="Badge Tag (Optional)"
                value={item.badge || ''}
                onChange={(e) => updateItem(item.id, 'badge', e.target.value)}
              />
              <GlassInput
                label="Link Text (Optional)"
                value={item.linkText || ''}
                onChange={(e) => updateItem(item.id, 'linkText', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- STATS EDITOR ---------------- */
export const StatsEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const stats = draft.stats;

  const updateHeader = (field: 'title' | 'subtitle' | 'isVisible', value: any) => {
    onChange({ ...draft, stats: { ...stats, [field]: value } });
  };

  const updateItem = (id: string, field: keyof StatItem, value: any) => {
    const updatedItems = stats.items.map((i) => (i.id === id ? { ...i, [field]: value } : i));
    onChange({ ...draft, stats: { ...stats, items: updatedItems } });
  };

  const addItem = () => {
    const newItem: StatItem = {
      id: `stat-${Date.now()}`,
      number: '100+',
      label: 'New Metric',
      description: 'Metric explanation text',
      order: stats.items.length + 1,
      isVisible: true,
    };
    onChange({ ...draft, stats: { ...stats, items: [...stats.items, newItem] } });
  };

  const deleteItem = (id: string) => {
    onChange({ ...draft, stats: { ...stats, items: stats.items.filter((i) => i.id !== id) } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Statistics Section</h3>
        <GlassToggle
          checked={stats.isVisible}
          onChange={(v) => updateHeader('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Title"
          value={stats.title}
          onChange={(e) => updateHeader('title', e.target.value)}
        />
        <GlassInput
          label="Section Subtitle"
          value={stats.subtitle}
          onChange={(e) => updateHeader('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
            Counters ({stats.items.length})
          </h4>
          <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
            Add Metric
          </GlassButton>
        </div>

        {stats.items.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">{item.number} — {item.label}</span>
              <div className="flex items-center gap-3">
                <GlassToggle
                  checked={item.isVisible}
                  onChange={(v) => updateItem(item.id, 'isVisible', v)}
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassInput
                label="Number Value (e.g. $1.4B+)"
                value={item.number}
                onChange={(e) => updateItem(item.id, 'number', e.target.value)}
              />
              <GlassInput
                label="Metric Label"
                value={item.label}
                onChange={(e) => updateItem(item.id, 'label', e.target.value)}
              />
              <GlassInput
                label="Description"
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- GALLERY EDITOR ---------------- */
export const GalleryEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const gallery = draft.gallery;

  const updateHeader = (field: 'title' | 'subtitle' | 'isVisible', value: any) => {
    onChange({ ...draft, gallery: { ...gallery, [field]: value } });
  };

  const updateItem = (id: string, field: keyof GalleryItem, value: any) => {
    const updatedItems = gallery.items.map((i) => (i.id === id ? { ...i, [field]: value } : i));
    onChange({ ...draft, gallery: { ...gallery, items: updatedItems } });
  };

  const addItem = () => {
    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: 'New Showcase Project',
      category: 'SaaS',
      description: 'Project details and tech stack overview.',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      order: gallery.items.length + 1,
      isVisible: true,
    };
    onChange({ ...draft, gallery: { ...gallery, items: [...gallery.items, newItem] } });
  };

  const deleteItem = (id: string) => {
    onChange({ ...draft, gallery: { ...gallery, items: gallery.items.filter((i) => i.id !== id) } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Showcase Gallery</h3>
        <GlassToggle
          checked={gallery.isVisible}
          onChange={(v) => updateHeader('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Title"
          value={gallery.title}
          onChange={(e) => updateHeader('title', e.target.value)}
        />
        <GlassInput
          label="Section Subtitle"
          value={gallery.subtitle}
          onChange={(e) => updateHeader('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
            Gallery Projects ({gallery.items.length})
          </h4>
          <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
            Add Project
          </GlassButton>
        </div>

        {gallery.items.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.imageUrl} alt={item.title} className="w-10 h-10 rounded-lg object-cover" />
                <span className="text-sm font-bold text-white">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassToggle
                  checked={item.isVisible}
                  onChange={(v) => updateItem(item.id, 'isVisible', v)}
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassInput
                label="Project Title"
                value={item.title}
                onChange={(e) => updateItem(item.id, 'title', e.target.value)}
              />
              <GlassInput
                label="Category Tag"
                value={item.category}
                onChange={(e) => updateItem(item.id, 'category', e.target.value)}
              />
            </div>

            <GlassInput
              label="Image URL"
              value={item.imageUrl}
              onChange={(e) => updateItem(item.id, 'imageUrl', e.target.value)}
            />

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Description
              </label>
              <textarea
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- TIMELINE EDITOR ---------------- */
export const TimelineEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const timeline = draft.timeline;

  const updateHeader = (field: 'title' | 'subtitle' | 'isVisible', value: any) => {
    onChange({ ...draft, timeline: { ...timeline, [field]: value } });
  };

  const updateItem = (id: string, field: keyof MilestoneItem, value: any) => {
    const updatedItems = timeline.items.map((i) => (i.id === id ? { ...i, [field]: value } : i));
    onChange({ ...draft, timeline: { ...timeline, items: updatedItems } });
  };

  const addItem = () => {
    const newItem: MilestoneItem = {
      id: `time-${Date.now()}`,
      year: '2026',
      title: 'New Milestone Achievement',
      description: 'Milestone summary details',
      tag: 'MILESTONE',
      order: timeline.items.length + 1,
      isVisible: true,
    };
    onChange({ ...draft, timeline: { ...timeline, items: [...timeline.items, newItem] } });
  };

  const deleteItem = (id: string) => {
    onChange({ ...draft, timeline: { ...timeline, items: timeline.items.filter((i) => i.id !== id) } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Timeline Journey</h3>
        <GlassToggle
          checked={timeline.isVisible}
          onChange={(v) => updateHeader('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Title"
          value={timeline.title}
          onChange={(e) => updateHeader('title', e.target.value)}
        />
        <GlassInput
          label="Section Subtitle"
          value={timeline.subtitle}
          onChange={(e) => updateHeader('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
            Milestone Entries ({timeline.items.length})
          </h4>
          <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
            Add Milestone
          </GlassButton>
        </div>

        {timeline.items.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">
                {item.year} — {item.title}
              </span>
              <div className="flex items-center gap-3">
                <GlassToggle
                  checked={item.isVisible}
                  onChange={(v) => updateItem(item.id, 'isVisible', v)}
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassInput
                label="Year/Date"
                value={item.year}
                onChange={(e) => updateItem(item.id, 'year', e.target.value)}
              />
              <GlassInput
                label="Title"
                value={item.title}
                onChange={(e) => updateItem(item.id, 'title', e.target.value)}
              />
              <GlassInput
                label="Badge Tag"
                value={item.tag}
                onChange={(e) => updateItem(item.id, 'tag', e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Description
              </label>
              <textarea
                rows={2}
                value={item.description}
                onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- TESTIMONIALS EDITOR ---------------- */
export const TestimonialsEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const testimonials = draft.testimonials;

  const updateHeader = (field: 'title' | 'subtitle' | 'isVisible', value: any) => {
    onChange({ ...draft, testimonials: { ...testimonials, [field]: value } });
  };

  const updateItem = (id: string, field: keyof TestimonialItem, value: any) => {
    const updatedItems = testimonials.items.map((i) => (i.id === id ? { ...i, [field]: value } : i));
    onChange({ ...draft, testimonials: { ...testimonials, items: updatedItems } });
  };

  const addItem = () => {
    const newItem: TestimonialItem = {
      id: `test-${Date.now()}`,
      name: 'Client Name',
      role: 'VP of Product',
      company: 'Tech Brand',
      quote: 'Exceptional visual design and live CMS execution.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      order: testimonials.items.length + 1,
      isVisible: true,
    };
    onChange({ ...draft, testimonials: { ...testimonials, items: [...testimonials.items, newItem] } });
  };

  const deleteItem = (id: string) => {
    onChange({
      ...draft,
      testimonials: { ...testimonials, items: testimonials.items.filter((i) => i.id !== id) },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Testimonials Section</h3>
        <GlassToggle
          checked={testimonials.isVisible}
          onChange={(v) => updateHeader('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Section Title"
          value={testimonials.title}
          onChange={(e) => updateHeader('title', e.target.value)}
        />
        <GlassInput
          label="Section Subtitle"
          value={testimonials.subtitle}
          onChange={(e) => updateHeader('subtitle', e.target.value)}
        />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
            Quotes ({testimonials.items.length})
          </h4>
          <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
            Add Testimonial
          </GlassButton>
        </div>

        {testimonials.items.map((item) => (
          <div key={item.id} className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.avatarUrl} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm font-bold text-white">{item.name} — {item.company}</span>
              </div>
              <div className="flex items-center gap-3">
                <GlassToggle
                  checked={item.isVisible}
                  onChange={(v) => updateItem(item.id, 'isVisible', v)}
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="p-1.5 text-rose-400 hover:bg-rose-500/10 rounded-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlassInput
                label="Author Name"
                value={item.name}
                onChange={(e) => updateItem(item.id, 'name', e.target.value)}
              />
              <GlassInput
                label="Role / Designation"
                value={item.role}
                onChange={(e) => updateItem(item.id, 'role', e.target.value)}
              />
              <GlassInput
                label="Company Name"
                value={item.company}
                onChange={(e) => updateItem(item.id, 'company', e.target.value)}
              />
            </div>

            <GlassInput
              label="Avatar Image URL"
              value={item.avatarUrl}
              onChange={(e) => updateItem(item.id, 'avatarUrl', e.target.value)}
            />

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Quote Statement
              </label>
              <textarea
                rows={2}
                value={item.quote}
                onChange={(e) => updateItem(item.id, 'quote', e.target.value)}
                className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------------- NAV & FOOTER & SETTINGS EDITORS ---------------- */
export const NavEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const nav = draft.navigation;

  const updateItem = (id: string, field: keyof NavItem, value: any) => {
    const updated = nav.map((i) => (i.id === id ? { ...i, [field]: value } : i));
    onChange({ ...draft, navigation: updated });
  };

  const addItem = () => {
    const newItem: NavItem = {
      id: `nav-${Date.now()}`,
      label: 'New Link',
      url: '#',
      order: nav.length + 1,
    };
    onChange({ ...draft, navigation: [...nav, newItem] });
  };

  const deleteItem = (id: string) => {
    onChange({ ...draft, navigation: nav.filter((i) => i.id !== id) });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Header Navigation Links</h3>
        <GlassButton variant="secondary" size="sm" onClick={addItem} icon={<Plus className="w-3.5 h-3.5" />}>
          Add Link
        </GlassButton>
      </div>

      <div className="space-y-3">
        {nav.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 rounded-xl glass-panel border border-white/10">
            <GlassInput
              className="flex-1"
              value={item.label}
              onChange={(e) => updateItem(item.id, 'label', e.target.value)}
            />
            <GlassInput
              className="flex-1"
              value={item.url}
              onChange={(e) => updateItem(item.id, 'url', e.target.value)}
            />
            <button
              onClick={() => deleteItem(item.id)}
              className="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg shrink-0"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FooterEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const footer = draft.footer;

  const update = (field: keyof typeof footer, value: any) => {
    onChange({ ...draft, footer: { ...footer, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Footer Content</h3>
        <GlassToggle
          checked={footer.isVisible}
          onChange={(v) => update('isVisible', v)}
          label="Visible on Public Website"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Brand Name"
          value={footer.brandName}
          onChange={(e) => update('brandName', e.target.value)}
        />
        <GlassInput
          label="Tagline"
          value={footer.tagline}
          onChange={(e) => update('tagline', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassInput
          label="Contact Email"
          value={footer.contactEmail}
          onChange={(e) => update('contactEmail', e.target.value)}
        />
        <GlassInput
          label="Office Address"
          value={footer.contactAddress}
          onChange={(e) => update('contactAddress', e.target.value)}
        />
      </div>

      <GlassInput
        label="Copyright Statement"
        value={footer.copyrightText}
        onChange={(e) => update('copyrightText', e.target.value)}
      />
    </div>
  );
};

export const SettingsEditor: React.FC<EditorProps> = ({ draft, onChange }) => {
  const settings = draft.settings;

  const update = (field: keyof typeof settings, value: any) => {
    onChange({ ...draft, settings: { ...settings, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-lg font-bold text-white">Global Site Settings</h3>
      </div>

      <GlassInput
        label="Site Title (SEO Title)"
        value={settings.siteTitle}
        onChange={(e) => update('siteTitle', e.target.value)}
      />

      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Meta Description (SEO)
        </label>
        <textarea
          rows={3}
          value={settings.siteDescription}
          onChange={(e) => update('siteDescription', e.target.value)}
          className="w-full glass-input rounded-xl p-3 text-sm text-slate-100"
        />
      </div>

      <GlassInput
        label="Accent Highlight Color Hex"
        value={settings.accentColor}
        onChange={(e) => update('accentColor', e.target.value)}
      />
    </div>
  );
};
