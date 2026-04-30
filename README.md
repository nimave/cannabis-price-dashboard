# Cannabis Price Dashboard

Live wholesale cannabis price dashboard — average $/lb across US states with regulated medical or adult-use markets, plus countries actively exporting intoxicating cannabis.

Two implementations of the same dashboard:

- **`/`** — `react-simple-maps` (declarative React components for choropleth maps)
- **`/d3`** — raw **D3** + TopoJSON (imperative; React just owns the `<svg>` ref)

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `react-simple-maps`, `d3`, `topojson-client`, `recharts`
- Vercel-ready (`next start` works as-is)

## Getting started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

## Data sources

Wholesale cannabis pricing is fragmented and largely behind paid APIs (Cannabis Benchmarks, LeafLink, Headset). This dashboard aggregates the **best-available public reporting** as indicative averages — not exchange-grade quotes.

- US: Cannabis Benchmarks U.S. Spot Index, PriceOfWeed crowdsourced averages, state cannabis control board reports
- International: MJBizDaily international tracker, Prohibition Partners reports, BfArM/Health Canada/INCB filings

The data lives in `src/lib/data/`. Architecture is designed so a single env var swaps in a real-time data API later (e.g. Cannabis Benchmarks, LeafLink).

## Deploying to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo in the Vercel dashboard. No env vars required for the static-data version.

## License

MIT
