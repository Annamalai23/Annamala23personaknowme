import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/ds/PageHeader";
import { Input } from "@/components/ds/Input";
import { Kbd } from "@/components/ds/Kbd";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { allWritings } from "content-collections";
import { useAppStore } from "@/lib/store";
import { Search, Folder } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ds/Button";
import { Icon } from "@/components/ds/Icon";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: "Writing — Annamalai Raghupathy" },
      {
        name: "description",
        content:
          "Engineering notes on systems, AI, software, developer growth and building on the internet.",
      },
      { property: "og:title", content: "Writing — Annamalai Raghupathy" },
      {
        property: "og:description",
        content:
          "Engineering notes on systems, AI, software, developer growth and building on the internet.",
      },
    ],
  }),
  component: WritingPage,
});

const categories = ["All", "Engineering", "AI", "Systems Design", "Growth"] as const;

function WritingPage() {
  const active = useAppStore((s) => s.activeCategory);
  const setActive = useAppStore((s) => s.setActiveCategory);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");

  const list = useMemo(() => {
    let r = [...allWritings];
    if (active !== "All") r = r.filter((a) => a.category === active);
    if (q) r = r.filter((a) => (a.title + a.excerpt).toLowerCase().includes(q.toLowerCase()));
    r.sort((a, b) =>
      sort === "new" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date),
    );
    return r;
  }, [active, q, sort]);

  return (
    <AppShell>
      <PageHeader
        title="Writing"
        subtitle="AI engineering, agentic systems, Azure data platforms, and practical lessons from building production systems."
      />
      <Input
        leftIcon={Search}
        placeholder="Search archive..."
        mono
        value={q}
        onChange={(e) => setQ(e.target.value)}
        rightSlot={<Kbd>CMD+F</Kbd>}
      />
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span>Sort:</span>
          <button
            onClick={() => setSort(sort === "new" ? "old" : "new")}
            className="text-foreground hover:text-[color:var(--brand-secondary)]"
          >
            {sort === "new" ? "Newest First ▾" : "Oldest First ▾"}
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-4 py-2 font-mono text-xs text-muted-foreground bg-secondary/40">
          <span className="inline-flex items-center gap-2">
            <Icon icon={Folder} size="sm" />
            content / archive / writing
          </span>
          <span>{list.length} items</span>
        </div>
        <div className="px-4">
          {list.length === 0 ? (
            <p className="py-12 text-center font-mono text-sm text-muted-foreground">
              No articles match.
            </p>
          ) : (
            list.map((a) => <ArticleCard key={a.slug} {...a} />)
          )}
        </div>
        <div className="flex justify-center py-6">
          <Button variant="outlined" size="sm">
            --load-more --limit=10
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
