import { useState, type FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  personalInfoSchema,
  accountInfoSchema,
  formSchema,
  type FormData,
} from "@schemas/schemaAlt";
import PersonalInfo from "@components/steps/PersonalInfo";
import AccountInfo from "@components/steps/AccountInfo";
import { createStepResolver } from "@utils/form-helpers";

const stepSchemas = [personalInfoSchema, accountInfoSchema];

const WizardFormAlt: FC = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: createStepResolver<FormData>(stepSchemas[step]),
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
    trigger,
    handleSubmit,
    getValues,
  } = methods;

  const next = async () => {
    const valid = await trigger(undefined, {
      shouldFocus: true,
    });

    if (valid) {
      setStep((s) => s + 1);
    } else {
      console.log("Errores detectados en el paso:", errors);
    }
  };

  const back = () => setStep((s) => s - 1);

  // Manejo del envío final
  const onSubmitFinal = async () => {
    // Validamos el último paso
    const valid = await trigger();

    if (valid) {
      // Usamos handleSubmit para envolver nuestra lógica final
      // Nota: Pasamos una función anónima que ignora la 'data' parcial que viene del resolver
      // y en su lugar usamos getValues() para obtener todo el objeto FormData.
      await handleSubmit(() => {
        const fullData = getValues(); // Obtenemos TODOS los datos (paso 1 + paso 2)

        // Opcional: Una validación final de seguridad contra el esquema completo
        const finalValidation = formSchema.safeParse(fullData);

        if (finalValidation.success) {
          onSubmit(finalValidation.data);
        } else {
          console.error(
            "Error de integridad en el formulario final",
            finalValidation.error
          );
        }
      })();
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
      <form onSubmit={(e) => e.preventDefault()} noValidate>
        {step === 0 && <PersonalInfo />}

        {step === 1 && <AccountInfo />}

        <div style={{ marginTop: 20 }}>
          {step > 0 && (
            <button type="button" onClick={back}>
              Atrás
            </button>
          )}

          {step < stepSchemas.length - 1 && (
            <button type="button" onClick={next}>
              Siguiente
            </button>
          )}

          {step === stepSchemas.length - 1 && (
            <button type="button" onClick={onSubmitFinal}>
              Enviar
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default WizardFormAlt;
