import { supabase, isSupabaseConfigured } from './client';
import { setAdminSessionCookie, verifyAdminCredentials } from '@/lib/auth';

export async function loginAdminUser(email: string, pass: string): Promise<{ success: boolean; error?: string }> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: pass,
      });

      if (!error && data?.session) {
        await setAdminSessionCookie();
        return { success: true };
      }
    } catch (err: any) {
      console.warn('Supabase Auth sign in warning:', err?.message);
    }
  }

  // Verification Fallback for seeded admin credentials
  const isValid = await verifyAdminCredentials(email, pass);
  if (!isValid) {
    return { success: false, error: 'Invalid email or password.' };
  }

  await setAdminSessionCookie();
  return { success: true };
}
