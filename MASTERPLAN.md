# MASTERPLAN & PROGRESS TRACKER
> godwimp.me — Portfolio Website
> 
> Legend: `[ ]` todo · `[x]` done · `[~]` in progress · `[-]` skip/cancelled

---

## Phase 0 — Scaffolding & Setup
*Goal: semua repo, tools, dan akun sudah siap sebelum nulis satu baris kode pun*

### Accounts & Services
- [ ] Buat akun [Railway](https://railway.app) (untuk deploy BE)
- [ ] Buat akun [Supabase](https://supabase.com) (PostgreSQL)
- [ ] Buat akun [Upstash](https://upstash.com) (Redis)
- [ ] Pastikan akun Vercel sudah ada (untuk deploy FE)
- [ ] Cek domain `godwimp.me` — akses ke DNS settings di registrar

### Repos
- [ ] Buat repo `godwimp-web` (Next.js frontend)
- [ ] Buat repo `godwimp-api` (NestJS backend)
- [ ] Setup `.gitignore` di keduanya
- [ ] Push initial commit di keduanya

### Docs
- [x] `ARCHITECTURE.md`
- [x] `MASTERPLAN.md` (file ini)

---

## Phase 1 — Backend (NestJS API)
*Goal: API berjalan di production, bisa return data projects*

### Setup Project
- [ ] `npx @nestjs/cli new godwimp-api`
- [ ] Install dependencies: `prisma`, `@prisma/client`, `ioredis`, `@nestjs/cache-manager`
- [ ] Setup `.env` file (lihat `ARCHITECTURE.md`)
- [ ] Setup `ConfigModule` di `app.module.ts`

### Database
- [ ] Buat project di Supabase, copy `DATABASE_URL`
- [ ] Tulis `schema.prisma` — table `projects` (lihat `ARCHITECTURE.md`)
- [ ] `npx prisma migrate dev --name init`
- [ ] `npx prisma generate`
- [ ] Seed data — isi 5 projects dari CV

### Redis
- [ ] Buat database di Upstash, copy `REDIS_URL`
- [ ] Setup `CacheModule` dengan Redis adapter di NestJS
- [ ] Test koneksi Redis

### Projects Module
- [ ] Buat `ProjectsModule`, `ProjectsController`, `ProjectsService`
- [ ] `GET /projects` — list semua, support query `?category=` dan `?featured=true`
- [ ] `GET /projects/:slug` — detail satu project
- [ ] Implementasi caching di service layer (TTL 1 jam)
- [ ] Buat DTO untuk response shape

### Health & CORS
- [ ] `GET /health` — return `{ status: 'ok' }`
- [ ] Setup CORS — allow origin `godwimp.me` dan `localhost:3000`

### Testing
- [ ] Test semua endpoint manual via Postman / curl
- [ ] Pastikan response shape sesuai spec di `ARCHITECTURE.md`

### Deploy Backend
- [ ] Push ke GitHub
- [ ] Connect repo ke Railway
- [ ] Set environment variables di Railway dashboard
- [ ] Pastikan `api.godwimp.me` bisa diakses (setup subdomain di DNS)
- [ ] Test endpoint dari URL production

---

## Phase 2 — Frontend (Next.js)
*Goal: tampilan portfolio live di `godwimp.me`, data dari API*

### Setup Project
- [ ] `npx create-next-app@latest godwimp-web --typescript --tailwind --app`
- [ ] Install dependencies: `framer-motion`, `axios` (atau pakai fetch native)
- [ ] Setup `NEXT_PUBLIC_API_URL` di `.env.local`
- [ ] Buat `lib/api.ts` — wrapper function untuk fetch ke BE

### Types
- [ ] Buat `types/index.ts` — interface `Project`, `ApiResponse`

### Components
- [ ] `Nav.tsx` — navigation bar
- [ ] `Hero.tsx` — hero section (nama, tagline, CTA)
- [ ] `ProjectCard.tsx` — card untuk satu project
- [ ] `ProjectList.tsx` — list projects, fetch dari API
- [ ] `TechStack.tsx` — section tech stack (bisa hardcode, tidak perlu API)
- [ ] `About.tsx` — about + contact section

### Pages
- [ ] `app/page.tsx` — assemble semua komponen
- [ ] `app/layout.tsx` — metadata, font, global styles

### Data Fetching
- [ ] Gunakan `fetch` di Server Component untuk `GET /projects` (SSR)
- [ ] Handle loading state dan error state

### Styling & Polish
- [ ] Implementasi design dari preview HTML (`godwimp-portfolio.html`)
- [ ] Dark theme, JetBrains Mono + Space Grotesk font
- [ ] Scroll reveal animation (Framer Motion)
- [ ] Responsive — mobile & desktop

### Deploy Frontend
- [ ] Push ke GitHub
- [ ] Import repo ke Vercel
- [ ] Set `NEXT_PUBLIC_API_URL` di Vercel environment variables
- [ ] Connect custom domain `godwimp.me` di Vercel dashboard
- [ ] Update DNS di registrar — arahkan ke Vercel (A record / CNAME)
- [ ] Tunggu DNS propagation, cek HTTPS berjalan

---

## Phase 3 — Polish & QA
*Goal: tidak ada yang broken, performa bagus, siap dibagikan*

### QA Checklist
- [ ] Semua project links (GitHub, NPM) bisa diklik dan benar
- [ ] Tampilan di mobile (375px) — tidak ada yang overflow
- [ ] Tampilan di tablet (768px)
- [ ] Tampilan di desktop (1280px+)
- [ ] Dark mode konsisten
- [ ] Tidak ada typo di semua teks

### Performance
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Pastikan tidak ada layout shift (CLS)
- [ ] Font loading tidak blocking render

### SEO
- [ ] Set `metadata` di `layout.tsx` — title, description, og:image
- [ ] Buat simple `og:image` (bisa pakai Vercel OG Image)

---

## Phase 4 — Optional Extras
*Bisa dikerjakan kapan saja setelah Phase 3 selesai*

- [ ] **Visitor analytics** — `POST /analytics/visit` dari FE, lihat summary via API key
- [ ] **Admin endpoint** — `DELETE /admin/cache` untuk invalidate cache manual
- [ ] **Contact form** — form yang ngirim email via Resend / Nodemailer
- [ ] **Blog / notes** — section tulisan pendek, data dari Markdown atau DB
- [ ] **GitHub activity** — fetch public repos/contributions dari GitHub API

---

## Progress Summary

| Phase | Status | Notes |
|---|---|---|
| Phase 0 — Scaffolding | `[ ]` | |
| Phase 1 — Backend | `[ ]` | |
| Phase 2 — Frontend | `[ ]` | |
| Phase 3 — Polish & QA | `[ ]` | |
| Phase 4 — Extras | `[ ]` | Opsional |

---

*Last updated: —*
