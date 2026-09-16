export const auditPricing = {
  name: "Deep Diagnostic Audit",
  regularPrice: 1899,
  limitedPrice: 999,
  period: "one-time",
  badge: "Limited-Time Offer",
  features: [
    "Full Exposure & Breach History analysis",
    "Dark Web credential leak detection",
    "Data Broker profile mapping",
    "Initial confidential consultation",
    "Prioritized remediation roadmap",
    "Executive findings summary",
  ],
  homeFeatures: [
    "Full Exposure & Breach History analysis",
    "Dark Web credential leak detection",
    "Data Broker profile mapping",
    "Confidential findings summary",
  ],
  cta: "Request Confidential Audit",
  homeCta: "Request Your Audit",
};

export const retainerPricing = {
  name: "Active Continuous Retainer",
  price: 149,
  period: "month",
  features: [
    "Persistent 24/7 dark web monitoring",
    "Automated data broker opt-outs & re-scans",
    "Personal Information Suppression across 200+ sources",
    "Ongoing remediation guidance",
    "Executive privacy support",
    "Updated priority recommendations",
  ],
  homeFeatures: [
    "Persistent 24/7 dark web monitoring",
    "Automated data broker opt-outs & re-scans",
    "Personal Information Suppression across 200+ sources",
    "Executive-focused guidance",
  ],
  cta: "Discuss Active Protection",
  homeCta: "Explore Active Protection",
};

export const comparisonRows = [
  {
    feature: "Engagement type",
    audit: "One-time diagnostic",
    retainer: "Monthly retainer",
  },
  {
    feature: "Best suited for",
    audit: "Initial exposure discovery",
    retainer: "Ongoing executive privacy",
  },
  {
    feature: "Initial exposure review",
    audit: true,
    retainer: true,
  },
  {
    feature: "Action plan",
    audit: true,
    retainer: true,
  },
  {
    feature: "Ongoing monitoring",
    audit: false,
    retainer: true,
  },
  {
    feature: "Recurring privacy review",
    audit: false,
    retainer: true,
  },
  {
    feature: "Monthly support",
    audit: false,
    retainer: true,
  },
  {
    feature: "Investment",
    audit: "$999 one-time*",
    retainer: "$149/month",
  },
] as const;

export const cloakPricing = {
  name: "Corporate & Legal Cloaking",
  priceLabel: "Premium Access",
  features: [
    "Address masking on corporate registries",
    "WHOIS domain privacy enforcement",
    "Public property record suppression",
    "Confidential scoping consultation",
    "Tailored legal & registry coordination",
  ],
  homeFeatures: [
    "Address masking on corporate registries",
    "WHOIS domain privacy enforcement",
    "Public property record suppression",
  ],
  cta: "Request Premium Access",
  homeCta: "Request Premium Access",
};
