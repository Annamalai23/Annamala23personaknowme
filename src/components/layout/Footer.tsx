import { Separator } from "@/components/ds/Separator";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 font-mono text-sm">
            <span className="text-[color:var(--brand-secondary)]">~/naveen-rk</span>
            <span className="inline-block h-4 w-2 bg-[color:var(--brand-secondary)] cursor-blink" />
          </div>
          <div className="flex items-center gap-6 font-mono text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">github</a>
            <a href="#" className="hover:text-foreground">twitter</a>
            <a href="#" className="hover:text-foreground">linkedin</a>
            <a href="#" className="hover:text-foreground">email</a>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-foreground uppercase">
          <span>LAST_UPDATED: 2024-10-15_21:04:12</span>
          <span>© 2024 NAVEEN RK. COMPILED WITH PRECISION.</span>
        </div>
      </div>
    </footer>
  );
}
