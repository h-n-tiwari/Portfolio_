# My Portfolio Website

So this is my personal portfolio site i built using Next.js for the frontend and Express for the backend. I wanted something clean and minimal with a Web3 vibe since thats the space im most interested in. It uses PostgreSQL to store contact form submissions and Prisma as the ORM.

## What i used

- **Frontend** - Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS
- **Backend** - Express + TypeScript running on Node.js
- **Database** - PostgreSQL with Prisma
- **Runtime** - Bun (way faster than npm honestly)
- **Web3 stuff** - Solidity, Hardhat, Ethers.js (shown in skills/projects)

## Before you start

make sure you have these installed:

- [Bun](https://bun.sh/) v1.0+
- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+

## Project structure

```
FullStack/
├── frontend/          # Next.js app
│   └── src/
│       ├── app/       # pages, layout, styles
│       ├── components/# all the sections (Hero, About, Skills, etc)
│       ├── lib/       # api calls to backend
│       └── types/     # typescript types
└── backend/           # Express API
    └── src/
        ├── controllers/
        ├── routes/
        ├── services/
        ├── data/      # portfolio.data.ts - edit this to make it yours
        └── middleware/
```

## How to run it

### 1. Clone and install

```bash
git clone <your-repo-url>
cd FullStack
bun install
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env
```

open `backend/.env` and fill in your postgres connection:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/web3_portfolio
PORT=7000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Frontend setup

```bash
cd frontend
cp .env.example .env.local
```

`frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:7000/api
```

### 4. Database

```bash
createdb web3_portfolio

cd backend
bun run db:generate
bun run db:migrate
```

### 5. Start it up

open two terminals:

**terminal 1 (backend):**
```bash
cd backend
bun run dev
```

**terminal 2 (frontend):**
```bash
cd frontend
bun run dev
```

frontend runs on http://localhost:3000 and the api on http://localhost:7000/api

## Scripts

**from the root:**

| Command | What it does |
|---|---|
| `bun run dev:frontend` | starts the Next.js dev server |
| `bun run dev:backend` | starts the Express dev server |
| `bun run build:frontend` | builds frontend for production |
| `bun run build:backend` | compiles backend TypeScript |
| `bun run install:all` | installs everything |

**backend:**

| Command | What it does |
|---|---|
| `bun run dev` | starts with file watching |
| `bun run build` | compiles to dist/ |
| `bun run start` | runs the compiled build |
| `bun run db:generate` | generates prisma client |
| `bun run db:migrate` | runs migrations |
| `bun run db:push` | pushes schema without a migration |

**frontend:**

| Command | What it does |
|---|---|
| `bun run dev` | starts Next.js with Turbopack |
| `bun run build` | production build |
| `bun run start` | starts production server |
| `bun run lint` | runs eslint |
| `bun run type-check` | ts check without building |

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/health | check if backend is running |
| GET | /api/portfolio | gets all portfolio info |
| GET | /api/portfolio/projects | gets projects |
| GET | /api/portfolio/skills | gets skills |
| POST | /api/contact | submit a contact message |

contact form payload:

```json
{
  "name": "string (2-100 chars)",
  "email": "valid email",
  "subject": "string (3-200 chars)",
  "message": "string (10-5000 chars)"
}
```

## Customizing it for yourself

everything is in one file - `backend/src/data/portfolio.data.ts`

just edit:
- `portfolioInfo` - your name, title, bio, github, linkedin, X, email
- `projects` - your projects with descriptions, tech stack, links
- `skills` - skills grouped by category with levels

the frontend pulls all this from the API so you only need to change one place.

skill levels i used:
- `proficient` - use it regularly
- `learning` - still figuring it out
- `familiar` - used it before but not all the time

project status:
- `completed` - done and working
- `in-progress` - still building
- `demo` - just a proof of concept

## Features

- responsive layout (works on mobile, tablet, desktop)
- fixed navbar with smooth scroll and mobile menu
- hero section with cta buttons and social links
- about section
- skills section with category badges (no fake progress bars lol)
- projects section loaded from the API
- contact form with validation on both frontend and backend
- messages stored in postgres
- rate limiting on the contact endpoint (5 per 15 min)
- dark Web3 look with purple/cyan colors
- accessible markup

## TODO / things you still need to do

1. create the postgres database and run migrations
2. update `portfolio.data.ts` with your actual info
3. replace the placeholder social links
4. replace the placeholder email
5. set env vars when you deploy

## Security stuff

- secrets stay in `.env` files which are gitignored
- contact form inputs are validated server side before hitting the db
- rate limiting so nobody spams the contact endpoint
- CORS only allows the configured frontend url
- contact messages arent exposed through any public GET endpoint
- request body capped at 10kb
