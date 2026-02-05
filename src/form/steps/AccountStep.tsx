import type { FC } from "react";
import { RHFTextField } from "../components/RHFTextField";

const AccountStep: FC = () => {
  return (
    <>
      <h2>Cuenta</h2>
      <RHFTextField name="email" label="Email" type="email" />
      <RHFTextField name="password" label="Contraseña" type="password" />
    </>
  );
};

export default AccountStep;
