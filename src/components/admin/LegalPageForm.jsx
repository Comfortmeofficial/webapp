"use client";

import { useActionState, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { updateLegalPageAction } from "@/lib/actions/legal-page-actions";

const initialState = { error: null };

export default function LegalPageForm({ slug, title, contentMarkdown }) {
  const [state, formAction, isPending] = useActionState(
    updateLegalPageAction,
    initialState,
  );
  const [content, setContent] = useState(contentMarkdown);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <form action={formAction} className="max-w-3xl space-y-4">
      <input type="hidden" name="slug" value={slug} />

      <div>
        <label className="block text-sm font-medium text-[#1e252a]">
          Page title
        </label>
        <input
          name="title"
          defaultValue={title}
          required
          className="mt-1 w-full max-w-md rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-[#1e252a]">
            Content (Markdown)
          </label>
          <button
            type="button"
            onClick={() => setShowPreview((v) => !v)}
            className="text-xs font-medium text-[#18535b] underline"
          >
            {showPreview ? "Edit" : "Preview"}
          </button>
        </div>
        <input type="hidden" name="contentMarkdown" value={content} />
        {showPreview ? (
          <div className="prose prose-sm mt-1 max-w-none rounded-md border border-[#d9d9d9] px-3 py-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || "*Nothing to preview yet.*"}
            </ReactMarkdown>
          </div>
        ) : (
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            rows={16}
            required
            className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 font-mono text-sm outline-none focus:border-[#18535b]"
          />
        )}
      </div>

      {state.error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Saved.
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-[#18535b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#123f45] disabled:opacity-60"
      >
        {isPending ? "Saving…" : "Save changes"}
      </button>
    </form>
  );
}
