---
title: Reconciliation
description: Match PayIn Cloud payment events with merchant orders, invoices, balances, and accounting records.
order: 39
---

Reconciliation is the process of matching PayIn Cloud payment records with your internal business records.

A good reconciliation process helps your team answer: was the customer charged, was the order fulfilled, was the account credited, and does accounting agree with payment events?

## Records to match

Your team should be able to connect:

- Merchant order or invoice ID
- PayIn Cloud order/payment ID
- Customer or account ID
- Chain and token
- Expected amount
- Received amount
- Transaction hash or payment reference
- Payment status and confirmation time
- Webhook event IDs
- Fulfillment or crediting record

## Common mismatch cases

Plan for:

- Customer paid after order expiration.
- Customer underpaid.
- Customer overpaid.
- Customer paid on the wrong network.
- Webhook delivery succeeded but internal fulfillment failed.
- Webhook delivery was retried and processed more than once.
- Manual support action changed order state.

## Daily operating habit

For active merchants, a lightweight daily reconciliation habit is useful:

1. Review paid orders and deposits.
2. Review failed or retried webhook events.
3. Review underpaid, overpaid, expired, or manually adjusted payments.
4. Compare PayIn Cloud records with your internal ledger or order system.
5. Investigate differences before they become customer support issues.

## Related docs

- [Order payments](./order-payments/)
- [Webhooks](./webhooks/)
- [Support and incidents](./support-and-incidents/)
