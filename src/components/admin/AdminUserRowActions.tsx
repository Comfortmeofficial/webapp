"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  deleteAdminUserAction,
  toggleAdminActiveAction,
} from "@/lib/actions/admin-user-actions";

export default function AdminUserRowActions({
  adminUserId,
  isActive,
  isSelf,
}: {
  adminUserId: string;
  isActive: boolean;
  isSelf: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  if (isSelf) {
    return <span className="text-xs text-[#8a9096]">This is you</span>;
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await toggleAdminActiveAction(adminUserId);
            router.refresh();
          })
        }
        className="rounded-md border border-[#d4e6df] px-2.5 py-1 text-xs font-medium text-[#256169] transition hover:bg-[#d4e6df]/20 disabled:opacity-50"
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          if (!confirm("Delete this admin account? This can't be undone.")) return;
          startTransition(async () => {
            await deleteAdminUserAction(adminUserId);
            router.refresh();
          });
        }}
        className="rounded-md border border-red-200 px-2.5 py-1 text-xs font-medium text-red-700 transition hover:bg-red-50 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}
