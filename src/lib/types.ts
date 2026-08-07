export interface NavItem {
  id: string;
  label: string;
  url: string;
  order: number;
}

export interface HeroSection {
  headline: string;
  highlightText: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  imageUrl: string;
  badgeText: string;
  showScrollIndicator: boolean;
  isVisible: boolean;
}

export interface AboutSection {
  badge: string;
  title: string;
  description: string;
  secondaryDescription: string;
  imageUrl: string;
  statValue: string;
  statLabel: string;
  isVisible: boolean;
}

export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
  order: number;
  isVisible: boolean;
}

export interface FeatureSection {
  title: string;
  subtitle: string;
  items: FeatureItem[];
  isVisible: boolean;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
  description: string;
  order: number;
  isVisible: boolean;
}

export interface StatSection {
  title: string;
  subtitle: string;
  items: StatItem[];
  isVisible: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
  order: number;
  isVisible: boolean;
}

export interface GallerySection {
  title: string;
  subtitle: string;
  categories: string[];
  items: GalleryItem[];
  isVisible: boolean;
}

export interface MilestoneItem {
  id: string;
  year: string;
  title: string;
  description: string;
  tag: string;
  imageUrl?: string;
  order: number;
  isVisible: boolean;
}

export interface TimelineSection {
  title: string;
  subtitle: string;
  items: MilestoneItem[];
  isVisible: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  order: number;
  isVisible: boolean;
}

export interface TestimonialSection {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
  isVisible: boolean;
}

export interface CtaSection {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  backgroundGlow: string;
  isVisible: boolean;
}

export interface FooterSection {
  brandName: string;
  tagline: string;
  contactEmail: string;
  contactAddress: string;
  copyrightText: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
  isVisible: boolean;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  themeMode: 'dark' | 'light' | 'auto';
  accentColor: string;
}

export interface SiteContent {
  navigation: NavItem[];
  hero: HeroSection;
  about: AboutSection;
  features: FeatureSection;
  stats: StatSection;
  gallery: GallerySection;
  timeline: TimelineSection;
  testimonials: TestimonialSection;
  cta: CtaSection;
  footer: FooterSection;
  settings: SiteSettings;
}

export interface DataStore {
  draft: SiteContent;
  published: SiteContent;
  lastSavedAt: string;
  lastPublishedAt: string;
  version: number;
}
