import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { connectToDatabase } from "./db";
import { AdminUser } from "./models";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        await connectToDatabase();
        const adminUser = await AdminUser.findOne({
          email: email.toLowerCase().trim(),
        });

        if (!adminUser || !adminUser.isActive) return null;

        const passwordMatches = await bcrypt.compare(
          password,
          adminUser.passwordHash,
        );
        if (!passwordMatches) return null;

        return {
          id: adminUser._id.toString(),
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role,
        };
      },
    }),
  ],
});
