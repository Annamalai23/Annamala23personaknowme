import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/ds/PageHeader";
import { Card } from "@/components/ds/Card";
import { Input } from "@/components/ds/Input";
import { Textarea } from "@/components/ds/Textarea";
import { Label } from "@/components/ds/Label";
import { Button } from "@/components/ds/Button";
import { Separator } from "@/components/ds/Separator";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const Schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Required").max(200),
  message: z.string().trim().min(1, "Required").max(2000),
});

const socials = [
  {
    label: "Instagram",
    handle: "@naveenrkcreates",
    href: "https://instagram.com/naveenrkcreates",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "@naveen-rk",
    href: "https://linkedin.com/in/naveen-rk",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "@naveenrkcreates",
    href: "https://youtube.com/@naveenrkcreates",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naveen RK" },
      { name: "description", content: "Business and career related enquiries. Ping me here." },
      { property: "og:title", content: "Contact — Naveen RK" },
      {
        property: "og:description",
        content: "Business and career related enquiries. Ping me here.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      for (const i of parsed.error.issues) e[i.path[0] as string] = i.message;
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <AppShell>
      <PageHeader
        title="Contact"
        subtitle="Any business related enquiries or career related questions, ping me here!"
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_280px] items-start">
        {/* Form */}
        <Card variant="outlined" padding="p-8">
          <form onSubmit={submit} className="space-y-5">
            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
              <Label htmlFor="name" className="!mb-0">
                name:
              </Label>
              <Input
                id="name"
                mono
                placeholder='"Enter your name"'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                error={errors.name}
              />
            </div>
            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
              <Label htmlFor="email" className="!mb-0">
                email:
              </Label>
              <Input
                id="email"
                mono
                placeholder='"your@email.com"'
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                error={errors.email}
              />
            </div>
            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
              <Label htmlFor="subject" className="!mb-0">
                sub:
              </Label>
              <Input
                id="subject"
                mono
                placeholder='"Email subject..."'
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                error={errors.subject}
              />
            </div>

            <Textarea
              mono
              rows={8}
              placeholder='"Write your message here..."'
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              error={errors.message}
            />
            <Separator />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                {status === "sending" && "Transmitting..."}
                {status === "sent" && (
                  <span className="text-[color:var(--brand-secondary)]">
                    ✓ Message sent successfully.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-destructive">Transmission failed.</span>
                )}
                {status === "idle" && "Ready for transmission..."}
              </span>
              <Button
                variant="primary"
                rightIcon={ArrowRight}
                loading={status === "sending"}
                type="submit"
              >
                {"> send_message --force_"}
              </Button>
            </div>
          </form>
        </Card>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Direct email */}
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              // direct_line
            </p>
            <a
              href="mailto:business@naveenrkcreates.com"
              className="group flex items-start gap-3 hover:text-[color:var(--brand-secondary)] transition-colors"
            >
              <Mail
                size={15}
                className="shrink-0 text-muted-foreground group-hover:text-[color:var(--brand-secondary)]"
              />
              <span className="font-mono text-xs break-all text-foreground group-hover:text-[color:var(--brand-secondary)]">
                business@naveenrkcreates.com
              </span>
            </a>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              avg. response <span className="text-foreground">~24h</span>
            </p>
          </div>

          {/* Socials */}
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              // find_me_at
            </p>
            <ul className="space-y-1">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-md px-3 py-2.5 hover:bg-secondary/60 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-foreground/80 group-hover:text-foreground">
                      {s.icon}
                      <div>
                        <p className="font-mono text-xs font-medium leading-none">{s.label}</p>
                        <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                          {s.handle}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      size={12}
                      className="text-muted-foreground/40 group-hover:text-[color:var(--brand-secondary)] transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="rounded-lg border border-border bg-card px-5 py-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-secondary)] status-pulse" />
              <span>open to discuss business</span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
