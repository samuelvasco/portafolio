import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { CONTACT_EMAIL, EMAIL_SUBJECT } from "@/constants/contact-info";
import { cn } from "@/lib/utils";

export function ContactButton({ className }: ButtonProps) {
  return (
    <>
      <Button variant={"outline"} className={cn("border-none", className)}>
        <a href={`mailto:${CONTACT_EMAIL}?subject=${EMAIL_SUBJECT}`}>
          Contact Me
        </a>
      </Button>
    </>
  );
}
