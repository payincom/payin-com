---
title: API Keys
description: How PayIn Cloud merchants should create, store, rotate, and protect API keys.
order: 33
---

PayIn Cloud API keys let your backend create payment orders, check payment status, and manage integration workflows.

API keys are secrets. They should only be used from server-side systems that you control.

## Basic rules

- Never put API keys in frontend JavaScript, mobile apps, or public repositories.
- Store API keys in a secret manager or hosting-provider secret store.
- Use separate keys for sandbox and production.
- Rotate keys when an employee, vendor, or automation system no longer needs access.
- Treat screenshots, logs, and support messages as potentially public; redact keys before sharing.

## Sandbox vs production

| Environment | Key usage | Rule |
| --- | --- | --- |
| Sandbox | Development and testing | Safe for integration tests, but still keep keys private. |
| Production | Real merchant payments | Restrict access, monitor usage, and rotate carefully. |

Do not reuse sandbox keys in production or production keys in sandbox.

## Recommended backend pattern

1. Customer starts checkout in your application.
2. Your backend validates the cart, invoice, or account state.
3. Your backend calls PayIn Cloud with the API key.
4. PayIn Cloud returns the payment order or payment page information.
5. Your frontend redirects the customer or displays payment instructions.

The browser should never need direct access to the API key.

## Rotation checklist

Before rotating a production key:

1. Create a new key.
2. Deploy the new key to your backend secret store.
3. Verify new orders work in production.
4. Disable the old key.
5. Monitor failed API requests after rotation.
