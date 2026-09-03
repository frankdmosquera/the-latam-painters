import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqData";

export function FaqSection() {
  return (
    <section className="bg-services-bg py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-14 text-center md:mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Common Questions, Answered
          </h2>
          <p className="mt-3 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Give us a call and
            we&apos;ll walk you through it.
          </p>
        </div>

        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border border-border bg-card px-5 data-open:border-primary/50 data-open:bg-primary/5"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-foreground **:data-[slot=accordion-trigger-icon]:hidden">
                {faq.question}
                <Plus className="ml-auto size-5 shrink-0 text-primary transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
