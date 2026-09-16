/** Service tiers aligned with client landing-page creative */
export interface LandingTier {
  id: string;
  title: string;
  priceLabel: string;
  features: string[];
  icon: string;
  cta: string;
  href: string;
  premium?: boolean;
}

export const landingTiers: LandingTier[] = [
  {
    id: "deep-audit",
    title: "Deep Diagnostic Audit",
    priceLabel: "$999 one-time",
    features: [
      "Full Exposure & Breach History analysis",
      "Dark Web credential leak detection",
      "Data Broker profile mapping",
    ],
    icon: "fileSearch",
    cta: "Request Audit",
    href: "/contact",
  },
  {
    id: "active-retainer",
    title: "Active Continuous Retainer",
    priceLabel: "$149 / month",
    features: [
      "Persistent 24/7 dark web monitoring",
      "Automated data broker opt-outs & re-scans",
      "Personal Information Suppression across 200+ sources",
    ],
    icon: "shieldCheck",
    cta: "Explore Retainer",
    href: "/pricing",
  },
  {
    id: "corporate-cloaking",
    title: "Corporate & Legal Cloaking",
    priceLabel: "Premium Access",
    features: [
      "Address masking on corporate registries",
      "WHOIS domain privacy enforcement",
      "Public property record suppression",
    ],
    icon: "shieldAlert",
    cta: "Request Premium Access",
    href: "/contact",
    premium: true,
  },
];

export const landingAudienceLine =
  "C-Suite Directors • Business Owners • Board Members • Ultra-High-Net-Worth Individuals";
