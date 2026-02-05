import type { FC } from "react";
import { RHFTextField } from "../components/RHFTextField";

const AccountStep: FC = () => {
  return (
    <fieldset>
      <legend className="h4 mb-3">Información de cuenta</legend>
      <RHFTextField 
        name="email" 
        label="Correo electrónico" 
        type="email"
        required
        description="Usaremos este correo para contactarte"
      />
      <RHFTextField 
        name="password" 
        label="Contraseña" 
        type="password"
        required
        description="Mínimo 8 caracteres, incluye mayúsculas y números"
      />
    </fieldset>
  );
};

export default AccountStep;
