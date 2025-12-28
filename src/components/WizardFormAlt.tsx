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

const WizardFormAlt: FC = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched", // La doc suele recomendar 'onTouched' para UX de formularios largos
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // Eliminamos la extracción de 'errors' aquí para evitar re-renders innecesarios en el Wizard

  const next = async () => {
    const fields = stepFields[step];
    // Trigger valida y actualiza el formState automáticamente
    const isStepValid = await methods.trigger(fields, { shouldFocus: true });
    if (isStepValid) setStep((s) => s + 1);
  };

  const back = () => setStep((s) => s - 1);

  const onSubmit = (data: FormData) => {
    console.log("Formulario final:", data);
    alert("Formulario enviado correctamente");
    methods.reset();
    setStep(0);
  };

  return (
    <FormProvider {...methods}>
      {/* Mantenemos el onSubmit nativo. 
         Si es el último paso, handleSubmit validará TODO el esquema antes de ejecutar onSubmit.
      */}
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {step === 0 && <PersonalInfo />}
        {step === 1 && <AccountInfo />}

        <div style={{ marginTop: 20 }}>
          {step > 0 && (
            <button type="button" onClick={back}>
              Atrás
            </button>
          )}

          {step < stepFields.length - 1 ? (
            <button type="button" onClick={next}>
              Siguiente
            </button>
          ) : (
            <button type="submit">Enviar</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardFormAlt;
