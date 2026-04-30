export type CountryPrice = {
  iso3: string;
  iso2: string;
  name: string;
  exportStatus: "active-exporter" | "approved-exporter" | "domestic-only";
  pricePerPound: number;
  pricePerKg: number;
  primaryProducts: string[];
  notes: string;
};

export const INTL_PRICES_LAST_UPDATED = "2026-04-29";
export const INTL_PRICES_SOURCES = [
  "MJBizDaily international wholesale tracker",
  "Prohibition Partners European Cannabis Report",
  "BfArM (Germany), Health Canada, INCB filings",
  "Industry trade press (Hanf Magazin, MJ Brand Insights)",
];

export const INTL_PRICES: CountryPrice[] = [
  { iso3: "CAN", iso2: "CA", name: "Canada", exportStatus: "active-exporter", pricePerPound: 1100, pricePerKg: 2425, primaryProducts: ["dried flower", "extracts"], notes: "Largest medical exporter; supplies Germany, Australia, Israel." },
  { iso3: "NLD", iso2: "NL", name: "Netherlands", exportStatus: "active-exporter", pricePerPound: 1450, pricePerKg: 3200, primaryProducts: ["GMP medical flower"], notes: "Bedrocan exports under government monopoly." },
  { iso3: "ISR", iso2: "IL", name: "Israel", exportStatus: "active-exporter", pricePerPound: 1250, pricePerKg: 2755, primaryProducts: ["medical flower", "extracts"], notes: "Major R&D and export hub since 2020 reforms." },
  { iso3: "URY", iso2: "UY", name: "Uruguay", exportStatus: "active-exporter", pricePerPound: 950, pricePerKg: 2095, primaryProducts: ["medical flower", "biomass"], notes: "First country to legalize adult-use; growing export sector." },
  { iso3: "PRT", iso2: "PT", name: "Portugal", exportStatus: "active-exporter", pricePerPound: 1300, pricePerKg: 2865, primaryProducts: ["GMP medical flower"], notes: "EU's fastest-growing medical exporter; Tilray, Aurora facilities." },
  { iso3: "LSO", iso2: "LS", name: "Lesotho", exportStatus: "active-exporter", pricePerPound: 700, pricePerKg: 1545, primaryProducts: ["biomass", "extracts"], notes: "First African country with medical license; low-cost producer." },
  { iso3: "COL", iso2: "CO", name: "Colombia", exportStatus: "active-exporter", pricePerPound: 600, pricePerKg: 1325, primaryProducts: ["dried flower", "extracts"], notes: "Equatorial climate, lowest-cost producer of THC flower at scale." },
  { iso3: "AUS", iso2: "AU", name: "Australia", exportStatus: "active-exporter", pricePerPound: 1500, pricePerKg: 3305, primaryProducts: ["medical flower", "oils"], notes: "Office of Drug Control oversees medical exports." },
  { iso3: "DEU", iso2: "DE", name: "Germany", exportStatus: "approved-exporter", pricePerPound: 1900, pricePerKg: 4190, primaryProducts: ["medical flower"], notes: "Adult-use legal 2024; domestic cultivation now exporting limited volumes." },
  { iso3: "ZAF", iso2: "ZA", name: "South Africa", exportStatus: "active-exporter", pricePerPound: 750, pricePerKg: 1655, primaryProducts: ["biomass", "extracts"], notes: "SAHPRA-licensed exporters; favorable growing climate." },
  { iso3: "JAM", iso2: "JM", name: "Jamaica", exportStatus: "approved-exporter", pricePerPound: 1050, pricePerKg: 2315, primaryProducts: ["medical flower"], notes: "Cannabis Licensing Authority; export framework operational." },
  { iso3: "GRC", iso2: "GR", name: "Greece", exportStatus: "approved-exporter", pricePerPound: 1400, pricePerKg: 3085, primaryProducts: ["GMP medical flower"], notes: "Several large GMP facilities licensed for EU export." },
  { iso3: "MKD", iso2: "MK", name: "North Macedonia", exportStatus: "active-exporter", pricePerPound: 1350, pricePerKg: 2975, primaryProducts: ["medical flower", "extracts"], notes: "Early-mover in EU; supplies Germany, UK markets." },
  { iso3: "DNK", iso2: "DK", name: "Denmark", exportStatus: "active-exporter", pricePerPound: 1550, pricePerKg: 3415, primaryProducts: ["medical flower"], notes: "Pilot program; multiple licensed cultivators." },
  { iso3: "CHE", iso2: "CH", name: "Switzerland", exportStatus: "approved-exporter", pricePerPound: 1700, pricePerKg: 3745, primaryProducts: ["medical flower"], notes: "Adult-use pilot trials; medical export framework." },
  { iso3: "THA", iso2: "TH", name: "Thailand", exportStatus: "approved-exporter", pricePerPound: 850, pricePerKg: 1875, primaryProducts: ["dried flower", "biomass"], notes: "Post-2022 decriminalization; export rules tightened in 2024." },
  { iso3: "MLT", iso2: "MT", name: "Malta", exportStatus: "approved-exporter", pricePerPound: 1450, pricePerKg: 3200, primaryProducts: ["GMP medical products"], notes: "EU's first adult-use legalizer; medical export hub." },
  { iso3: "GBR", iso2: "GB", name: "United Kingdom", exportStatus: "approved-exporter", pricePerPound: 1800, pricePerKg: 3970, primaryProducts: ["medical flower", "research"], notes: "GW/Jazz historical exports; tightly regulated." },
  { iso3: "MAR", iso2: "MA", name: "Morocco", exportStatus: "approved-exporter", pricePerPound: 650, pricePerKg: 1435, primaryProducts: ["medical extracts"], notes: "Legalized medical/industrial 2021; first exports 2024." },
  { iso3: "ARG", iso2: "AR", name: "Argentina", exportStatus: "approved-exporter", pricePerPound: 900, pricePerKg: 1985, primaryProducts: ["medical extracts"], notes: "REPROCANN program; emerging export sector." },
];

export const INTL_PRICES_BY_ISO3 = Object.fromEntries(
  INTL_PRICES.map((c) => [c.iso3, c])
);
