"use client";

import { useActionState } from "react";
import {
  createAdminUserAction,
  type AdminUserFormState,
} from "@/lib/actions/admin-user-actions";

const initialState: AdminUserFormState = { error: null };

export default function AdminUserForm() {
  const [state, formAction, isPending] = useActionState(
    createAdminUserAction,
    initialState,
  );

  return (
    <form
      action={formAction}
      key={state.success ? "reset" : "form"}
      className="grid max-w-2xl gap-4 sm:grid-cols-2"
    >
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">Name</label>
        <input
          name="name"
          required
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">Email</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">
          Temporary password
        </label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">Role</label>
        <select
          name="role"
          defaultValue="admin"
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        >
          <option value="admin">Admin</option>
          <option value="super_admin">Super Admin</option>
        </select>
      </div>

      {state.error && (
        <p className="sm:col-span-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="sm:col-span-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Admin created.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-[#18535b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#123f45] disabled:opacity-60"
        >
          {isPending ? "Creating…" : "Create admin"}
        </button>
      </div>
    </form>
  );
}
