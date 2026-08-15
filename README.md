# thalermark-site

The marketing site and documentation for [Thalermark](https://thalermark.com),
the open source accounting tool for freelancers and trades people.

One Astro project, two faces:

- **`/`**: the landing page (`src/pages/index.astro`)
- **`/docs`**: the documentation, built with
  [Starlight](https://starlight.astro.build) from plain markdown in
  `src/content/docs/docs/`

The build also emits `llms.txt`, `llms-small.txt`, and `llms-full.txt` so AI
agents can read the docs as markdown.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output is plain static files in `dist/`, deployable to any web host with no
server runtime required.

## Writing docs

House rules:

- **No accounting jargon.** Docs use the same words the app screens use:
  money in, money out, what you're owed, what you owe. If a page needs a
  bookkeeping class to follow, it's a bug.
- **No em dashes.** Anywhere. Rewrite with a period, comma, colon, or
  parentheses.

See `PLAN.md` for the full site plan and roadmap.
