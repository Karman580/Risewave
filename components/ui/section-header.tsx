import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2
        className={cn(
          "text-4xl md:text-5xl font-heading font-medium mb-4",
          "bg-gradient-to-r from-white to-neon bg-clip-text text-transparent"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#94A3B8]">{subtitle}</p>
      )}
    </div>
  );
}
