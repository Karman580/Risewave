import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neon text-deep-navy font-semibold shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:bg-neon-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[#F8FAFC] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(15,23,42,0.6)] hover:border-neon hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium font-heading tracking-wide transition-all duration-300 cursor-pointer",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
