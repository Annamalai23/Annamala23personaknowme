import type { ReactNode } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface Props {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={className}>
      {title && (
        <div className="mb-4">
          <Heading level={2} size="md" className="font-mono">
            <span className="text-muted-foreground">#</span> {title}
          </Heading>
          {subtitle && <Text muted size="sm" className="mt-1 block">{subtitle}</Text>}
        </div>
      )}
      {children}
    </section>
  );
}
