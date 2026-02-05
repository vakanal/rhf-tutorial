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
  required?: boolean;
  description?: string;
  disabled?: boolean;
}

export const RHFSelect = ({ 
  name, 
  label, 
  options, 
  required = false,
  description,
  disabled = false
}: Props) => {
  const { control } = useFormContext();
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const descriptionId = `${fieldId}-description`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Form.Group className="mb-3">
          <Form.Label 
            htmlFor={fieldId}
            className="d-flex align-items-center"
          >
            {label}
            {required && (
              <span 
                aria-hidden="true" 
                className="text-danger ms-1"
              >
                *
              </span>
            )}
            {required && (
              <span className="sr-only">(required)</span>
            )}
          </Form.Label>
          <Form.Select 
            {...field} 
            id={fieldId}
            isInvalid={!!fieldState.error}
            required={required}
            disabled={disabled}
            aria-required={required}
            aria-disabled={disabled}
            aria-invalid={!!fieldState.error}
            aria-describedby={`
              ${fieldState.error ? errorId : ''}
              ${description ? descriptionId : ''}
            `.trim()}
            className="focus-visible:focus-visible"
          >
            <option value="">Seleccione…</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
          {description && !fieldState.error && (
            <Form.Text id={descriptionId} className="text-muted">
              {description}
            </Form.Text>
          )}
          {fieldState.error && (
            <Form.Control.Feedback 
              type="invalid" 
              id={errorId}
              role="alert"
              aria-live="polite"
            >
              {fieldState.error?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      )}
    />
  );
};
