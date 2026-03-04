# ARCHITECTURE.md
> godwimp.me — Portfolio Website

---

## Overview

Portfolio website untuk Fadhillah Maulana (godwimp) yang terdiri dari dua bagian:
- **Frontend** — Next.js app, deployed ke Vercel, accessible via `godwimp.me`
- **Backend** — NestJS service, deployed ke Vercel/Railway, accessible via `api.godwimp.me`

Arsitektur ini sengaja dibuat sederhana tapi proper — bukan overkill, tapi juga bukan sekadar static HTML.

---

## Tech Stack

### Frontend
| Layer | Tech | Alasan |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG out of the box, bagus untuk SEO |
| Language | TypeScript | Konsisten dengan BE stack |
| Styling | Tailwind CSS | Utility-first, cepat iterasi |
| Animation | Framer Motion | Smooth transitions, mudah dikontrol |
| HTTP Client | Axios / fetch native | Untuk hit API dari BE |
| Deployment | Vercel | Free tier, custom domain, zero config |

### Backend
| Layer | Tech | Alasan |
|---|---|---|
| Framework | NestJS | Main stack kamu, structured & scalable |
| Language | TypeScript | |
| ORM | Prisma | Type-safe, DX bagus |
| Database | PostgreSQL (Supabase) | Free tier, managed, mudah setup |
| Cache | Redis (Upstash) | Free tier serverless Redis |
| Deployment | Railway | Mudah deploy NestJS, free tier ada |

### DNS & Domain
| | |
|---|---|
| Domain | `godwimp.me` |
| DNS Management | Cloudflare (DNS only — tidak full proxy) |
| SSL | Auto via Vercel (frontend) dan Railway (backend) |
| Mail | Cloudflare Email Routing → forward ke Gmail |
| Contact email | Bisa pakai `hi@godwimp.me` atau `fadhillah@godwimp.me` |

---

## System Architecture

```
                          godwimp.me
                              │
                    ┌─────────▼─────────┐
                    │   Vercel (Next.js) │
                    │   Frontend App     │
                    └─────────┬─────────┘
                              │ HTTP (fetch/axios)
                    ┌─────────▼─────────┐
                    │ api.godwimp.me     │
                    │ Railway (NestJS)   │
                    └────┬─────────┬────┘
                         │         │
             ┌───────────▼──┐  ┌───▼──────────┐
             │  PostgreSQL  │  │  Redis Cache  │
             │  (Supabase)  │  │  (Upstash)    │
             └──────────────┘  └───────────────┘
```

---

## Database Schema

Database sengaja minimal — portfolio tidak butuh relasi kompleks.

### Table: `projects`
```sql
projects
├── id              UUID        PRIMARY KEY
├── slug            VARCHAR     UNIQUE NOT NULL       -- e.g. "haas-microservices"
├── title           VARCHAR     NOT NULL
├── description     TEXT        NOT NULL
├── highlights      TEXT[]                            -- array of bullet points
├── tech_stack      VARCHAR[]                         -- ["NestJS", "Redis", ...]
├── category        VARCHAR                           -- "security" | "package" | "web" | "data"
├── is_featured     BOOLEAN     DEFAULT false
├── github_url      VARCHAR
├── live_url        VARCHAR
├── npm_url         VARCHAR
├── order_index     INTEGER                           -- manual sort order
├── created_at      TIMESTAMP   DEFAULT now()
└── updated_at      TIMESTAMP   DEFAULT now()
```

### Table: `visitor_logs` *(opsional, bisa skip dulu)*
```sql
visitor_logs
├── id              UUID        PRIMARY KEY
├── path            VARCHAR                           -- halaman yang diakses
├── country         VARCHAR                           -- dari IP geolocation
├── user_agent      VARCHAR
├── visited_at      TIMESTAMP   DEFAULT now()
└── referrer        VARCHAR
```

> Tabel ini opsional — bisa diaktifkan nanti kalau mau tau dari mana visitor datang. Sesuai dengan vibe HaaS project kamu.

