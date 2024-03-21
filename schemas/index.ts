import * as z from "zod";

export const contactSchema = z.object({
  discord: z.string().regex(/^@[\w]+$/i, {
    message: "Wrong Discord",
  }),
  address: z
    .string()
    .regex(/^[\w]+$/, {
      message: "Wrong Address",
    })
    .min(20, {
      message: "Wrong Address",
    })
    .max(20, {
      message: "Wrong Address",
    }),
});
