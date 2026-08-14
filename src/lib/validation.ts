import { z } from "zod";
import { ADMIN_ROLES } from "@/lib/models";

export const createAdminSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  role: z.enum(ADMIN_ROLES),
});

export const articleInputSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters."),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens.")
    .optional()
    .or(z.literal("")),
  excerpt: z.string().trim().max(400, "Keep the excerpt under 400 characters.").optional(),
  contentMarkdown: z.string().min(1, "Article content can't be empty."),
  categoryId: z.string().optional().or(z.literal("")),
  tagIds: z.array(z.string()).optional(),
  publishedAt: z.string().optional().or(z.literal("")),
  seoTitle: z.string().trim().max(70, "Keep SEO title under 70 characters.").optional(),
  seoDescription: z
    .string()
    .trim()
    .max(160, "Keep SEO description under 160 characters.")
    .optional(),
});
