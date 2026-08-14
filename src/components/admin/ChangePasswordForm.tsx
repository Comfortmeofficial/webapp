"use client";

import { useActionState } from "react";
import {
  changeOwnPasswordAction,
  type ChangePasswordState,
} from "@/lib/actions/profile-actions";

const initialState: ChangePasswordState = { error: null };

export default function ChangePasswordForm() {
  const [state, formAction, isPending] = useActionState(
    changeOwnPasswordAction,
    initialState,
  );

  return (
    <form
      action={formAction}
      key={state.success ? "reset" : "form"}
      className="max-w-sm space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">
          Current password
        </label>
        <input
          name="currentPassword"
          type="password"
          required
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e252a]">
          New password
        </label>
        <input
          name="newPassword"
          type="password"
          required
          minLength={8}
          className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>
      {state.error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Password updated.
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-[#18535b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#123f45] disabled:opacity-60"
      >
        {isPending ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}
