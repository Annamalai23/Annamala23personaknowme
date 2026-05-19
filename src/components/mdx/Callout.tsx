import type { ReactNode } from "react";

type Props = {
  cite?: string;
  children: ReactNode;
};

export function Callout({ cite, children }: Props) {
  return (
    <blockquote className="border-l-4 border-[color:var(--brand-secondary)] bg-secondary/40 px-4 py-3 italic">
      {children}
      {cite && <footer className="mt-2 font-mono text-xs text-muted-foreground">— {cite}</footer>}
    </blockquote>
  );
}
