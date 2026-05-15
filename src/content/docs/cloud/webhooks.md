---
title: PayIn Cloud Webhooks
description: Receive and process PayIn Cloud payment events safely.
order: 35
---

PayIn Cloud webhooks notify your merchant system when payment status changes.

A reliable webhook integration is required before production launch because it connects blockchain payment detection to your business system.

## Endpoint requirements

Your webhook endpoint should:

1. Use HTTPS.
2. Verify PayIn Cloud webhook signatures.
3. Return a success response quickly.
4. Store the event ID or equivalent deduplication key.
5. Process events idempotently.
6. Avoid doing slow fulfillment work inside the HTTP request handler.

## Idempotency

Webhook delivery may be retried. Your system must be able to receive the same event more than once without double-crediting a user, shipping twice, or fulfilling an invoice twice.

A common pattern is:

1. Receive webhook.
2. Verify signature.
3. Store event ID if it has not been seen.
4. Enqueue business processing.
5. Return success to PayIn Cloud.
6. Process fulfillment from your internal queue.

## Failure handling

If webhook delivery fails, check:

- Endpoint URL and DNS
- HTTPS certificate
- Firewall or access-control rules
- Signature verification logic
- Response status code
- Timeout behavior
- Duplicate event handling

## Production checklist

Before go-live:

- Sandbox webhook delivery has been tested.
- Signature verification is enabled.
- Duplicate events are safe.
- Failed events can be reviewed and replayed or reconciled.
- Support staff know how to inspect payment state without exposing secrets.

## Related docs

- [Webhook concept](../concepts/webhooks/)
- [Order payments in PayIn Cloud](./order-payments/)
