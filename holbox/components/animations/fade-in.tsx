"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, number, useAnimation, useInView } from "framer-motion";

// Define allowed directions
type Direction = "up" | "down" | "left" | "right" | null;

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  threshold?: number;
  duration?: number;
  distance?: number;
}

export const FadeIn = ({
  children,
  className = "",
  direction = null,
  delay = 0,
  threshold = 0.1,
  duration = 0.5,
  distance = 50,
}: FadeInProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  // Set initial animation properties based on direction
  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = distance;
  if (direction === "down") initial.y = -distance;
  if (direction === "left") initial.x = distance;
  if (direction === "right") initial.x = -distance;

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Ease out cubic
        },
      });
    }
  }, [isInView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};
