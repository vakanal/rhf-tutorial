import { z } from "zod";

export const personalSchema = z.object({
  firstName: z.string().min(1, "Nombre obligatorio"),
  lastName: z.string().min(1, "Apellido obligatorio"),
});

export type PersonalData = z.infer<typeof personalSchema>;
