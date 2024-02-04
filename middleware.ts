import {NextResponse} from "next/server";
import {NextRequest} from "next/server";

import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  console.log("pathname", pathname);

  const supabase = createMiddlewareClient({req, res});
  const {data} = await supabase.auth.getSession();
  console.log("data", data);
  if (pathname === "/about-us" && !data?.session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/about-us"],
};
