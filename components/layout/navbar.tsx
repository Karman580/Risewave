"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        "bg-[rgba(2,6,23,0.7)] backdrop-blur-[24px]",
        "border-b border-[rgba(255,255,255,0.08)]"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight"
          aria-label={BRAND.name}
        >
          <ShieldCheck className="w-6 h-6 text-neon" aria-hidden="true" />
          <span>{BRAND.name}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10" role="menubar">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-[0.95rem] text-[#94A3B8] font-medium hover:text-neon transition-colors duration-300"
              role="menuitem"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className={cn(
              "hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm rounded-md",
              "bg-neon text-deep-navy font-semibold font-heading",
              "shadow-[0_0_20px_rgba(0,229,255,0.2)]",
              "hover:bg-neon-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]",
              "transition-all duration-300"
            )}
          >
            Free Quote
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-neon transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[rgba(255,255,255,0.08)] bg-[rgba(2,6,23,0.95)] backdrop-blur-[24px]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg text-[#94A3B8] font-medium hover:text-neon transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className={cn(
                  "mt-2 inline-flex items-center justify-center px-6 py-3 rounded-md",
                  "bg-neon text-deep-navy font-semibold font-heading text-base",
                  "shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                )}
              >
                Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
