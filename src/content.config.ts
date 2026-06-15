import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ESSAIS — articles écrits (prose)
const essais = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essais' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    brouillon: z.boolean().default(false),
  }),
});

// POÉSIE — chaque poème, déployé dans une liste
const poesie = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poesie' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    exergue: z.string().optional(),
    brouillon: z.boolean().default(false),
  }),
});

// RECHERCHE — travaux et publications (bibliographie)
const recherche = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recherche' }),
  schema: z.object({
    titre: z.string(),
    publication: z.string().optional(),
    annee: z.number(),
    auteurs: z.string().optional(),
    type: z.string().optional(),
    lien: z.string().url().optional(),
    resume: z.string().optional(),
  }),
});

// YOUTUBE — vidéos groupées par thème
const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    titre: z.string(),
    youtube: z.string(),
    theme: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    ordreTheme: z.number().default(100),
  }),
});

export const collections = { essais, poesie, recherche, videos };
