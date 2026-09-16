"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingTiers, landingAudienceLine } from "@/data/landing-tiers";
import { contact } from "@/data/contact";
import { SectionReveal } from "./SectionReveal";
import { AnimatedHeading } from "./AnimatedHeading";
import { getIcon } from "@/lib/icons";
import { PhoneLinkPlain } from "./PhoneLink";

export function ServiceSelection() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 overflow-x-clip w-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,55,0.06),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto section-pad w-full">
        <SectionReveal className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <p className="section-eyebrow justify-center">{contact.tagline}</p>
          <AnimatedHeading className="text-2xl sm:text-3xl lg:text-5xl mb-4">
            Select the Service You Require
          </AnimatedHeading>
          <p className="text-steel text-sm sm:text-base leading-relaxed">
            Three engagement paths — from a one-time deep diagnostic to ongoing protection
            and premium corporate cloaking.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {landingTiers.map((tier, i) => {
            const Icon = getIcon(tier.icon);
            return (
              <SectionReveal key={tier.id} delay={i * 0.08}>
                <article
                  className={`group premium-card gold-border-glow rounded-2xl overflow-hidden h-full flex flex-col ${
                    tier.premium ? "ring-1 ring-gold/25" : ""
                  }`}
                >
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-xl bg-sapphire-dark/60 border border-gold/15 shrink-0">
                        <Icon className="w-7 h-7 text-gold" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl sm:text-2xl text-ivory leading-tight">
                          {tier.title}
                        </h3>
                        <p className="text-gold text-sm font-medium mt-1 tracking-wide">
                          {tier.priceLabel}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-grow text-sm text-steel leading-relaxed">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-gold shrink-0" aria-hidden="true">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tier.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.15em] uppercase text-gold hover:text-gold-warm transition-all group-hover:gap-4"
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-12 sm:mt-16" delay={0.15}>
          <div className="max-w-4xl mx-auto rounded-sm bg-gold/10 border border-gold/30 px-4 py-4 sm:py-5 text-center">
            <p className="text-xs sm:text-sm font-medium tracking-[0.12em] uppercase text-ivory leading-relaxed">
              Start your anonymity now —{" "}
              <a
                href={contact.websiteUrl}
                className="text-gold hover:text-gold-warm transition-colors"
              >
                {contact.website}
              </a>
              {" — "}
              <PhoneLinkPlain className="inline text-gold hover:text-gold-warm" />
            </p>
          </div>
          <p className="text-center text-[10px] sm:text-xs text-steel/70 tracking-[0.14em] uppercase mt-6 px-2 leading-relaxed">
            {landingAudienceLine}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
