"use client";

import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { US_PRICES_BY_FIPS, US_PRICES } from "@/lib/data/us-prices";
import { formatUSD, formatPct } from "@/lib/utils";
import { PriceLegend } from "./PriceLegend";

const US_TOPO = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export function USMapRSM() {
  const [hover, setHover] = useState<string | null>(null);

  const { min, max, scale } = useMemo(() => {
    const prices = US_PRICES.map((s) => s.pricePerPound).filter((p): p is number => p !== null);
    const lo = Math.min(...prices);
    const hi = Math.max(...prices);
    const s = scaleLinear<string>().domain([lo, (lo + hi) / 2, hi]).range(["#22c55e", "#eab308", "#ef4444"]);
    return { min: lo, max: hi, scale: s };
  }, []);

  const hoverData = hover ? US_PRICES_BY_FIPS[hover] : null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
        <ComposableMap projection="geoAlbersUsa" projectionConfig={{ scale: 1000 }} style={{ width: "100%", height: "auto" }}>
          <Geographies geography={US_TOPO}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const fips = String(geo.id).padStart(2, "0");
                const state = US_PRICES_BY_FIPS[fips];
                const fill = state?.pricePerPound ? scale(state.pricePerPound) : "#1f1f23";
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHover(fips)}
                    onMouseLeave={() => setHover(null)}
                    style={{
                      default: { fill, outline: "none", stroke: "#27272a", strokeWidth: 0.5 },
                      hover: { fill: "#fff", outline: "none", stroke: "#71717a", strokeWidth: 1 },
                      pressed: { fill, outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 min-h-[180px]">
          <div className="text-xs uppercase tracking-wider text-zinc-500">Selected</div>
          {hoverData ? (
            <>
              <div className="mt-1 text-xl font-semibold text-zinc-100">{hoverData.name}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{hoverData.legalStatus}</div>
              {hoverData.pricePerPound !== null ? (
                <>
                  <div className="mt-3 text-3xl font-bold text-zinc-50">{formatUSD(hoverData.pricePerPound)}</div>
                  <div className="text-xs text-zinc-400">per pound · {formatUSD(hoverData.pricePerOunce!)}/oz</div>
                  <div className={`mt-2 text-sm ${hoverData.changePct < 0 ? "text-emerald-400" : hoverData.changePct > 0 ? "text-red-400" : "text-zinc-400"}`}>
                    {formatPct(hoverData.changePct)} 30-day
                  </div>
                </>
              ) : (
                <div className="mt-3 text-sm text-zinc-400">No regulated market data.</div>
              )}
            </>
          ) : (
            <div className="mt-3 text-sm text-zinc-400">Hover a state to see its average wholesale price per pound.</div>
          )}
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <PriceLegend min={min} max={max} scale={scale} />
        </div>
      </div>
    </div>
  );
}
