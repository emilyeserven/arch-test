# arch-test

A monorepo powered by pnpm workspaces, TypeScript, Postgres, and Redis.

## Prerequisites

- Node.js >= 22.0.0
- [pnpm](https://pnpm.io/) (via Corepack: `corepack enable`)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy env file and adjust if needed
cp .env.example .env

# Start Postgres and Redis
docker compose up -d

# Verify services are healthy
docker compose ps
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Run all apps in dev mode (parallel)  |
| `pnpm build`      | Build all apps                       |
| `pnpm lint`       | Lint all apps                        |
| `pnpm typecheck`  | Type-check all apps                  |

## Services

| Service  | Default Port | Connection String                                      |
| -------- | ------------ | ------------------------------------------------------ |
| Postgres | 5432         | `postgresql://postgres:postgres@localhost:5432/archtest` |
| Redis    | 6379         | `redis://localhost:6379`                                |

All ports and credentials are configurable via environment variables — see `.env.example`.
