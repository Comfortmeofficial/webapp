import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Category } from "@/lib/models";
import TaxonomyManager from "@/components/admin/TaxonomyManager";
import { createCategoryAction, deleteCategoryAction } from "@/lib/actions/taxonomy-actions";

export default async function CategoriesPage() {
  const session = await auth();
  await connectToDatabase();
  const categories = await Category.find({}).sort({ name: 1 }).lean();

  return (
    <TaxonomyManager
      label="Categories"
      items={categories.map((c) => ({ id: String(c._id), name: c.name }))}
      canManage={session?.user.role === "super_admin"}
      createAction={createCategoryAction}
      deleteAction={deleteCategoryAction}
    />
  );
}
