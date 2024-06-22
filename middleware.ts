import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/select-org(.*)",
  "/organization(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();

  // if logged in with no orgId, redirect to org selection
  if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url);
    return NextResponse.redirect(orgSelection);
  }

  // for logged in users, direct to org page or select org page
  if (!isProtectedRoute(req)) {
    if (orgId) {
      const orgPage = new URL(`/organization/${orgId}`, req.url);
      return NextResponse.redirect(orgPage);
    }
    if (userId) {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  }

  // protect routes
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
