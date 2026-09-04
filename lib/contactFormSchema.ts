import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Please enter a message"),
  // Honeypot — see leadFormSchema.ts for why this stays optional.
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
