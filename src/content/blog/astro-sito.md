---
title: "Come ho costruito il mio sito con Astro"
date: 2026-03-01
excerpt: "Dalla scelta del framework al deploy su Cloudflare Pages: le decisioni tecniche dietro questo sito."
lang: it
tags: ["astro", "web", "cloudflare", "tutorial"]
cover: "/images/blog/astro-post.jpg"
coverAlt: "Screenshot del sito Astro in VS Code"
draft: false
---

## Perché Astro

Dopo aver valutato diversi framework, ho scelto **Astro** per la sua semplicità e ottimizzazione per siti a contenuto statico.

Le caratteristiche che mi hanno convinto:

- **Zero JS di default** — il client riceve solo HTML/CSS puro, JS viene inviato solo dove necessario
- **Content Collections** — gestione Markdown tipizzata con Zod
- **Build velocissima** — decine di pagine in pochi secondi
- **Deploy su Cloudflare Pages** — zero configurazione extra

## Struttura del contenuto

I post del blog sono file `.md` nella cartella `src/content/blog/`.
Ogni file ha un frontmatter che definisce metadati:

```yaml
---
title: "Titolo post"
date: 2026-01-15
excerpt: "Breve descrizione..."
lang: it
tags: ["tag1", "tag2"]
---
```

## Syntax highlighting

Il codice è evidenziato con **Shiki** usando il tema `vesper`, dark e leggibile:

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('blog', (post) => !post.data.draft);
const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
```

## Conclusione

Astro si è rivelato la scelta giusta per un sito che privilegia performance e semplicità di manutenzione.
Il deploy su Cloudflare Pages è automatico ad ogni push su `main`.
