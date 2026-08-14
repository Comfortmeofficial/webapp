import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f6f3] px-4">
      <div className="w-full max-w-sm rounded-lg border border-[#e6ebea] bg-white p-8 shadow-sm">
        <h1 className="font-serif text-2xl text-[#151b20]">BSY Legal Admin</h1>
        <p className="mt-1 text-sm text-[#6d747a]">
          Sign in to manage articles and site content.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
