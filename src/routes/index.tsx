import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Heading } from "@/components/ds/Heading";
import { Text } from "@/components/ds/Text";
import { Card } from "@/components/ds/Card";
import { Input } from "@/components/ds/Input";
import { Section } from "@/components/ds/Section";
import { Badge } from "@/components/ds/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CommitLog } from "@/components/cards/CommitLog";
import { SocialCard } from "@/components/cards/SocialCard";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { allWritings } from "content-collections";
import { deployments, socials, systemConfig } from "@/lib/content";

const writingsByDate = [...allWritings].sort((a, b) => b.date.localeCompare(a.date));
import { MapPin, PenLine, Sparkles, ArrowRight, Send } from "lucide-react";
import { Icon } from "@/components/ds/Icon";
import PageEditIcon from "@/icons/page-edit-icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naveen RK — Software Engineer, Builder, Content Creator" },
      {
        name: "description",
        content:
          "Building products, systems and educational content for developers. Deep-dive engineering & AI writing.",
      },
      { property: "og:title", content: "Naveen RK — Software Engineer, Builder, Content Creator" },
      {
        property: "og:description",
        content: "Building products, systems and educational content for developers.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const openSub = useAppStore((s) => s.openSubscription);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const latest = writingsByDate[0];
  const next = writingsByDate.slice(1, 3);

  return (
    <AppShell>
      {/* Hero + Status */}
      <section className="grid gap-8 md:grid-cols-[1fr_320px] items-start">
        <div>
          <Heading level={1} size="2xl">
            <span className="text-muted-foreground font-mono mr-2">#</span>
            Naveen RK
          </Heading>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            Software Engineer • Builder • Content Creator
          </p>
          <p className="mt-5 max-w-xl text-base text-foreground/85 leading-relaxed">
            Helping developers build what matters and become HARD to replace through practical
            insights on Tech, AI, & Engineering - explained simply.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={MapPin} size="xs" /> India-based
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={PenLine} size="xs" /> writing weekly
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={Sparkles} size="xs" /> Engineering + AI focused
            </span>
          </div>
        </div>
        <Card variant="terminal" title="STATUS" className="w-full">
          <div className="space-y-1">
            <div>
              <span className="text-muted-foreground">status:</span>{" "}
              <span className="text-[color:var(--brand-secondary)]">surviving</span>
            </div>
            <div>
              <span className="text-muted-foreground">employed:</span>{" "}
              <span className="text-[color:var(--brand-secondary)]">true</span>
            </div>
            <div>
              <span className="text-muted-foreground">focus:</span>{" "}
              <span className="text-[color:var(--terminal-fg)]">deep_work</span>
            </div>
            <div className="pt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[color:var(--brand-secondary)] status-pulse" />
              online
            </div>
          </div>
        </Card>
      </section>

      {/* Engineer's Notebook */}
      {/* <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">/ENGINEER'S NOTEBOOK</p>
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Card className="!p-0 overflow-hidden">
            <Link
              to="/writing/$slug"
              params={{ slug: latest.slug }}
              className="block p-5 hover:bg-secondary/30"
            >
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>LATEST_ISSUE_#42</span>
                <span>OCT 17, 2024</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{latest.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{latest.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <span>{latest.readTime} min read</span>
                {latest.tags.map((t) => (
                  <span key={t}>#{t.replace(/\s/g, "")}</span>
                ))}
              </div>
            </Link>
          </Card>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-foreground/80">
              Weekly deep-dives into systems engineering and AI tools.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) openSub(email);
              }}
              className="mt-3"
            >
              <Input
                mono
                placeholder="> enter_email_to_subscribe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </form>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Press 'enter' to confirm
            </p>
          </div>
        </div>
      </div> */}

      {/* Engineers Notebook — Newsletter */}
      <div className="mt-12 rounded-lg border border-border bg-card overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Left */}
          <div className="p-8 flex flex-col justify-center gap-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Free Weekly Newsletter
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground">
              Engineer's
              <br />
              <span className="text-[color:var(--brand-secondary)]">Notebook_</span>
            </h2>
            <p className="font-mono text-xs text-muted-foreground">
              Join <span className="text-foreground font-semibold">200+ engineers</span> already
              subscribed.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              {["code", "career", "AI", "life"].map((tag) => (
                <span key={tag} className="border border-border rounded px-2 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="p-8 flex flex-col justify-center gap-5">
            <p className="text-sm text-foreground/80 leading-relaxed">
              A small space where I share what I'm learning as a software engineer — code, career,
              AI &amp; life. No fluff. Just real learnings, every week.
            </p>
            <a
              href="https://theengineersnotebook.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-secondary)] px-4 py-2 font-mono text-sm text-background font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={13} /> Subscribe on Substack
            </a>
            {/* Inline subscription form — kept for later
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email2) openSub(email2);
              }}
              className="flex gap-2"
            >
              <input
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
                type="email"
                placeholder="your@email.com"
                className="flex-1 min-w-0 rounded-md border border-border bg-background px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-[color:var(--brand-secondary)]"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-secondary)] px-4 py-2 font-mono text-sm text-background font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                <Send size={13} /> Subscribe
              </button>
            </form>
            */}
            <p className="font-mono text-[11px] text-muted-foreground">
              Free forever. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>

      {/* Deployment History */}
      <Section title="DEPLOYMENT_HISTORY" className="mt-16">
        <CommitLog items={deployments} />
      </Section>

      {/* Internet Presence */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">INTERNET_PRESENCE.JSON</p>
        <div className="grid gap-4 md:grid-cols-3">
          {socials.map((s) => (
            <SocialCard key={s.platform} {...s} />
          ))}
        </div>
      </div>

      {/* Technical Writing */}
      <div className="mt-16 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex gap-2 items-center mb-3">
            <PageEditIcon />
            <Heading level={2} size="md" className="">
              Technical Writing
            </Heading>
          </div>

          {next.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
          <Link
            to="/writing"
            className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-[color:var(--brand-secondary)]"
          >
            View all articles <Icon icon={ArrowRight} size="xs" />
          </Link>
        </div>
        {/* Fake MDX editor */}
        <div className="rounded-lg border border-border overflow-hidden bg-[#0d1117] flex flex-col">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-[#1f2937] px-4 py-2.5 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-[#c9d1d9]/50 ml-3">draft.mdx</span>
            <span className="ml-auto font-mono text-[10px] text-[color:var(--brand-secondary)]">
              ● unsaved
            </span>
          </div>
          {/* Editor body */}
          <div className="p-4 font-mono text-xs leading-[1.75] overflow-hidden flex-1 select-none">
            {[
              { n: 1, t: "---", c: "text-[#c9d1d9]/40" },
              { n: 2, t: 'title: "The Myth of the Silent Engineer"', c: "text-[#79c0ff]" },
              { n: 3, t: "date: 2026-05-18", c: "text-[#79c0ff]" },
              { n: 4, t: "tags: [career, writing, growth]", c: "text-[#79c0ff]" },
              { n: 5, t: "readTime: 6", c: "text-[#79c0ff]" },
              { n: 6, t: "---", c: "text-[#c9d1d9]/40" },
              { n: 7, t: "", c: "" },
              {
                n: 8,
                t: "## Why engineers should write",
                c: "text-[color:var(--brand-secondary)]",
              },
              { n: 9, t: "", c: "" },
              { n: 10, t: "Most engineers think writing is for PMs.", c: "text-[#c9d1d9]/80" },
              { n: 11, t: "They're wrong.", c: "text-[#c9d1d9]/80" },
              { n: 12, t: "", c: "" },
              { n: 13, t: "Writing forces clarity. If you can't", c: "text-[#c9d1d9]/80" },
              { n: 14, t: "explain it, you don't understand it yet.", c: "text-[#c9d1d9]/80" },
              { n: 15, t: "", c: "" },
              { n: 16, t: "## The compounding effect", c: "text-[color:var(--brand-secondary)]" },
              { n: 17, t: "", c: "" },
              { n: 18, t: "One article a week = 52 articles a year.", c: "text-[#c9d1d9]/80" },
            ].map(({ n, t, c }) => (
              <div key={n} className="flex gap-4">
                <span className="w-5 text-right text-[#c9d1d9]/20 shrink-0">{n}</span>
                <span className={c}>{t}</span>
              </div>
            ))}
            {/* line with blinking cursor */}
            <div className="flex gap-4">
              <span className="w-5 text-right text-[#c9d1d9]/20 shrink-0">19</span>
              <span className="text-[#c9d1d9]/80">
                That's a library
                <span className="inline-block w-[7px] h-[13px] bg-[color:var(--brand-secondary)] ml-0.5 align-middle cursor-blink" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System Config */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">SYSTEM_CONFIG.YML</p>
        <Card variant="outlined" padding="p-6">
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(systemConfig).map(([k, items]) => (
              <div key={k}>
                <p className="font-mono text-xs font-semibold text-foreground mb-2">📁 {k}:</p>
                <ul className="space-y-1 font-mono text-sm text-foreground/80">
                  {items.map((it) => (
                    <li key={it}>- {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
