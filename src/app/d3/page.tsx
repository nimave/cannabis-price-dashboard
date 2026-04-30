import { Header } from "@/components/Header";
import { StatsBar } from "@/components/StatsBar";
import { USMapD3 } from "@/components/USMapD3";
import { WorldMapD3 } from "@/components/WorldMapD3";
import { PriceTable } from "@/components/PriceTable";
import { SourcesFooter } from "@/components/SourcesFooter";
import { TopMoversChart } from "@/components/TopMoversChart";

export default function D3Page() {
  return (
    <>
      <Header active="d3" />
      <main className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-6 py-8">
        <section>
          <p className="max-w-3xl text-sm text-zinc-400">
            Same data, rendered with raw <span className="text-emerald-400">D3</span> + TopoJSON instead of react-simple-maps. The
            React component just owns the <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs">&lt;svg&gt;</code> ref; D3 paints
            and binds events directly.
          </p>
        </section>

        <StatsBar />

        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-zinc-100">United States <span className="text-xs font-normal text-zinc-500">(D3)</span></h2>
            <span className="text-xs text-zinc-500">Wholesale flower, $/lb</span>
          </div>
          <USMapD3 />
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-zinc-100">Global exporters <span className="text-xs font-normal text-zinc-500">(D3)</span></h2>
            <span className="text-xs text-zinc-500">Wholesale flower, $/lb</span>
          </div>
          <WorldMapD3 />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">US states ranked</h2>
          <TopMoversChart />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-100">Sorted by price</h2>
          <PriceTable />
        </section>

        <SourcesFooter />
      </main>
    </>
  );
}
