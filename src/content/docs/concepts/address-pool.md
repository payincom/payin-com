---
title: Address Pools
description: How merchants use address pools for stablecoin payment acceptance.
order: 13
---

An address pool is a managed set of receiving addresses available for payment orders or deposit assignment.

Address pools help merchants avoid manual address handling and make it easier to track payment intent, customer identity, and reconciliation state.

## Common patterns

| Pattern | Description |
| --- | --- |
| Per-order address | A unique address is assigned to one payment order. |
| Per-user deposit address | A long-lived address is assigned to one user or account. |
| Managed pool | PayIn assigns available addresses from a pre-generated pool. |

## Safety considerations

Merchants should protect:

- Address generation and derivation procedures
- Private keys and signing infrastructure
- Address ownership records
- Assignment history
- Database backups

PayIn payment monitoring can detect incoming funds, but wallet custody remains a critical operational responsibility.
