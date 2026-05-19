import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "default" | "terminal" | "outlined";

interface Props {
  variant?: Variant;
  padding?: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

function TerminalBar({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-secondary)]/80" />
      </div>
      {title && (
        <span className="ml-2 font-mono text-[11px] tracking-wider text-[color:var(--terminal-fg)]/70 uppercase">{title}</span>
      )}
    </div>
  );
}

export function Card({ variant = "default", padding = "p-5", title, className, children }: Props) {
  if (variant === "terminal") {
    return (
      <div className={cn("rounded-lg overflow-hidden border border-[color:var(--terminal-border)] bg-[color:var(--terminal-bg)] text-[color:var(--terminal-fg)]", className)}>
        <TerminalBar title={title} />
        <div className={cn(padding, "font-mono text-sm")}>{children}</div>
      </div>
    );
  }
  if (variant === "outlined") {
    return <div className={cn("rounded-lg border border-border bg-transparent", padding, className)}>{children}</div>;
  }
  return <div className={cn("rounded-lg border border-border bg-card shadow-sm", padding, className)}>{children}</div>;
}
