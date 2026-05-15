---
title: Production Launch Checklist
description: Prepare a PayIn Cloud merchant integration for real payments.
order: 36
---

Use this checklist before moving a PayIn Cloud merchant integration from sandbox to production.

Production means real customers, real funds, and real operational risk. Do not skip sandbox verification.

## Integration readiness

- Sandbox order creation works end to end.
- Hosted payment page or payment instructions are clear to customers.
- Webhook endpoint is reachable over HTTPS.
- Webhook signatures are verified.
- Duplicate webhook events are idempotent.
- Internal order, invoice, or account state updates are tested.
- Customer support can look up payment status.

## Security readiness

- Production API keys are stored server-side only.
- Sandbox and production keys are separate.
- Secrets are not committed to git or copied into support tickets.
- Access to production credentials is restricted.
- Logs redact API keys, webhook secrets, and customer-sensitive information.

## Business readiness

- Accepted chains and stablecoins are defined.
- Order expiration rules are defined.
- Underpayment and overpayment policies are documented.
- Refund and dispute process is documented.
- Accounting or reconciliation workflow is ready.
- Support contact path is clear.

## Operational readiness

- Monitoring is enabled for payment and webhook failures.
- Someone owns incident response during launch.
- Rollback or disable-payment plan exists.
- Launch window and communication plan are agreed.

## Final rule

Start with sandbox. Move to production only when both PayIn and the merchant agree the integration is ready for real payments.
