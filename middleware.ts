import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({req, res});
  const data = await supabase.auth.getSession();

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
