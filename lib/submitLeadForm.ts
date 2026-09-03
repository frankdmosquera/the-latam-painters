"use server";

import { Resend } from "resend";
import { leadFormSchema, type LeadFormValues } from "@/lib/leadFormSchema";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function submitLeadForm(values: LeadFormValues) {
  const parsed = leadFormSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false as const, error: "Invalid submission." };
  }

  if (parsed.data.company) {
    // Honeypot tripped — report success so the bot doesn't learn to skip it.
    return { success: true as const };
  }

  const { name, email, address, phone, message } = parsed.data;
  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!resend || !notificationEmail) {
    // Not configured yet (missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL
    // in .env.local) — fall back to a server log so submissions aren't lost.
    console.log("New lead form submission (Resend not configured): " + JSON.stringify(parsed.data));
    return { success: true as const };
  }

  const { error } = await resend.emails.send({
    // Resend's shared sandbox address — swap for your own verified domain
    // once you set one up, or sending to real customers will be rejected.
    from: "The Latam Painters <onboarding@resend.dev>",
    to: notificationEmail,
    replyTo: email,
    subject: `New estimate request from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Address: ${address}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message || "(none)",
    ].join("\n"),
  });

  if (error) {
    return { success: false as const, error: "Failed to send. Please call us instead." };
  }

  return { success: true as const };
}
