import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Tag } from "@/lib/models";
import TaxonomyManager from "@/components/admin/TaxonomyManager";
import { createTagAction, deleteTagAction } from "@/lib/actions/taxonomy-actions";

export default async function TagsPage() {
  const session = await auth();
  await connectToDatabase();
  const tags = await Tag.find({}).sort({ name: 1 }).lean();

  return (
    <TaxonomyManager
      label="Tags"
      items={tags.map((t) => ({ id: String(t._id), name: t.name }))}
      canManage={session?.user.role === "super_admin"}
      createAction={createTagAction}
      deleteAction={deleteTagAction}
    />
  );
}
