---
title: "TCDev Public API"
date: 2026-02-01
excerpt: "API REST pubblica con endpoint utility per sviluppatori: generatori, hash, IP info, e altro. Gratuita e senza registrazione."
lang: it
tags: ["api", "rest", "nodejs", "cloudflare"]
stack: ["Node.js", "TypeScript", "Cloudflare Workers", "OpenAPI"]
status: active
featured: true
demoUrl: "https://api.tcdev.xyz/"
draft: false
---

## Panoramica

**TCDev Public API** è una API REST pubblica, gratuita e senza autenticazione,
pensata per usi leggeri e integrazioni veloci.

## Endpoint principali

```http
GET  /v1/uuid              → UUID v4 casuale
GET  /v1/hash?text=hello   → SHA-256 dell'input
GET  /v1/ip                → Informazioni sull'IP del chiamante
GET  /v1/timestamp         → Timestamp Unix corrente
GET  /v1/random?min=1&max=100 → Numero casuale nell'intervallo
```

## Rate limiting

- **100 richieste / 15 minuti** per IP (no auth)
- Headers `RateLimit-Remaining` e `RateLimit-Reset` in ogni risposta

## Formato risposta

Tutte le risposte seguono il formato JSON uniforme:

```json
{
  "ok": true,
  "data": { ... },
  "meta": {
    "version": "1.0.0",
    "timestamp": 1741180800
  }
}
```

## Documentazione

La documentazione OpenAPI interattiva è disponibile su [api.tcdev.xyz/docs](https://api.tcdev.xyz/docs).
