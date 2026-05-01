import { defineCollection, z } from 'astro:content';

const belajar = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    domain:      z.enum(['sql', 'python', 'data-modeling', 'pipeline']),
    difficulty:  z.enum(['pemula', 'menengah', 'mahir']),
    companies:   z.array(z.string()).default([]),
    readingTime: z.number(),
    publishDate: z.coerce.date(),
    order:       z.number().default(0),
  }),
});

export const collections = { belajar };
