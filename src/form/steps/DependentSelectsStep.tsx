import { useEffect, useMemo, type FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { STATES_BY_COUNTRY, COUNTRY_OPTIONS } from "../mocks/data.mock";
import type { FormData } from "../schemas/form.schema";
import { RHFSelect } from "../components/RHFSelect";

const DependentSelectsStep: FC = () => {
  const { control, resetField } = useFormContext<FormData>();

  const selectedCountry = useWatch({
    control,
    name: "country",
  });

  const stateOptions = useMemo(() => {
    if (!selectedCountry) return [];

    return STATES_BY_COUNTRY[selectedCountry] ?? [];
  }, [selectedCountry]);

  useEffect(() => {
    resetField("state");
  }, [selectedCountry, resetField]);

  return (
    <>
      <h2>País y comunidad</h2>
      <RHFSelect name="country" label="País" options={COUNTRY_OPTIONS} />
      <RHFSelect name="state" label="Comunidad" options={stateOptions} />
      {/*
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
      */}
    </>
  );
};

export default DependentSelectsStep;
