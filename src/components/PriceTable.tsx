"use client";

import { useState } from "react";
import { US_PRICES } from "@/lib/data/us-prices";
import { INTL_PRICES } from "@/lib/data/intl-prices";
import { formatUSD, formatPct } from "@/lib/utils";

type Tab = "us" | "intl";

export function PriceTable() {
  const [tab, setTab] = useState<Tab>("us");

  const usSorted = [...US_PRICES]
    .filter((s) => s.pricePerPound !== null)
    .sort((a, b) => (a.pricePerPound! - b.pricePerPound!));

  const intlSorted = [...INTL_PRICES].sort((a, b) => a.pricePerPound - b.pricePerPound);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/40">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <button
          onClick={() => setTab("us")}
          className={`rounded-md px-3 py-1.5 text-sm transition ${tab === "us" ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "text-zinc-400 hover:text-zinc-200"}`}
        >
          US states ({usSorted.length})
        </button>
        <button
          onClick={() => setTab("intl")}
          className={`rounded-md px-3 py-1.5 text-sm transition ${tab === "intl" ? "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40" : "text-zinc-400 hover:text-zinc-200"}`}
        >
          Exporting countries ({intlSorted.length})
        </button>
      </div>
      <div className="overflow-x-auto">
        {tab === "us" ? (
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-wider text-zinc-500">
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-2 text-left">State</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-right">$/lb</th>
                <th className="px-4 py-2 text-right">$/oz</th>
                <th className="px-4 py-2 text-right">30d</th>
              </tr>
            </thead>
            <tbody>
              {usSorted.map((s) => (
                <tr key={s.fips} className="border-b border-zinc-900/60 last:border-0 hover:bg-zinc-900/40">
                  <td className="px-4 py-2 text-zinc-200">{s.name}</td>
                  <td className="px-4 py-2 text-xs text-zinc-400">{s.legalStatus}</td>
                  <td className="px-4 py-2 text-right font-mono text-zinc-100">{formatUSD(s.pricePerPound)}</td>
                  <td className="px-4 py-2 text-right font-mono text-zinc-400">{formatUSD(s.pricePerOunce)}</td>
                  <td className={`px-4 py-2 text-right font-mono ${s.changePct < 0 ? "text-emerald-400" : s.changePct > 0 ? "text-red-400" : "text-zinc-500"}`}>
                    {formatPct(s.changePct)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-wider text-zinc-500">
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-2 text-left">Country</th>
                <th className="px-4 py-2 text-left">Export status</th>
                <th className="px-4 py-2 text-right">$/lb</th>
                <th className="px-4 py-2 text-right">$/kg</th>
              </tr>
            </thead>
            <tbody>
              {intlSorted.map((c) => (
                <tr key={c.iso3} className="border-b border-zinc-900/60 last:border-0 hover:bg-zinc-900/40">
                  <td className="px-4 py-2 text-zinc-200">{c.name}</td>
                  <td className="px-4 py-2 text-xs text-zinc-400">{c.exportStatus.replace("-", " ")}</td>
                  <td className="px-4 py-2 text-right font-mono text-zinc-100">{formatUSD(c.pricePerPound)}</td>
                  <td className="px-4 py-2 text-right font-mono text-zinc-400">{formatUSD(c.pricePerKg)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
