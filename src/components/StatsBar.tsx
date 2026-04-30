import { formatUSD } from "@/lib/utils";
import { US_PRICES } from "@/lib/data/us-prices";
import { INTL_PRICES } from "@/lib/data/intl-prices";

export function StatsBar() {
  const usWithPrice = US_PRICES.filter((s) => s.pricePerPound !== null);
  const usMin = Math.min(...usWithPrice.map((s) => s.pricePerPound!));
  const usMax = Math.max(...usWithPrice.map((s) => s.pricePerPound!));
  const usAvg = Math.round(usWithPrice.reduce((a, s) => a + s.pricePerPound!, 0) / usWithPrice.length);

  const intlMin = Math.min(...INTL_PRICES.map((c) => c.pricePerPound));
  const intlMax = Math.max(...INTL_PRICES.map((c) => c.pricePerPound));
  const intlAvg = Math.round(INTL_PRICES.reduce((a, c) => a + c.pricePerPound, 0) / INTL_PRICES.length);

  const Card = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
      <div className="text-xs uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-zinc-100">{value}</div>
      {sub && <div className="mt-1 text-xs text-zinc-400">{sub}</div>}
    </div>
  );

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <Card label="US states tracked" value={`${usWithPrice.length}`} sub={`${US_PRICES.length - usWithPrice.length} non-legal/limited`} />
      <Card label="US avg / lb" value={formatUSD(usAvg)} sub={`${formatUSD(usMin)} – ${formatUSD(usMax)}`} />
      <Card label="Exporting countries" value={`${INTL_PRICES.length}`} sub="Active + approved exporters" />
      <Card label="Intl avg / lb" value={formatUSD(intlAvg)} sub={`${formatUSD(intlMin)} – ${formatUSD(intlMax)}`} />
    </div>
  );
}
