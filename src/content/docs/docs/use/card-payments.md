---
title: Accept card payments
description: Put a Pay button on your invoices with Stripe, and list the offline ways you take money too.
sidebar:
  order: 7
---

Once card payments are on, every invoice you send carries a **Pay** button.
The customer pays on their phone, and the invoice marks itself paid. No
chasing, no "the check's in the mail."

## Connect with Stripe

You'll need to be an owner or admin. Go to **Settings → Payments** and click
**Connect with Stripe**. Stripe runs the sign-up itself: your bank details,
an ID check, business info. It takes a few minutes, and the money from card
payments lands in *your* Stripe account, not ours.

The page always tells you where things stand in plain words: whether you
stopped partway (nothing's lost, you pick up where you left off), Stripe
needs one more document, they're still verifying, or "Payments are live."

:::note[Until it's live]
Invoices sent before setup is finished simply go out without a Pay button.
Your customer just sees the payment methods you've listed, and is never told
why. The invoice page shows *you* a "Card payment isn't live yet" note with a
**Finish payment setup** link.
:::

## The other ways you get paid

On the same page, **Other ways to get paid** covers everything that isn't a
card:

- **Cash** (in person)
- **Check**: who to make it payable to, and a mailing address if you want
- **Venmo**: your handle
- **Zelle**: your email or phone

Whatever you enable is printed as instructions on the customer's copy of
every invoice. These you [mark paid yourself](/docs/use/get-paid/) when the
money lands. Thalermark can't see your Venmo, only your Stripe.

## What the customer sees

Their invoice link shows the invoice, a **Pay $X** button ("Secure card
payment via Stripe"), and "Or pay directly:" with your offline methods. After
a card payment the page updates itself: paid, still clearing, or "nothing
was charged, try again" if the card was declined.
