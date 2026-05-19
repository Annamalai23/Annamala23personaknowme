import { cn } from "@/lib/utils";

type Color = "green" | "gray" | "brown" | "red" | "blue";
interface Props {
  color?: Color;
  label: string;
  dot?: boolean;
  className?: string;
}

const styles: Record<Color, { bg: string; text: string; dot: string }> = {
  green: { bg: "bg-[color:var(--brand-secondary)]/10", text: "text-[color:var(--brand-secondary)]", dot: "bg-[color:var(--brand-secondary)]" },
  gray: { bg: "bg-secondary", text: "text-muted-foreground", dot: "bg-muted-foreground" },
  brown: { bg: "bg-[color:var(--brand-tertiary)]/10", text: "text-[color:var(--brand-tertiary)]", dot: "bg-[color:var(--brand-tertiary)]" },
  red: { bg: "bg-destructive/10", text: "text-destructive", dot: "bg-destructive" },
  blue: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
};

export function Badge({ color = "gray", label, dot, className }: Props) {
  const s = styles[color];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-xs", s.bg, s.text, className)}>
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />}
      {label}
    </span>
  );
}
