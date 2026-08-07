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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none rounded-xl cursor-pointer select-none backdrop-blur-md';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-5 py-2.5 text-sm gap-2 rounded-xl',
    lg: 'px-7 py-3.5 text-base gap-2.5 rounded-2xl font-semibold',
  };

  const variantStyles = {
    primary: 'bg-indigo-600/80 hover:bg-indigo-500/90 text-white border border-indigo-400/40 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35',
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/30 shadow-sm',
    ghost: 'bg-transparent hover:bg-white/10 text-slate-300 hover:text-white border border-transparent',
    danger: 'bg-rose-600/80 hover:bg-rose-500/90 text-white border border-rose-400/30 shadow-md shadow-rose-600/20',
    success: 'bg-emerald-600/80 hover:bg-emerald-500/90 text-white border border-emerald-400/30 shadow-md shadow-emerald-600/20',
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
