export interface ServiceItem {
  slug: string;
  label: string;
}

export interface Discipline {
  id: string;
  title: string;
  services: ServiceItem[];
}

export const DISCIPLINES: Discipline[] = [
  {
    id: "blockchain",
    title: "Blockchain Development",
    services: [
      { slug: "smart-contract-audit", label: "Smart Contract Audit & Formal Verification" },
      { slug: "dapp-development", label: "Scalable dApp Front-End & Subgraph Indexing" },
      { slug: "wallets-account-abstraction", label: "Non-Custodial Wallets & Account Abstraction" },
      { slug: "token-launch", label: "Token Launch Support & On-Chain Infrastructure" },
    ],
  },
  {
    id: "ai",
    title: "AI Development",
    services: [
      { slug: "workflow-automation", label: "AI Workflow Automation & Agent Networks for Business Ops" },
      { slug: "rag-chatbots", label: "Enterprise RAG Chatbots for Internal Knowledge Search" },
      { slug: "predictive-ml", label: "Predictive Machine Learning for Growth & Forecasting" },
      { slug: "ai-mobile-experiences", label: "AI-Native Web & Mobile Apps for Smarter User Experiences" },
      { slug: "private-llms", label: "Private Fine-Tuned LLMs for Secure Knowledge Work" },
    ],
  },
  {
    id: "web",
    title: "Web & App Development",
    services: [
      { slug: "custom-app-development", label: "Custom App Development for Startups & Enterprises" },
      { slug: "scalable-web", label: "Scalable Web Development & SaaS Product Design" },
      { slug: "ux-design-systems", label: "UX/UI Design Systems for Conversion-Focused Products" },
      { slug: "responsive-experiences", label: "Responsive Mobile & Cross-Device Product Experiences" },
      { slug: "commerce-platforms", label: "Shopify, WooCommerce & E-Commerce Platform Solutions" },
      { slug: "maintenance-optimization", label: "Ongoing Maintenance, Optimization & Product Support" },
      { slug: "seo-growth", label: "SEO Optimization for Performance & Growth" },
    ],
  },
];
