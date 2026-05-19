import type { ReactNode } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface Props {
  title: string;
  subtitle?: string;
  meta?: ReactNode;
}

export function PageHeader({ title, subtitle, meta }: Props) {
  return (
    <div className="mb-8">
      <Heading level={1} size="2xl">
        <span className="text-muted-foreground font-mono mr-2">#</span>
        {title}
      </Heading>
      {subtitle && <Text muted size="md" className="mt-3 block max-w-2xl">{subtitle}</Text>}
      {meta && <div className="mt-4 flex flex-wrap gap-3 items-center">{meta}</div>}
    </div>
  );
}
