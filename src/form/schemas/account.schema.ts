import { z } from "zod";

export const accountSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type AccountData = z.infer<typeof accountSchema>;
