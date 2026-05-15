---
title: Product Lines
description: Understand PayIn Cloud, PayIn Open, and PayIn Go.
order: 1
---

PayIn is a product family for stablecoin payments across online, self-hosted, and in-person merchant scenarios.

| Product | Best for | Operating model | Primary docs |
| --- | --- | --- | --- |
| **PayIn Cloud** | Online merchants who want a hosted payment service | PayIn operates the payment infrastructure | [Cloud docs](/docs/cloud/getting-started/) |
| **PayIn Open** | Merchants who want to self-host their own payment gateway | Merchant deploys and operates PayIn Open | [Open docs](/docs/open/overview/) |
| **PayIn Go** | In-person and face-to-face merchants | Lightweight point-of-sale payment flows | [Go docs](/docs/go/overview/) |

## Shared concepts

The core payment concepts are shared across the product family:

- Stablecoin payment orders
- Deposit addresses
- Sandbox and production environments
- Blockchain monitoring
- Webhooks and merchant system updates
- Settlement, reconciliation, and operational risk controls

These concepts are documented once in this public docs hub so Cloud, Open, and Go content can reference the same language.

## Product boundary

PayIn Cloud and PayIn Open are not “free vs paid tiers” of the same deployment. They are different operating models:

- In **PayIn Cloud**, PayIn hosts and operates the payment service.
- In **PayIn Open**, the merchant self-hosts and operates the open-source payment gateway.
- In **PayIn Go**, the product is optimized for in-person payment acceptance rather than online checkout integration.
