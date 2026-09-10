export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/** Top 3 high-trust questions — placed next to pricing */
export const pricingFaqItems: FAQItem[] = [
  {
    id: "personal-data-handling",
    question: "How is my personal data handled during the audit process?",
    answer:
      "Your information is handled with executive-level confidentiality. We use only publicly available sources, authorized breach-intelligence databases, and privacy-conscious OSINT methods — never unauthorized access to your accounts or devices. All communications, intake details, and findings are shared through encrypted channels and only with parties you authorize. No credentials or device access is required for the initial audit.",
  },
  {
    id: "diagnostic-turnaround",
    question: "How fast will I receive the diagnostic breakdown?",
    answer:
      "You receive a prioritized findings summary within 48 hours of your confidential intake call. The full Executive Digital Exposure Assessment — including exposure scoring, breach findings, data-broker visibility, and a remediation action plan — is delivered within one week.",
  },
  {
    id: "broker-removal",
    question: "Do you handle data removal directly with international data brokers?",
    answer:
      "Yes. We identify your profiles across major Canadian and international data-broker networks, then provide a prioritized opt-out roadmap. Where legally permitted, we submit and facilitate removal requests on your behalf — not just guidance. Canadian privacy frameworks, including PIPEDA considerations, guide our approach for cross-border data handling.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "who-we-serve",
    question: "Is this service only for executives?",
    answer:
      "No. While we specialize in high-stakes privacy for senior leaders, the same Executive Audit, diagnostics, and Active Protection Retainer are available to families, professionals, and individuals — anyone who wants a clearer picture of their digital exposure and practical steps to reduce risk. Every engagement receives the same level of discretion and care.",
  },
  ...pricingFaqItems,
  {
    id: "deliverable",
    question: "What exactly do I receive for the $999 audit?",
    answer:
      "You receive a confidential Executive Digital Exposure Assessment including: a threat exposure score, redacted breach and credential findings, data-broker visibility report, public-record risk mapping, and a prioritized remediation action plan — all delivered in an executive-friendly format designed for immediate decision-making.",
  },
];
