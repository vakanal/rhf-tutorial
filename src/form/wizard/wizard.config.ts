import { personalSchema } from "../schemas/personal.schema";
import { accountSchema } from "../schemas/account.schema";
import { selectsSchema } from "../schemas/selects.schema";
import PersonalStep from "../steps/PersonalStep";
import AccountStep from "../steps/AccountStep";
import DependentSelectsStep from "../steps/DependentSelectsStep";
import type { ZodObject } from "zod";

export type WizardStepsType = {
  id: string;
  component: React.FC;
  schema: ZodObject;
};

export const wizardSteps: WizardStepsType[] = [
  {
    id: "personal",
    component: PersonalStep,
    schema: personalSchema,
  },
  {
    id: "dependent-selects",
    component: DependentSelectsStep,
    schema: selectsSchema,
  },
  {
    id: "account",
    component: AccountStep,
    schema: accountSchema,
  },
];
