import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Heading } from "@/components/ds/Heading";
import { Card } from "@/components/ds/Card";
import { Input } from "@/components/ds/Input";
import { Section } from "@/components/ds/Section";
import { Badge } from "@/components/ds/Badge";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { allWritings } from "content-collections";
import { deployments, socials, systemConfig } from "@/lib/content";
import { ArrowRight, Send, MapPin, Brain, Sparkles, Cpu, Database, Eye, Activity } from "lucide-react";
import { Icon } from "@/components/ds/Icon";
import { CommitLog } from "@/components/cards/CommitLog";
import { SocialCard } from "@/components/cards/SocialCard";
import { ArticleCard } from "@/components/cards/ArticleCard";

const writingsByDate = [...allWritings].sort((a, b) => b.date.localeCompare(a.date));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Annamalai Raghupathy — AI Engineer & Agentic AI Developer" },
      {
        name: "description",
        content:
          "Building production-ready AI agents, LLM-powered applications, and resilient data platforms on Azure — with a focus on reliability, observability, and real-world business impact.",
      },
      {
        property: "og:title",
        content: "Annamalai Raghupathy — AI Engineer & Agentic AI Developer",
      },
      {
        property: "og:description",
        content:
          "Building production-ready AI agents, LLM-powered applications, and resilient data platforms on Azure.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const openSub = useAppStore((s) => s.openSubscription);
  const [email, setEmail] = useState("");
  const latest = writingsByDate[0];
  const next = writingsByDate.slice(1, 3);

  return (
    <AppShell>
      {/* Hero + Status */}
      <section className="grid gap-8 md:grid-cols-[1fr_320px] items-start">
        <div>
          <Heading level={1} size="2xl">
            <span className="text-muted-foreground font-mono mr-2">#</span>
            Annamalai Raghupathy
          </Heading>
          <p className="mt-2 font-mono text-sm text-muted-foreground">
            AI Engineer · Agentic AI Developer · Azure Data Engineer
          </p>
          <p className="mt-5 max-w-xl text-base text-foreground/85 leading-relaxed">
            I build production-ready <strong>AI agents</strong>,{" "}
            <strong>LLM-powered applications</strong>, and resilient{" "}
            <strong>Azure data platforms</strong> — with a focus on reliability,
            observability, and real-world business impact.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={MapPin} size="xs" /> Coimbatore, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={Brain} size="xs" /> Agentic AI · LLM Apps
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={Sparkles} size="xs" /> 4+ years experience
            </span>
          </div>
        </div>
        <Card variant="terminal" title="STATUS" className="w-full">
          <div className="space-y-1">
            <div>
              <span className="text-muted-foreground">status:</span>{" "}
              <span className="text-[color:var(--brand-secondary)]">active</span>
            </div>
            <div>
              <span className="text-muted-foreground">role:</span>{" "}
              <span className="text-[color:var(--brand-secondary)]">AI Engineer</span>
            </div>
            <div>
              <span className="text-muted-foreground">focus:</span>{" "}
              <span className="text-[color:var(--terminal-fg)]">agentic_ai</span>
            </div>
            <div className="pt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-[color:var(--brand-secondary)] status-pulse" />
              exploring opportunities
            </div>
          </div>
        </Card>
      </section>

      {/* About Section */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">ABOUT.MD</p>
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4 text-sm text-foreground/85 leading-relaxed">
              <p>
                I'm an AI-focused Azure Data Engineer with 4+ years of experience building
                scalable, production-ready data platforms and intelligent automation workflows.
              </p>
              <p>
                Over the last few years, I've been transitioning from traditional data engineering
                into AI and machine learning — designing agentic AI systems, LLM-powered
                applications, and monitoring solutions that keep critical pipelines healthy and
                observable.
              </p>
              <p>
                I enjoy working across the stack: shaping data models in Azure Databricks and
                Synapse, orchestrating pipelines with ADF, and layering AI agents on top using
                frameworks like LangChain, LangGraph, and CrewAI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="rounded-lg border border-border bg-secondary/40 p-3">
                <p className="text-muted-foreground uppercase tracking-wider">Focus</p>
                <p className="mt-1 text-foreground font-semibold">AI Engineer · Agentic AI</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/40 p-3">
                <p className="text-muted-foreground uppercase tracking-wider">Experience</p>
                <p className="mt-1 text-foreground font-semibold">4+ years · Azure data & AI</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/40 p-3">
                <p className="text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="mt-1 text-foreground font-semibold">Coimbatore, India</p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/40 p-3">
                <p className="text-muted-foreground uppercase tracking-wider">Preferred roles</p>
                <p className="mt-1 text-foreground font-semibold">AI Engineer · LLM Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">SKILLS.MD</p>
        <div className="grid gap-4 md:grid-cols-2">
          {/* AI / ML */}
          <Card variant="outlined" padding="p-5">
            <p className="font-mono text-xs font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon icon={Brain} size="sm" /> AI · Machine Learning
            </p>
            <div className="space-y-3">
              {[
                { name: "Agentic AI · LLM Apps", level: "Advanced" },
                { name: "LangChain · LangGraph · CrewAI", level: "Advanced" },
                { name: "Computer Vision · YOLO", level: "Intermediate" },
                { name: "ML Lifecycle · MLflow", level: "Intermediate" },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-foreground/80">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[color:var(--brand-secondary)]"
                      style={{
                        width:
                          s.level === "Advanced"
                            ? "88%"
                            : s.level === "Intermediate"
                              ? "72%"
                              : "55%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["LLM Fine-tuning", "Prompt Design", "Evaluation", "Observability"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* Data / Cloud / Engineering */}
          <Card variant="outlined" padding="p-5">
            <p className="font-mono text-xs font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon icon={Database} size="sm" /> Data · Cloud · Engineering
            </p>
            <div className="space-y-3">
              {[
                { name: "Python · PySpark · SQL", level: "Advanced" },
                { name: "Azure Databricks · ADF · Synapse", level: "Advanced" },
                { name: "Azure DevOps · CI/CD · Docker", level: "Advanced" },
                { name: "FastAPI · Flask · REST APIs", level: "Advanced" },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-foreground/80">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[color:var(--brand-secondary)]"
                      style={{
                        width:
                          s.level === "Advanced"
                            ? "88%"
                            : s.level === "Intermediate"
                              ? "72%"
                              : "55%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Delta Lake", "Unity Catalog", "Power BI", "Monitoring"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Deployment History (Experience) */}
      <Section title="DEPLOYMENT_HISTORY" className="mt-16">
        <CommitLog items={deployments} />
      </Section>

      {/* AI Projects */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">AI_PROJECTS.MD</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Agentic AI Pipeline Monitoring",
              tech: "Azure Databricks",
              desc: "LLM-powered observability system using agentic AI to detect failures and anomalies across Databricks pipelines, triggering intelligent alerts.",
              tags: ["Failure Detection", "Anomaly ID", "LLM Fixes"],
            },
            {
              title: "AI Agent Development",
              tech: "LangChain · LangGraph",
              desc: "First AI agent in Azure Databricks for workflow automation, extended into multi-agent systems with LangGraph and CrewAI.",
              tags: ["Automation", "Multi-Agent", "CrewAI"],
            },
            {
              title: "Freshness Detection System",
              tech: "Hackathon · 2nd Place",
              desc: "Hybrid computer vision + agentic AI system to assess food freshness using YOLO and ML models with intelligent decision workflows.",
              tags: ["YOLO", "Computer Vision", "Decision Workflows"],
            },
            {
              title: "LLM & Automation Toolkit",
              tech: "FastAPI · DevOps",
              desc: "FastAPI microservices for AI agent deployment with web scraping agents and SERP APIs, wired into Azure DevOps pipelines.",
              tags: ["FastAPI", "Web Scraping", "DevOps"],
            },
            {
              title: "LLM Fine-tuning Experiments",
              tech: "DeepSeek",
              desc: "Fine-tuned lightweight LLMs for specialized tasks and integrated them into existing agentic flows and monitoring tools.",
              tags: ["Fine-tuning", "DeepSeek", "Evaluation"],
            },
            {
              title: "Data Insights Dashboards",
              tech: "Power BI",
              desc: "Designed DAX-powered KPIs to track pipeline health, business metrics, and AI system performance for non-technical stakeholders.",
              tags: ["Power BI", "DAX", "Operational KPIs"],
            },
          ].map((p, i) => (
            <Card key={i} variant="outlined" padding="p-4" className="hover:border-[color:var(--brand-secondary)]/50 transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-mono text-sm font-semibold text-foreground">{p.title}</h3>
                <Badge color="gray" label={p.tech} />
              </div>
              <p className="text-xs text-foreground/70 leading-relaxed">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-[color:var(--brand-secondary)]"
                  >
                    #{t.replace(/\s+/g, "_")}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">EDUCATION.MD</p>
        <div className="grid gap-4 md:grid-cols-2">
          <Card variant="outlined" padding="p-5">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              B.E. Mechatronics Engineering
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Kumaraguru College of Technology · Coimbatore · 2016 – 2020
            </p>
            <p className="mt-3 text-xs text-foreground/70 leading-relaxed">
              A multidisciplinary background across mechanics, electronics, and computing that now
              helps design AI systems grounded in real-world operations.
            </p>
          </Card>
          <Card variant="outlined" padding="p-5">
            <h3 className="font-mono text-sm font-semibold text-foreground">
              Certifications & Awards
            </h3>
            <ul className="mt-2 space-y-1.5 font-mono text-xs text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                Microsoft Azure DP-900
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                Anthropic – Claude Code in Action
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                Google Cloud – Generative AI Basics & Essentials
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)]" />
                Microsoft – Azure AI Computer Vision
              </li>
              <li className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Top Performer Award – Meijer Project
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                2nd Place – Agentic AI Hackathon
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Engineers Notebook — Newsletter */}
      <div className="mt-16 rounded-lg border border-border bg-card overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-8 flex flex-col justify-center gap-4">
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Free Monthly Newsletter
            </p>
            <h2 className="text-3xl font-bold leading-tight text-foreground">
              The Agentic
              <br />
              <span className="text-[color:var(--brand-secondary)]">Data Engineer_</span>
            </h2>
            <p className="font-mono text-xs text-muted-foreground">
              Join <span className="text-foreground font-semibold">100+ engineers</span> already
              subscribed.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              {["AI", "Azure", "Data", "engineering"].map((tag) => (
                <span key={tag} className="border border-border rounded px-2 py-0.5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center gap-5">
            <p className="text-sm text-foreground/80 leading-relaxed">
              A monthly dispatch covering AI engineering, agentic systems, Azure data platforms, and
              practical lessons from building production systems. No fluff. Just real learnings.
            </p>
            <a
              href="https://github.com/Annamalai23"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-secondary)] px-4 py-2 font-mono text-sm text-background font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={13} /> Subscribe on GitHub
            </a>
            <p className="font-mono text-[11px] text-muted-foreground">
              Free forever. No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>

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
      {writingsByDate.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-3">
            <Heading level={2} size="md">
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
      )}

      {/* System Config */}
      <div className="mt-16">
        <p className="font-mono text-xs text-muted-foreground mb-3">SYSTEM_CONFIG.YML</p>
        <Card variant="outlined" padding="p-6">
          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(systemConfig).map(([k, items]) => (
              <div key={k}>
                <p className="font-mono text-xs font-semibold text-foreground mb-2">
                  📁 {k}:
                </p>
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
