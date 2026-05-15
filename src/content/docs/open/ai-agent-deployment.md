---
title: AI-assisted Deployment
description: Use the PayIn Open skill to help an AI agent deploy and integrate PayIn Open safely.
order: 41
---

PayIn Open is designed to work well with an AI agent that can read repository instructions, run checks, and guide deployment.

The main repo-local entry point is the PayIn Open skill:

- `skills/payin-open/SKILL.md` in the PayIn Open repository

## Recommended prompt

```text
I want to deploy PayIn Open, the open-source stablecoin payment gateway.
Start with sandbox/testnet.
Do not touch production/mainnet unless I explicitly approve.
Never print or commit secrets.
Explain each step in business language.
```

## What the agent should do

A safe AI-assisted deployment should:

1. Confirm the hosting target.
2. Start with sandbox/testnet.
3. Prepare database, API, admin, RPC, and webhook settings.
4. Keep secrets out of chat and git.
5. Deploy the sandbox service.
6. Run migrations only against the confirmed sandbox database.
7. Verify health, payment page rendering, monitoring, and webhook delivery.
8. Ask for explicit approval before any production/mainnet operation.

## Public vs repo-local docs

This website explains concepts and product positioning. The PayIn Open repository contains the operational skill and self-hosting reference material used during deployment.
