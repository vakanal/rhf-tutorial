import { Controller, useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";

interface Props {
  name: string;
  label: string;
  required?: boolean;
  description?: string;
}

export const RHFCheckbox = ({ 
  name, 
  label, 
  required = false,
  description 
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
          <Form.Check
            {...field}
            id={fieldId}
            checked={field.value}
            required={required}
            aria-required={required}
            aria-invalid={!!fieldState.error}
            aria-describedby={`
              ${fieldState.error ? errorId : ''}
              ${description ? descriptionId : ''}
            `.trim()}
            className="focus-visible:focus-visible"
            label={
              <label htmlFor={fieldId} className="d-flex align-items-center">
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
              </label>
            }
            isInvalid={!!fieldState.error}
          />
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
              className="d-block"
            >
              {fieldState.error?.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      )}
    />
  );
};
