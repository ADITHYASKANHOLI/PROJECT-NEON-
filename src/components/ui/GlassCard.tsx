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
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    e.currentTarget.style.setProperty('--mouse-opacity', '1');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mouse-opacity', '0');
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect ? { y: -4, scale: 1.008 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'relative rounded-3xl p-6 sm:p-8 glass-panel liquid-bubble-container overflow-hidden transition-all duration-300',
        hoverEffect && 'glass-card-hover cursor-pointer',
        glow && 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/15 before:via-purple-500/5 before:to-transparent before:opacity-75',
        className
      )}
    >
      {/* Specular Edge Highlight Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none z-10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
