import { Schema, model, models, type InferSchemaType } from "mongoose";

export const LEGAL_PAGE_SLUGS = ["terms", "privacy"] as const;
export type LegalPageSlug = (typeof LEGAL_PAGE_SLUGS)[number];

const legalPageSchema = new Schema(
  {
    slug: { type: String, enum: LEGAL_PAGE_SLUGS, required: true, unique: true },
    title: { type: String, required: true },
    contentMarkdown: { type: String, default: "" },
  },
  { timestamps: true },
);

export type LegalPageDocument = InferSchemaType<typeof legalPageSchema>;

export const LegalPage = models.LegalPage || model("LegalPage", legalPageSchema);
