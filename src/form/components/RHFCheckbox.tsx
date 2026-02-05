import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Props {
  name: string;
  label: string;
}

export const RHFCheckbox = ({ name, label }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Group className="mb-3">
          <Form.Check
            {...field}
            checked={field.value}
            label={label}
            isInvalid={!!fieldState.error}
          />
          <Form.Control.Feedback type="invalid" className="d-block">
            {fieldState.error?.message}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};
