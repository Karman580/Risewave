import { ShieldCheck } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="border-t border-[rgba(255,255,255,0.08)] max-w-[1280px] mx-auto px-6 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-16">
        {/* Brand */}
        <div>
          <h3 className="flex items-center gap-3 font-heading text-xl font-bold mb-2">
            <ShieldCheck className="w-5 h-5 text-neon" aria-hidden="true" />
            <span>{BRAND.name}</span>
          </h3>
          <p className="text-[#94A3B8] text-[0.95rem]">{BRAND.tagline}</p>
        </div>

        {/* Links */}
        <nav className="flex gap-6" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#94A3B8] font-medium hover:text-neon transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 text-center text-sm text-[#94A3B8]">
        <p>
          Copyright &copy; {BRAND.year} {BRAND.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
