import { useState } from "react";
import { wizardSteps } from "./wizard.config";

export const useWizard = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const step = wizardSteps[stepIndex];

  const isFirst = stepIndex === 0;
  const isLast = stepIndex === wizardSteps.length - 1;

  const next = () => setStepIndex((s) => s + 1);
  const back = () => setStepIndex((s) => s - 1);

  return {
    step,
    stepIndex,
    isFirst,
    isLast,
    next,
    back,
    setStep: setStepIndex,
  };
};
