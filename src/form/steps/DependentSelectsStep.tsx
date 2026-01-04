import { useEffect, useMemo, type FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { STATES_BY_COUNTRY, COUNTRY_OPTIONS } from "../mocks/data.mock";
import type { FormData } from "../schemas/form.schema";

const DependentSelectsStep: FC = () => {
  const {
    register,
    control,
    resetField,
    formState: { errors },
  } = useFormContext<FormData>();

  /**
   * 3) Escucha cambios en country sin re-render global
   *    Más eficiente que watch() directo. :contentReference[oaicite:4]{index=4}
   */
  const selectedCountry = useWatch({
    control,
    name: "country",
  });

  /**
   * 4) Cuando cambie el país, resetea el estado
   *    para evitar inconsistencia en formState.
   */
  useEffect(() => {
    resetField("state");
  }, [selectedCountry, resetField]);

  /**
   * 5) Opciones de estados memorizadas basadas en el país.
   */
  const stateOptions = useMemo(() => {
    if (!selectedCountry) {
      return [];
    }

    return STATES_BY_COUNTRY[selectedCountry] ?? [];
  }, [selectedCountry]);

  return (
    <>
      <h2>Seleccione país y estado</h2>

      <select {...register("country")}>
        <option value="">-- Selecciona País --</option>
        {COUNTRY_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors.country && <p role="alert">{errors.country.message}</p>}

      <select {...register("state")} disabled={!selectedCountry}>
        <option value="">
          {selectedCountry
            ? "-- Selecciona Estado --"
            : "Selecciona país primero"}
        </option>
        {stateOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors.state && <p role="alert">{errors.state.message}</p>}
    </>
  );
};

export default DependentSelectsStep;
