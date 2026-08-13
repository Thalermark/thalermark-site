---
title: Sales tax rates
description: Named rates you set once, apply to items and invoice lines, and remit from one report.
sidebar:
  order: 3
---

If you charge sales tax, you set your rates once in **Settings → Tax** and
then barely think about them again.

## Create a rate

**+ New policy**: a name ("General", "Reduced", "Exempt"), the rate as a
percentage (8.25), and optionally mark it as the company default. Most
businesses need exactly one; keep more if your work spans jurisdictions or
some of what you sell is taxed differently.

## Where rates get used

- **On items**: each [item in your list](/docs/use/items/) can be taxable at
  a specific rate, or left on "Company default" so it follows whatever your
  default is at invoice time.
- **On invoice lines**: every line has a **Taxable** checkbox and a rate
  picker. Picking an item fills these in; you can override per line.
- **On the invoice**: the tax total is always calculated from the lines.
  There is no invoice-level tax field to fudge, which is exactly why the
  [Sales tax collected report](/docs/use/reports/) can be trusted when it's
  time to remit.

## When a rate changes

Rates change; history shouldn't. **Archive** the old policy and create the
new one. Archived rates disappear from the pickers, while every invoice that
used them stays exactly as it was sent.
