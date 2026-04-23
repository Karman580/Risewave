import { cn } from "@/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "absolute top-6 right-6 rounded-full px-3 py-1",
        "bg-[rgba(0,229,255,0.1)] text-neon text-xs font-semibold font-heading",
        "border border-neon",
        className
      )}
    >
      {children}
    </span>
  );
}

interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
}

export function TrustBadge({ icon, label }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-4 py-2.5",
        "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]",
        "text-sm font-heading"
      )}
    >
      {icon}
      {label}
    </div>
  );
}
