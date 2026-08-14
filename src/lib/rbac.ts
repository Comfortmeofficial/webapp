import "server-only";
import { auth } from "@/lib/auth";
import type { AdminRole } from "@/lib/models";

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

/**
 * Every mutating server action calls this itself — middleware only guards
 * page navigation, not server action invocations, so without this check a
 * signed-out request could still call a server action directly.
 */
export async function requireSession() {
  const session = await auth();
  if (!session?.user) throw new UnauthorizedError("You must be signed in.");
  return session;
}

export async function requireRole(...allowedRoles: AdminRole[]) {
  const session = await requireSession();
  if (!allowedRoles.includes(session.user.role)) {
    throw new UnauthorizedError(
      `This action requires one of these roles: ${allowedRoles.join(", ")}.`,
    );
  }
  return session;
}

export async function requireSuperAdmin() {
  return requireRole("super_admin");
}
