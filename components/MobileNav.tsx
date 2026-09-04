"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigationItemsData2 } from "@/lib/data/navigationItemsData";
import { logo } from "@/lib/data/imagesData";

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button size="icon" variant="outline" aria-label="Open menu" />}
      >
        <Menu />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col gap-0 overflow-hidden p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-sm"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

        <SheetHeader className="relative flex-row items-center justify-between border-b px-5 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <Image
              src={logo.url}
              alt={logo.alt}
              width={140}
              height={46}
              className="h-9 w-auto"
            />
          </Link>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Browse pages and services for The Latam Painters
          </SheetDescription>
        </SheetHeader>

        <nav className="relative flex-1 overflow-y-auto px-3 py-4">
          <AnimatePresence>
            {open && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                className="flex flex-col gap-1"
              >
                {navigationItemsData2.map((item) =>
                  item.items?.length ? (
                    <motion.div key={item.title} variants={itemVariants}>
                      <Accordion>
                        <AccordionItem value={item.title} className="border-none">
                          <AccordionTrigger className="rounded-lg px-2 text-lg font-semibold text-foreground hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="pb-1">
                            <div className="flex flex-col gap-0.5 border-l-2 border-primary/25 pl-4">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className="group flex items-center justify-between rounded-md py-2 text-base text-muted-foreground no-underline! transition-colors hover:text-primary-dark"
                                >
                                  {sub.title}
                                  <ChevronRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  ) : (
                    <motion.div key={item.title} variants={itemVariants}>
                      <Link
                        href={item.href ?? "/"}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between rounded-lg px-2 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-muted hover:text-primary-dark"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <SheetFooter className="gap-3 border-t px-5 pt-5 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
          <a
            href="tel:1234567890"
            className="flex items-center justify-center gap-2 font-semibold text-primary-dark"
          >
            <PhoneIcon className="size-4 text-primary-light" fill="var(--primary)" />
            123-456-7890
          </a>
          <SheetClose
            render={
              <Button
                size="lg"
                className="w-full bg-secondary-foreground text-base"
              />
            }
          >
            Get a Free Quote
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
