import { createClient } from '@supabase/supabase-js';

// The user must provide their own config here via env variables in Vercel.
// We use fallback empty strings to prevent build crashes if the env vars are missing.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
