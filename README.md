# Professional Portfolio Website (Next.js + Tailwind)

A complete personal portfolio scaffold built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Homepage with hero, tagline, bio, and social quick links
- About page with detailed bio, profile photo, and core skills
- Projects listing page + dynamic project detail pages
- Project content managed in `src/data/projects.json`
- CV page with embedded PDF viewer + download button
- Optional extra PDF links (cover letter, portfolio PDF)
- Contact page with email and social links
- Shared navbar/footer layout
- SEO metadata configured per page
- Responsive, mobile-friendly styling

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Project Structure

```txt
.
├─ public/
│  ├─ documents/
│  │  ├─ README.txt
│  │  ├─ cv.pdf                   # add this file
│  │  ├─ cover-letter.pdf         # optional
│  │  └─ portfolio.pdf            # optional
│  └─ images/
│     └─ profile-photo.svg        # replace with your real photo
├─ src/
│  ├─ app/
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ cv/page.tsx
│  │  ├─ projects/page.tsx
│  │  ├─ projects/[slug]/page.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ components/
│  │  ├─ footer.tsx
│  │  ├─ icons.tsx
│  │  ├─ navbar.tsx
│  │  └─ project-card.tsx
│  ├─ data/
│  │  └─ projects.json
│  └─ lib/
│     ├─ projects.ts
│     └─ site.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Build and Run Production Locally

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Keep default settings (framework detected as Next.js).
5. Click **Deploy**.

## Connect a Custom Domain on Vercel

1. Open your project in Vercel.
2. Go to **Settings → Domains**.
3. Add your custom domain.
4. Update DNS records at your domain provider to match Vercel instructions.
5. Wait for DNS propagation and SSL issuance.

## How to Update Content

### 1) Profile and Global Links

Edit `src/lib/site.ts`:

- `name`
- `email`
- `github`
- `linkedin`
- `url` (your final production domain)

### 2) Homepage/About Text

Edit:

- `src/app/page.tsx`
- `src/app/about/page.tsx`

### 3) Projects

Edit `src/data/projects.json`.

Each project supports:

- `slug`
- `title`
- `summary`
- `technologies` (string array)
- `problem`
- `approach`
- `results`
- `repoUrl` (optional)
- `demoUrl` (optional)

### 4) Photo

Replace `public/images/profile-photo.svg` with your real photo (for example `profile-photo.jpg`) and update the path in `src/app/about/page.tsx`.

### 5) CV and Additional PDFs

Put files in `public/documents/`:

- `cv.tex` (LaTeX source)
- `cv.pdf` (used by embed + download button on `/cv`)
- `cover-letter.pdf` (optional)
- `portfolio.pdf` (optional)

To compile the PDF from LaTeX:

```bash
cd public/documents
pdflatex -interaction=nonstopmode -halt-on-error cv.tex
```

If you use different filenames, update links in `src/app/cv/page.tsx`.

## Notes

- If a PDF file is missing, its link will not load correctly until you add it.
- This scaffold uses JSON for project data to keep editing simple.
