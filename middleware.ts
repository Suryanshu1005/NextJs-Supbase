import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  const supabase = createMiddlewareClient({req, res});
  const data = await supabase.auth.getSession();

  // if (pathname === "/login" && data?.data?.session) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  console.log("res", res);
  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login"],
};
