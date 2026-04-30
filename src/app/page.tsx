import { Header } from "@/components/Header";
import { StatsBar } from "@/components/StatsBar";
import { USMapRSM } from "@/components/USMapRSM";
import { WorldMapRSM } from "@/components/WorldMapRSM";
import { PriceTable } from "@/components/PriceTable";
import { SourcesFooter } from "@/components/SourcesFooter";
import { TopMoversChart } from "@/components/TopMoversChart";

export default function Home() {
  return (
    <>
      <Header active="rsm" />
      <main className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-6 py-8">
        <section>
          <p className="max-w-3xl text-sm text-zinc-400">
            Average wholesale price per pound across US states with regulated medical or adult-use markets, plus countries actively
            exporting intoxicating cannabis. Hover any region for detail.
          </p>
        </section>

        <StatsBar />

        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-zinc-100">United States</h2>
            <span className="text-xs text-zinc-500">Wholesale flower, $/lb</span>
          </div>
          <USMapRSM />
        </section>

        <section className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-semibold text-zinc-100">Global exporters</h2>
            <span className="text-xs text-zinc-500">Wholesale flower, $/lb</span>
          </div>
          <WorldMapRSM />
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
