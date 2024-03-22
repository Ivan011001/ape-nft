"use server";

import * as z from "zod";
import { contactSchema } from "@/schemas";

export const contact = async (values: z.infer<typeof contactSchema>) => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { discord } = validatedFields.data;

  // Simulating a one-second delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: `Link is sent to ${discord}` };
};
