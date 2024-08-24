import { z, defineCollection } from 'astro:content'

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional().default("Tema ej spikat"),
    adults: z.array(z.string()).default([]),
    group: z.enum(['åk 4-6']).default('åk 4-6'),
    time: z.string().time().default('18:00:00'),
    duration: z.string().duration().default('PT3H'),
  }),
})

export const collections = { events }