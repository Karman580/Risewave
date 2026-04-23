"use client";

import { SERVICES } from "@/lib/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

export function Services() {
  return (
    <section className="py-28 px-6" id="services">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <SectionHeader
            title="Our Ecosystem"
            subtitle="Intelligent Security. Seamless Connectivity."
          />
        </Reveal>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <Card
                  className={service.featured ? "md:col-span-1" : undefined}
                >
                  {service.badge && <Badge>{service.badge}</Badge>}
                  <Icon
                    className="w-8 h-8 text-neon mb-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-heading font-medium mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative pl-4 text-[0.95rem] text-[#94A3B8]"
                      >
                        <span className="absolute left-0 text-neon opacity-50">
                          →
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
