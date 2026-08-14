import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Next.js 16 renamed the `middleware.ts` convention to `proxy.ts` (same
// mechanism, Node.js runtime by default now). A second, minimal NextAuth
// instance built only from authConfig (no Credentials provider, so no
// bcryptjs/Mongoose import here) keeps this file cheap to run on every
// matched request — it only verifies the session cookie, it never touches
// the database.
const { auth } = NextAuth(authConfig);

export const proxy = auth;

export const config = {
  matcher: ["/admin/:path*"],
};
