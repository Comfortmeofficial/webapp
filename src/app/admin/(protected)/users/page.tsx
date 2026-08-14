import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/lib/models";
import AdminUserForm from "@/components/admin/AdminUserForm";
import AdminUserRowActions from "@/components/admin/AdminUserRowActions";

export default async function AdminUsersPage() {
  const session = await auth();
  // This route is super-admin-only. The nav hides the link for regular
  // admins, but a direct URL visit must be blocked server-side too.
  if (session?.user.role !== "super_admin") redirect("/admin");

  await connectToDatabase();
  const admins = await AdminUser.find({}).sort({ createdAt: 1 }).lean();

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Admin Users</h1>

      <div className="mt-6 rounded-lg border border-[#e6ebea] bg-white p-5">
        <h2 className="text-sm font-semibold text-[#151b20]">Add an admin</h2>
        <div className="mt-3">
          <AdminUserForm />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f9faf9] text-xs uppercase text-[#8a9096]">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={String(admin._id)} className="border-t border-[#f0f2f1]">
                <td className="px-5 py-3 text-[#1e252a]">{admin.name}</td>
                <td className="px-5 py-3 text-[#5c656d]">{admin.email}</td>
                <td className="px-5 py-3 text-[#5c656d] capitalize">
                  {admin.role.replace("_", " ")}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase ${
                      admin.isActive
                        ? "bg-[#e3f3e6] text-[#1d7a35]"
                        : "bg-[#f2e6e6] text-[#8a2626]"
                    }`}
                  >
                    {admin.isActive ? "Active" : "Deactivated"}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <AdminUserRowActions
                    adminUserId={String(admin._id)}
                    isActive={admin.isActive}
                    isSelf={String(admin._id) === session!.user.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
