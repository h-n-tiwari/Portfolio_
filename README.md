# Portfolio

my personal portfolio site. frontend is Next.js, backend is Express, contact messages go into PostgreSQL via Prisma.

## stack

- Next.js 15, React 19, TypeScript, Tailwind CSS
- Express, TypeScript, Node.js
- PostgreSQL, Prisma
- Bun

## requirements

- [Bun](https://bun.sh/) v1.0+
- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+

## setup

**1. clone and install**

```bash
git clone <repo-url>
cd FullStack
bun install
```

**2. backend env**

```bash
cd backend
cp .env.example .env
```

fill in `.env`:

```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/portfolio
PORT=7000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**3. frontend env**

```bash
cd frontend
cp .env.example .env.local
```

fill in `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:7000/api
```

**4. database**

```bash
createdb portfolio
cd backend
bun run db:generate
bun run db:migrate
```

**5. run**

terminal 1:
```bash
cd backend
bun run dev
```

terminal 2:
```bash
cd frontend
bun run dev
```

frontend → http://localhost:3000  
backend → http://localhost:7000/api

## scripts

from root:

| command | does |
|---|---|
| `bun run dev:frontend` | start frontend |
| `bun run dev:backend` | start backend |
| `bun run build:frontend` | build frontend |
| `bun run build:backend` | compile backend |
| `bun install` | install everything |

backend:

| command | does |
|---|---|
| `bun run dev` | start with file watch |
| `bun run build` | compile to dist/ |
| `bun run start` | run compiled build |
| `bun run db:generate` | generate prisma client |
| `bun run db:migrate` | run migrations |
| `bun run db:push` | push schema without migration |

frontend:

| command | does |
|---|---|
| `bun run dev` | start with turbopack |
| `bun run build` | production build |
| `bun run start` | start production server |
| `bun run lint` | eslint |
| `bun run type-check` | ts check |

## api

| method | endpoint | description |
|---|---|---|
| GET | /api/health | health check |
| GET | /api/portfolio | portfolio info |
| GET | /api/portfolio/projects | projects |
| GET | /api/portfolio/skills | skills |
| POST | /api/contact | send a message |

contact body:

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

## customize

edit `backend/src/data/portfolio.data.ts` to change your name, title, links, projects, and skills. the frontend pulls everything from the API so thats the only file you need to touch.

## notes

- `.env` files are gitignored, never commit them
- contact endpoint is rate limited (5 requests / 15 min)
- CORS is locked to the frontend URL you set in the backend env
