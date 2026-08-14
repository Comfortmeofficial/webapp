"use client";

import { useActionState, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { saveArticleAction, type ArticleFormState } from "@/lib/actions/article-actions";
import { uploadArticleImageAction } from "@/lib/actions/media-actions";

type Option = { id: string; name: string };

type ExistingArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentMarkdown: string;
  categoryId: string;
  tagIds: string[];
  seoTitle: string;
  seoDescription: string;
  publishedAt: string;
  featuredImage: { url: string; publicId: string } | null;
};

const initialState: ArticleFormState = { error: null };

export default function ArticleForm({
  categories,
  tags,
  article,
}: {
  categories: Option[];
  tags: Option[];
  article?: ExistingArticle;
}) {
  const [state, formAction, isPending] = useActionState(
    saveArticleAction,
    initialState,
  );
  const [content, setContent] = useState(article?.contentMarkdown ?? "");
  const [showPreview, setShowPreview] = useState(false);
  const [image, setImage] = useState(article?.featuredImage ?? null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(null);
    try {
      const uploadFormData = new FormData();
      uploadFormData.set("file", file);
      const result = await uploadArticleImageAction(uploadFormData);
      if (!result.ok) {
        setUploadError(result.error);
        return;
      }
      setImage({ url: result.url, publicId: result.publicId });
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <form action={formAction} className="space-y-6">
      {article && <input type="hidden" name="articleId" value={article.id} />}
      <input type="hidden" name="featuredImageUrl" value={image?.url ?? ""} />
      <input
        type="hidden"
        name="featuredImagePublicId"
        value={image?.publicId ?? ""}
      />

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Title
            </label>
            <input
              name="title"
              defaultValue={article?.title}
              required
              className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Slug{" "}
              <span className="font-normal text-[#8a9096]">
                (leave blank to auto-generate from the title)
              </span>
            </label>
            <input
              name="slug"
              defaultValue={article?.slug}
              placeholder="estate-planning-basics"
              className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Publish date{" "}
              <span className="font-normal text-[#8a9096]">
                (shown on the article; leave blank to use the date it&apos;s first published)
              </span>
            </label>
            <input
              type="date"
              name="publishedAt"
              defaultValue={article?.publishedAt}
              className="mt-1 w-full max-w-xs rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              defaultValue={article?.excerpt}
              rows={2}
              className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
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

          <details className="rounded-md border border-[#e6ebea] p-4">
            <summary className="cursor-pointer text-sm font-medium text-[#1e252a]">
              SEO metadata
            </summary>
            <div className="mt-3 space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#5c656d]">
                  SEO title
                </label>
                <input
                  name="seoTitle"
                  defaultValue={article?.seoTitle}
                  maxLength={70}
                  className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#5c656d]">
                  SEO description
                </label>
                <textarea
                  name="seoDescription"
                  defaultValue={article?.seoDescription}
                  maxLength={160}
                  rows={2}
                  className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
                />
              </div>
            </div>
          </details>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Featured image
            </label>
            {image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.url}
                alt=""
                className="mt-2 h-32 w-full rounded-md border border-[#d9d9d9] object-cover"
              />
            )}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              onChange={handleImageChange}
              disabled={isUploading}
              className="mt-2 w-full text-xs"
            />
            {isUploading && (
              <p className="mt-1 text-xs text-[#8a9096]">Uploading…</p>
            )}
            {uploadError && (
              <p className="mt-1 text-xs text-red-700">{uploadError}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1e252a]">
              Category
            </label>
            <select
              name="categoryId"
              defaultValue={article?.categoryId ?? ""}
              className="mt-1 w-full rounded-md border border-[#d9d9d9] px-3 py-2 text-sm outline-none focus:border-[#18535b]"
            >
              <option value="">No category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="block text-sm font-medium text-[#1e252a]">Tags</span>
            <div className="mt-2 space-y-1.5">
              {tags.length === 0 && (
                <p className="text-xs text-[#8a9096]">No tags yet.</p>
              )}
              {tags.map((tag) => (
                <label
                  key={tag.id}
                  className="flex items-center gap-2 text-sm text-[#3f474d]"
                >
                  <input
                    type="checkbox"
                    name="tagIds"
                    value={tag.id}
                    defaultChecked={article?.tagIds?.includes(tag.id)}
                  />
                  {tag.name}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {state.error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending || isUploading}
        className="rounded-md bg-[#18535b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#123f45] disabled:opacity-60"
      >
        {isPending ? "Saving…" : article ? "Save changes" : "Save as draft"}
      </button>
    </form>
  );
}
