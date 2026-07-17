# Backend branch — deploy on Render

This branch has the NestJS API at the **repo root** (package.json is here).

## Manual Web Service settings
- **Branch:** `backend`
- **Root Directory:** leave empty
- **Runtime:** Node
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run start:prod`
- **Health Check Path:** `/api/health`

## Required env vars
- `NODE_ENV=production`
- `DATABASE_URL` (from Render Postgres)
- `JWT_SECRET` (any long random string)
- `CORS_ORIGIN` = your Vercel URL (e.g. https://your-app.vercel.app)
- `TYPEORM_SYNCHRONIZE=true`
- `SEED_ON_START=true`
- `ADMIN_EMAIL=admin@medesign.com`
- `ADMIN_PASSWORD=admin123`

Do **not** use `yarn` — use the npm commands above.
