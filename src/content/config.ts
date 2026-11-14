import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    mainKeyword: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.string(),
    related: z.array(z.string()).default([]),
    noindex: z.boolean().default(false),
    image: z.string().default('/ogp.svg'),
    canonical: z.string().optional(),
  }),
});

export const collections = { articles };