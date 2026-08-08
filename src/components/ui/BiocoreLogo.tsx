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
  // Height mappings for standalone B emblem to function visually as the letter "B"
  const emblemSizes = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-11 sm:h-13 md:h-15',
  };

  // Typography scale for "IOCORE" immediately following the B emblem
  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-[11px] sm:text-[13px]',
  };

  if (variant === 'full') {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <img
          src="/biocore-logo.png"
          alt="BIOCORE — Advancing Science, Enriching Life"
          className={`${emblemSizes[size]} w-auto object-contain transition-transform group-hover:scale-[1.02]`}
        />
      </div>
    );
  }

  // Unified Wordmark: [B Emblem] + IOCORE = BIOCORE
  return (
    <div className={`inline-flex flex-col select-none group ${className}`}>
      {/* Primary Wordmark Row: Emblem acts as the "B", followed by IOCORE */}
      <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
        {/* Standalone BIOCORE "B" Emblem Character */}
        <img
          src="/biocore-emblem.png"
          alt="B"
          className={`${emblemSizes[size]} w-auto object-contain shrink-0 filter drop-shadow(0 3px 10px rgba(16,185,129,0.3)) group-hover:scale-[1.03] transition-transform`}
        />

        {/* Text "IOCORE" completing the wordmark to read "BIOCORE" */}
        <span className={`${textSizes[size]} font-black tracking-tight text-white uppercase font-sans flex items-center leading-none`}>
          <span className="text-orange-500">IO</span>
          <span className="text-slate-100">CORE</span>
        </span>
      </div>

      {/* Tagline immediately underneath the unified BIOCORE wordmark */}
      {showTagline && (
        <span className={`${taglineSizes[size]} font-serif italic text-slate-300 tracking-wide mt-1 pl-0.5`}>
          Advancing Science, Enriching Life
        </span>
      )}
    </div>
  );
};
