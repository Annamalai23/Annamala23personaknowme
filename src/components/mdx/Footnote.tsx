import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Footnote({ children }: Props) {
  return (
    <p className="italic font-mono text-xs text-muted-foreground border-t border-border pt-4 mt-6">
      {children}
    </p>
  );
}
