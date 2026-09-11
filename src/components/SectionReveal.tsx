"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultTransition } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRevealVisible } from "@/hooks/useRevealVisible";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const reducedMotion = useReducedMotion();
  const { ref, visible } = useRevealVisible();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
