# Backend branch — deploy on Render

## Option A: Blueprint (recommended)
1. Render → New → Blueprint
2. Connect `snoozypanda/medesign`
3. Set branch to **`backend`**
4. Apply `render.yaml` (creates API + Postgres)

## Option B: Web Service manually
1. Render → New → Web Service
2. Repo: `snoozypanda/medesign`, Branch: **`backend`**
3. **Root Directory:** `backend`
4. **Build:** `npm install && npm run build`
5. **Start:** `npm run start:prod`
6. **Health check:** `/api/health`
7. Add env vars: `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN`, `NODE_ENV=production`, `TYPEORM_SYNCHRONIZE=true`, `SEED_ON_START=true`

After Vercel is live, set `CORS_ORIGIN` to your Vercel URL.
