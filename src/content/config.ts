import { z, defineCollection } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    group: z.enum(['åk 4-6']).default('åk 4-6'),
    time: z.string().default('18:00 - 21:00'),
  }),
})

export const collections = { events }