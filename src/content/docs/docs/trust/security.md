---
title: Security
description: How to report a vulnerability, what happens next, and the protections built into the product.
sidebar:
  order: 3
---

## Found a security problem?

Report it privately. Please don't open a public issue or post details
anywhere until we've had a chance to fix it.

- **Preferred:** a private report through
  [GitHub's vulnerability reporting](https://github.com/Thalermark/thalermark/security/advisories/new).
  It keeps the conversation private and can assign a CVE where appropriate.
- **Email:** [security@thalermark.com](mailto:security@thalermark.com)

Include what you can: the affected component and version, what the
vulnerability lets someone do, steps to reproduce, and your name if you'd
like credit. Unsure whether something counts? Send it anyway. We'd rather
decline a report than miss something real.

## What happens next

Thalermark is maintained by a small team, and our targets are honest rather
than corporate: we acknowledge reports within a week, triage within 30 days,
and coordinate public disclosure at 90 days (or sooner once a fix ships).
Critical issues, like anything exposing user data, move faster. The full
policy, including scope and supported versions, is
[SECURITY.md in the repo](https://github.com/Thalermark/thalermark/blob/main/SECURITY.md).

**Safe harbor:** good-faith research against your own self-hosted instance,
done within the policy, will never draw legal action from us. Researchers
who responsibly disclose get public credit, with permission.

## Built-in protections

A few of the guarantees the product itself enforces:

- **Workspace isolation is enforced in the database**, not just in
  application code. Your books are fenced off from every other account at
  the lowest layer.
- **Roles are enforced on the server.** Hiding a button is cosmetic;
  every change is re-checked where it lands.
- **AI keys are encrypted at rest** and never displayed again after you
  save them.
- **Receipt files are served through signed links**, not guessable URLs.
- **Every change to your books is recorded** with who and when, so an
  account takeover can't quietly rewrite history.

Self-hosters: the
[deployment guide](https://github.com/Thalermark/thalermark/blob/main/DEPLOYMENT.md)
covers the server-side hardening that's yours to own (TLS, secrets,
backups).
