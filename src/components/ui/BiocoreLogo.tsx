'use client';

import React from 'react';

interface BiocoreLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showLegalEntity?: boolean;
  className?: string;
}

export const BiocoreLogo: React.FC<BiocoreLogoProps> = ({
  size = 'md',
  showLegalEntity = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[12px]',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Primary Symbol Emblem: Molecular DNA Double Helix + Bio-Electronic Node Hexagon */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-sky-700 p-0.5 flex items-center justify-center shadow-lg shadow-teal-500/25 border border-emerald-400/40 relative overflow-hidden shrink-0`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1 text-white"
        >
          {/* Hexagonal Outer Crystal Node */}
          <polygon
            points="20,4 34,12 34,28 20,36 6,28 6,12"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Internal DNA Double Helix & Molecular Node Core */}
          <path
            d="M13 14C17 17 23 23 27 26M27 14C23 17 17 23 13 26"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="13" cy="14" r="2" fill="#38bdf8" />
          <circle cx="27" cy="14" r="2" fill="#34d399" />
          <circle cx="13" cy="26" r="2" fill="#34d399" />
          <circle cx="27" cy="26" r="2" fill="#38bdf8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`${textSizes[size]} font-black tracking-wider text-white uppercase font-sans`}
        >
          BIO<span className="text-teal-400">CORE</span>
        </span>
        {showLegalEntity && (
          <span
            className={`${subtitleSizes[size]} font-mono font-medium tracking-widest text-slate-300 uppercase mt-0.5`}
          >
            Biocore Research LLP
          </span>
        )}
      </div>
    </div>
  );
};
