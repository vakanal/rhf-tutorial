import { useState, type FC } from "react";
import { useForm, FormProvider, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "@schemas/schema";
import PersonalInfo from "@components/steps/PersonalInfo";
import AccountInfo from "@components/steps/AccountInfo";

const stepFields: FieldPath<FormData>[][] = [
  ["firstName", "lastName"],
  ["email", "password"],
];

const WizardForm: FC = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
    shouldUnregister: false,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    formState: { errors },
  } = methods;

  const next = async () => {
    const fields = stepFields[step];

    const valid = await methods.trigger(fields, {
      shouldFocus: true,
    });

    if (valid) {
      setStep((s) => s + 1);
    }
  };

  const back = () => setStep((s) => s - 1);

  const onSubmitFinal = async () => {
    const valid = await methods.trigger();

    if (valid) {
      methods.handleSubmit(onSubmit)();
    } else {
      console.log("Errores detectados en el paso:", errors);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Formulario final:", data);
    alert("Formulario enviado correctamente");
    methods.reset();
    setStep(0);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {step === 0 && <PersonalInfo />}
        {step === 1 && <AccountInfo />}

        <div style={{ marginTop: 20 }}>
          {step > 0 && (
            <button type="button" onClick={back}>
              Atrás
            </button>
          )}
          {step < stepFields.length - 1 && (
            <button type="button" onClick={next}>
              Siguiente
            </button>
          )}
          {step === stepFields.length - 1 && (
            <button type="button" onClick={onSubmitFinal}>
              Enviar
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardForm;
