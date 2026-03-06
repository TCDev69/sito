import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    excerpt: z.string(),
    excerptEn: z.string().optional(),
    lang: z.enum(['it', 'en']).default('it'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    giscusId: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string(),
    excerptEn: z.string().optional(),
    lang: z.enum(['it', 'en']).default('it'),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['active', 'completed', 'archived', 'wip']).default('active'),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    giscusId: z.string().optional(),
  }),
});

export const collections = { blog, projects };
