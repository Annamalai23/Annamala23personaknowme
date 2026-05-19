import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

const sizes = { xs: 12, sm: 14, md: 16, lg: 20 } as const;
type Size = keyof typeof sizes;

interface Props {
  icon: LucideIcon;
  size?: Size;
  color?: string;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
}

export function Icon({ icon: I, size = "md", color, className, style, strokeWidth = 1.75 }: Props) {
  return (
    <I
      size={sizes[size]}
      color={color ?? "currentColor"}
      className={cn(className)}
      style={style}
      strokeWidth={strokeWidth}
    />
  );
}
