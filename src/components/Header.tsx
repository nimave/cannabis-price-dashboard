import Link from "next/link";
import { US_PRICES_LAST_UPDATED } from "@/lib/data/us-prices";

export function Header({ active }: { active: "rsm" | "d3" }) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <h1 className="text-lg font-semibold tracking-tight text-zinc-50">🌿 Cannabis Price Dashboard</h1>
          <span className="text-xs text-zinc-500">Updated {US_PRICES_LAST_UPDATED}</span>
        </div>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            href="/"
            className={`rounded-md px-3 py-1.5 transition ${active === "rsm" ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            react-simple-maps
          </Link>
          <Link
            href="/d3"
            className={`rounded-md px-3 py-1.5 transition ${active === "d3" ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "text-zinc-400 hover:text-zinc-200"}`}
          >
            D3
          </Link>
          <a
            href="https://github.com/nimave/cannabis-price-dashboard"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-md px-3 py-1.5 text-zinc-400 hover:text-zinc-200"
          >
            GitHub →
          </a>
        </nav>
      </div>
    </header>
  );
}
