"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { US_PRICES } from "@/lib/data/us-prices";
import { formatUSD } from "@/lib/utils";

export function TopMoversChart() {
  const data = US_PRICES
    .filter((s) => s.pricePerPound !== null)
    .slice()
    .sort((a, b) => a.pricePerPound! - b.pricePerPound!)
    .map((s) => ({ name: s.abbr, price: s.pricePerPound! }));

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
      <div className="mb-3 text-sm font-medium text-zinc-200">US wholesale price per pound — by state (sorted)</div>
      <div className="h-[300px]">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 10 }} interval={0} angle={-45} textAnchor="end" height={50} />
            <YAxis stroke="#71717a" tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`} />
            <Tooltip
              contentStyle={{ background: "#0a0a0a", border: "1px solid #27272a", borderRadius: 8, fontSize: 12 }}
              formatter={(v: number) => [formatUSD(v), "Price/lb"]}
            />
            <Bar dataKey="price" fill="#10b981" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
