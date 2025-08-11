import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const events = defineCollection({
  loader: glob({
    pattern: "*.mdx",
    base: "./src/content/events",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string().optional().default("Rindögården"),
    adults: z.array(z.string()).default([]),
    requiredAdults: z.number().min(1).default(2),
    summary: z.string().optional().default(""),
    group: z.enum(["åk 4-6"]).default("åk 4-6"),
    time: z.string().time().default("18:30:00"),
    duration: z.string().duration().default("PT2H30M"),
  }),
});

export const collections = { events };
