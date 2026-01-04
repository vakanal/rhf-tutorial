import type { FC } from "react";
import { RHFTextField } from "../components/RHFTextField";

const PersonalStep: FC = () => {
  return (
    <>
      <h2>Información personal</h2>
      <RHFTextField name="firstName" label="Nombre" />
      <RHFTextField name="lastName" label="Apellido" />
    </>
  );
};

export default PersonalStep;
