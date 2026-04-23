"use client";

import { useCallback, useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function Card({ children, className, glowOnHover = true }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!glowOnHover || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--glow-x", `${x}px`);
      cardRef.current.style.setProperty("--glow-y", `${y}px`);
    },
    [glowOnHover]
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl p-8",
        "border border-[rgba(255,255,255,0.08)] bg-[rgba(15,23,42,0.6)]",
        "backdrop-blur-[24px]",
        "transition-all duration-[400ms] ease-out",
        "hover:border-[rgba(0,229,255,0.5)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {glowOnHover && (
        <div
          className="pointer-events-none absolute h-[200px] w-[200px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            top: "var(--glow-y, 50%)",
            left: "var(--glow-x, 50%)",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 80%)",
          }}
        />
      )}
      {children}
    </div>
  );
}
