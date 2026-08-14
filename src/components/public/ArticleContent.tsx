import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticleContent({
  title,
  category,
  publishedAt,
  authorName,
  featuredImageUrl,
  contentMarkdown,
  banner,
}: {
  title: string;
  category?: string | null;
  publishedAt?: Date | string | null;
  authorName?: string | null;
  featuredImageUrl?: string | null;
  contentMarkdown: string;
  banner?: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-8">
      {banner}
      {category && (
        <p className="text-xs uppercase tracking-wide text-[#b08d57]">
          {category}
        </p>
      )}
      <h1 className="font-display mt-2 text-3xl leading-tight text-[#151b20] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[#8a9096]">
        {authorName ? `By ${authorName}` : null}
        {authorName && publishedAt ? " · " : null}
        {publishedAt
          ? new Date(publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : null}
      </p>

      {featuredImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={featuredImageUrl}
          alt={title}
          className="mt-6 h-auto w-full rounded-lg border border-[#d5d7d8] object-cover"
        />
      )}

      <div className="prose prose-lg mt-8 max-w-none prose-headings:font-display prose-a:text-[#18535b]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {contentMarkdown}
        </ReactMarkdown>
      </div>
    </article>
  );
}
