import { Link } from "@tanstack/react-router";

interface Props {
  href: string;
  label: string;
}

export function NavLink({ href, label }: Props) {
  return (
    <Link
      to={href}
      className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
      activeProps={{ className: "text-foreground font-semibold border-b-2 border-[color:var(--brand-secondary)]" }}
      activeOptions={{ exact: href === "/" }}
    >
      {label}
    </Link>
  );
}
