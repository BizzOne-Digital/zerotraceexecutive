"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const DEFAULT_FALLBACK_MS = 350;

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < vh * 1.1 && rect.bottom > -80;
}

/**
 * Reliable scroll reveal — falls back to visible if in-view detection fails
 * (common in mobile in-app browsers e.g. WhatsApp).
 */
export function useRevealVisible<T extends HTMLElement = HTMLDivElement>(
  fallbackMs = DEFAULT_FALLBACK_MS
) {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const [fallback, setFallback] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && isElementInViewport(el)) {
      setFallback(true);
    }
  }, []);

  useEffect(() => {
    if (fallback) return;
    const id = window.setTimeout(() => setFallback(true), fallbackMs);
    return () => window.clearTimeout(id);
  }, [fallback, fallbackMs]);

  return { ref, visible: isInView || fallback };
}
