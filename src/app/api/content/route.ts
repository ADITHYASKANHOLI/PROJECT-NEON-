import { NextResponse } from 'next/server';
import { fetchDraftContentFromDB, fetchPublishedContentFromDB } from '@/lib/supabase/service';
import { getStore } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode') || 'published';
  const full = searchParams.get('full') === 'true';

  if (full) {
    const store = getStore();
    const draft = await fetchDraftContentFromDB();
    const published = await fetchPublishedContentFromDB();
    return NextResponse.json({
      success: true,
      store: {
        ...store,
        draft,
        published,
      },
    });
  }

  if (mode === 'draft') {
    const content = await fetchDraftContentFromDB();
    return NextResponse.json({ success: true, mode: 'draft', content });
  }

  const content = await fetchPublishedContentFromDB();
  return NextResponse.json({ success: true, mode: 'published', content });
}
