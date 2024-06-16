import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/select-org(.*)",
  "/organization(.*)",
]);

export default clerkMiddleware((auth, req, res: NextFetchEvent) => {
  const { userId, orgId } = auth();

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

  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
