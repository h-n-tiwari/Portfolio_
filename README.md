# Full-Stack Web3 Developer Portfolio

A minimal, professional portfolio website built with Next.js, Express, PostgreSQL, and Prisma. Designed for a junior full-stack developer with a focus on Web3 and blockchain technology.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 3 |
| Backend | Node.js, Express 4, TypeScript 5 |
| Database | PostgreSQL, Prisma 5 |
| Icons | Lucide React |
| Runtime | Bun |
| Web3 (skills/projects display) | Solidity, Hardhat, Ethers.js |

## Prerequisites

- [Bun](https://bun.sh/) v1.0 or later
- [Node.js](https://nodejs.org/) v18 or later
- [PostgreSQL](https://www.postgresql.org/) v14 or later

## Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd FullStack
bun install
```

### 2. Configure the backend

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` and set your PostgreSQL connection string:

```
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/web3_portfolio
PORT=7000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Configure the frontend

```bash
cd frontend
cp .env.example .env.local
```

Edit `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:7000/api
```

### 4. Set up the database

```bash
# Create the database
createdb web3_portfolio

# Generate Prisma client
cd backend
bunx prisma generate

# Run migrations
bunx prisma migrate dev --name init
```

### 5. Start development servers

In one terminal:

```bash
cd backend
bun run dev
```

In another terminal:

```bash
cd frontend
bun run dev
```

The frontend is available at http://localhost:3000 and the backend API at http://localhost:7000/api.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/health | API health check |
| GET | /api/portfolio | Portfolio information |
| GET | /api/portfolio/projects | Project list |
| GET | /api/portfolio/skills | Skills list |
| POST | /api/contact | Submit a contact message |

### POST /api/contact

Request body:

```json
{
  "name": "string (2–100 chars)",
  "email": "string (valid email)",
  "subject": "string (3–200 chars)",
  "message": "string (10–5000 chars)"
}
```

Success response (201):

```json
{ "message": "Message received. Thank you for reaching out!" }
```

## Customization

All portfolio content is configured in a single file:

```
frontend/src/data/portfolio.ts
```

Edit the following exports to personalize the portfolio:

- `portfolioInfo` — your name, title, tagline, GitHub, LinkedIn, and email
- `projects` — your project list with name, description, technologies, URLs, and status
- `skills` — your skills organized by category with proficiency levels

The same data structure is mirrored in `backend/src/data/portfolio.data.ts` for the API endpoints.

### Skill levels

| Level | Meaning |
|---|---|
| `proficient` | Use regularly in projects |
| `learning` | Actively developing skill |
| `familiar` | Have used or studied, not daily use |

### Project status

| Status | Meaning |
|---|---|
| `completed` | Finished and working |
| `in-progress` | Currently being built |
| `demo` | Proof of concept |

## Implemented Features

- Responsive single-page layout (mobile, tablet, desktop)
- Fixed navbar with smooth scrolling and mobile menu
- Hero section with CTA buttons and social links
- About section with highlights
- Skills section with categorized skill badges (no fake progress bars)
- Projects section driven by typed data file
- Contact form with client-side and server-side validation
- Contact messages stored in PostgreSQL via Prisma
- Rate limiting on the contact endpoint (5 requests per 15 minutes)
- Express backend with CORS, request size limits, and error handling
- Accessible markup (ARIA labels, roles, keyboard navigation)
- Dark Web3 aesthetic with purple/cyan accents

## Remaining Manual Steps

1. **Database**: create the PostgreSQL database and run migrations (see Setup above)
2. **Portfolio data**: update `frontend/src/data/portfolio.ts` and `backend/src/data/portfolio.data.ts` with your real name, links, and projects
3. **Social links**: replace placeholder GitHub and LinkedIn URLs
4. **Email**: replace `contact@example.com` with your real email address
5. **Deployment**: configure environment variables for your production host

## Security Notes

- `DATABASE_URL` and other secrets live in `.env` files that are gitignored
- The contact endpoint validates and sanitizes all inputs server-side before writing to the database
- Rate limiting prevents abuse of the contact endpoint
- The CORS configuration restricts API access to the configured frontend URL
- No contact messages are exposed through public GET endpoints
- Request bodies are limited to 10 KB to prevent oversized payloads
