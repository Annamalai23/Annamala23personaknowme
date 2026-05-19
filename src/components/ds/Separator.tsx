import { cn } from "@/lib/utils";

interface Props {
  orientation?: "horizontal" | "vertical";
  color?: string;
  dashed?: boolean;
  className?: string;
}

export function Separator({ orientation = "horizontal", dashed, color, className }: Props) {
  return (
    <div
      role="separator"
      className={cn(
        orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
        dashed ? "border-dashed" : "border-solid",
        className,
      )}
      style={{ borderColor: color }}
    />
  );
}
