import { cn } from "@/lib/utils";
import type { ElementType, ReactNode, CSSProperties } from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
interface Props {
  children: ReactNode;
  size?: Size;
  font?: "inter" | "mono";
  weight?: 400 | 500 | 600 | 700;
  color?: string;
  muted?: boolean;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

const sizes: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function Text({ children, size = "md", font = "inter", weight = 400, muted, as: As = "span", className, style, color }: Props) {
  return (
    <As
      className={cn(
        sizes[size],
        font === "mono" ? "font-mono" : "",
        muted && "text-muted-foreground",
        className,
      )}
      style={{ fontWeight: weight, color, ...style }}
    >
      {children}
    </As>
  );
}