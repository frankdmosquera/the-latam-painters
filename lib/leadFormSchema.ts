import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email address"),
  address: z.string().min(5, "Please enter the project address"),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(/^[0-9+\-()\s]+$/, "Enter a valid phone number"),
  message: z.string().optional(),
  // Honeypot — real visitors never see or fill this field. Bots that
  // blindly fill every input on the page trip it instead. No `.max(0)`
  // here on purpose: parsing must succeed either way so submitLeadForm's
  // own `if (parsed.data.company)` check is what decides bot vs. real,
  // and can respond with a fake success instead of a validation error.
  company: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
