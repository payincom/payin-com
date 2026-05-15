---
title: Support and Incidents
description: Prepare merchant support and incident response workflows for PayIn Cloud payments.
order: 40
---

Stablecoin payments involve customer experience, blockchain confirmation, merchant business logic, and webhook delivery. Support teams need a clear path to investigate problems safely.

## Customer support questions

Support should be able to answer:

- What order or invoice was the customer trying to pay?
- Which chain and token were expected?
- Did the customer send a transaction?
- Was the amount correct?
- Has the transaction reached the required confirmation level?
- Did PayIn Cloud send a webhook?
- Did the merchant system fulfill the order or credit the account?

## Information to collect

When investigating a payment issue, collect:

- Merchant order or invoice ID
- PayIn Cloud payment/order ID if available
- Customer-provided transaction hash
- Chain/network and token
- Expected amount and sent amount
- Approximate payment time
- Screenshot only if it does not expose secrets or private customer data

Never ask customers to share private keys, seed phrases, API keys, or wallet recovery information.

## Incident categories

Common incident types include:

- API order creation failures
- Hosted payment page unavailable
- Blockchain monitoring delay
- RPC provider instability
- Webhook delivery failures
- Merchant fulfillment bugs
- Customer sent wrong amount, token, or network

## Escalation path

A practical escalation path:

1. Support confirms order, transaction, and customer-visible status.
2. Merchant engineering checks internal logs and webhook processing.
3. PayIn support checks PayIn Cloud payment status and delivery history.
4. Teams agree customer-facing action: wait, fulfill, refund, adjust, or escalate further.
5. Record the final resolution for reconciliation.

## Related docs

- [Reconciliation](./reconciliation/)
- [Webhooks](./webhooks/)
- [Production launch](./production-launch/)
