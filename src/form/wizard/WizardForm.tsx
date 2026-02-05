import { FormProvider, useForm } from "react-hook-form";
import { formSchema, type FormData } from "../schemas/form.schema";
import { useWizard } from "./useWizard";
import { createStepResolver } from "../utils/createStepResolver";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight, Save } from "react-bootstrap-icons";
import { useFocusManagement } from "@hooks/useFocusManagement";

const defaultValues: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  state: "",
};

const WizardForm = () => {
  const wizard = useWizard();

  const methods = useForm<FormData>({
    resolver: createStepResolver<FormData>(wizard.step.schema),
    mode: "all",
    shouldUnregister: false,
    defaultValues,
  });

  const {
    handleSubmit,
    getValues,
    trigger,
  } = methods;

  const StepComponent = wizard.step.component;

  // Focus management for step changes
  const { focusFirstError } = useFocusManagement({ shouldFocus: false });

  const next = async () => {
    const fields = Object.keys(wizard.step.schema.shape) as (keyof FormData)[];
    const valid = await trigger(fields, { shouldFocus: false });

    if (valid) {
      wizard.next();
      // Focus first input after step change
      setTimeout(() => {
        const firstInput = document.querySelector('input, select, textarea') as HTMLElement;
        firstInput?.focus();
      }, 100);
    } else {
      // Focus first error field if validation fails
      focusFirstError();
    }
  };

  const submitFinal = handleSubmit(() => {
    const data = getValues();
    const finalValidation = formSchema.safeParse(data);

    if (!finalValidation.success) {
      console.log("FINAL ERRORS:", finalValidation.error.issues);
      // Focus first error field
      focusFirstError();
      return;
    }

    console.log("FORM DATA:", finalValidation.data);
    alert("Formulario enviado");
    methods.reset();
    wizard.setStep(0);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        <div role="tabpanel" aria-labelledby={`step-${wizard.stepIndex}`}>
          <StepComponent />
        </div>

        <nav aria-label="Form navigation" style={{ marginTop: 20 }}>
          {!wizard.isFirst && (
            <Button 
              variant="secondary" 
              onClick={wizard.back}
              className="min-touch-target focus-visible:focus-visible"
              aria-label="Go to previous step"
            >
              <ArrowLeft className="me-1" aria-hidden="true" /> Atrás
            </Button>
          )}

          {!wizard.isLast && (
            <Button 
              variant="primary" 
              onClick={next}
              className="min-touch-target focus-visible:focus-visible ms-2"
              aria-label="Go to next step"
            >
              Siguiente <ArrowRight className="ms-1" aria-hidden="true" />
            </Button>
          )}

          {wizard.isLast && (
            <Button 
              variant="success" 
              onClick={submitFinal}
              className="min-touch-target focus-visible:focus-visible ms-2"
              aria-label="Submit form"
            >
              <Save className="me-2" aria-hidden="true" /> Enviar
            </Button>
          )}
        </nav>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
