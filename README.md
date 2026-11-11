# Wedora

> _"One wedding. One plan. Everyone together."_

Wedora is a collaborative wedding management platform tailored for Indian couples and their families.

---

## Architecture Overview

Wedora is organized as an **npm workspaces monorepo**:

- **`apps/web`**: Responsive client application built with React 19, Vite, React Router v7, Tailwind CSS v4, and TanStack Query.
- **`apps/api`**: Modular Monolith REST API built with Node.js, Express.js (ES modules), Mongoose (MongoDB Atlas), and BullMQ (Redis).
- **`packages/shared`**: Shared TypeScript/JavaScript domain contracts, Zod schemas, constants, and formatting utilities.
- **`docs/`**: Approved product requirements and architectural specifications (PRD, SDD, Database Design, API Design).
- **`infra/`**: Local development infrastructure (Docker Compose for Redis).

---

## Getting Started

### Prerequisites

- **Node.js**: `v22.14.0+` (Target: Node 26 Active LTS)
- **npm**: `v10.9.0+`
- **Docker**: For local Redis service (optional for running frontend/API without background workers)

### Installation

Install all workspace dependencies from the monorepo root:

```bash
npm install
```

### Environment Configuration

Copy example environment variables:

```bash
# Frontend
cp apps/web/.env.example apps/web/.env

# Backend
cp apps/api/.env.example apps/api/.env
```

---

## Development Commands

Run from the root directory:

| Command              | Description                                                                |
| :------------------- | :------------------------------------------------------------------------- |
| `npm run dev`        | Starts both Web (`localhost:5173`) and API (`localhost:5000`) concurrently |
| `npm run dev:web`    | Starts only the Vite frontend dev server                                   |
| `npm run dev:api`    | Starts only the Express API with native `node --watch`                     |
| `npm run dev:infra`  | Launches local Redis in Docker Compose in background                       |
| `npm run dev:worker` | Starts the BullMQ background worker with `node --watch`                    |
| `npm run dev:all`    | Runs Web, API, and Worker processes concurrently                           |
| `npm run build`      | Builds all packages and applications                                       |
| `npm run lint`       | Runs ESLint across all workspaces                                          |
| `npm run format`     | Formats all code with Prettier                                             |
| `npm run test`       | Executes unit and integration test suites via Vitest                       |

---

## Security & Architectural Invariants

- **No AI / No Payment Processing**: Financial record-keeping only.
- **Financial Privacy**: Expenses and payments are private to Admins and Managers. Never exposed to guests.
- **Dual-Admin Parity**: Bride and groom are equal Admins. Lifecycle transitions require approvals from both Admins.
- **Account-Free Guests**: Guests access invitations, RSVPs, and event galleries strictly via secure, single-purpose unguessable bearer tokens.
- **Tenant Isolation**: Every wedding database query is strictly scoped by `weddingId`.
