import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['land-surveying', 'architectural-design', 'integrated']),
    location: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    image: z.string(),
    shortDescription: z.string(),
    challenge: z.string(),
    approach: z.string(),
    outcome: z.string(),
    services: z.array(z.string()),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    order: z.number(),
    photo: z.string(),
    bio: z.string(),
    expertise: z.array(z.string()),
    linkedin: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
  }),
});

export const collections = { projects, people, testimonials };
