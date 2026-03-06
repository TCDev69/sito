---
title: "Building a Public REST API with Node.js"
date: 2026-02-10
excerpt: "How I designed and deployed a public REST API with Node.js, rate limiting, and full documentation."
lang: en
tags: ["nodejs", "api", "rest", "typescript"]
draft: false
---

## Overview

This post covers the architecture decisions behind my public API available at [api.tcdev.xyz](/go/api).

## Design principles

1. **Stateless** — every request is self-contained
2. **Versioned** — `/v1/` prefix from day one
3. **Rate limited** — protects against abuse without auth friction
4. **Documented** — OpenAPI spec auto-generated

## Key endpoints

```http
GET /v1/tools/uuid        → Generate a UUID v4
GET /v1/tools/hash        → SHA-256 hash of a string
GET /v1/ip                → Returns caller's IP info
```

## Rate limiting

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/v1/', limiter);
```

## Deployment

The API runs on Cloudflare Workers for global low-latency access.
