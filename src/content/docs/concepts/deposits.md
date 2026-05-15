---
title: Deposits
description: How PayIn handles reusable or assigned deposit addresses.
order: 12
---

A deposit flow lets a merchant or platform assign blockchain addresses to users, accounts, or business entities and monitor incoming stablecoin transfers.

Unlike an order payment, a deposit is not always tied to one checkout page or invoice. It may be used for account top-ups, balance funding, or long-lived receiving addresses.

## Typical lifecycle

1. Merchant assigns or generates a deposit address for a user or account.
2. Customer sends funds to the address.
3. PayIn monitors supported chains and tokens.
4. PayIn detects and confirms the incoming transfer.
5. Merchant receives an API status update or webhook event.
6. Merchant credits the customer account or internal ledger.

## Operational risks

Deposit flows require extra care because addresses may be reused or long-lived.

Important controls include:

- Clear chain/token instructions for users
- Address ownership and assignment records
- Confirmation thresholds
- Duplicate transaction handling
- Reconciliation between blockchain events and merchant ledger entries
