import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { FormData } from "@schemas/schema";

const AccountStep: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <h2>Cuenta</h2>

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        {...register("password")}
        placeholder="Contraseña"
      />
      {errors.password && <p>{errors.password.message}</p>}
    </>
  );
};

export default AccountStep;
