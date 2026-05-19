import { cn } from "@/lib/utils";
import type { LabelHTMLAttributes, ReactNode } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: ReactNode;
}

export function Label({ required, children, className, ...rest }: Props) {
  return (
    <label className={cn("block mb-1 font-mono text-xs text-muted-foreground", className)} {...rest}>
      {children}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </label>
  );
}
