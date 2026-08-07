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
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all focus:outline-none cursor-pointer select-none backdrop-blur-xl relative overflow-hidden';
  
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-xl',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base gap-2.5 rounded-2xl font-bold',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500/90 via-cyan-600/90 to-purple-600/90 hover:from-cyan-400 hover:to-purple-500 text-white border border-cyan-400/40 border-t-white/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/20 border-t-white/40 shadow-sm shadow-slate-950/40',
    ghost: 'bg-transparent hover:bg-white/10 text-slate-300 hover:text-white border border-transparent',
    danger: 'bg-gradient-to-r from-rose-600/80 to-rose-500/80 hover:from-rose-500 text-white border border-rose-400/30 border-t-white/40 shadow-md shadow-rose-600/25',
    success: 'bg-gradient-to-r from-emerald-600/80 to-emerald-500/80 hover:from-emerald-500 text-white border border-emerald-400/30 border-t-white/40 shadow-md shadow-emerald-600/25',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02, y: disabled || isLoading ? 0 : -1 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
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
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
    </motion.button>
  );
};
