---
title: Stablecoin Payments
description: The basic model behind PayIn stablecoin payment products.
order: 10
---

Stablecoin payments let merchants receive blockchain-based payments denominated in assets such as USDC or USDT.

PayIn focuses on merchant payment workflows: a merchant creates a payment request, the customer pays on a supported blockchain, and the merchant system receives a reliable status update.

## What PayIn verifies

A PayIn payment system typically verifies:

1. The customer paid the expected address.
2. The asset/token is supported.
3. The amount matches the payment requirement.
4. The transaction is confirmed enough for the configured risk policy.
5. The merchant system receives a status update through API and webhook events.

## Merchant responsibilities

Merchants remain responsible for:

- Legal and compliance obligations
- Wallet custody and treasury management
- Refund and customer support policy
- Tax and accounting treatment
- Production security and operational readiness

## Where this applies

This concept applies across:

- PayIn Cloud hosted checkout and API flows
- PayIn Open self-hosted deployments
- PayIn Go in-person payment flows
