import { defineCollection, z, reference } from "astro:content";
import { glob, file } from "astro/loaders";

const events = defineCollection({
  loader: glob({
    pattern: "*.mdx",
    base: "./src/content/events",
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string().optional().default("Rindögården"),
    adults: z.array(reference("adults")).default([]),
    requiredAdults: z.number().min(1).default(2),
    summary: z.string().optional().default(""),
    group: z.enum(["åk 4-6"]).default("åk 4-6"),
    time: z.string().time().default("18:30:00"),
    duration: z.string().duration().default("PT2H30M"),
  }),
});

const adults = defineCollection({
  loader: file("src/content/adults.yaml"),
  schema: z.object({
    belastningsregister: z
      .object({
        requested: z.date().optional(),
        verified: z
          .object({
            date: z.date(),
            by: z.string(),
          })
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { events, adults };
