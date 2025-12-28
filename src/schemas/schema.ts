import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "Nombre obligatorio"),
  lastName: z.string().min(1, "Apellido obligatorio"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export type FormData = z.infer<typeof formSchema>;
