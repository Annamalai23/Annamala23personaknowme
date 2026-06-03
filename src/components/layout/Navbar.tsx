import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/ds/NavLink";
import { Kbd } from "@/components/ds/Kbd";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/journey", label: "Background" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const setOpen = useAppStore((s) => s.setCommandPaletteOpen);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="font-mono text-sm font-semibold text-foreground">
          Annamalai R
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open command palette"
            className="ml-2"
          >
            <Kbd>⌘ K</Kbd>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary/60 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <div className="flex h-full flex-col">
              <div className="border-b border-border px-6 py-5">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  // navigation
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground">Annamalai R</p>
              </div>
              <nav className="flex-1 px-3 py-4">
                {navItems.map((item) => {
                  const active = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2.5 font-mono text-sm transition-colors",
                        active
                          ? "bg-secondary/60 text-foreground"
                          : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="border-t border-border px-6 py-4">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setOpen(true);
                  }}
                  className="flex w-full items-center justify-between font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Command palette</span>
                  <Kbd>⌘ K</Kbd>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
