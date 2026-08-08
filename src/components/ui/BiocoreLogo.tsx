'use client';

import React from 'react';

interface BiocoreLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  showLegalEntity?: boolean;
  className?: string;
  darkContainer?: boolean;
}

export const BiocoreLogo: React.FC<BiocoreLogoProps> = ({
  size = 'md',
  showTagline = true,
  showLegalEntity = true,
  className = '',
  darkContainer = true,
}) => {
  // Height mappings for maintaining original proportions
  const heightMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  const imageContainer = (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      {/* Official BIOCORE Logo Image */}
      <img
        src="/biocore-logo.png"
        alt="BIOCORE — Advancing Science, Enriching Life"
        className={`${heightMap[size]} w-auto object-contain transition-transform group-hover:scale-[1.02]`}
      />
    </div>
  );

  if (darkContainer) {
    return (
      <div className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-md hover:bg-white transition-all group">
        {imageContainer}
      </div>
    );
  }

  return imageContainer;
};
