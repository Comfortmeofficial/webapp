import type { NextAuthConfig } from "next-auth";

// Split out from auth.ts because middleware runs on the Edge runtime, which
// can't load bcryptjs/Mongoose — this half only has route-protection rules,
// no Credentials provider, so it's safe for the Edge.
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
  },
  session: { strategy: "jwt" },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = Boolean(auth?.user);
      const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
      const isLoginPage = request.nextUrl.pathname === "/admin/login";

      if (isLoginPage) {
        // Already-logged-in users hitting /admin/login get bounced to the dashboard.
        if (isLoggedIn) {
          return Response.redirect(new URL("/admin", request.nextUrl));
        }
        return true;
      }

      if (isAdminRoute) return isLoggedIn;

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as "super_admin" | "admin";
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