---

## API Design

Base URL: `https://api.godwimp.me`

### Endpoints

#### Projects
```
GET    /projects              → list semua projects (bisa filter by category)
GET    /projects/:slug        → detail satu project
```

#### Health
```
GET    /health                → status check ("ok")
```

#### Visitor Log *(opsional)*
```
POST   /analytics/visit       → log page visit (fire-and-forget dari FE)
GET    /analytics/summary     → summary visitor (private, pakai API key)
```

### Query Params — `GET /projects`
```
?category=security|package|web|data
?featured=true
```

### Response Shape — `GET /projects`
```json
{
  "data": [
    {
      "id": "uuid",
      "slug": "haas-microservices",
      "title": "Honeypot-as-a-Service",
      "description": "...",
      "highlights": ["...", "..."],
      "techStack": ["NestJS", "Redis", "BullMQ"],
      "category": "security",
      "isFeatured": true,
      "githubUrl": "https://github.com/godwimp/haas-microservices",
      "liveUrl": null,
      "npmUrl": null
    }
  ]
}
```

---

## Caching Strategy

| Data | Cache | TTL | Alasan |
|---|---|---|---|
| `GET /projects` | Redis | 1 jam | Data jarang berubah |
| `GET /projects/:slug` | Redis | 1 jam | Sama |
| Cache invalidation | Manual via endpoint | — | Kalau update project, hit `/admin/cache/clear` |

Cache key pattern: `portfolio:projects:all`, `portfolio:projects:{slug}`

---

## Environment Variables

### Frontend (`.env.local`)
```env
# Server-only — tidak diekspos ke browser
API_URL=https://api.godwimp.me
```

### Backend (`.env`)
```env
# App
PORT=3000
NODE_ENV=production

# Database
DATABASE_URL=postgresql://...

# Redis
REDIS_URL=redis://...

# Security
ADMIN_API_KEY=your-secret-key   # untuk endpoint /admin/*
```

---

## Folder Structure

### Frontend
```
godwimp-web/
├── app/
│   ├── page.tsx              # Home (hero + projects + stack + about)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectList.tsx
│   ├── TechStack.tsx
│   ├── About.tsx
│   └── Nav.tsx
├── lib/
│   └── api.ts                # fetch wrapper ke BE
├── types/
│   └── index.ts              # shared types (Project, etc.)
└── public/
```

### Backend
```
godwimp-api/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── projects/
│   │   ├── projects.module.ts
│   │   ├── projects.controller.ts
│   │   ├── projects.service.ts
│   │   └── dto/
│   ├── analytics/            # opsional
│   │   ├── analytics.module.ts
│   │   ├── analytics.controller.ts
│   │   └── analytics.service.ts
│   ├── cache/
│   │   └── cache.module.ts   # Redis setup
│   └── prisma/
│       └── prisma.service.ts
├── prisma/
│   └── schema.prisma
└── .env
```

---

## Notes

- **Backend internal only** — FE fetch ke BE dilakukan di server-side (Next.js Server Components / Route Handlers). BE tidak perlu CORS public, tidak diekspos langsung ke browser. CORS hanya allow `localhost:3000` untuk dev.
- **Kenapa Supabase?** Free tier PostgreSQL yang managed, tidak perlu setup server sendiri.
- **Kenapa Upstash?** Serverless Redis, free tier cukup untuk traffic portfolio.
- **Kenapa Railway untuk BE?** Paling gampang deploy NestJS tanpa SSH, ada free tier.
- **DNS di Cloudflare (DNS only)** — SSL di-handle Vercel dan Railway masing-masing, bukan Cloudflare. Kalau switch ke full proxy nanti, perlu adjust SSL mode di Cloudflare.
- **Mail via Cloudflare Email Routing** — email masuk ke `*@godwimp.me` di-forward ke Gmail. Untuk kirim email dari app (contact form dll), tetap butuh SMTP provider terpisah seperti Resend.