import { z, defineCollection } from "astro:content"

const chapters = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(250),
    sortOrder: z.number(),
    author: z.string().default("Ohans Emmanuel"),
    authorSocial: z.string().default("@OhansEmmanuel"),
    image: z
      .object({
        src: z.string().default("/understanding-astro-banner.png"),
        alt: z.string().default("Understanding Astro book cover"),
      })
      .optional(),
    isDraft: z.boolean().default(false),
    language: z.enum(["en"]).default("en"),
    publishDate: z.date().default(new Date("05-08-2023")),
    modificationDate: z.date().optional(),
    authorContact: z.string().email().default("ohans@ohansemmanuel.me"),
    tags: z.array(z.string()).default(["Astro", "Understanding Astro", "Book"]),
  }),
})

export const collections = { chapters }
