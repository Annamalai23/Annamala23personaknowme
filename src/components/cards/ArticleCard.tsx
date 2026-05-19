import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ds/Badge";
import { FileText } from "lucide-react";
import { Icon } from "@/components/ds/Icon";

interface Props {
  slug: string;
  filename: string;
  title?: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  category?: string;
  isNew?: boolean;
  series?: string;
}

const dotColor = (c?: string) =>
  c === "AI" ? "bg-muted-foreground" : c === "Growth" ? "bg-[color:var(--brand-tertiary)]" : "bg-[color:var(--brand-secondary)]";

export function ArticleCard({ slug, filename, excerpt, date, readTime, tags, category, isNew, series }: Props) {
  return (
    <article className="border-b border-border py-5 last:border-0 transition-colors hover:bg-secondary/30 -mx-3 px-3 rounded">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Link to="/writing/$slug" params={{ slug }} className="group inline-flex items-center gap-2">
            <Icon icon={FileText} size="sm" className="text-muted-foreground" />
            <span className="font-mono text-sm font-semibold text-foreground group-hover:text-[color:var(--brand-secondary)]">{filename}</span>
            {isNew && <Badge color="green" label="NEW" />}
          </Link>
          <p className="mt-2 text-sm text-foreground/80 max-w-2xl">{excerpt}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${dotColor(category)}`} /> {category ?? tags[0]}
            </span>
            <span>{readTime} min read</span>
            {series && <span>📚 Series: {series}</span>}
          </div>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{date}</span>
      </div>
    </article>
  );
}