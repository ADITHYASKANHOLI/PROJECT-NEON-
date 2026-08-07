import { NextResponse } from 'next/server';
import { verifyAdminCredentials, setAdminSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const isValid = await verifyAdminCredentials(email, password);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid email or password. Hint: admin@aura.design / admin123' },
        { status: 401 }
      );
    }

    await setAdminSessionCookie();
    return NextResponse.json({ success: true, message: 'Logged in successfully' });
  } catch (err) {
    console.error('Login route error:', err);
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}
