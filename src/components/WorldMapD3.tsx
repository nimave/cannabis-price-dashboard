"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology } from "topojson-specification";
import { INTL_PRICES, INTL_PRICES_BY_ISO3 } from "@/lib/data/intl-prices";
import { formatUSD } from "@/lib/utils";
import { PriceLegend } from "./PriceLegend";

const WORLD_TOPO = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const NUM_TO_ISO3: Record<string, string> = {
  "124": "CAN", "528": "NLD", "376": "ISR", "858": "URY", "620": "PRT",
  "426": "LSO", "170": "COL", "036": "AUS", "276": "DEU", "710": "ZAF",
  "388": "JAM", "300": "GRC", "807": "MKD", "208": "DNK", "756": "CHE",
  "764": "THA", "470": "MLT", "826": "GBR", "504": "MAR", "032": "ARG",
};

export function WorldMapD3() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [topo, setTopo] = useState<Topology | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const { min, max, scale } = useMemo(() => {
    const prices = INTL_PRICES.map((c) => c.pricePerPound);
    const lo = Math.min(...prices);
    const hi = Math.max(...prices);
    const s = d3.scaleLinear<string>().domain([lo, (lo + hi) / 2, hi]).range(["#22c55e", "#eab308", "#ef4444"]);
    return { min: lo, max: hi, scale: s };
  }, []);

  useEffect(() => {
    fetch(WORLD_TOPO).then((r) => r.json()).then(setTopo);
  }, []);

  useEffect(() => {
    if (!topo || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 960;
    const height = 500;
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const countries = topojson.feature(topo, topo.objects.countries as never) as unknown as GeoJSON.FeatureCollection;
    const projection = d3.geoEqualEarth().fitSize([width, height], countries);
    const path = d3.geoPath(projection);

    svg
      .append("g")
      .selectAll("path")
      .data(countries.features)
      .join("path")
      .attr("d", path as never)
      .attr("fill", (d) => {
        const num = String(d.id).padStart(3, "0");
        const iso3 = NUM_TO_ISO3[num];
        const c = iso3 ? INTL_PRICES_BY_ISO3[iso3] : null;
        return c ? scale(c.pricePerPound) : "#1f1f23";
      })
      .attr("stroke", "#27272a")
      .attr("stroke-width", 0.5)
      .style("cursor", (d) => (NUM_TO_ISO3[String(d.id).padStart(3, "0")] ? "pointer" : "default"))
      .on("mouseenter", function (_e, d) {
        const iso3 = NUM_TO_ISO3[String(d.id).padStart(3, "0")];
        if (!iso3) return;
        setHover(iso3);
        d3.select(this).attr("stroke", "#71717a").attr("stroke-width", 1);
      })
      .on("mouseleave", function () {
        setHover(null);
        d3.select(this).attr("stroke", "#27272a").attr("stroke-width", 0.5);
      });
  }, [topo, scale]);

  const hoverData = hover ? INTL_PRICES_BY_ISO3[hover] : null;

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
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{hoverData.exportStatus.replace("-", " ")}</div>
              <div className="mt-3 text-3xl font-bold text-zinc-50">{formatUSD(hoverData.pricePerPound)}</div>
              <div className="text-xs text-zinc-400">per pound · {formatUSD(hoverData.pricePerKg)}/kg</div>
              <div className="mt-2 text-xs text-zinc-300">{hoverData.notes}</div>
            </>
          ) : (
            <div className="mt-3 text-sm text-zinc-400">Hover an exporter country to see its average wholesale price.</div>
          )}
        </div>
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
          <PriceLegend min={min} max={max} scale={scale} />
        </div>
      </div>
    </div>
  );
}
