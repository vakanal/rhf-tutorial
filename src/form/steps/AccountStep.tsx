import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas/form.schema";

const AccountStep: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <h2>Cuenta</h2>

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        placeholder="Contraseña"
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}
    </>
  );
};

export default AccountStep;
