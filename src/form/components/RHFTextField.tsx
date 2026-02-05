import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Props {
  name: string;
  label: string;
  type?: string;
}

export const RHFTextField = ({ name, label, type = "text" }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control {...field} type={type} isInvalid={!!fieldState.error} />
          <Form.Control.Feedback type="invalid">
            {fieldState.error?.message}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};
