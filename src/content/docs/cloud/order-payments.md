---
title: Order Payments in PayIn Cloud
description: Create and track checkout, invoice, and payment-order flows with PayIn Cloud.
order: 34
---

Order payments are the main PayIn Cloud flow for online checkout, invoices, and payment links.

Your backend creates an order, the customer pays using the provided instructions or hosted payment page, and PayIn Cloud reports status changes through APIs and webhooks.

## Typical flow

1. Your system creates an internal order or invoice.
2. Your backend creates a PayIn Cloud payment order.
3. PayIn Cloud returns payment instructions or a hosted payment page URL.
4. The customer sends the required stablecoin payment.
5. PayIn Cloud monitors the blockchain transaction.
6. PayIn Cloud updates the payment status.
7. Your system receives webhook events and fulfills the order when safe.

## Status handling

Your integration should expect more than a simple paid/unpaid state.

Common states include:

- Created
- Pending payment
- Pending confirmation
- Paid or confirmed
- Expired
- Underpaid
- Overpaid
- Failed or cancelled

Exact names may vary by API version, but your business logic should be ready for partial, late, or duplicate payment events.

## Merchant responsibilities

Before production, define:

- Order expiration policy
- Which chains and stablecoins are accepted
- Confirmation threshold for fulfillment
- Underpayment and overpayment handling
- Refund and customer support process
- Webhook idempotency rules

## Related docs

- [Order payment concept](../concepts/order-payments/)
- [Webhooks](./webhooks/)
- [Production launch](./production-launch/)
