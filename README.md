# TCDev  Sito personale

Portfolio fotografico, blog tecnico e progetti open source. Built with **Astro**, deployed on **Cloudflare Pages**.

---

## Stack

| Layer | Tecnologia |
|-------|-----------|
| Framework | Astro |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Contenuto | Markdown / MDX con Content Collections |
| Commenti | Giscus (GitHub Discussions) |
| Deploy primario | Cloudflare Pages |
| Deploy fallback | GitHub Pages (workflow manuale) |

---

## Sviluppo locale

```bash
npm install
cp .env.example .env   # configura i valori Giscus
npm run dev            # http://localhost:4321
```

---

## Aggiungere contenuti

### Post blog  `src/content/blog/nome.md`

```markdown
---
title: "Titolo"
date: 2026-03-05
excerpt: "Breve descrizione."
lang: it
tags: ["tag"]
draft: false
---
Contenuto Markdown...
```

### Progetto  `src/content/projects/nome.md`

```markdown
---
title: "Nome Progetto"
date: 2026-03-05
excerpt: "Cosa fa."
stack: ["Node.js"]
status: active
featured: true
repoUrl: "https://github.com/..."
demoUrl: "https://..."
draft: false
---
```

### Foto portfolio

Aggiungi JPG/WebP in `public/images/portfolio/` e aggiorna l'array in `src/pages/index.astro`.

---

## Giscus (commenti)

1. Vai su https://giscus.app
2. Abilita GitHub Discussions nel repo
3. Copia i valori nel file `.env`

---

## Deploy Cloudflare Pages

- Build command: `npm run build`
- Output dir: `dist`
- Env vars: vedi `.env.example`

Deploy automatico a ogni push su `main`.

---

## Comandi

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Dev server localhost:4321 |
| `npm run build` | Build produzione in dist/ |
| `npm run preview` | Preview build locale |
