import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/ds/PageHeader";
import { JourneyTimeline } from "@/components/cards/JourneyTimeline";
import { journeyPhases } from "@/lib/content";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Annamalai Raghupathy" },
      {
        name: "description",
        content:
          "From mechatronics engineering to AI engineering — the story of building agentic AI systems on Azure.",
      },
      { property: "og:title", content: "Journey — Annamalai Raghupathy" },
      {
        property: "og:description",
        content:
          "From mechatronics engineering to AI engineering — the story of building agentic AI systems on Azure.",
      },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <AppShell>
      <PageHeader
        title="Journey.md"
        subtitle="From mechatronics engineering to the AI frontier — the real story."
      />

      {/* Opening */}
      <div className="mb-12 max-w-2xl">
        <p className="text-lg text-foreground/90 leading-relaxed">
          If you'd told me a few years ago that I'd be building AI agents on Azure Databricks and
          architecting LLM-powered systems... I would have smiled, but not been entirely surprised.
        </p>
      </div>

      {/* Chapter 1 — Engineering Foundation */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_01</p>
          <h2 className="text-xl font-bold mb-4">Built on a mechatronics foundation.</h2>
          <p className="text-foreground/85 leading-relaxed">
            I studied Mechatronics Engineering at Kumaraguru College of Technology in Coimbatore. It
            was the perfect blend of mechanics, electronics, and computing — teaching me how to think
            in systems before I ever touched cloud infrastructure.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            That multidisciplinary background became my secret weapon. Understanding hardware-software
            intersections made cloud engineering and pipeline design feel natural.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border bg-secondary/40 aspect-[4/3] flex items-center justify-center">
          <div className="text-center p-8">
            <p className="font-mono text-4xl mb-2">⚙️</p>
            <p className="font-mono text-xs text-muted-foreground">mechatronics / engineering</p>
          </div>
        </div>
      </section>

      {/* Chapter 2 — Data Engineering */}
      <section className="mb-16 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_02</p>
        <h2 className="text-xl font-bold mb-4">The data engineering years.</h2>
        <p className="text-foreground/85 leading-relaxed">
          I started my career as an Azure Data Engineer working on enterprise projects for Unilever
          and Meijer. Those early years were all about ETL pipelines, PySpark, Azure Data Factory,
          and Databricks.
        </p>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          I learned what it means to build for production — monitoring SLAs, managing incidents,
          optimizing performance, and keeping critical data flowing 24/7. It wasn't glamorous, but
          it was the foundation everything else would be built on.
        </p>
        <blockquote className="mt-6 border-l-2 border-[color:var(--brand-secondary)] pl-4 font-mono text-sm text-muted-foreground italic">
          "Good data engineering is invisible. Bad data engineering wakes people up at 3 AM."
        </blockquote>
      </section>

      {/* Chapter 3 — AI Transition */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-lg border border-border bg-secondary/40 aspect-[4/3] flex items-center justify-center md:order-first order-last">
          <div className="text-center p-8">
            <p className="font-mono text-4xl mb-2">🤖</p>
            <p className="font-mono text-xs text-muted-foreground">agentic / ai / systems</p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_03</p>
          <h2 className="text-xl font-bold mb-4">The pivot to AI engineering.</h2>
          <p className="text-foreground/85 leading-relaxed">
            As LLMs exploded onto the scene, I saw an opportunity. My data engineering background
            gave me a unique vantage point — I understood data pipelines, infrastructure, and
            production reliability. Now I could layer AI on top.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            I dove deep into LangChain, LangGraph, and CrewAI. Developed the first AI agent in
            Azure Databricks for workflow automation. Built multi-agent systems for pipeline
            monitoring and intelligent decision-making.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            The transition wasn't instant. It took countless late nights, failed experiments, and
            persistent learning. But each step brought me closer to where I wanted to be.
          </p>
        </div>
      </section>

      {/* Chapter 4 — Now */}
      <section className="mb-16 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_04</p>
        <h2 className="text-xl font-bold mb-4">Building the future, one agent at a time.</h2>
        <p className="text-foreground/85 leading-relaxed">
          Today, I work at the intersection of AI engineering and cloud data platforms. I build
          production-ready AI agents, LLM applications, and observability systems that make
          pipelines smarter and teams more effective.
        </p>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          My focus is always on reliability and impact — using Python, ML, and cloud-native tools to
          solve real-world problems, reduce operational noise, and unlock new capabilities.
        </p>
        <blockquote className="mt-6 border-l-2 border-[color:var(--brand-secondary)] pl-4 font-mono text-sm text-muted-foreground italic">
          "The best time to start learning AI was two years ago. The second best time is now."
        </blockquote>
      </section>

      {/* Timeline */}
      <div className="mt-4">
        <JourneyTimeline phases={journeyPhases} />
      </div>
    </AppShell>
  );
}
