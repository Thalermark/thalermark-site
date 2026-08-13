# Thalermark site + docs — migration plan

**Bottom line:** one new public repo (`Thalermark/thalermark-site`) holding one Astro
site: the marketing landing page at `thalermark.com` (ported nearly verbatim, CTAs
flipped from "early access" to live) and a Starlight docs site at
`thalermark.com/docs`. Docs are written fresh, jargon-free, as markdown files —
which is also what agents read. Built output is plain static files, uploaded to the
current shared host.

**Decisions locked (2026-08-13):**
- Engine: **Astro + Starlight** (static; docs = `.md` in git)
- Layout: **one repo, one site** — landing + docs together
- Hosting: **current shared host** (static upload; portable anywhere later)

---

## Why this path

- Starlight is a plugin inside a normal Astro project: docs get the full docs
  treatment (sidebar, search, dark mode), while `src/pages/index.astro` is a free
  canvas — the existing landing HTML drops in with its inline CSS untouched.
- Markdown-in-git satisfies "agents can read it" natively: the source files are
  public on GitHub, and we additionally serve raw `.md` + an `llms.txt` index from
  the site itself (Phase 3).
- Static output means the shared host needs nothing but FTP/SFTP. No Node on the
  server, no database, no new service to babysit.

---

## Phase 0 — Scaffold (repo + skeleton)

