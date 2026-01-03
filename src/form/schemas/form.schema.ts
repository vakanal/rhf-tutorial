import { z } from "zod";
import { personalSchema } from "./personal.schema";
import { accountSchema } from "./account.schema";

export const formSchema = personalSchema.extend(accountSchema.shape);

export type FormData = z.infer<typeof formSchema>;
