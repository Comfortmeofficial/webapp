import { auth } from "@/lib/auth";
import ChangePasswordForm from "@/components/admin/ChangePasswordForm";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Profile</h1>
      <div className="mt-4 max-w-sm rounded-lg border border-[#e6ebea] bg-white p-5 text-sm">
        <p className="text-[#8a9096]">Name</p>
        <p className="text-[#1e252a]">{session?.user.name}</p>
        <p className="mt-3 text-[#8a9096]">Email</p>
        <p className="text-[#1e252a]">{session?.user.email}</p>
        <p className="mt-3 text-[#8a9096]">Role</p>
        <p className="capitalize text-[#1e252a]">
          {session?.user.role.replace("_", " ")}
        </p>
      </div>

      <h2 className="mt-8 text-sm font-semibold text-[#151b20]">
        Change password
      </h2>
      <div className="mt-3">
        <ChangePasswordForm />
      </div>
    </div>
  );
}
