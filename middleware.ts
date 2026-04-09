import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Many clients still request /favicon.ico first; serve the PNG favicon with the correct type. */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/favicon.ico") {
    return NextResponse.rewrite(new URL("/favicon.png", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/favicon.ico",
};
