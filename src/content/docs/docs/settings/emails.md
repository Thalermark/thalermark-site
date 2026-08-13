---
title: The emails customers get
description: Four templates you can reword. The layout and buttons stay; the voice becomes yours.
sidebar:
  order: 4
---

Thalermark sends email on your behalf at four moments: an invoice, an
estimate, a customer statement, and a payment reminder. In
**Settings → Email templates** you can reword each one so it sounds like
you, not like software.

## What you edit, and what stays

You edit the **subject** and the **message**. The Thalermark layout, the
buttons (View invoice, Pay), and the footer stay as they are, so the emails
keep working on every device and the pay link never goes missing because of
a typo.

Each template shows a **Default** or **Customized** badge, a **View**
preview so you can read exactly what a customer would get, and a reset back
to the default wording if an experiment goes wrong.

## Placeholders

Templates use placeholders that fill in per email, written like
`{{customer_name}}`. The editor lists every placeholder available for that
template with what it means, so "Hi `{{customer_name}}`, here's the invoice
for `{{invoice_number}}`" comes out as "Hi Maria, here's the invoice for
INV-0042."

## Two related knobs elsewhere

- **Reply-to** lives in **Settings → Business**: when a customer hits reply
  on an invoice email, this is where it goes.
- **Reminder timing** lives in **Settings → Reminders**; the reminder
  *template* here controls the wording, the schedule there controls the
  when. See [Record getting paid](/docs/use/get-paid/).

:::note[Self-hosting without email configured?]
The templates page will tell you plainly when the server can't send email
yet (invoices still save, and share links still work). Wording you set up
now applies as soon as email is switched on. See
[the install guide](/docs/self-host/install/#turning-on-the-extras).
:::
