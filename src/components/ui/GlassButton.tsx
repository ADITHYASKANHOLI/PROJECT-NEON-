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
    'inline-flex items-center justify-center font-semibold tracking-wide transition-all focus:outline-none cursor-pointer select-none backdrop-blur-2xl relative overflow-hidden isolate liquid-bubble-container shadow-md';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5 rounded-xl min-h-[36px]',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-xl min-h-[42px]',
    lg: 'px-8 py-3.5 text-base gap-2.5 rounded-2xl font-bold min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-emerald-700 via-teal-600 to-orange-600 hover:from-emerald-600 hover:to-orange-500 text-white border border-white/15 border-t-white/35 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/30',
    secondary:
      'bg-white/8 hover:bg-white/14 text-white border border-white/12 border-t-white/25 shadow-sm shadow-slate-950/40',
    ghost:
      'bg-transparent hover:bg-white/8 text-slate-300 hover:text-white border border-transparent hover:border-white/10',
    danger:
      'bg-gradient-to-r from-rose-900 to-rose-700 hover:from-rose-800 text-white border border-white/12 border-t-white/25 shadow-md shadow-rose-950/40',
    success:
      'bg-gradient-to-r from-emerald-900 to-emerald-700 hover:from-emerald-800 text-white border border-white/12 border-t-white/25 shadow-md shadow-emerald-950/40',
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
      whileHover={{ scale: disabled || isLoading ? 1 : 1.015, y: disabled || isLoading ? 0 : -1.5 }}
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
      {/* Curved Button Corner Light Diffusion Overlay */}
      <div className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_65%)] pointer-events-none z-20" />

      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current relative z-10" />
      ) : (
        icon && <span className="shrink-0 relative z-10">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
