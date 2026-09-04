import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Service } from "@/lib/data/servicesData";

export function ServiceFaq({ service }: { service: Service }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Questions about {service.title.toLowerCase()}
      </h2>

      <Accordion className="mt-8 flex flex-col gap-3">
        {service.faqs.map((faq) => (
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
  );
}
