import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const writing = defineCollection({
  name: "writing",
  directory: "content/writing",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(), // or z.coerce.date()
    readTime: z.number(),
    tags: z.array(z.string()),
    category: z.enum(["Engineering", "AI", "Systems Design", "Growth"]),
    isNew: z.boolean().optional(),
    // optional: slug from filename via transform
  }),
  transform: async (doc, ctx) => {
    const mdx = await compileMDX(ctx, doc);
    return {
      ...doc,
      slug: doc._meta.path.replace(/\.mdx$/, ""),
      filename: `${doc._meta.path.split("/").pop()}`,
      mdx,
    };
  },
});

export default defineConfig({
  content: [writing],
});
