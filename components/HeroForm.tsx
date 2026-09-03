"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { leadFormSchema, type LeadFormValues } from "@/lib/leadFormSchema";
import { submitLeadForm } from "@/lib/submitLeadForm";

export function HeroForm({ className, ...props }: React.ComponentProps<"div">) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
  });

  async function onSubmit(values: LeadFormValues) {
    const result = await submitLeadForm(values);
    if (result.success) {
      setSubmitted(true);
      reset();
    }
  }

  if (submitted) {
    return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle>Thanks — we&apos;ve got it!</CardTitle>
            <CardDescription>
              We&apos;ll reach out shortly to set up your free estimate.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Request Your Free Estimate</CardTitle>
          <CardDescription>
            Tell us about your project and we&apos;ll set up a time to take a
            look — no pressure, no obligation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
              {/* Honeypot — hidden from real visitors; bots that blindly fill
                  every field on the page trip it instead. */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px]"
                {...register("company")}
              />

              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Jane Smith" {...register("name")} />
                <FieldError errors={[errors.name]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                <FieldError errors={[errors.email]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="address">Project Address</FieldLabel>
                <Input
                  id="address"
                  placeholder="123 Main St, Calgary"
                  {...register("address")}
                />
                <FieldError errors={[errors.address]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  {...register("phone")}
                />
                <FieldError errors={[errors.phone]} />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your project..."
                  {...register("message")}
                />
                <FieldError errors={[errors.message]} />
              </Field>

              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
