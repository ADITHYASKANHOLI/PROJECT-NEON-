'use client';

import React from 'react';
import * as Icons from 'lucide-react';

interface IconPickerProps {
  name: string;
  className?: string;
  size?: number;
}

export const availableIconNames = [
  'Sparkles', 'Zap', 'Cpu', 'ShieldCheck', 'Layers', 'Globe',
  'Layout', 'Smartphone', 'Code', 'Database', 'Activity', 'Award',
  'BarChart3', 'Box', 'Compass', 'Feather', 'Flame', 'Gauge',
  'Grid', 'Heart', 'Image', 'Key', 'Lock', 'Maximize',
  'MessageSquare', 'Moon', 'Package', 'Rocket', 'Search', 'Send',
  'Sliders', 'Star', 'Sun', 'Terminal', 'User', 'Video'
];

export const DynamicIcon: React.FC<IconPickerProps> = ({ name, className = 'w-5 h-5', size }) => {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.Sparkles;
  return <IconComponent className={className} size={size} />;
};
