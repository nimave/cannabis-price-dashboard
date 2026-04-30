"use client";

import { formatUSD } from "@/lib/utils";

type Props = {
  min: number;
  max: number;
  steps?: number;
  scale: (v: number) => string;
  label?: string;
};

export function PriceLegend({ min, max, steps = 6, scale, label = "Price per pound (USD)" }: Props) {
  const stops = Array.from({ length: steps }, (_, i) => min + ((max - min) * i) / (steps - 1));
  return (
    <div className="flex flex-col gap-2 text-xs text-zinc-300">
      <div className="font-medium text-zinc-200">{label}</div>
      <div className="flex h-3 w-full overflow-hidden rounded-sm border border-zinc-800">
        {stops.map((v, i) => (
          <div key={i} className="flex-1" style={{ background: scale(v) }} />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-zinc-400">
        <span>{formatUSD(min)}</span>
        <span>{formatUSD(max)}</span>
      </div>
    </div>
  );
}
