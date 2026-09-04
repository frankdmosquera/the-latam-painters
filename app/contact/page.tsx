import type { Metadata } from "next";
import { Clock, MapPin, PhoneIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | The Latam Painters",
  description:
    "Get in touch with The Latam Painters — questions about pricing, timelines, or anything else, we typically reply within a business day.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-950 via-neutral-900 to-primary-dark/70 px-4 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-16 -left-16 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-light uppercase">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Have a question, not ready for a full estimate yet? Send us a
            message and we&apos;ll get back to you directly.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground">Call Us Directly</h2>
              <a
                href="tel:1234567890"
                className="mt-3 flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <PhoneIcon className="size-4 text-primary" />
                123-456-7890
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground">Service Area</h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                Calgary, AB and surrounding communities.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-semibold text-foreground">Response Time</h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                We typically reply within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
