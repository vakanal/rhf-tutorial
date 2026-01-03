import { personalSchema } from "../schemas/personal.schema";
import { accountSchema } from "../schemas/account.schema";
import PersonalStep from "../steps/PersonalStep";
import AccountStep from "../steps/AccountStep";

export const wizardSteps = [
  {
    id: "personal",
    component: PersonalStep,
    schema: personalSchema,
  },
  {
    id: "account",
    component: AccountStep,
    schema: accountSchema,
  },
] as const;
