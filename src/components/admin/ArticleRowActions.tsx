"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  deleteArticleAction,
  publishArticleAction,
  unpublishArticleAction,
} from "@/lib/actions/article-actions";
import type { AdminRole } from "@/lib/models";

export default function ArticleRowActions({
  articleId,
  status,
  authorId,
  currentUserId,
  currentUserRole,
}: {
  articleId: string;
  status: "draft" | "published";
  authorId: string;
  currentUserId: string;
  currentUserRole: AdminRole;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const canPublish =
    currentUserRole === "super_admin" || currentUserId === authorId;
  const canDelete = currentUserRole === "super_admin";

  return (
    <div className="flex items-center gap-2">
      {canPublish && (
        <button
          type="button"
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              if (status === "published") {
                await unpublishArticleAction(articleId);
              } else {
                await publishArticleAction(articleId);
              }
              router.refresh();
            })
          }
          className="rounded-md border border-[#d4e6df] px-2.5 py-1 text-xs font-medium text-[#256169] transition hover:bg-[#d4e6df]/20 disabled:opacity-50"
        >
          {status === "published" ? "Unpublish" : "Publish"}
        </button>
      )}
      {canDelete && (
        <button
          type="button"
          disabled={isPending}
          onClick={() => {
            if (!confirm("Delete this article? This can't be undone.")) return;
            startTransition(async () => {
              await deleteArticleAction(articleId);
              router.refresh();
            });
          }}
          className="rounded-md border border-red-200 px-2.5 py-1 text-xs font-medium text-red-700 transition hover:bg-red-50 disabled:opacity-50"
        >
          Delete
        </button>
      )}
    </div>
  );
}
