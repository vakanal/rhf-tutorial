import type { FC } from "react";
import { RHFTextField } from "../components/RHFTextField";

const PersonalStep: FC = () => {
  return (
    <fieldset>
      <legend className="h4 mb-3">Información personal</legend>
      <RHFTextField 
        name="firstName" 
        label="Nombre" 
        required
        description="Ingresa tu nombre completo"
      />
      <RHFTextField 
        name="lastName" 
        label="Apellido" 
        required
        description="Ingresa tu apellido completo"
      />
    </fieldset>
  );
};

export default PersonalStep;
