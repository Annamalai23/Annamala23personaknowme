import { cn } from "@/lib/utils";
import { forwardRef, type TextareaHTMLAttributes } from "react";
import { Label } from "./Label";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  mono?: boolean;
  resize?: "none" | "vertical" | "both";
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { label, error, hint, mono, resize = "vertical", className, id, rows = 6, ...rest },
  ref,
) {
  return (
    <div className="w-full">
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className={cn(
          "w-full rounded-md border border-border bg-card p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--brand-secondary)] focus:ring-1 focus:ring-[color:var(--brand-secondary)]/30 transition-colors",
          mono && "font-mono",
          error && "border-destructive",
          className,
        )}
        style={{ resize }}
        {...rest}
      />
      {error ? (
        <p className="mt-1 text-xs text-destructive font-mono">{error}</p>
      ) : hint ? (
        <p className="mt-1 text-xs text-muted-foreground font-mono">{hint}</p>
      ) : null}
    </div>
  );
});
