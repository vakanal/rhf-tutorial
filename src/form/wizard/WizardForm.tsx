import { FormProvider, useForm } from "react-hook-form";
import { formSchema, type FormData } from "../schemas/form.schema";
import { useWizard } from "./useWizard";
import { createStepResolver } from "../utils/createStepResolver";

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
    formState: { errors },
  } = methods;

  const StepComponent = wizard.step.component;

  const next = async () => {
    const fields = Object.keys(wizard.step.schema.shape) as (keyof FormData)[];
    const valid = await trigger(fields, { shouldFocus: true });

    if (valid) wizard.next();
    else console.log("ERRORS:", errors);
  };

  const submitFinal = handleSubmit(() => {
    const data = getValues();
    const finalValidation = formSchema.safeParse(data);

    if (!finalValidation.success) {
      console.log("FINAL ERRORS:", errors);
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
        <StepComponent />

        <div style={{ marginTop: 20 }}>
          {!wizard.isFirst && (
            <button type="button" onClick={wizard.back}>
              Atrás
            </button>
          )}

          {!wizard.isLast && (
            <button type="button" onClick={next}>
              Siguiente
            </button>
          )}

          {wizard.isLast && (
            <button type="button" onClick={submitFinal}>
              Enviar
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
