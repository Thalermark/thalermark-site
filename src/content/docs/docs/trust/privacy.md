---
title: Privacy and your data
description: Your books are yours. What Thalermark stores, where it goes, and how you take it with you.
sidebar:
  order: 2
---

Your books are the private record of your business. Here's how Thalermark
treats them.

## Your data is yours to take

**Settings → Import & export → Take a copy with you** downloads every record
in your workspace (invoices, estimates, expenses, bills, contacts, items,
payment history, jobs, logged hours, mileage, and more) as a single ZIP, in
spreadsheet-friendly CSV or exact-copy JSON, one folder per company. No
lock-in, no asking permission.

One honest caveat: receipt *images* aren't in that ZIP today. They stay in
the app's storage, so if you're leaving, save the ones you need from their
expense pages.

## Nothing leaves unless you switch it on

Thalermark talks to outside services only where you've connected them:

- **Card payments** run on Stripe, under the Stripe account you connect.
- **Invoice and reminder emails** go out through an email delivery service,
  because they have to reach your customer's inbox.
- **AI features** send the relevant snippet (a receipt image, an expense
  description, your cash-flow totals) to the provider *you* connected in
  Settings → AI, under your own key. Connect a local Ollama and nothing
  leaves your machine at all. Your key is stored encrypted and never shown
  again.
- **Telemetry** is [opt-in and anonymous](/docs/trust/telemetry/), always.

Self-hosting takes this further: every one of those is off until you
configure it, and the data never touches infrastructure we run.

## Inside your workspace

- **Every change is recorded.** Each invoice, expense, and contact keeps a
  History of who changed what and when. It's your record, kept for you, and
  visible in the app.
- **Roles limit your team.** A [viewer can look but not touch](/docs/use/team/),
  an accountant sees the numbers but not your settings. What a role can't do
  isn't shown to it.

## Questions

Write [privacy@thalermark.com](mailto:privacy@thalermark.com). If you think
you've found a privacy *bug*, treat it as a security issue and use the
[security channel](/docs/trust/security/) instead.
