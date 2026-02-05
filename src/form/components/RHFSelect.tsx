import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
}

export const RHFSelect = ({ name, label, options }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Select {...field} isInvalid={!!fieldState.error}>
            <option value="">Seleccione…</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {fieldState.error?.message}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};
