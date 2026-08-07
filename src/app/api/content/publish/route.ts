import { NextResponse } from 'next/server';
import { publishDraftContent } from '@/lib/store';
import { isAuthenticatedAdmin } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function POST() {
  const isAuth = await isAuthenticatedAdmin();
  if (!isAuth) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updatedStore = publishDraftContent();
    revalidatePath('/');
    return NextResponse.json({
      success: true,
      message: 'Published content live successfully',
      lastPublishedAt: updatedStore.lastPublishedAt,
      store: updatedStore,
    });
  } catch (err) {
    console.error('Publish content error:', err);
    return NextResponse.json({ success: false, error: 'Failed to publish content' }, { status: 500 });
  }
}
