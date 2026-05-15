---
title: Webhooks
description: How PayIn notifies merchant systems about payment events.
order: 14
---

Webhooks are HTTP callbacks sent from PayIn to a merchant system when payment events occur.

They are the usual way for merchant software to learn that an order was paid, a deposit was detected, or a payment status changed.

## Common events

Examples include:

- Order created
- Payment pending confirmation
- Payment confirmed
- Order expired
- Deposit detected
- Webhook delivery failed or retried

## Integration requirements

A production webhook endpoint should:

1. Accept HTTPS requests.
2. Verify webhook signatures.
3. Return a success status quickly.
4. Process events idempotently.
5. Store event IDs to avoid duplicate side effects.
6. Retry internal business processing separately when needed.

## Why idempotency matters

Webhook delivery can be retried. A merchant system must safely handle the same payment event more than once without double-crediting a user or fulfilling an order twice.
