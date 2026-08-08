'use client';

import React from 'react';

interface BiocoreLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'emblem' | 'full';
  showTagline?: boolean;
  showLegalEntity?: boolean;
  className?: string;
}

export const BiocoreLogo: React.FC<BiocoreLogoProps> = ({
  size = 'md',
  variant = 'emblem',
  showTagline = true,
  showLegalEntity = true,
  className = '',
}) => {
  const emblemSizes = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-13 sm:h-15',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-[11px] sm:text-[12px]',
  };

  if (variant === 'full') {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        {/* Full Official BIOCORE Logo Image (Transparent PNG) */}
        <img
          src="/biocore-logo.png"
          alt="BIOCORE — Advancing Science, Enriching Life"
          className={`${emblemSizes[size]} w-auto object-contain transition-transform group-hover:scale-[1.02]`}
        />
      </div>
    );
  }

  // Variant: Emblem (Standalone B Emblem + Clean Typography)
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}>
      {/* Standalone BIOCORE "B" Emblem Asset (100% Transparent PNG) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/biocore-emblem.png"
          alt="BIOCORE Emblem"
          className={`${emblemSizes[size]} w-auto object-contain filter drop-shadow(0 4px 12px rgba(16,185,129,0.25)) group-hover:scale-[1.04] transition-transform`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className={`${textSizes[size]} font-black tracking-wider text-white uppercase font-sans`}>
          <span className="text-orange-500">BIO</span>
          <span className="text-slate-100">CORE</span>
        </span>
        {showTagline && (
          <span className={`${taglineSizes[size]} font-serif italic text-slate-300 tracking-wide mt-0.5`}>
            Advancing Science, Enriching Life
          </span>
        )}
      </div>
    </div>
  );
};
