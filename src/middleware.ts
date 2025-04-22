import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const publicPages = new Set([
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/set-password",
  "/auth/verify-code",
]);

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (publicPages.has(req.nextUrl.pathname)) {
    if (!token) return NextResponse.next();

    const redirectUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }

  if (token) {
    return NextResponse.next();
  }

  const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
