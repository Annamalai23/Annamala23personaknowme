import { cn } from "@/lib/utils";
import type { ReactNode, CSSProperties, ElementType } from "react";

interface Props {
  level?: 1 | 2 | 3 | 4;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  font?: "inter" | "mono";
  weight?: 400 | 500 | 600 | 700;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl md:text-4xl",
  "2xl": "text-4xl md:text-5xl",
};

export function Heading({ level = 1, size, font = "inter", weight = 700, as, className, style, children }: Props) {
  const Tag = (as ?? (`h${level}` as ElementType));
  const auto = size ?? ((["2xl", "xl", "lg", "md"] as const)[level - 1]);
  return (
    <Tag
      className={cn(
        sizeMap[auto],
        font === "mono" ? "font-mono" : "",
        "tracking-tight text-foreground",
        className,
      )}
      style={{ fontWeight: weight, ...style }}
    >
      {children}
    </Tag>
  );
}