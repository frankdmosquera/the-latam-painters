"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormValues } from "@/lib/contactFormSchema";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function submitContactForm(values: ContactFormValues) {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false as const, error: "Invalid submission." };
  }

  if (parsed.data.company) {
    // Honeypot tripped — report success so the bot doesn't learn to skip it.
    return { success: true as const };
  }

  const { name, email, phone, message } = parsed.data;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!resend || !notificationEmail) {
    console.log("New contact form submission (Resend not configured): " + JSON.stringify(parsed.data));
    return { success: true as const };
  }

  const { error } = await resend.emails.send({
    from: "The Latam Painters <onboarding@resend.dev>",
    to: notificationEmail,
    replyTo: email,
    subject: `New contact message from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "(not provided)"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    return { success: false as const, error: "Failed to send. Please call us instead." };
  }

  return { success: true as const };
}
