---
title: Cloud Integration Overview
description: API, payment page, and webhook responsibilities for PayIn Cloud merchants.
order: 31
---

A typical PayIn Cloud integration has three parts: API calls, customer payment experience, and webhook processing.

## API calls

Your backend creates payment orders and checks payment state through PayIn Cloud APIs. API keys should only be stored server-side.

## Payment experience

Customers can be redirected to a hosted payment page or shown payment instructions inside your own product experience.

## Webhook processing

PayIn Cloud sends payment status events to your webhook endpoint. Your system should verify signatures, store event IDs, and update your order or account state idempotently.

## Production checklist

Before go-live:

- Sandbox order flow has been tested end to end
- Webhook signature verification is implemented
- Duplicate webhook events are handled safely
- Customer support and refund policy are defined
- Production API keys are stored securely
- Accounting or reconciliation workflow is ready
