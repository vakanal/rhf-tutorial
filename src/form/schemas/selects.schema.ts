import { z } from "zod";

/**
 * 1) Define tu esquema Zod con validaciones.
 *    Aquí ambos campos son requeridos.
 */
export const selectsSchema = z.object({
  country: z.string().min(1, "Selecciona un país"),
  state: z.string().min(1, "Selecciona un estado"),
});

export type SelectsData = z.infer<typeof selectsSchema>;
