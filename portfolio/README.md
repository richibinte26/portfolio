# Developer Portfolio (Next.js + TypeScript + Tailwind CSS)

Next.js App Router, React 19, Tailwind CSS v4, Lucide, react-icons and Motion.

> This project was written but **not built or deployed** by the assistant (no network access to run `npm install`).
> Follow the steps below on your PC, and fix anything the build reports before you submit.

## 1. Run locally (Windows PowerShell)

Install Node.js LTS (https://nodejs.org) first, then:

```powershell
cd path\to\portfolio
npm install
npm run dev
```

Open http://localhost:3000. Production check:

```powershell
npm run build
npm run start
```

## 2. What to edit

| What | Where |
|---|---|
| Name, email, phone, WhatsApp, social URLs, About text, hobbies, education years, experience, resume flag | `data/personal-info.ts` |
| Projects (text, links, images) | `data/projects.ts` |
| Skills | `data/skills.ts` |
| Profile photo | replace `public/images/profile.jpg` (keep the name, ~800x1000 portrait) |
| Project screenshots | add `public/images/projects/fitlog.png` etc., then change the `image` path in `data/projects.ts` |
| Resume | replace `public/resume.pdf`, then set `resume.ready: true` in `data/personal-info.ts` |

Anything shown as `[EDIT: ...]` / `[MY ...]` is a placeholder (italic on the site). Search the project for `[` in the data files to find them all.
The About text is a **draft**: edit it so it is genuinely yours (especially the programming journey and problem-solving paragraphs).
Add your BazarDor repo URL in `data/projects.ts` and remove `githubPending: true`.

## 3. Contact form email (optional)

Without setup the form validates, then tells visitors it could not send and offers the "Open in email app" mailto link.
To enable delivery, create a free Resend account, then set in `.env.local` (and on Vercel):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

## 4. GitHub and Vercel

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/richibinte26/YOUR-REPO.git
git push -u origin main
```

Then at https://vercel.com/new: import the repo, keep the Next.js defaults, add `NEXT_PUBLIC_SITE_URL` (your Vercel URL) and any contact env vars, and deploy.
Open the generated URL and check: navbar links, each project's View Details page, resume button, contact form, 404 page, and mobile layout.
Submit only the URL you have actually opened and verified.

## 5. Routes

`/` and `/projects/fitlog`, `/projects/bazardor`, `/projects/devstack` (anything else shows the custom 404).
