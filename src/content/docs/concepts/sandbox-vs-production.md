---
title: Sandbox vs Production
description: How PayIn separates testing environments from real payment environments.
order: 15
---

PayIn uses environment separation to reduce the risk of accidental real-money operations during integration and testing.

| Environment | Purpose | Typical network type |
| --- | --- | --- |
| Sandbox | Development, QA, merchant integration, demos | Testnet or mock services |
| Production | Real merchant payments | Mainnet |

## Sandbox first

Merchants should always verify the full flow in sandbox before production:

1. Create a test order.
2. Open the payment page.
3. Send a testnet payment.
4. Confirm PayIn detects the transaction.
5. Confirm webhook delivery.
6. Confirm merchant business logic handles the event correctly.

## Production readiness

Before production, confirm:

- Separate production database and secrets
- Mainnet RPC providers
- Webhook signature verification
- Monitoring and alerting
- Backup and rollback procedures
- Clear operational owner for payment incidents
