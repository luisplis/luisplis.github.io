// 1. Importar las utilidades de `astro:content` como Zod
import { z, defineCollection } from 'astro:content';

// 2. Definir un `type` y `schema` para cada colección
const portfolioCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    name: z.string(), 
    term: z.string(), 
    desc: z.string(), 
    tags: z.array(z.string()),
    link: z.string().optional(), 
    menu: z.number(),
    date: z.string()
  }),
});

// 3. Exportar el objeto `collections` 
export const collections = {
  'portfolio': portfolioCollection
};