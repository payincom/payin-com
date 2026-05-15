---
title: Sandbox Integration
description: Use PayIn Cloud sandbox to test payment flows before production.
order: 37
---

PayIn Cloud sandbox is the safe environment for merchant development, QA, demos, and integration testing.

Use sandbox before production so your team can verify API calls, hosted payment pages, blockchain monitoring, webhook delivery, and business-system updates without real funds.

## What to test

A complete sandbox test should cover:

1. Creating a payment order from your backend.
2. Opening the hosted payment page or rendering payment instructions.
3. Paying with a supported testnet asset or test flow.
4. Receiving payment status updates.
5. Verifying webhook signature handling.
6. Updating your internal order, invoice, or account balance.
7. Handling duplicate webhook delivery safely.
8. Handling expired, underpaid, or failed payment scenarios.

## Environment separation

Sandbox and production must be separate:

| Item | Sandbox | Production |
| --- | --- | --- |
| API keys | Sandbox-only | Production-only |
| Webhook URL | Test endpoint | Production endpoint |
| Chain/network | Testnet or mock | Mainnet |
| Data | Disposable test data | Real merchant/customer data |
| Monitoring | Development visibility | Operational alerts |

Never point sandbox traffic at production databases, production webhook handlers, or production customer workflows unless you have explicitly designed a safe test path.

## Sandbox success criteria

Before requesting production access, confirm:

- Test orders can be created reliably.
- Customers can understand the payment instructions.
- Payment status changes arrive in your system.
- Webhooks are verified and idempotent.
- Your support team can look up a payment and explain its status.
- Your engineering team knows how to inspect failed API or webhook events.

## Related docs

- [API keys](./api-keys/)
- [Order payments](./order-payments/)
- [Webhooks](./webhooks/)
- [Production launch](./production-launch/)
