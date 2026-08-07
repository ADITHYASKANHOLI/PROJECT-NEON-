import { supabase, isSupabaseConfigured } from './client';
import { SiteContent, DataStore } from '@/lib/types';
import { getDraftContent as getLocalDraft, getPublishedContent as getLocalPublished, saveDraftContent as saveLocalDraft, publishDraftContent as publishLocalDraft, getStore as getLocalStore } from '@/lib/store';

export async function fetchPublishedContentFromDB(): Promise<SiteContent> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('cms_content')
        .select('content')
        .eq('id', 'published')
        .single();

      if (!error && data?.content) {
        return data.content as SiteContent;
      }
    } catch (err) {
      console.warn('Supabase fetch published failed, using local fallback:', err);
    }
  }
  return getLocalPublished();
}

export async function fetchDraftContentFromDB(): Promise<SiteContent> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('cms_content')
        .select('content')
        .eq('id', 'draft')
        .single();

      if (!error && data?.content) {
        return data.content as SiteContent;
      }
    } catch (err) {
      console.warn('Supabase fetch draft failed, using local fallback:', err);
    }
  }
  return getLocalDraft();
}

export async function saveDraftToDB(newDraft: SiteContent): Promise<DataStore> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('cms_content')
        .upsert({ id: 'draft', content: newDraft, updated_at: new Date().toISOString() });

      if (error) {
        console.error('Supabase save draft error:', error);
      }
    } catch (err) {
      console.error('Supabase save draft exception:', err);
    }
  }
  return saveLocalDraft(newDraft);
}

export async function publishDraftToDB(): Promise<DataStore> {
  const currentDraft = await fetchDraftContentFromDB();
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('cms_content')
        .upsert({ id: 'published', content: currentDraft, updated_at: new Date().toISOString() });

      if (error) {
        console.error('Supabase publish error:', error);
      }
    } catch (err) {
      console.error('Supabase publish exception:', err);
    }
  }
  return publishLocalDraft();
}

export async function uploadMediaToSupabase(file: File): Promise<string | null> {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase storage not configured');
    return null;
  }

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('website-media')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('website-media')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error('Media upload exception:', err);
    return null;
  }
}
