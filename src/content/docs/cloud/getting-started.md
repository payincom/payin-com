---
title: PayIn Cloud Getting Started
description: Start integrating with the hosted PayIn Cloud payment service.
order: 30
---

PayIn Cloud is the hosted PayIn service for online merchants who want stablecoin payments without running their own payment infrastructure.

Use PayIn Cloud when you want PayIn to operate the payment service while your business integrates APIs, hosted payment pages, and webhooks.

## Integration path

1. Create or request a merchant account.
2. Start in sandbox.
3. Create an API key for your test integration.
4. Create a test order.
5. Open the hosted payment page.
6. Configure and verify your webhook endpoint.
7. Complete production readiness review.
8. Move to production only after approval.

## What your system needs

Your merchant system usually needs:

- A backend service that can call the PayIn API
- A secure place to store API keys
- A webhook endpoint reachable over HTTPS
- Idempotent payment event handling
- Internal order or balance records for reconciliation

## What PayIn operates

PayIn Cloud operates the payment API, hosted payment pages, blockchain monitoring, and payment event delivery infrastructure.
