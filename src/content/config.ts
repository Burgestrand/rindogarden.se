import { z, defineCollection } from "astro:content";

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional().default("(ingen titel)"),
    adults: z.array(z.string()).default([]),
    summary: z.string().optional().default(""),
    group: z.enum(["åk 4-6"]).default("åk 4-6"),
    time: z.string().time().default("18:30:00"),
    duration: z.string().duration().default("PT2H30M"),
  }),
});

export const collections = { events };
