# Deployment Guide — GitHub → Render → Vercel

Follow these steps in order. The exact field values below matter — the earlier
"package.json not found" error on Render happened because the **Root
Directory** field was set wrong; the steps here get it right.

---

## Step 1 — Push the whole project to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

Create a new **empty** repository on GitHub (no README, no .gitignore — you
already have one), then:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Your GitHub repo should now show two folders at the top level: `backend/`
and `frontend/`.

---

## Step 2 — Deploy the backend on Render

### Option A — Blueprint (recommended, zero manual settings)

1. Go to https://dashboard.render.com → **New +** → **Blueprint**
2. Connect your GitHub repo
3. Render will detect the `render.yaml` file at the repo root and pre-fill
   everything correctly (Root Directory, Build Command, Start Command)
4. When asked, add the environment variable **MONGO_URI** with your MongoDB
   Atlas connection string
5. Click **Apply** — it will build and deploy automatically

### Option B — Manual Web Service (if you don't use Blueprint)

1. **New +** → **Web Service** → connect your repo
2. Fill these fields **exactly**:
   | Field | Value |
   |---|---|
   | Root Directory | `backend` |
   | Runtime | Node |
   | Build Command | `npm install` |
   | Start Command | `npm start` |
3. Under **Environment**, add:
   | Key | Value |
   |---|---|
   | `MONGO_URI` | your MongoDB Atlas connection string |
   | `CLIENT_ORIGIN` | leave blank for now, you'll add it in Step 4 |
4. Click **Create Web Service**

Once deployed, copy your backend's URL — it looks like
`https://vishal-portfolio-backend.onrender.com`.

**Need a MongoDB URI?** Create a free cluster at
https://www.mongodb.com/cloud/atlas, then Database → Connect → "Drivers" and
copy the connection string (replace `<password>` with your real password).

---

## Step 3 — Deploy the frontend on Vercel

1. Go to https://vercel.com/new and import the same GitHub repo
2. When Vercel asks for the project settings, set:
   | Field | Value |
   |---|---|
   | Root Directory | `frontend` |
   | Framework Preset | Vite (auto-detected) |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
3. Add an environment variable:
   | Key | Value |
   |---|---|
   | `VITE_API_URL` | your Render backend URL from Step 2 (e.g. `https://vishal-portfolio-backend.onrender.com`) |
4. Click **Deploy**

Once deployed, copy your frontend's URL — it looks like
`https://your-portfolio.vercel.app`.

---

## Step 4 — Connect the two (allow the frontend to call the backend)

1. Go back to your Render backend → **Environment**
2. Set `CLIENT_ORIGIN` to your Vercel URL from Step 3 (e.g.
   `https://your-portfolio.vercel.app`)
3. Save — Render will redeploy automatically
4. Open your live Vercel site and test the Contact form — it should submit
   successfully and you should see the message in Render's logs

---

## Common errors and fixes

| Error | Fix |
|---|---|
| `Couldn't find a package.json file in "/opt/render/project/src"` | Root Directory is wrong. It must be exactly `backend`, not `src` or blank. |
| Contact form says "Couldn't send that" | `VITE_API_URL` on Vercel doesn't match your Render URL, or `CLIENT_ORIGIN` on Render doesn't match your Vercel URL (CORS blocks it). Double-check both, redeploy after changing either. |
| Render deploy succeeds but site errors on visit | You opened the *backend* URL expecting the site — the backend only serves the API. Your actual site is the Vercel URL. |
| Vercel build fails on `frontend` folder not found | Root Directory wasn't set to `frontend` during import — go to Project Settings → General → Root Directory and fix it, then redeploy. |
