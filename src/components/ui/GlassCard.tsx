'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = false,
  glow = false,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'relative rounded-3xl p-6 sm:p-8 glass-panel overflow-hidden transition-all duration-300',
        hoverEffect && 'glass-card-hover cursor-pointer',
        glow && 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/15 before:via-purple-500/5 before:to-transparent before:opacity-75',
        className
      )}
    >
      {/* Specular Edge Highlight Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
