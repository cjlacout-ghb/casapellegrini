import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Lazy singleton: createClient is NOT called at module evaluation time.
// This prevents crashes during Next.js 16 Turbopack page-data collection
// when env vars are not yet forwarded to worker processes.
let _client: SupabaseClient | undefined;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
    _client = createClient(url, key);
  }
  return _client;
}

// Convenience proxy so existing `supabase.from(…)` call-sites keep working
// without modification.
export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_t, prop, receiver) {
    return Reflect.get(getSupabase(), prop, receiver);
  },
});
