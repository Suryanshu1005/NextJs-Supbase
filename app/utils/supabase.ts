import {
  createClientComponentClient,
  createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";

import {createClient} from "@supabase/supabase-js";

const URL: string | null | undefined =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const ANON: string | null | undefined =
  process.env.NEXT_PUBLIC_SUPABASE_ANON || "";

export const supabaseClient = createClient(URL, ANON, {
  auth: {persistSession: false},
});

export const supabaseComponent = createClientComponentClient();

export const supabaseRouteHandler = (cookies: any) => {
  const supabase = createRouteHandlerClient({cookies});
  return supabase;
};
