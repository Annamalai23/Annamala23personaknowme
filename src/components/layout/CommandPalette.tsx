import { Modal } from "@/components/ds/Modal";
import { useAppStore } from "@/lib/store";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, FileText, Home, User, Mail } from "lucide-react";
import { Icon } from "@/components/ds/Icon";

const items = [
  { label: "Home", path: "/", icon: Home },
  { label: "Writing", path: "/writing", icon: FileText },
  { label: "Background", path: "/journey", icon: User },
  { label: "Contact", path: "/contact", icon: Mail },
];

export function CommandPalette() {
  const open = useAppStore((s) => s.commandPaletteOpen);
  const setOpen = useAppStore((s) => s.setCommandPaletteOpen);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <Modal open={open} onClose={() => setOpen(false)} title="COMMAND_PALETTE.MD">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Icon icon={Search} size="sm" className="text-muted-foreground" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command or page..."
          className="flex-1 bg-transparent outline-none font-mono text-sm"
        />
      </div>
      <ul className="mt-3 space-y-1">
        {filtered.map((it) => (
          <li key={it.path}>
            <button
              onClick={() => {
                setOpen(false);
                navigate({ to: it.path });
              }}
              className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left font-mono text-sm hover:bg-secondary"
            >
              <Icon icon={it.icon} size="sm" className="text-muted-foreground" />
              {it.label}
              <span className="ml-auto text-xs text-muted-foreground">{it.path}</span>
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
