"use server";

import cloudinary from "@/lib/cloudinary";
import { requireRole } from "@/lib/rbac";

export type UploadResult =
  | { ok: true; url: string; publicId: string; width: number; height: number }
  | { ok: false; error: string };

const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export async function uploadArticleImageAction(
  formData: FormData,
): Promise<UploadResult> {
  await requireRole("super_admin", "admin");

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return { ok: false, error: "No file provided." };
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { ok: false, error: "Use a JPEG, PNG, WebP, or AVIF image." };
  }
  if (file.size > MAX_BYTES) {
    return { ok: false, error: "Image must be under 8MB." };
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise<{
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
  }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "bsy-legal/articles" },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload failed."));
          return;
        }
        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
          width: result.width,
          height: result.height,
        });
      },
    );
    uploadStream.end(buffer);
  });

  return {
    ok: true,
    url: uploadResult.secure_url,
    publicId: uploadResult.public_id,
    width: uploadResult.width,
    height: uploadResult.height,
  };
}

export async function deleteArticleImageAction(publicId: string) {
  await requireRole("super_admin", "admin");
  await cloudinary.uploader.destroy(publicId);
}
