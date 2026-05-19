import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MDXContent } from "@content-collections/mdx/react";
import { allWritings } from "content-collections";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ds/Badge";
import { Card } from "@/components/ds/Card";
import { Heading } from "@/components/ds/Heading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { mdxComponents } from "@/mdx/mdx-components";
import { Clock, Calendar, User, History } from "lucide-react";
import { Icon } from "@/components/ds/Icon";

function getHeadingsFromContent(content: string) {
  return [...content.matchAll(/^#{2,3} (.+)$/gm)].map((match) => {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return { id, text };
  });
}

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const post = allWritings.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: p
        ? [
            { title: `${p.title} — Naveen RK` },
            { name: "description", content: p.excerpt },
            { property: "og:title", content: p.title },
            { property: "og:description", content: p.excerpt },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <AppShell>
      <p className="font-mono">Article not found.</p>
    </AppShell>
  ),
  errorComponent: ({ error }) => (
    <AppShell>
      <p className="font-mono">{error.message}</p>
    </AppShell>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const headings = getHeadingsFromContent(post.content);
  const more = allWritings.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <AppShell>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
          <Badge color="green" label={post.category} />
          <span className="inline-flex items-center gap-1">
            <Icon icon={Calendar} size="xs" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon icon={Clock} size="xs" /> {post.readTime} min read
          </span>
          <span>/</span>
          <span className="inline-flex items-center gap-1">
            <Icon icon={User} size="xs" /> Naveen RK
          </span>
        </div>
      </div>

      <Heading level={1} size="xl">
        {post.title}
      </Heading>
      <p className="mt-2 text-base text-muted-foreground max-w-2xl">{post.excerpt}</p>
      <hr className="my-6 border-border" />
      <div className="grid gap-16 lg:grid-cols-[200px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            CONTENTS
          </p>
          <ul className="space-y-4 border-l border-border pl-3">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className="font-mono text-xs text-muted-foreground hover:text-foreground block"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="space-y-5">
          <MDXContent code={post.mdx} components={mdxComponents} />
        </article>
      </div>

      <hr className="my-12 border-border" />
      <Heading level={2} size="md" className="mb-2 inline-flex items-center gap-2">
        🕘 Next Read
      </Heading>
      <div className="space-y-2">
        {more.map((a) => (
          <ArticleCard key={a.slug} {...a} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/writing"
          className="font-mono text-sm text-muted-foreground hover:text-foreground"
        >
          ← back to /writing
        </Link>
      </div>
    </AppShell>
  );
}
