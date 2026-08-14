import { connectToDatabase } from "@/lib/db";
import { Category, Tag } from "@/lib/models";
import ArticleForm from "@/components/admin/ArticleForm";

export default async function NewArticlePage() {
  await connectToDatabase();
  const [categories, tags] = await Promise.all([
    Category.find({}).sort({ name: 1 }).lean(),
    Tag.find({}).sort({ name: 1 }).lean(),
  ]);

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Create Article</h1>
      <p className="mt-1 text-sm text-[#8a9096]">
        New articles start as a draft — publish it separately once it&apos;s ready.
      </p>
      <div className="mt-6">
        <ArticleForm
          categories={categories.map((c) => ({ id: String(c._id), name: c.name }))}
          tags={tags.map((t) => ({ id: String(t._id), name: t.name }))}
        />
      </div>
    </div>
  );
}
