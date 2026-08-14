import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { AdminUser, Article, Category, Tag } from "@/lib/models";

export default async function SettingsPage() {
  const session = await auth();
  if (session?.user.role !== "super_admin") redirect("/admin");

  await connectToDatabase();
  const [adminCount, articleCount, categoryCount, tagCount] = await Promise.all([
    AdminUser.countDocuments({}),
    Article.countDocuments({}),
    Category.countDocuments({}),
    Tag.countDocuments({}),
  ]);

  const rows = [
    ["Site", "BSY Legal"],
    ["Admin users", adminCount],
    ["Articles", articleCount],
    ["Categories", categoryCount],
    ["Tags", tagCount],
    ["Image storage", "Cloudinary"],
    ["Database", "MongoDB"],
  ];

  return (
    <div>
      <h1 className="font-serif text-2xl text-[#151b20]">Settings</h1>
      <p className="mt-1 text-sm text-[#8a9096]">
        CMS configuration overview. Category and tag management lives on
        their own pages in the sidebar.
      </p>

      <div className="mt-6 max-w-md overflow-hidden rounded-lg border border-[#e6ebea] bg-white">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-[#f0f2f1] px-4 py-2.5 text-sm last:border-b-0"
          >
            <span className="text-[#8a9096]">{label}</span>
            <span className="text-[#1e252a]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
