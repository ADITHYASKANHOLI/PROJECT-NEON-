import { NextResponse } from 'next/server';
import { loginAdminUser } from '@/lib/supabase/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const result = await loginAdminUser(email, password);
    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error }, { status: 401 });
    }

    return NextResponse.json({ success: true, message: 'Logged in successfully' });
  } catch (err) {
    console.error('Login route error:', err);
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}
