import { Badge } from "@/components/ds/Badge";

interface Item {
  hash?: string;
  headRef?: string;
  role: string;
  bullets: string[];
  tags: string[];
}

export function CommitLog({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-12">
      {items.map((it, i) => (
        <li key={i} className="relative pl-6">
          <span
            className={`absolute left-0 top-1.5 h-2 w-2 rounded-full ${it.headRef ? "bg-[color:var(--brand-secondary)]" : "bg-muted-foreground/40"}`}
          />
          {i < items.length - 1 && (
            <span
              className="absolute left-[3px] top-[14px] w-px bg-border"
              style={{ height: "calc(100% + 3rem)" }}
            />
          )}
          <div className="font-mono text-xs text-muted-foreground">
            commit <span className="text-foreground">{it.hash}</span>
            {it.headRef && (
              <span className="ml-2 text-[color:var(--brand-secondary)]">({it.headRef})</span>
            )}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-foreground">{it.role}</h3>
          <ul className="mt-4 space-y-3">
            {it.bullets.map((b, j) => (
              <li key={j} className="font-mono text-sm text-foreground/80">
                <span className="text-[color:var(--brand-secondary)]">{">"}</span> {b}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {it.tags.map((t) => (
              <Badge key={t} color="gray" label={`[${t}]`} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
