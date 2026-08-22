import { createClient } from "@supabase/supabase-js";

/**
 * Server-only client. Uses the service role key so submissions can be
 * inserted from a Server Action without needing public RLS write policies.
 * Never import this file from a "use client" component.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
