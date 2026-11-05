import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  // Load every .mdoc file in the same folder Keystatic writes to
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  // List the frontmatter fields (not the body)
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts };