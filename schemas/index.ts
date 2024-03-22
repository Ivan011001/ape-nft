import * as z from "zod";

export const contactSchema = z.object({
  discord: z.string().regex(/^@[\w]+$/i, {
    message: "Wrong Discord",
  }),
  address: z.string().regex(/^1x\s*\w+$/, {
    message: "Wrong Address",
  }),
});
