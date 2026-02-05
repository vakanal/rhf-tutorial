import { z } from "zod";
import { personalSchema } from "./personal.schema";
import { accountSchema } from "./account.schema";
import { selectsSchema } from "./selects.schema";

export const formSchema = personalSchema
  .extend(accountSchema.shape)
  .extend(selectsSchema.shape);

export type FormData = z.infer<typeof formSchema>;
