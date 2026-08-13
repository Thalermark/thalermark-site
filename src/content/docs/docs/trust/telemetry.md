---
title: Telemetry, in plain words
description: Off by default, anonymous when on, and specced in public down to the last field.
sidebar:
  order: 1
---

Telemetry is how we learn which features get used and where errors happen,
so we build the right things. Here's the whole deal, in plain words.

## Off until you say yes

Nothing is collected by default. Workspace owners and admins see one prompt,
once: help improve the product, yes or no. Whatever you answer is respected
immediately and never re-asked. You can change your mind any time in
**Settings → Privacy**.

## What "on" actually means

Anonymous usage events. Things like: an invoice was created (and how many
lines it had, but never the amounts), an expense was logged (and whether a
receipt was attached), a report was viewed, where someone gave up partway
through a form. Each participating workspace is identified only by a random
ID that has no connection to you, and that ID is thrown away and regenerated
if you ever opt out and back in, so history can't be stitched together.

**Never collected, on or off:** names, emails, phone numbers, invoice or
expense amounts, customer or business names, document contents, search
queries, IP addresses, or credentials.

## The spec is public, word for word

Every event we collect is listed in
[TELEMETRY.md](https://github.com/Thalermark/thalermark/blob/main/TELEMETRY.md),
the versioned spec in the open repo, and the collection code itself is open
source. Adding any new collection requires updating that document first,
never retroactively and never silently. If the code and the document ever
disagree, we treat that as a critical bug:
[tell us](https://github.com/Thalermark/thalermark/issues).

What we learn goes back to the community as published aggregate reports.

## Self-hosting

Two extra guarantees on your own server:

- Set `TELEMETRY_DISABLED=true` and no one on the install is ever prompted
  and nothing is ever collected.
- Even with consent, nothing leaves your host unless your deployment
  explicitly configures a transmission endpoint. The default is that events
  stay home.

Questions: [privacy@thalermark.com](mailto:privacy@thalermark.com).
