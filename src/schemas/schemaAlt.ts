import { z } from "zod";

// 1. Esquema del Paso 1
export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "Nombre obligatorio"),
  lastName: z.string().min(1, "Apellido obligatorio"),
});

// 2. Esquema del Paso 2
export const accountInfoSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

// 3. Esquema Completo (Fusión)
// .extend() combina las propiedades de ambos objetos
export const formSchema = personalInfoSchema.extend(accountInfoSchema.shape);

// Tipos inferidos
export type PersonalInfoData = z.infer<typeof personalInfoSchema>;
export type AccountInfoData = z.infer<typeof accountInfoSchema>;
export type FormData = z.infer<typeof formSchema>;
