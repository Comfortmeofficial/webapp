import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { LegalPage, LEGAL_PAGE_SLUGS } from "@/lib/models";

export default async function LegalPagesPage() {
  const session = await auth();
  if (session?.user.role !== "super_admin") redirect("/admin");

  await connectToDatabase();
  const pages = await LegalPage.find({}).lean();
  const bySlug = new Map(pages.map((p) => [p.slug, p]));

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Legal Pages</h1>
      <p className="mt-1 text-sm text-[#8a9096]">
        Edit the content shown on the public Terms and Privacy pages.
      </p>

      <div className="mt-6 max-w-md overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
        {LEGAL_PAGE_SLUGS.map((slug) => {
          const page = bySlug.get(slug);
          return (
            <div
              key={slug}
              className="flex items-center justify-between border-b border-[#f0f2f1] px-4 py-3 text-sm last:border-b-0"
            >
              <div>
                <p className="text-[#1e252a]">{page?.title ?? slug}</p>
                <p className="text-xs text-[#8a9096]">/{slug}</p>
              </div>
              <Link
                href={`/admin/legal/${slug}/edit`}
                className="text-xs font-medium text-[#18535b] underline"
              >
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
