export type USStatePrice = {
  fips: string;
  abbr: string;
  name: string;
  legalStatus: "adult-use" | "medical" | "limited" | "illegal";
  pricePerPound: number | null;
  pricePerOunce: number | null;
  trend: "up" | "down" | "flat";
  changePct: number;
};

export const US_PRICES_LAST_UPDATED = "2026-04-29";
export const US_PRICES_SOURCES = [
  "Cannabis Benchmarks U.S. Spot Index (weekly)",
  "PriceOfWeed crowdsourced averages",
  "State cannabis control board public reports",
];

export const US_PRICES: USStatePrice[] = [
  { fips: "01", abbr: "AL", name: "Alabama", legalStatus: "medical", pricePerPound: 2950, pricePerOunce: 320, trend: "flat", changePct: 0.4 },
  { fips: "02", abbr: "AK", name: "Alaska", legalStatus: "adult-use", pricePerPound: 2100, pricePerOunce: 240, trend: "down", changePct: -3.1 },
  { fips: "04", abbr: "AZ", name: "Arizona", legalStatus: "adult-use", pricePerPound: 1450, pricePerOunce: 180, trend: "down", changePct: -2.0 },
  { fips: "05", abbr: "AR", name: "Arkansas", legalStatus: "medical", pricePerPound: 2400, pricePerOunce: 290, trend: "down", changePct: -1.5 },
  { fips: "06", abbr: "CA", name: "California", legalStatus: "adult-use", pricePerPound: 950, pricePerOunce: 140, trend: "down", changePct: -4.2 },
  { fips: "08", abbr: "CO", name: "Colorado", legalStatus: "adult-use", pricePerPound: 1050, pricePerOunce: 150, trend: "down", changePct: -3.5 },
  { fips: "09", abbr: "CT", name: "Connecticut", legalStatus: "adult-use", pricePerPound: 2700, pricePerOunce: 305, trend: "flat", changePct: 0.2 },
  { fips: "10", abbr: "DE", name: "Delaware", legalStatus: "medical", pricePerPound: 2850, pricePerOunce: 315, trend: "up", changePct: 1.2 },
  { fips: "11", abbr: "DC", name: "District of Columbia", legalStatus: "adult-use", pricePerPound: 2600, pricePerOunce: 295, trend: "flat", changePct: -0.3 },
  { fips: "12", abbr: "FL", name: "Florida", legalStatus: "medical", pricePerPound: 2350, pricePerOunce: 280, trend: "down", changePct: -1.8 },
  { fips: "13", abbr: "GA", name: "Georgia", legalStatus: "limited", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "15", abbr: "HI", name: "Hawaii", legalStatus: "medical", pricePerPound: 3100, pricePerOunce: 340, trend: "flat", changePct: 0.5 },
  { fips: "16", abbr: "ID", name: "Idaho", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "17", abbr: "IL", name: "Illinois", legalStatus: "adult-use", pricePerPound: 2250, pricePerOunce: 270, trend: "down", changePct: -1.2 },
  { fips: "18", abbr: "IN", name: "Indiana", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "19", abbr: "IA", name: "Iowa", legalStatus: "limited", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "20", abbr: "KS", name: "Kansas", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "21", abbr: "KY", name: "Kentucky", legalStatus: "limited", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "22", abbr: "LA", name: "Louisiana", legalStatus: "medical", pricePerPound: 2800, pricePerOunce: 310, trend: "flat", changePct: 0.1 },
  { fips: "23", abbr: "ME", name: "Maine", legalStatus: "adult-use", pricePerPound: 1750, pricePerOunce: 215, trend: "down", changePct: -2.4 },
  { fips: "24", abbr: "MD", name: "Maryland", legalStatus: "adult-use", pricePerPound: 2450, pricePerOunce: 285, trend: "down", changePct: -1.0 },
  { fips: "25", abbr: "MA", name: "Massachusetts", legalStatus: "adult-use", pricePerPound: 1950, pricePerOunce: 235, trend: "down", changePct: -2.1 },
  { fips: "26", abbr: "MI", name: "Michigan", legalStatus: "adult-use", pricePerPound: 800, pricePerOunce: 130, trend: "down", changePct: -5.3 },
  { fips: "27", abbr: "MN", name: "Minnesota", legalStatus: "adult-use", pricePerPound: 2300, pricePerOunce: 275, trend: "up", changePct: 0.8 },
  { fips: "28", abbr: "MS", name: "Mississippi", legalStatus: "medical", pricePerPound: 2950, pricePerOunce: 325, trend: "down", changePct: -0.9 },
  { fips: "29", abbr: "MO", name: "Missouri", legalStatus: "adult-use", pricePerPound: 1600, pricePerOunce: 195, trend: "down", changePct: -2.7 },
  { fips: "30", abbr: "MT", name: "Montana", legalStatus: "adult-use", pricePerPound: 1850, pricePerOunce: 220, trend: "flat", changePct: -0.5 },
  { fips: "31", abbr: "NE", name: "Nebraska", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "32", abbr: "NV", name: "Nevada", legalStatus: "adult-use", pricePerPound: 1700, pricePerOunce: 205, trend: "down", changePct: -1.6 },
  { fips: "33", abbr: "NH", name: "New Hampshire", legalStatus: "medical", pricePerPound: 2750, pricePerOunce: 310, trend: "flat", changePct: 0.3 },
  { fips: "34", abbr: "NJ", name: "New Jersey", legalStatus: "adult-use", pricePerPound: 2550, pricePerOunce: 295, trend: "down", changePct: -0.7 },
  { fips: "35", abbr: "NM", name: "New Mexico", legalStatus: "adult-use", pricePerPound: 1500, pricePerOunce: 185, trend: "down", changePct: -2.8 },
  { fips: "36", abbr: "NY", name: "New York", legalStatus: "adult-use", pricePerPound: 2100, pricePerOunce: 250, trend: "down", changePct: -1.4 },
  { fips: "37", abbr: "NC", name: "North Carolina", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "38", abbr: "ND", name: "North Dakota", legalStatus: "medical", pricePerPound: 2900, pricePerOunce: 325, trend: "flat", changePct: 0.2 },
  { fips: "39", abbr: "OH", name: "Ohio", legalStatus: "adult-use", pricePerPound: 2200, pricePerOunce: 265, trend: "down", changePct: -1.1 },
  { fips: "40", abbr: "OK", name: "Oklahoma", legalStatus: "medical", pricePerPound: 900, pricePerOunce: 140, trend: "down", changePct: -4.8 },
  { fips: "41", abbr: "OR", name: "Oregon", legalStatus: "adult-use", pricePerPound: 750, pricePerOunce: 120, trend: "down", changePct: -5.6 },
  { fips: "42", abbr: "PA", name: "Pennsylvania", legalStatus: "medical", pricePerPound: 2650, pricePerOunce: 300, trend: "flat", changePct: -0.2 },
  { fips: "44", abbr: "RI", name: "Rhode Island", legalStatus: "adult-use", pricePerPound: 2500, pricePerOunce: 290, trend: "down", changePct: -0.8 },
  { fips: "45", abbr: "SC", name: "South Carolina", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "46", abbr: "SD", name: "South Dakota", legalStatus: "medical", pricePerPound: 2950, pricePerOunce: 325, trend: "up", changePct: 0.6 },
  { fips: "47", abbr: "TN", name: "Tennessee", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "48", abbr: "TX", name: "Texas", legalStatus: "limited", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "49", abbr: "UT", name: "Utah", legalStatus: "medical", pricePerPound: 2700, pricePerOunce: 305, trend: "flat", changePct: 0.1 },
  { fips: "50", abbr: "VT", name: "Vermont", legalStatus: "adult-use", pricePerPound: 2200, pricePerOunce: 260, trend: "down", changePct: -1.3 },
  { fips: "51", abbr: "VA", name: "Virginia", legalStatus: "medical", pricePerPound: 2600, pricePerOunce: 295, trend: "flat", changePct: -0.4 },
  { fips: "53", abbr: "WA", name: "Washington", legalStatus: "adult-use", pricePerPound: 850, pricePerOunce: 135, trend: "down", changePct: -4.5 },
  { fips: "54", abbr: "WV", name: "West Virginia", legalStatus: "medical", pricePerPound: 2850, pricePerOunce: 320, trend: "up", changePct: 0.5 },
  { fips: "55", abbr: "WI", name: "Wisconsin", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
  { fips: "56", abbr: "WY", name: "Wyoming", legalStatus: "illegal", pricePerPound: null, pricePerOunce: null, trend: "flat", changePct: 0 },
];

export const US_PRICES_BY_FIPS = Object.fromEntries(
  US_PRICES.map((s) => [s.fips, s])
);
