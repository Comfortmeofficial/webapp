"use client";

import { useActionState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { TaxonomyFormState } from "@/lib/actions/taxonomy-actions";

const initialState: TaxonomyFormState = { error: null };

export default function TaxonomyManager({
  label,
  items,
  canManage,
  createAction,
  deleteAction,
}: {
  label: string;
  items: { id: string; name: string }[];
  canManage: boolean;
  createAction: (
    state: TaxonomyFormState,
    formData: FormData,
  ) => Promise<TaxonomyFormState>;
  deleteAction: (id: string) => Promise<void>;
}) {
  const [state, formAction, isPending] = useActionState(
    createAction,
    initialState,
  );
  const [isDeleting, startDeleteTransition] = useTransition();
  const router = useRouter();

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">{label}</h1>

      {canManage && (
        <form action={formAction} className="mt-6 flex max-w-md items-end gap-2">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#1e252a]">
              New {label.toLowerCase().replace(/s$/, "")}
            </label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="rounded-md bg-[#18535b] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#123f45] disabled:opacity-60"
          >
            Add
          </button>
        </form>
      )}
      {state.error && (
        <p className="mt-2 max-w-md rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <div className="mt-6 max-w-md overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
        {items.length === 0 && (
          <p className="p-4 text-sm text-[#8a9096]">Nothing here yet.</p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-[#f0f2f1] px-4 py-2.5 text-sm last:border-b-0"
          >
            <span className="text-[#1e252a]">{item.name}</span>
            {canManage && (
              <button
                type="button"
                disabled={isDeleting}
                onClick={() =>
                  startDeleteTransition(async () => {
                    await deleteAction(item.id);
                    router.refresh();
                  })
                }
                className="text-xs font-medium text-red-700 hover:underline disabled:opacity-50"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
