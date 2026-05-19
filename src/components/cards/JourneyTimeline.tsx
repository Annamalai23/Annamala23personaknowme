import { Badge } from "@/components/ds/Badge";

interface Phase { status: string; color: string; date: string; title: string; body: string; }

export function JourneyTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 font-mono text-xs text-muted-foreground">git log --oneline</div>
      <ul className="space-y-6">
        {phases.map((p, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <Badge color={p.color as "green" | "gray" | "brown"} label={p.status} />
                <span className="font-mono text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h4 className="mt-1 font-semibold text-foreground">{p.title}</h4>
              <p className="mt-1 text-sm text-foreground/80">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
