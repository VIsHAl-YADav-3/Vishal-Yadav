# Vishal — MERN Portfolio

A full‑stack developer portfolio built as a code‑editor / IDE themed single page: a file‑tree sidebar on the left, editor‑style tabs on top, and each "file" is a real section of the portfolio (about, skills, projects, experience, contact).

```
portfolio/
├── backend/     Express + MongoDB API (contact form)
└── frontend/    React + Vite site (the actual portfolio UI)
```

## 1. Edit your content

Everything text-based (name, bio, skills, projects, experience, links, resume filename) lives in **one file**:

```
frontend/src/data.js
```

Your real GitHub, LinkedIn, resume, live-demo and repo links are already filled in (pulled from the hyperlinks embedded in your resume PDF). Your photo is at `frontend/public/profile.jpeg` and your resume at `frontend/public/Vishal_Resume.pdf` — replace either file any time with an updated version (keep the same filename, or update the filename in `data.js`).

## 2. Run the backend (contact form API)

```bash
cd backend
cp .env.example .env      # then edit .env with your MongoDB URI
npm install
npm run dev                # starts on http://localhost:5000
```

You need a MongoDB connection string. Easiest free option: create a free cluster at https://www.mongodb.com/cloud/atlas and paste its connection string into `.env` as `MONGO_URI`. If you don't want to set up MongoDB right now, the site still works fine — the contact form will just show an error until the backend is connected.

## 3. Run the frontend

```bash
cd frontend
npm install
npm run dev                # starts on http://localhost:5173
```

Open http://localhost:5173 in your browser.

The frontend calls the backend at the URL set in `frontend/.env` (`VITE_API_URL`, defaults to `http://localhost:5000`).

## 4. Deploying (step-by-step, error-free)

Full instructions with exact settings — GitHub push, Render (backend), Vercel
(frontend), and connecting the two — are in **[DEPLOY.md](./DEPLOY.md)**.
Follow it in order; it also lists fixes for the common errors (like the
"package.json not found" Render error).

## Tech used

- **Frontend:** React 18, Vite, plain CSS (no framework — hand‑built design system)
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB (stores contact‑form submissions)
