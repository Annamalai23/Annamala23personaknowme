import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import { Label } from "./Label";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  rightSlot?: ReactNode;
  label?: string;
  error?: string;
  hint?: string;
  mono?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { leftIcon, rightIcon, rightSlot, label, error, hint, mono, className, id, ...rest },
  ref,
) {
  return (
    <div className="w-full">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={cn(
        "flex items-center h-10 rounded-md border border-border bg-card px-3 gap-2 focus-within:border-[color:var(--brand-secondary)] focus-within:ring-1 focus-within:ring-[color:var(--brand-secondary)]/30 transition-colors",
        error && "border-destructive",
      )}>
        {leftIcon && <Icon icon={leftIcon} size="sm" className="text-muted-foreground" />}
        <input
          ref={ref}
          id={id}
          className={cn("flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground", mono && "font-mono", className)}
          {...rest}
        />
        {rightIcon && <Icon icon={rightIcon} size="sm" className="text-muted-foreground" />}
        {rightSlot}
      </div>
      {error ? (
        <p className="mt-1 text-xs text-destructive font-mono">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted-foreground font-mono">{hint}</p>
      ) : null}
    </div>
  );
});