- New **public** repo `Thalermark/thalermark-site` (public is required for the
  agents-read-raw-files story, and it's a trust signal like the core repo).
- pnpm + Astro + Starlight + Biome (match core repo tooling; Node 24).
- Layout:

```
thalermark-site/
├── src/
│   ├── pages/index.astro        # landing page (ported from spike)
│   └── content/docs/            # all documentation, plain .md
├── public/                      # favicon.svg/png, og-image, webmanifest
├── astro.config.mjs             # starlight mounted at /docs
├── biome.json
└── package.json
```

- License: MIT for the site code, CC BY 4.0 for docs content (small decision,
  flag at repo creation — plain AGPL also fine if simpler is better).

## Phase 1 — Port the landing page

Source: `thalermark/spikes/thalermark-landing.html` (1,162 lines, self-contained).

- Copy into `src/pages/index.astro` essentially verbatim: keep the inline CSS,
  the struck-mark SVG, the Matomo snippet (`analytics.thalermark.com`), fonts.
- **The "early access → live" copy changes (the minor changes requested):**
  - Nav CTA `Get early access` → **`Open the app`** → `https://app.thalermark.com`
  - Hero email form → primary **`Start free`** button to the app; keep the
    `preview@thalermark.com` mailto as a secondary "questions?" link
  - Final CTA eyebrow `Coming soon` → **`Now live`** (or `Now in open beta` —
    copy decision, see Open items)
  - Final CTA form → same `Start free` button treatment
  - Footer `Documentation` link: GitHub README → **`/docs`**
  - Add a `Docs` link to the top nav
- Assets: `favicon.svg`/`favicon.png` exist in `spikes/`; `og-image.png`,
  `apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest` are referenced
  but only exist on the (currently unreachable) host — pull them down when the
  host is back, or regenerate.

## Phase 2 — Write the docs (net-new, jargon-free)

There are **no end-user docs today** — the repo has developer docs (README,
DEPLOYMENT.md, TELEMETRY.md, CONTRIBUTING.md). So this is writing, not moving.
Repo docs get *adapted* into user-facing pages; the repo keeps its developer
versions and links to the site as canonical for self-hosting.

### Information architecture (sidebar)

- **Start here**
  - What Thalermark is (60-second tour)
  - Create your account (cloud) / first company setup
- **Everyday use** — task-titled, mirrors app language
  - Send your first invoice
  - Estimates, and turning them into invoices
  - Invoices that repeat themselves (recurring)
  - Get paid by card (online payments)
  - Track what you spend (expenses + snap-a-receipt)
  - Money you owe (bills)
  - Customers and contacts
  - Your items list (things you sell often)
  - Where you stand (the Position dashboard)
  - Reports, and the numbers your tax form asks for
  - The AI that watches your books (insights + Settings → AI)
  - Working with your team (invites, roles)
  - Running more than one business
- **Run it yourself (self-hosting)**
  - Install with Docker Compose (from DEPLOYMENT.md + install.sh)
  - Connect your own AI (Anthropic / OpenAI / Ollama / custom)
  - Email, storage, and backups
  - Upgrading
- **Trust**
  - Telemetry, in plain words (humanized TELEMETRY.md)
  - Privacy and your data
  - Security disclosures
  - Open source and the license
- **Contribute** → pointer to the core repo's CONTRIBUTING.md

### Jargon rule (mirrors the product's hidden-double-entry stance)

Banned in docs: *debit, credit, journal entry, ledger, chart of accounts,
accounts receivable/payable, reconciliation, accrual*.
Use instead: *money in, money out, what you're owed, what you owe, your
categories, matching things up*. The docs use the same words the app screens use
— when in doubt, quote the UI.

### Sourcing truth

Docs describe **what works in the live product today** (e.g. card payments are
live; Stripe subscription billing is not). Before each page ships, verify
against the app / the code-side agent — not against aspirational specs.

## Phase 3 — Markdown for agents

- The `src/content/docs/*.md` files are the docs — public in git already.
- Serve from the site as well:
  - `llms.txt` (index) and `llms-full.txt` (concatenated) at the site root —
    the `starlight-llms-txt` community plugin does this; verify it, else it's a
    ~30-line custom Astro integration.
  - Raw per-page markdown at the page URL + `.md`
    (`/docs/invoices` → `/docs/invoices.md`) via a small build step that copies
    content files into `dist/`.
- Acceptance: `curl` any docs URL with `.md` and get clean markdown.

## Phase 4 — Deploy to the shared host

- `pnpm build` → `dist/` of static files; upload replaces the current site root
  (landing at `/`, docs at `/docs/`).
- Pipeline, either/both:
  1. **GitHub Action on push to main** → FTP/SFTP upload (e.g.
     `SamKirkland/FTP-Deploy-Action`); host credentials as repo secrets.
  2. **Local script** (`pnpm build && rsync/lftp ...`) if keeping host creds off
     GitHub is preferred.
- No DNS changes. `analytics.thalermark.com` untouched.
- Portability note: if the host ever disappoints, the same `dist/` deploys to
  GH Pages / Cloudflare Pages with zero code changes.

## Phase 5 — Cutover + verification

- Visual check: landing renders identical to today (minus the intended CTA
  changes), on desktop + phone widths.
- `/docs` loads, sidebar + search work, dark mode works.
- All footer/nav links resolve (no more GitHub-README-as-docs).
- Raw `.md` URLs and `llms.txt` fetch cleanly.
- Matomo still records a pageview.
- Core repo follow-ups (for the code-side agent / a small PR):
  - README gains a "Docs: thalermark.com/docs" link up top.
  - `spikes/thalermark-landing.html` gets a one-line header comment pointing at
    the new repo (leave the spike itself as history).

---

## Open items

- [x] **Copy framing:** "Now in open beta" — decided 2026-08-13, shipped on the
      ported landing page.
- [x] **Signup reality check:** confirmed open self-serve signup — CTAs link
      `app.thalermark.com/sign-up` / `/sign-in` (routes verified in the web app).
- [x] Verify `starlight-llms-txt` plugin — works (v0.11.0 with Starlight 0.41 /
      Astro 7); build emits `llms.txt`, `llms-small.txt`, `llms-full.txt`.
- [ ] Retrieve `og-image.png` + icon set (`apple-touch-icon.png`, `icon-192/512`,
      `site.webmanifest`) from the host when it's back up, or regenerate.
- [ ] Per-page raw markdown (`/docs/foo.md`) — llms-full.txt covers agents for
      now; the per-page copy step is still a nice-to-have.
- [ ] Screenshots for docs pages need the running app — ship v1 text-first,
      add screenshots as a follow-up pass.
- [ ] License choice for the site repo (MIT + CC BY 4.0 vs plain AGPL).
- [ ] Write the "Everyday use" and "Trust" doc sections (sidebar groups appear
      as their directories gain pages).

## Status (2026-08-13)

Phases 0–1 built and verified locally: Starlight scaffold, landing page ported
with live CTAs (rendered check top-to-bottom in the browser), docs home + 2
"Start here" pages + self-host install guide, Pagefind search, sitemap, and the
llms.txt set all in the production build. Not yet a git repo; not yet deployed.

## Explicitly out of scope

- Pricing page (tier pricing is held off-repo until pre-launch).
- Blog / changelog (easy to add later — Astro content collection).
- Docs versioning (docs track the live product; revisit if self-host versions
  diverge painfully).
- Any change to the core repo beyond the two link/pointer follow-ups above.
