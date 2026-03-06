---
title: "TCDev MultiTool"
date: 2026-01-15
excerpt: "Una raccolta di strumenti web utili per sviluppatori: generatori, convertitori, encoder e molto altro. Disponibile gratuitamente online."
lang: it
tags: ["tool", "web", "utility", "open-source"]
stack: ["Node.js", "TypeScript", "Cloudflare Workers", "Astro"]
status: active
featured: true
demoUrl: "https://tools.tcdev.xyz/"
draft: false
---

## Cos'è TCDev MultiTool

**TCDev MultiTool** è una collezione di strumenti web pensati per sviluppatori e utenti tecnici.
Tutti gli strumenti funzionano direttamente nel browser, senza bisogno di installare nulla.

## Strumenti disponibili

- **UUID Generator** — generazione di UUID v1/v3/v4/v5
- **Base64 Encoder/Decoder** — encoding e decoding rapido
- **JSON Formatter** — formattazione e validazione JSON con syntax highlighting
- **Hash Generator** — MD5, SHA-1, SHA-256, SHA-512
- **URL Encoder/Decoder** — encoding sicuro di URL
- **Timestamp Converter** — conversione Unix timestamp ↔ data leggibile
- **Color Picker** — selettore colori con esportazione HEX/RGB/HSL

## Architettura

Lo stack principale:

```
Frontend: Astro (SSG, zero-JS dove possibile)
API pesante: Cloudflare Workers (latenza globale < 30ms)
CI/CD: GitHub Actions → Cloudflare Pages
```

## Come contribuire

Il progetto è open source. Se hai idee per nuovi strumenti o trovi un bug,
apri una issue o una pull request sul repository GitHub.
