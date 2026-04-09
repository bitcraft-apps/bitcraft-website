import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    repository: z.string().url().optional(),
    image: z.string().min(1).optional(),
    logo: z.string().min(1).optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['development', 'active', 'maintained', 'completed', 'archived']),
    type: z.enum(['own', 'client']).default('own'),
  }),
});

export const collections = { projects };
