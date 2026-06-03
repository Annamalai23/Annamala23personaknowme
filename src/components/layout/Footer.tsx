import { Separator } from "@/components/ds/Separator";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 font-mono text-sm">
            <span className="text-[color:var(--brand-secondary)]">~/annamalai</span>
            <span className="inline-block h-4 w-2 bg-[color:var(--brand-secondary)] cursor-blink" />
          </div>
          <div className="flex items-center gap-6 font-mono text-sm text-muted-foreground">
            <a href="https://github.com/Annamalai23" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">github</a>
            <a href="https://www.linkedin.com/in/annamalai-r-6b5a883a2/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">linkedin</a>
            <a href="mailto:annaraghu2308@gmail.com" className="hover:text-foreground">email</a>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground uppercase">
          <span>LAST_UPDATED: 2026-06-02</span>
          <span>© 2026 ANNAMALAI RAGHUPATHY. COMPILED WITH PRECISION.</span>
        </div>
      </div>
    </footer>
  );
}
