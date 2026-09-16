import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { QuickAuditForm } from "@/components/QuickAuditForm";
import { SecureGrid } from "@/components/SecureGrid";
import { PhoneLinkPlain } from "@/components/PhoneLink";
import { contact } from "@/data/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Confidential Contact Form",
  "Request a confidential executive audit or premium privacy consultation. Secure intake form for Zerotrace Executive.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="w-full max-w-full overflow-x-clip">
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pt-36 overflow-x-clip w-full">
        <SecureGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-sapphire/25 to-midnight" />
        <div className="relative max-w-2xl mx-auto section-pad text-center w-full">
          <SectionReveal>
            <p className="label-caps text-gold/70 mb-4">Confidential Intake</p>
            <AnimatedHeading as="h1" className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              Request a Consultation
            </AnimatedHeading>
            <p className="text-steel text-sm sm:text-base leading-relaxed">
              Complete the form below — we respond within 24 hours. Prefer to call?{" "}
              <PhoneLinkPlain className="text-gold hover:text-gold-warm inline" />
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-24 lg:pb-32 overflow-x-clip w-full">
        <div className="relative max-w-xl mx-auto section-pad w-full">
          <SectionReveal>
            <QuickAuditForm variant="embedded" showExpandedOption={false} />
          </SectionReveal>
          <p className="text-center text-xs text-steel/60 mt-8">
            Share this page:{" "}
            <span className="text-steel">{contact.websiteUrl}{contact.intakeFormPath}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
