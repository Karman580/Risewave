import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

const baseInputStyles =
  "w-full px-4 py-4 bg-[rgba(2,6,23,0.5)] border border-[rgba(255,255,255,0.08)] rounded-md text-[#F8FAFC] font-body text-base outline-none transition-all duration-300 focus:border-neon focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] placeholder:text-[#94A3B8]";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(baseInputStyles, className)} {...props} />
  )
);
Input.displayName = "Input";

const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(baseInputStyles, "appearance-auto", className)} {...props}>
      {children}
    </select>
  )
);
Select.displayName = "Select";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(baseInputStyles, "resize-none", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";

export { Input, Select, Textarea };
