import { cn } from "@/lib/utils";

type Status = "online" | "idle" | "offline";
const map: Record<Status, string> = {
  online: "bg-[color:var(--brand-secondary)]",
  idle: "bg-amber-500",
  offline: "bg-muted-foreground",
};

export function StatusIndicator({ status, label, className }: { status: Status; label?: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono text-xs", className)}>
      <span className={cn("h-2 w-2 rounded-full", map[status], status === "online" && "status-pulse")} />
      {label}
    </span>
  );
}
