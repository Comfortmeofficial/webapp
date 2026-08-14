import { Schema, model, models, type InferSchemaType } from "mongoose";

export const ARTICLE_STATUSES = ["draft", "published"] as const;
export type ArticleStatus = (typeof ARTICLE_STATUSES)[number];

const featuredImageSchema = new Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    width: { type: Number },
    height: { type: Number },
  },
  { _id: false },
);

const articleSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    excerpt: { type: String, default: "", trim: true },
    contentMarkdown: { type: String, default: "" },
    featuredImage: { type: featuredImageSchema, default: null },
    category: { type: Schema.Types.ObjectId, ref: "Category", default: null },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
    authorId: { type: Schema.Types.ObjectId, ref: "AdminUser", required: true },
    status: {
      type: String,
      enum: ARTICLE_STATUSES,
      required: true,
      default: "draft",
    },
    publishedAt: { type: Date, default: null },
    seoTitle: { type: String, default: "", trim: true },
    seoDescription: { type: String, default: "", trim: true },
  },
  { timestamps: true },
);

articleSchema.index({ status: 1, publishedAt: -1 });

export type ArticleDocument = InferSchemaType<typeof articleSchema>;

export const Article = models.Article || model("Article", articleSchema);
