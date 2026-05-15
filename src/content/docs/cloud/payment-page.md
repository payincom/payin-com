---
title: Hosted Payment Page
description: Use PayIn Cloud hosted payment pages or payment instructions in your checkout flow.
order: 38
---

A PayIn Cloud hosted payment page gives customers a clear place to complete a stablecoin payment.

The page or payment instruction flow usually shows the amount, chain, token, receiving address, expiration time, and payment status.

## Common checkout pattern

1. Customer chooses stablecoin payment in your checkout.
2. Your backend creates a PayIn Cloud order.
3. Your frontend redirects the customer to the hosted payment page or displays payment instructions returned by PayIn Cloud.
4. Customer sends the payment.
5. PayIn Cloud monitors the transaction and updates status.
6. Your system receives webhook events and completes fulfillment.

## Customer experience requirements

Payment instructions should make these points clear:

- Which chain/network to use
- Which token to send
- Exact amount requirement
- Receiving address
- Expiration time
- What happens after payment
- What to do if the customer sends the wrong token, wrong network, or wrong amount

## Redirect and return flow

If your checkout redirects to a hosted page, define:

- Success return URL
- Cancel or back URL
- Expired-payment handling
- Customer support link
- Order lookup path in your own system

Do not rely only on the customer returning to your site. Use webhooks as the source of truth for business fulfillment.

## Related docs

- [Order payments](./order-payments/)
- [Webhooks](./webhooks/)
- [Production launch](./production-launch/)
