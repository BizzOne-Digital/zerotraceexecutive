"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRevealVisible } from "@/hooks/useRevealVisible";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const { ref, visible } = useRevealVisible();
  const Icon = getIcon(service.icon);

  const hidden = { opacity: 0, x: index % 2 === 0 ? -24 : 24 };
  const shown = { opacity: 1, x: 0 };

  return (
    <motion.article
      ref={ref}
      className="group gold-border-glow glass-panel rounded-lg p-5 sm:p-6 lg:p-8 w-full min-w-0"
      initial={reducedMotion ? false : hidden}
      animate={reducedMotion || visible ? shown : hidden}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={reducedMotion ? undefined : { scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-sapphire-dark/60 border border-gold/10 shrink-0 group-hover:border-gold/30 transition-colors">
          <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-xl text-ivory mb-2">{service.title}</h3>
          <p className="text-steel text-sm leading-relaxed">{service.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
