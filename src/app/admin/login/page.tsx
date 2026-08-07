'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassInput } from '@/components/ui/GlassInput';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sparkles, Mail, Lock, ShieldCheck, KeyRound, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@aura.design');
  const [password, setPassword] = useState('admin123');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Authentication failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Radial Aura */}
      <div className="aura-glow-primary top-1/4 left-1/2 -translate-x-1/2" />

      <div className="max-w-md w-full relative z-10 space-y-6">
        {/* Brand Logo Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white mx-auto shadow-xl shadow-indigo-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-wider">AURA CMS VAULT</h1>
          <p className="text-xs text-slate-400 font-light">
            Authenticate to access live content editing & publish controls.
          </p>
        </div>

        {/* Glass Login Card */}
        <GlassCard className="p-8 border border-white/20 shadow-2xl bg-slate-950/80">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <GlassInput
              label="Admin Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-4 h-4" />}
            />

            <GlassInput
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-4 h-4" />}
            />

            <GlassButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isLoading}
              icon={<ShieldCheck className="w-4 h-4" />}
            >
              Sign In to CMS Dashboard
            </GlassButton>
          </form>

          {/* Seeded Credentials Note */}
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1.5 bg-white/5 p-3 rounded-xl">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Demo Administrator Account:</span>
            </div>
            <div className="font-mono text-[11px] text-slate-300">Email: admin@aura.design</div>
            <div className="font-mono text-[11px] text-slate-300">Password: admin123</div>
          </div>
        </GlassCard>

        <div className="text-center">
          <Link href="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </main>
  );
}
