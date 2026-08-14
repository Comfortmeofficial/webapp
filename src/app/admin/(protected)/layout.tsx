import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // proxy.ts already blocks unauthenticated requests, but every protected
  // layout should fail closed on its own too rather than trust one gate.
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="flex min-h-screen bg-[#f5f6f3]">
      <AdminNav role={session.user.role} name={session.user.name ?? "Admin"} />
      <main className="flex-1 overflow-x-hidden px-8 py-8">{children}</main>
    </div>
  );
}
