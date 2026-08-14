# BSY Legal

Next.js site and CMS for BSY Legal — public marketing site plus an admin-managed
article system (MongoDB + Cloudinary, role-based admin access).

## Development

```bash
npm install
npm run dev
```

Copy `.env.local.example` to `.env` and fill in `MONGODB_URI`, `CLOUDINARY_*`,
and `AUTH_SECRET` (generate with `npx auth secret`) before running.

## First-time setup

```bash
npm run seed:super-admin      # creates the first super admin from SEED_SUPER_ADMIN_* in .env
npm run seed:insight-articles # seeds the existing insight articles
npm run seed:legal-pages      # seeds Terms of Service / Privacy Policy content
```

Admin dashboard: `/admin/login`.

## Other scripts

- `npm run gallery:dimensions` — regenerates `src/lib/data/galleryDimensions.json`
  after adding new photos to `public/assets/gallery/Highlights`.
- `npm run lint` — ESLint.
