import { cookies } from 'next/headers';

export const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || 'admin@projectneon.design',
  secondaryEmail: process.env.ADMIN_SECONDARY_EMAIL || 'admin@aura.design',
  password: process.env.ADMIN_PASSWORD || 'admin123',
};

const SESSION_COOKIE_NAME = 'aura_admin_session';
const MOCK_TOKEN = process.env.ADMIN_SESSION_TOKEN || 'aura_secure_jwt_token_2026_hackathon_super_admin';

export async function verifyAdminCredentials(email: string, pass: string): Promise<boolean> {
  const normalized = email.toLowerCase();
  const validEmail =
    normalized === ADMIN_CREDENTIALS.email.toLowerCase() ||
    normalized === ADMIN_CREDENTIALS.secondaryEmail.toLowerCase();
  return validEmail && pass === ADMIN_CREDENTIALS.password;
}

export async function setAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set({
    name: SESSION_COOKIE_NAME,
    value: MOCK_TOKEN,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function isAuthenticatedAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  return sessionCookie?.value === MOCK_TOKEN;
}
