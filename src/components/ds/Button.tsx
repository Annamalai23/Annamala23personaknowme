import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "inverted" | "outlined" | "ghost";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  iconOnly?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "bg-[color:var(--brand-primary)] text-white hover:bg-[color:var(--brand-tertiary)]",
  secondary: "bg-[color:var(--brand-secondary)] text-white hover:opacity-90",
  inverted: "bg-white text-[color:var(--brand-primary)] border border-border hover:bg-secondary",
  outlined: "bg-transparent text-foreground border border-border hover:bg-secondary",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};
const iconOnlySizes: Record<Size, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  iconOnly,
  loading,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors font-mono",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        iconOnly ? iconOnlySizes[size] + " rounded-full" : sizes[size],
        variants[variant],
        className,
      )}
      {...rest}
    >
      {loading ? <Icon icon={Loader2} size="sm" className="animate-spin" /> : leftIcon && <Icon icon={leftIcon} size={size === "lg" ? "md" : "sm"} />}
      {!iconOnly && children}
      {!loading && rightIcon && <Icon icon={rightIcon} size={size === "lg" ? "md" : "sm"} />}
    </button>
  );
}
