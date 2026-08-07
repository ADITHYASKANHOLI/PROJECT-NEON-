import { NextResponse } from 'next/server';
import { saveDraftToDB } from '@/lib/supabase/service';
import { SiteContent } from '@/lib/types';
import { isAuthenticatedAdmin } from '@/lib/auth';

export async function POST(request: Request) {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const newDraft: SiteContent = body.content || body;

    if (!newDraft || !newDraft.hero) {
      return NextResponse.json({ success: false, error: 'Invalid content format' }, { status: 400 });
    }

    const updatedStore = await saveDraftToDB(newDraft);
    return NextResponse.json({
      success: true,
      message: 'Draft saved to database successfully',
      lastSavedAt: updatedStore.lastSavedAt,
      store: updatedStore,
    });
  } catch (err) {
    console.error('Save draft DB error:', err);
    return NextResponse.json({ success: false, error: 'Failed to save draft' }, { status: 500 });
  }
}
