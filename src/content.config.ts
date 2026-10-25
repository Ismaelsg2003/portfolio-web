import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // terminado: tiene ficha propia · en-desarrollo / proximamente: solo tarjeta
    status: z.enum(["terminado", "en-desarrollo", "proximamente"]),
    order: z.number(),
    area: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    video: z.string().optional(),
    poster: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

export const collections = { projects };
