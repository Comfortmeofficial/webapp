import slugify from "slugify";
import { connectToDatabase } from "@/lib/db";
import { Article } from "@/lib/models";

/**
 * Appends -2, -3, ... on collision rather than trusting the caller — two
 * articles titled "Estate Planning Basics" published a year apart are a
 * realistic scenario, not an edge case.
 */
export async function generateUniqueSlug(
  title: string,
  excludeArticleId?: string,
) {
  await connectToDatabase();

  const base = slugify(title, { lower: true, strict: true });
  let candidate = base;
  let suffix = 2;

  while (
    await Article.exists({
      slug: candidate,
      ...(excludeArticleId ? { _id: { $ne: excludeArticleId } } : {}),
    })
  ) {
    candidate = `${base}-${suffix}`;
    suffix += 1;
  }

  return candidate;
}
