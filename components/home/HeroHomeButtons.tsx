"use client";
import { useState } from "react";
import { ClipboardList, MessageCircleQuestion, PhoneCall } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { HeroForm } from "../HeroForm";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { HeroCalendarImage } from "./HeroCalendarImage";
// import { HeroCalendarImage } from "./HeroCalendarImage";

export function HeroHomeButtons() {
  const [showFormCallWrapper, setShowFormCallWrapper] = useState(false);
  return (
    <>
      <div className="">
        {/* ////// */}
        <HeroCalendarImage />
        {!showFormCallWrapper && (
          <div
            className={cn(buttonVariants({ variant: "secondary" }), "mt-8 ")}
            onClick={() => setShowFormCallWrapper(true)}
          >
            <MessageCircleQuestion />
            <span>Questions?</span>
          </div>
        )}
        {showFormCallWrapper && (
          <div className="flex  justify-center gap-4 mt-8">
            <div
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "gap-2 px-4",
              )}
            >
              <PhoneCall />
              <a href="tel:123456789">Call</a>
            </div>
            <Sheet>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "gap-2 px-4",
                )}
              >
                <ClipboardList />
                <span>Form</span>
              </SheetTrigger>
              <SheetContent side="left">
                <HeroForm />
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </>
  );
}
