import { Link } from "@tanstack/react-router";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "#samples", label: "Samples" },
  { href: "#method", label: "Method" },
  { href: "#tools", label: "Tools" },
  { href: "#craft", label: "Craft" },
  { href: "#work", label: "Work" },
];

export function SiteNav({ book = false }: { book?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="bg-elevated text-accent flex size-8 shrink-0 items-center justify-center rounded-md font-mono text-[11px] tracking-wider">
            {profile.short}
          </span>
          <span className="truncate text-sm text-fg">
            {profile.name}
            <span className="hidden text-muted sm:inline"> · Audio</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={book ? `/${l.href}` : l.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/book">Studio book</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <a href="/Suvadeep_Mallik_Audio_Portfolio.zip" download>
              <FileDown className="size-3.5" />
              <span className={cn("hidden sm:inline")}>PDF + audio</span>
              <span className="sm:hidden">PDF</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
