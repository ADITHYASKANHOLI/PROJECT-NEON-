import { NextResponse } from 'next/server';
import { getDraftContent, getPublishedContent, getStore } from '@/lib/store';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get('mode') || 'published';
  const full = searchParams.get('full') === 'true';

  if (full) {
    const store = getStore();
    return NextResponse.json({ success: true, store });
  }

  if (mode === 'draft') {
    const content = getDraftContent();
    return NextResponse.json({ success: true, mode: 'draft', content });
  }

  const content = getPublishedContent();
  return NextResponse.json({ success: true, mode: 'published', content });
}
