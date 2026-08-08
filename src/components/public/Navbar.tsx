'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { BiocoreLogo } from '@/components/ui/BiocoreLogo';
import { Sun, Moon, Menu, X, ArrowRight, Dna } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  items: NavItem[];
  siteTitle?: string;
  isPreviewMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  items,
  siteTitle = 'BIOCORE',
  isPreviewMode = false,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isPreviewMode) return;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPreviewMode]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    e.currentTarget.style.setProperty('--mouse-opacity', '1');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--mouse-opacity', '0');
  };

  const headerPositionClass = isPreviewMode
    ? 'sticky top-0 left-0 right-0 z-30 px-3 sm:px-6 pt-3 pb-2'
    : 'fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 pb-2 pointer-events-none';

  return (
    <header className={headerPositionClass}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl sm:rounded-3xl liquid-bubble-container transition-all duration-300 ${
          scrolled || isPreviewMode
            ? 'glass-panel-biocore shadow-2xl py-2.5 px-4 sm:px-6 bg-slate-950/85 backdrop-blur-2xl border border-emerald-500/30'
            : 'glass-panel py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Official BIOCORE Standalone Emblem + Wordmark */}
          <Link href="/" className="group">
            <BiocoreLogo size="md" variant="emblem" showTagline={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-emerald-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
            {items
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/10 rounded-full liquid-bubble-container transition-all"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-emerald-500/20 text-slate-300 hover:text-white liquid-bubble-container transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-orange-400" />}
            </button>

            <a href="#contact">
              <GlassButton variant="primary" size="sm" icon={<Dna className="w-3.5 h-3.5" />}>
                Partner With Us
              </GlassButton>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-orange-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-white"
              aria-label="Toggle Mobile Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Mobile App-Like Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5"
            >
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-slate-200 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-1">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <GlassButton variant="primary" size="md" className="w-full justify-center" icon={<Dna className="w-4 h-4" />}>
                    Partner With Us
                  </GlassButton>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
