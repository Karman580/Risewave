"use client";

import {
  CheckCircle2,
  Lock,
  ShieldCheck,
  Award,
  Clock,
  LayoutGrid,
  Cpu,
  Settings,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { TrustBadge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Security Solutions",
    description: "Round-the-clock defense architecture.",
  },
  {
    icon: LayoutGrid,
    title: "Clean & Professional Installations",
    description: "Flawless wiring, zero aesthetic compromise.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "Hardware engineered for tomorrow.",
  },
  {
    icon: Settings,
    title: "Customized Systems",
    description: "Built exclusively for your space.",
  },
] as const;

const CHECKLIST = [
  "Focus on performance, reliability, and clean installations.",
  "Use of latest technology and industry standards.",
  "Customer-first approach with tailored solutions.",
] as const;

const glassCard = cn(
  "rounded-xl border border-[rgba(255,255,255,0.08)]",
  "bg-[rgba(15,23,42,0.6)] backdrop-blur-[24px]",
  "p-10 md:p-12"
);

export function About() {
  return (
    <section className="py-28 px-6" id="about">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
        {/* About text */}
        <Reveal>
          <div className={glassCard}>
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6 leading-tight">
              Built on Precision.
              <br />
              <span className="text-neon">Driven by Security.</span>
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 leading-relaxed">
              We specialize in advanced security systems and smart
              infrastructure, serving residential and commercial clients across
              Ontario.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-10" role="list">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#F8FAFC]">
                  <CheckCircle2
                    className="w-5 h-5 text-neon flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <TrustBadge
                icon={<Lock className="w-4 h-4 text-neon" />}
                label="Secure"
              />
              <TrustBadge
                icon={<ShieldCheck className="w-4 h-4 text-neon" />}
                label="Reliable"
              />
              <TrustBadge
                icon={<Award className="w-4 h-4 text-neon" />}
                label="Professional"
              />
            </div>
          </div>
        </Reveal>

        {/* Why Choose Us */}
        <Reveal delay={0.15}>
          <div className={glassCard}>
            <h3 className="text-2xl md:text-3xl font-heading font-medium mb-10">
              Why Choose Us
            </h3>
            <div className="space-y-8">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4">
                    <Icon
                      className="w-7 h-7 text-neon flex-shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-lg font-heading font-medium mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[#94A3B8] text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
