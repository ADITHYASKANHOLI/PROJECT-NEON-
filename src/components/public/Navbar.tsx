'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from '@/lib/types';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sparkles, Sun, Moon, Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  items: NavItem[];
  siteTitle?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ items, siteTitle = 'PROJECT NEON' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 pb-2 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto pointer-events-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel-neon shadow-2xl py-3 px-6 bg-slate-950/85 backdrop-blur-2xl'
            : 'bg-transparent py-4 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-black tracking-widest text-white group-hover:text-cyan-400 transition-colors uppercase">
              PROJECT <span className="text-cyan-400">NEON</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-cyan-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
            {items
              .sort((a, b) => a.order - b.order)
              .map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-all"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-cyan-500/20 text-slate-300 hover:text-white transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>

            <Link href="/admin">
              <GlassButton variant="primary" size="sm" icon={<Shield className="w-3.5 h-3.5" />}>
                Admin CMS
              </GlassButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2"
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-slate-200 hover:bg-white/10 rounded-xl"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <button
                onClick={toggleTheme}
                className="px-4 py-2 text-sm text-slate-300 flex items-center gap-2"
              >
                {isDark ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-purple-400" />} Toggle Theme
              </button>
              <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                <GlassButton variant="primary" size="sm" icon={<Shield className="w-3.5 h-3.5" />}>
                  Admin CMS
                </GlassButton>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};
