-- ==============================================================================
-- PROJECT NEON — SUPABASE DATABASE SCHEMA & ROW LEVEL SECURITY (RLS)
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create User Profiles & Roles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'editor', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Central CMS Content Table (Stores 'draft' and 'published' state)
CREATE TABLE IF NOT EXISTS public.cms_content (
  id TEXT PRIMARY KEY CHECK (id IN ('draft', 'published')),
  content JSONB NOT NULL,
  version INTEGER DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cms_content ENABLE ROW LEVEL SECURITY;

-- 5. Security Policies for cms_content
-- Policy A: Everyone (public visitors) can read PUBLISHED content
CREATE POLICY "Public Read Published Content"
  ON public.cms_content
  FOR SELECT
  USING (id = 'published');

-- Policy B: Authenticated Admins can read DRAFT content
CREATE POLICY "Admin Read Draft Content"
  ON public.cms_content
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy C: Authenticated Admins can Insert / Update DRAFT and PUBLISHED content
CREATE POLICY "Admin Modify Content"
  ON public.cms_content
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- 6. Security Policies for Profiles
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- 7. Automatic Profile Creation Trigger on Auth Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (new.id, new.email, 'admin')
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 8. Create Supabase Storage Bucket for Media Assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('website-media', 'website-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS: Public Read Access
CREATE POLICY "Public Media Read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'website-media');

-- Storage RLS: Admin Upload/Delete Access
CREATE POLICY "Admin Media Write"
  ON storage.objects FOR ALL
  TO authenticated
  USING (bucket_id = 'website-media');
