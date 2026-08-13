---
title: Install with Docker Compose
description: Run the free, open source Thalermark on your own server with one compose file.
sidebar:
  order: 1
---

The whole stack (database, backend, web app, and TLS) comes up from a single
Docker Compose file. Nothing else to install on the host, and no build step:
the compose pulls prebuilt images published by CI.

## What you need

- **Docker** with the Compose plugin (Docker Engine 24+ or Docker Desktop).
- For a real deployment: a **domain name** pointed at your host, with ports
  **80 and 443** reachable from the internet (TLS certificates are issued and
  renewed automatically). For a quick look on localhost, none of that.
- Optional, only if you want the integrations: an Anthropic or OpenAI key
  for AI features (or point it at a local Ollama), a Resend key for outgoing
  email, Stripe keys for card payments.

## Quick start

Clone the repo, then from its root:

```bash
cp .env.example .env
```

Open `.env` and set the secrets. Each one is a single command to generate:

| Variable | What it's for | Generate with |
| --- | --- | --- |
| `THALERMARK_DOMAIN` | Your public hostname (or `localhost` to try it out) | |
| `BETTER_AUTH_SECRET` | Signs login sessions | `openssl rand -base64 32` |
| `POSTGRES_PASSWORD` | Database admin password | `openssl rand -hex 32` |
| `THALERMARK_APP_PASSWORD` | Password for the app's own database login | `openssl rand -hex 32` |
| `THALERMARK_PGBOSS_PASSWORD` | Password for the background-job runner's database login | `openssl rand -hex 32` |
| `STORAGE_URL_SECRET` | Signs receipt download links | `openssl rand -hex 32` |

Then bring it up:

```bash
docker compose --env-file .env -f docker/docker-compose.yml up -d
```

Open `https://your-domain` (or `https://localhost`; the browser warns once
about the local certificate, accept and proceed). Sign up: the first signup
creates your account and sets up your business.

:::caution[Two easy mistakes]
- **Always pass `--env-file .env`** and run compose from the repo root.
  Without it, some settings silently fall back to insecure defaults.
- **Pin a version.** Set `THALERMARK_VERSION` in `.env` to a release tag for
  reproducible deploys; left unset it tracks `latest`.
:::

## Turning on the extras

Everything optional is off-but-safe until you configure it:

- **AI** (receipt reading, categorization, insights) is set up **in the app**,
  not in `.env`: sign in and open **Settings → AI**, pick a provider
  (Anthropic, OpenAI, a local Ollama, or any compatible endpoint), paste a
  key, and click **Verify**.
- **Email**: set `RESEND_API_KEY` so invoices actually reach customers.
  Without it, outgoing mail is only logged to the console.
- **Card payments**: set the three `STRIPE_*` keys. If your install serves
  businesses other than your own, also set
  `STRIPE_REQUIRE_CONNECTED_ACCOUNT=true` so each business's money settles
  into its own Stripe account, never yours.

The boot log tells you what came up:

```bash
docker compose -f docker/docker-compose.yml logs api | grep -E "transport|storage|Stripe|enabled|disabled"
```

## Backups, upgrades, and going deeper

The stack includes an automatic daily database backup out of the box. For
backup rotation, restores, upgrades, object storage, managed Postgres, running
behind your own proxy, and the full configuration reference, see
[DEPLOYMENT.md in the repo](https://github.com/Thalermark/thalermark/blob/main/DEPLOYMENT.md):
the complete operator's guide.
