---
title: Order Payments
description: How PayIn models invoice, checkout, and order-based stablecoin payments.
order: 11
---

An order payment is a payment request tied to a specific checkout, invoice, or business transaction.

The merchant creates an order, PayIn provides payment instructions, the customer pays, and PayIn updates the order status after blockchain confirmation.

## Typical lifecycle

1. Merchant creates an order through API or dashboard.
2. PayIn returns payment instructions or a hosted payment page.
3. Customer sends the required stablecoin payment.
4. PayIn monitors the blockchain for the transaction.
5. PayIn marks the order as pending, paid, expired, underpaid, overpaid, or failed depending on the configured rules.
6. PayIn sends webhook events to the merchant system.

## Common use cases

- Ecommerce checkout
- SaaS invoice payment
- B2B cross-border invoice settlement
- Hosted checkout links
- Platform payment collection

## Key integration questions

Before going live, a merchant should define:

- Which chains and tokens are accepted
- How long an order remains payable
- Whether exact amount matching is required
- How webhook signatures are verified
- What happens for underpayment, overpayment, or late payment
