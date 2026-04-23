"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/utils/cn";

export function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center justify-center text-center pt-20 px-6"
      id="home"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className={cn(
            "w-[200%] h-[200%] animate-grid-move opacity-30",
            "bg-[length:60px_60px] bg-center"
          )}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          }}
        />
      </div>

      <div className="max-w-[900px]">
        <Reveal>
          <h1
            className={cn(
              "text-[clamp(3rem,6vw,5rem)] font-heading font-bold mb-6",
              "leading-[1.1] tracking-tight"
            )}
          >
            Next-Generation Security &<br />
            Smart Connectivity
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] max-w-[600px] mx-auto mb-10 text-[#94A3B8] leading-relaxed">
            We design, install, and manage intelligent security and connectivity
            systems for homes and businesses.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center justify-center px-8 py-3.5 rounded-md",
                "bg-neon text-deep-navy font-semibold font-heading tracking-wide",
                "shadow-[0_0_20px_rgba(0,229,255,0.2)]",
                "hover:bg-neon-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center justify-center px-8 py-3.5 rounded-md",
                "bg-transparent text-[#F8FAFC] font-medium font-heading tracking-wide",
                "border border-[rgba(255,255,255,0.08)]",
                "hover:bg-[rgba(15,23,42,0.6)] hover:border-neon hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              Explore Services
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
