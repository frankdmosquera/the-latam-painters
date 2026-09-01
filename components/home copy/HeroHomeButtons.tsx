"use client";
import { useState } from "react";
import {
  CalendarCheck,
  ClipboardList,
  MessageCircleQuestion,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { HeroForm } from "../HeroForm";

export function HeroHomeButtons() {
  const [showForm, setShowForm] = useState(false);
  const [showFormCallWrapper, setShowFormCallWrapper] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <Link href={"/booking"} className={buttonVariants()}>
          <CalendarCheck />
          <span>Book with Calendly</span>
        </Link>
        {!showFormCallWrapper && (
          <div className={buttonVariants({ variant: "secondary" })}>
            <MessageCircleQuestion />
            <span onClick={() => setShowFormCallWrapper(true)}>Questions?</span>
          </div>
        )}

        {showFormCallWrapper && (
          <div className="flex  justify-center gap-4 ">
            <div className={buttonVariants({ variant: "secondary" })}>
              <PhoneCall />
              <a href="tel:123456789">Call</a>
            </div>
            <div
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => setShowForm(true)}
            >
              <ClipboardList />
              <span>Form</span>
              {showForm && (
                <div className="">
                  <HeroForm className="w-100 z-10 " />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
