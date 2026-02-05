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
  }, [resetField]);

  return (
    <fieldset>
      <legend className="h4 mb-3">Ubicación</legend>
      <RHFSelect 
        name="country" 
        label="País" 
        options={COUNTRY_OPTIONS}
        required
        description="Selecciona tu país de residencia"
      />
      <RHFSelect 
        name="state" 
        label="Comunidad autónoma" 
        options={stateOptions}
        required={!!selectedCountry}
        description={selectedCountry ? "Selecciona tu comunidad autónoma" : "Primero selecciona un país"}
        disabled={!selectedCountry}
      />
    </fieldset>
  );
};

export default DependentSelectsStep;
