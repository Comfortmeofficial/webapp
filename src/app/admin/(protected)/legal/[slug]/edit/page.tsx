import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { LegalPage, LEGAL_PAGE_SLUGS, type LegalPageSlug } from "@/lib/models";
import LegalPageForm from "@/components/admin/LegalPageForm";

export default async function EditLegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await auth();
  if (session?.user.role !== "super_admin") redirect("/admin");

  const { slug } = await params;
  if (!LEGAL_PAGE_SLUGS.includes(slug as LegalPageSlug)) notFound();

  await connectToDatabase();
  const page = await LegalPage.findOne({ slug }).lean();

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">
        Edit {page?.title ?? slug}
      </h1>
      <p className="mt-1 text-sm text-[#8a9096]">
        This content is shown at /{slug}.
      </p>
      <div className="mt-6">
        <LegalPageForm
          slug={slug}
          title={page?.title ?? ""}
          contentMarkdown={page?.contentMarkdown ?? ""}
        />
      </div>
    </div>
  );
}
