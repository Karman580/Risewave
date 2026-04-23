"use client";

import { type ReactNode } from "react";
import { motion, type Variant } from "framer-motion";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const directionOffset: Record<string, { x?: number; y?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
}: RevealProps) {
  const offset = directionOffset[direction];

  const hidden: Variant = {
    opacity: 0,
    ...offset,
  };

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: "-50px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
