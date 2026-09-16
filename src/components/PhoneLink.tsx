import { Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
  "aria-label"?: string;
}

export function PhoneLink({ className, "aria-label": ariaLabel }: PhoneLinkProps) {
  return (
    <a
      href={contact.phoneTelHref}
      aria-label={ariaLabel ?? `Call ${contact.phone}`}
      className={cn("hover:text-gold transition-colors", className)}
    >
      <Phone className="w-3 h-3 inline mr-1.5" aria-hidden="true" />
      {contact.phone}
    </a>
  );
}

export function PhoneLinkPlain({ className, "aria-label": ariaLabel }: PhoneLinkProps) {
  return (
    <a
      href={contact.phoneTelHref}
      aria-label={ariaLabel ?? `Call ${contact.phone}`}
      className={cn("hover:text-gold transition-colors whitespace-nowrap", className)}
    >
      {contact.phone}
    </a>
  );
}
