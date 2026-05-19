import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd className={cn("inline-flex items-center justify-center gap-0.5 rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground shadow-sm", className)}>
      {children}
    </kbd>
  );
}
