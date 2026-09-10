"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, pricingFaqItems, type FAQItem } from "@/data/faq";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  items?: FAQItem[];
  eyebrow?: string;
  title?: string;
  id?: string;
  className?: string;
  defaultOpenId?: string | null;
}

export function FAQSection({
  items = faqItems,
  eyebrow = "Common Questions",
  title = "Privacy Protection FAQ",
  id = "faq",
  className,
  defaultOpenId,
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null
  );

  return (
    <section id={id} className={cn("py-16 sm:py-24 lg:py-28 overflow-x-clip w-full", className)}>
      <div className="max-w-3xl mx-auto section-pad w-full">
        <SectionReveal className="text-center mb-10 sm:mb-14">
          <p className="section-eyebrow justify-center">{eyebrow}</p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-4xl">
            {title}
          </AnimatedHeading>
        </SectionReveal>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <SectionReveal key={item.id} delay={i * 0.05}>
                <div className="premium-card gold-border-glow rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left touch-target"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg text-ivory pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gold shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-steel text-sm leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ExecutivePricingFAQ() {
  return (
    <FAQSection
      items={pricingFaqItems}
      eyebrow="High-Trust Answers"
      title="Executive FAQ"
      id="executive-faq"
      defaultOpenId="personal-data-handling"
      className="py-12 sm:py-16 lg:py-20 bg-sapphire/10"
    />
  );
}
