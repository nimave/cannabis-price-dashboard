import { US_PRICES_SOURCES, US_PRICES_LAST_UPDATED } from "@/lib/data/us-prices";
import { INTL_PRICES_SOURCES, INTL_PRICES_LAST_UPDATED } from "@/lib/data/intl-prices";

export function SourcesFooter() {
  return (
    <footer className="mt-12 rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 text-xs text-zinc-400">
      <div className="mb-2 font-semibold uppercase tracking-wider text-zinc-300">Data sources & caveats</div>
      <p className="mb-3 text-zinc-400">
        Wholesale cannabis pricing is fragmented and largely behind paid APIs (Cannabis Benchmarks, LeafLink, Headset). This dashboard
        aggregates the best-available public reporting. Numbers are <em>indicative averages</em>, not exchange-grade quotes. Architecture is
        designed so a single env var swaps in a real-time data API later.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="font-medium text-zinc-300">US ({US_PRICES_LAST_UPDATED})</div>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            {US_PRICES_SOURCES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <div className="font-medium text-zinc-300">International ({INTL_PRICES_LAST_UPDATED})</div>
          <ul className="mt-1 list-disc space-y-0.5 pl-5">
            {INTL_PRICES_SOURCES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
