import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Public pages
const publicPages = new Set([
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/set-password",
  "/auth/verify-code",
]);

export default async function middleware(req: NextRequest) {
  // Get the token from req
  const token = await getToken({ req });

  // If the req is for a public page.
  if (publicPages.has(req.nextUrl.pathname)) {
    // If not authenticated continue.
    if (!token) return NextResponse.next();

    // If user is authenticated, redirect to dashboard
    const redirectUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(redirectUrl);
  }
  // If the req is for a protected page and user is authenticated
  if (token) {
    // Continue to the requested page
    return NextResponse.next();
  }
  // If not authenticated, redirect to login page
  const redirectUrl = new URL("/auth/login", req.nextUrl.origin);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
