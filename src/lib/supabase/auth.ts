import { supabase, isSupabaseConfigured } from './client';
import { setAdminSessionCookie, verifyAdminCredentials } from '@/lib/auth';

export async function loginAdminUser(email: string, pass: string): Promise<{ success: boolean; error?: string }> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data.session) {
        await setAdminSessionCookie();
        return { success: true };
      }
    } catch (err: any) {
      return { success: false, error: err?.message || 'Supabase authentication failed' };
    }
  }

  // Seeded / Fallback login verification
  const isValid = await verifyAdminCredentials(email, pass);
  if (!isValid) {
    return { success: false, error: 'Invalid email or password.' };
  }

  await setAdminSessionCookie();
  return { success: true };
}
