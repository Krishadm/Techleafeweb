import CaseStudyDetail, { type CaseStudyDetailData } from "./Casestudydetail";
const crabCoinData: CaseStudyDetailData = {
  backHref: "/portfolio#case-studies",
  eyebrow: "Web3 & Blockchain Case Study",
  title: "Crab Coin",
  headline: "Engineering a Blazingly Fast Solana Token Ecosystem",
  intro:
    "How Tech Leafe designed and developed Crab Coin's secure, scalable, and production-ready infrastructure on Solana.",
  meta: [
    { label: "Client", value: "Crab Coin" },
    { label: "Industry", value: "Blockchain / Web3" },
    { label: "Blockchain", value: "Solana" },
    { label: "Services", value: "Token & Smart Contract Development" },
  ],
  overview:
    "Crab Coin is a Solana-based token built to deliver fast, low-cost, and reliable transactions at scale. Tech Leafe partnered with the Crab Coin team as the development agency behind the project, handling architecture, smart contract engineering, and infrastructure — turning an early concept into a production-ready Solana ecosystem.",
  challengeLabel: "Crab Coin needed a Solana token development partner capable of delivering:",
  challenge: [
    "High-throughput, low-latency transactions using Solana's native architecture",
    "A credible, professionally engineered alternative to low-effort meme coin launches",
    "Secure, audit-ready smart contracts built for long-term reliability",
    "A scalable foundation to support future utility, staking, and ecosystem growth",
  ],
  approachLabel: "Our Solana Development Approach",
  approach: [
    {
      title: "Smart Contract Development",
      description:
        "Secure, gas-efficient contracts built natively for Solana using Rust and Anchor.",
    },
    {
      title: "Performance Optimization",
      description:
        "Architecture tuned to fully leverage Solana's high transactions-per-second (TPS) throughput.",
    },
    {
      title: "Security-First Engineering",
      description:
        "Code reviewed and structured to reduce vulnerabilities before mainnet launch.",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Built to support future features rather than a single-use token deployment.",
    },
  ],
  result:
    "Crab Coin launched as a fully functional Solana token with dependable transaction speed and a development foundation engineered for longevity — not just a quick token launch.",
  techStack: [
    { layer: "Blockchain", technology: "Solana" },
    { layer: "Smart Contracts", technology: "Rust / Anchor" },
    { layer: "Token Standard", technology: "SPL Token" },
    { layer: "Frontend", technology: "React / Next.js" },
    { layer: "Wallet Integration", technology: "Phantom / Solflare" },
  ],
  services: [
    "Solana Token Development",
    "Smart Contract Engineering",
    "Web3 Ecosystem Architecture",
    "Blockchain Consulting",
  ],
  ctaHeadline: "Need a Solana Development Partner?",
  ctaText:
    "Tech Leafe builds blazingly fast, production-ready token ecosystems on Solana — from smart contracts to full-scale launch.",
  ctaHref: "/#contact",
};

export default function CrabCoinPage() {
  return <CaseStudyDetail data={crabCoinData} />;
}