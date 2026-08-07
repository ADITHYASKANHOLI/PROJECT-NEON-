'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';

interface GlassButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all focus:outline-none cursor-pointer select-none backdrop-blur-2xl relative overflow-hidden liquid-bubble-container shadow-md';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5 rounded-xl min-h-[36px]',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-xl min-h-[42px]',
    lg: 'px-8 py-3.5 text-base gap-2.5 rounded-2xl font-bold min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500/90 via-cyan-600/90 to-purple-600/90 hover:from-cyan-400 hover:to-purple-500 text-white border border-cyan-400/40 border-t-white/60 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/45',
    secondary:
      'bg-white/10 hover:bg-white/18 text-white border border-white/20 border-t-white/50 shadow-sm shadow-slate-950/40',
    ghost:
      'bg-transparent hover:bg-white/10 text-slate-300 hover:text-white border border-transparent hover:border-white/15',
    danger:
      'bg-gradient-to-r from-rose-600/85 to-rose-500/85 hover:from-rose-500 text-white border border-rose-400/35 border-t-white/50 shadow-md shadow-rose-600/30',
    success:
      'bg-gradient-to-r from-emerald-600/85 to-emerald-500/85 hover:from-emerald-500 text-white border border-emerald-400/35 border-t-white/50 shadow-md shadow-emerald-600/30',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    e.currentTarget.style.setProperty('--mouse-opacity', '1');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.setProperty('--mouse-opacity', '0');
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02, y: disabled || isLoading ? 0 : -1.5 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.96 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      disabled={disabled || isLoading}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        (disabled || isLoading) && 'opacity-50 cursor-not-allowed pointer-events-none',
        className
      )}
      {...props}
    >
      {/* Top Specular Edge Light Trapping Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-20" />

      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current relative z-10" />
      ) : (
        icon && <span className="shrink-0 relative z-10">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
