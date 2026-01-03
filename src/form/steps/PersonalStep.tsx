import { useFormContext } from "react-hook-form";
import type { FormData } from "../schemas/form.schema";

const PersonalStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <h2>Información personal</h2>

      <input {...register("firstName")} placeholder="Nombre" />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName")} placeholder="Apellido" />
      {errors.lastName && <p>{errors.lastName.message}</p>}
    </>
  );
};

export default PersonalStep;
