import bcrypt from "bcryptjs";
import { connectToDatabase } from "../src/lib/db";
import { AdminUser } from "../src/lib/models";

async function main() {
  const name = process.env.SEED_SUPER_ADMIN_NAME;
  const email = process.env.SEED_SUPER_ADMIN_EMAIL?.toLowerCase().trim();
  const password = process.env.SEED_SUPER_ADMIN_PASSWORD;

  if (!name || !email || !password) {
    throw new Error(
      "Set SEED_SUPER_ADMIN_NAME, SEED_SUPER_ADMIN_EMAIL, and SEED_SUPER_ADMIN_PASSWORD in .env.local before seeding.",
    );
  }
  if (password.length < 8) {
    throw new Error("SEED_SUPER_ADMIN_PASSWORD must be at least 8 characters.");
  }

  await connectToDatabase();

  const existing = await AdminUser.findOne({ email });
  if (existing) {
    console.log(`Super admin already exists for ${email} — nothing to do.`);
    process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 12);
  await AdminUser.create({
    name,
    email,
    passwordHash,
    role: "super_admin",
    isActive: true,
  });

  console.log(`Created super admin: ${email}`);
  console.log(
    "Sign in at /admin/login, then change this password from a password you'll actually remember — this one only exists in your env file.",
  );
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
