import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/ds/PageHeader";
import { JourneyTimeline } from "@/components/cards/JourneyTimeline";
import { journeyPhases } from "@/lib/content";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Naveen RK" },
      {
        name: "description",
        content: "From professional badminton player to software engineer — the real story.",
      },
      { property: "og:title", content: "Journey — Naveen RK" },
      {
        property: "og:description",
        content: "From professional badminton player to software engineer — the real story.",
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
        subtitle="From the badminton court to the terminal — the real story."
      />

      {/* Opening */}
      <div className="mb-12 max-w-2xl">
        <p className="text-lg text-foreground/90 leading-relaxed">
          If someone had told me 3 years ago that I'd be a software engineer with 100K followers on
          Instagram… I wouldn't have believed it. Not even for a second.
        </p>
      </div>

      {/* Chapter 1 — Badminton */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_01</p>
          <h2 className="text-xl font-bold mb-4">The only thing I knew was badminton.</h2>
          <p className="text-foreground/85 leading-relaxed">
            I played professionally for over 10 years. That was my whole life — early mornings, long
            practice sessions, tournaments. I didn't think about anything else. I didn't need to.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Then one day, without warning, it was over. Financial constraints hit — things I
            couldn't control — and just like that, I had to walk away from the sport I loved. No
            goodbyes. No plan B.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <img
            src="/images/journey/badminton.jpeg"
            alt="Naveen at a badminton tournament with trophy"
            className="w-full h-full object-cover object-top max-h-[420px] md:max-h-none"
          />
        </div>
      </section>

      {/* Chapter 2 — The Low */}
      <section className="mb-16 max-w-2xl">
        <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_02</p>
        <h2 className="text-xl font-bold mb-4">Three months of just… nothing.</h2>
        <p className="text-foreground/85 leading-relaxed">
          I was in my first year at SRM University. No direction. No plan. Just a degree I wasn't
          sure about and a sport I could no longer play.
        </p>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          For about 3 months, I couldn't get out of bed. Frustrated, lost, and honestly just hating
          myself for feeling that way. I kept thinking — is this it?
        </p>
        <blockquote className="mt-6 border-l-2 border-[color:var(--brand-secondary)] pl-4 font-mono text-sm text-muted-foreground italic">
          "It felt like it would never end."
        </blockquote>
      </section>

      {/* Chapter 3 — Turning point */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-lg border border-border md:order-first order-last">
          <img
            src="/images/journey/engineer.jpeg"
            alt="Naveen working at his desk as a software engineer"
            className="w-full h-full object-cover object-top max-h-[420px] md:max-h-none"
          />
        </div>
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_03</p>
          <h2 className="text-xl font-bold mb-4">One conversation changed everything.</h2>
          <p className="text-foreground/85 leading-relaxed">
            Then I had a real conversation with my mom. Nothing fancy, no big speech. But it was
            exactly what I needed. A few words — and something inside me shifted.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            I started exploring computer science properly. I knew a 3-year degree alone wouldn't cut
            it, so I pushed hard — studied extra, applied everywhere, got rejected a lot.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            At the same time, I picked up content creation and video editing. Made 20 videos. One of
            them clicked — and within a few months, I had close to 80,000 followers.
          </p>
        </div>
      </section>

      {/* Chapter 4 — Now */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-3">// chapter_04</p>
          <h2 className="text-xl font-bold mb-4">And then, things started falling into place.</h2>
          <p className="text-foreground/85 leading-relaxed">
            A couple of months after that, I landed my first job. Then a better one. Then got to
            stand in places I never imagined I'd be standing in.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Not because life suddenly got easier — but because I decided I wasn't going to stay the
            same. That decision made all the difference.
          </p>
          <blockquote className="mt-6 border-l-2 border-[color:var(--brand-secondary)] pl-4 font-mono text-sm text-muted-foreground italic">
            "Your story isn't done yet. Don't give up on yourself. Not now. Not ever."
          </blockquote>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <img
            src="/images/journey/microsoft.jpeg"
            alt="Naveen at a Microsoft event"
            className="w-full h-full object-cover object-center max-h-[480px] md:max-h-none"
          />
        </div>
      </section>

      {/* Timeline */}
      <div className="mt-4">
        <JourneyTimeline phases={journeyPhases} />
      </div>
    </AppShell>
  );
}
