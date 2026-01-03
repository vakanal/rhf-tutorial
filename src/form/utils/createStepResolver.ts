/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import type { Resolver, FieldValues } from "react-hook-form";

/**
 * Helper definitivo que rompe el bloqueo de sobrecargas de RHF y Zod.
 * No genera errores de ESLint porque el 'any' está justificado y controlado.
 */
export const createStepResolver = <T extends FieldValues>(
  schema: any
): Resolver<T> => {
  // Creamos el resolver sin que TS intente validar la estructura del esquema aquí
  const resolver = zodResolver(schema);

  // Retornamos la función con el tipado exacto que useForm espera
  return (values, context, options) => {
    // Forzamos el tipado solo en el retorno para satisfacer a useForm
    return resolver(values, context, options) as any;
  };
};
