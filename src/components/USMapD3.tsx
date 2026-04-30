"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology } from "topojson-specification";
import { US_PRICES, US_PRICES_BY_FIPS } from "@/lib/data/us-prices";
import { formatUSD, formatPct } from "@/lib/utils";
import { PriceLegend } from "./PriceLegend";

const US_TOPO = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export function USMapD3() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [topo, setTopo] = useState<Topology | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const { min, max, scale } = useMemo(() => {
    const prices = US_PRICES.map((s) => s.pricePerPound).filter((p): p is number => p !== null);
    const lo = Math.min(...prices);
    const hi = Math.max(...prices);
    const s = d3.scaleLinear<string>().domain([lo, (lo + hi) / 2, hi]).range(["#22c55e", "#eab308", "#ef4444"]);
    return { min: lo, max: hi, scale: s };
  }, []);

  useEffect(() => {
    fetch(US_TOPO).then((r) => r.json()).then(setTopo);
  }, []);

  useEffect(() => {
    if (!topo || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 975;
    const height = 610;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const states = topojson.feature(topo, topo.objects.states as never) as unknown as GeoJSON.FeatureCollection;
    const path = d3.geoPath();

    svg
      .append("g")
      .selectAll("path")
      .data(states.features)
      .join("path")
      .attr("d", path as never)
      .attr("fill", (d) => {
        const fips = String(d.id).padStart(2, "0");
        const s = US_PRICES_BY_FIPS[fips];
        return s?.pricePerPound ? scale(s.pricePerPound) : "#1f1f23";
      })
      .attr("stroke", "#27272a")
      .attr("stroke-width", 0.5)
      .style("cursor", "pointer")
      .on("mouseenter", function (_e, d) {
        const fips = String(d.id).padStart(2, "0");
        setHover(fips);
        d3.select(this).attr("stroke", "#71717a").attr("stroke-width", 1);
      })
      .on("mouseleave", function () {
        setHover(null);
        d3.select(this).attr("stroke", "#27272a").attr("stroke-width", 0.5);
      });
  }, [topo, scale]);

  const hoverData = hover ? US_PRICES_BY_FIPS[hover] : null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
        <svg ref={svgRef} className="w-full h-auto" />
      </div>
      <div className="space-y-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4 min-h-[180px]">
          <div className="text-xs uppercase tracking-wider text-zinc-500">Selected (D3)</div>
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
