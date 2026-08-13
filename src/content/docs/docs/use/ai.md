---
title: The AI in your books
description: What the AI actually does (reads receipts, suggests categories, watches your cash flow) and how to connect it.
sidebar:
  order: 17
---

Thalermark's AI isn't a chatbot in the corner. It does three specific jobs,
each woven into a screen you already use:

- **Reads receipts**: [Auto-fill from receipt](/docs/use/expenses/) turns a
  photo into merchant, total, date, and a category, for you to review.
- **Suggests categories**: the **✨ Suggest** button on any expense.
- **Watches your cash flow**: the [What to watch](/docs/use/where-you-stand/)
  notes on your dashboard. Which customers pay late, when money looks tight,
  what changed. Every observation is grounded in a real number from your own
  books.

The AI drafts and suggests; it never saves anything without you. And without
a connection, nothing breaks. The app runs fine; those three features just
sit out.

## Connect it

An owner or admin sets it up once for the whole workspace, in
**Settings → AI**:

1. Pick a provider: **Anthropic**, **OpenAI**, **Ollama (local)**,
   **xAI (Grok)**, or any custom compatible endpoint.
2. Paste your API key (Ollama needs none; it runs entirely on your own
   machine).
3. Click **Verify**. AI stays off until verification passes, so a typo'd key
   fails here and not in the middle of your work.

Your key is stored encrypted and never shown again. Remove the connection
and AI switches off for everyone; nothing already saved to your books
changes.

:::note[On the hosted service vs. self-hosting]
On app.thalermark.com you bring your own AI key today. Self-hosters have the
same choices, including the fully local Ollama route, where nothing ever
leaves your server. See
[Connect your own AI](/docs/self-host/install/#turning-on-the-extras).
:::
