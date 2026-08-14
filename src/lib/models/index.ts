// Importing every model here (rather than relying on each file to be
// imported individually) guarantees they're all registered with Mongoose
// before any `.populate()` call runs — populate throws MissingSchemaError
// if the referenced model hasn't been registered yet.
export { AdminUser, ADMIN_ROLES } from "./AdminUser";
export type { AdminRole, AdminUserDocument } from "./AdminUser";

export { Article, ARTICLE_STATUSES } from "./Article";
export type { ArticleStatus, ArticleDocument } from "./Article";

export { Category } from "./Category";
export type { CategoryDocument } from "./Category";

export { Tag } from "./Tag";
export type { TagDocument } from "./Tag";

export { LegalPage, LEGAL_PAGE_SLUGS } from "./LegalPage";
export type { LegalPageSlug, LegalPageDocument } from "./LegalPage";
