"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Input, Select, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BRAND, SERVICE_OPTIONS } from "@/lib/constants";
import { cn } from "@/utils/cn";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // In production, this would send to a backend
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 3000);
    },
    []
  );

  const updateField = useCallback(
    (field: keyof FormData) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      ) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      },
    []
  );

  return (
    <section className="py-28 px-6" id="contact">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-xl",
              "border border-[rgba(255,255,255,0.08)]",
              "bg-[rgba(15,23,42,0.6)] backdrop-blur-[24px]"
            )}
          >
            {/* Contact info */}
            <div className="p-10 md:p-14 bg-[rgba(0,0,0,0.2)]">
              <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">
                Secure Your Space Today
              </h2>
              <p className="text-[#94A3B8] mb-12 leading-relaxed">
                Connect with our expert team to design your custom security and
                connectivity ecosystem.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 text-lg">
                  <Phone
                    className="w-5 h-5 text-neon mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="hover:text-neon transition-colors duration-300"
                    aria-label={`Call us at ${BRAND.phone}`}
                  >
                    {BRAND.phone}
                  </a>
                </div>

              </div>
            </div>

            {/* Contact form */}
            <div className="p-10 md:p-14">
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.1)] border border-neon flex items-center justify-center mx-auto mb-4">
                      <span className="text-neon text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-heading font-medium mb-2">
                      Request Sent!
                    </h3>
                    <p className="text-[#94A3B8]">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  <Input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={updateField("name")}
                    aria-label="Full Name"
                    id="contact-name"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={updateField("email")}
                    aria-label="Email Address"
                    id="contact-email"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={updateField("phone")}
                    aria-label="Phone Number"
                    id="contact-phone"
                  />
                  <Select
                    required
                    value={formData.service}
                    onChange={updateField("service")}
                    aria-label="Service Required"
                    id="contact-service"
                  >
                    <option value="" disabled>
                      Service Required
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                  <Textarea
                    rows={4}
                    placeholder="Briefly describe your project..."
                    required
                    value={formData.message}
                    onChange={updateField("message")}
                    aria-label="Project Description"
                    id="contact-message"
                  />
                  <Button type="submit" className="mt-4 w-full">
                    Request a Free Consultation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
