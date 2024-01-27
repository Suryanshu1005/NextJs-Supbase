import {supabaseRouteHandler} from "@/app/utils/supabase";
import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const reqUrl = new URL(req.url);
  const code = reqUrl.searchParams.get("code");

  if (code) {
    const supabase = supabaseRouteHandler(cookies);
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(reqUrl.origin);
}
