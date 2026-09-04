import CaseStudyDetail, { type CaseStudyDetailData } from "./Casestudydetail";

const rockWalletData: CaseStudyDetailData = {
  backHref: "/portfolio#case-studies",
  eyebrow: "Web3 & Blockchain Case Study",
  title: "Rock Wallet",
  headline: "Building a Secure, Non-Custodial Crypto Wallet with Seamless UX",
  intro:
    "How Tech Leafe delivered full-stack Web3 development for RockWallet — from wallet architecture to on-chain integrations.",
  meta: [
    { label: "Client", value: "Rock Wallet" },
    { label: "Industry", value: "Web3 / Crypto Wallets" },
    { label: "Blockchain", value: "Solana" },
    { label: "Services", value: "Wallet Architecture & Development" },
  ],
  overview:
    "RockWallet needed users to stay in full control of their assets without crypto feeling intimidating. Tech Leafe partnered with the RockWallet team as an ongoing development partner — not a one-off build — handling wallet architecture, on-chain integrations, and the full-stack Web3 and blockchain development behind the product.",
  challengeLabel: "RockWallet needed a development partner capable of delivering:",
  challenge: [
    "A non-custodial wallet architecture that keeps users in full control of their assets",
    "High-speed Solana dApp integration without compromising reliability",
    "Enterprise-grade security applied across every layer of the wallet",
    "A simple, approachable interface for non-technical, everyday users",
  ],
  approachLabel: "Our Wallet Development Approach",
  approach: [
    {
      title: "Non-Custodial Architecture",
      description:
        "Wallet infrastructure engineered so users retain full control of their private keys and assets.",
    },
    {
      title: "Solana dApp Integration",
      description:
        "High-speed, reliable integrations built to take advantage of Solana's native performance.",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Security-first engineering applied throughout the wallet without adding friction for users.",
    },
    {
      title: "Everyday-User Experience",
      description:
        "An interface designed to keep crypto simple and approachable for non-technical users.",
    },
  ],
  result:
    "RockWallet launched as a secure, non-custodial wallet with seamless Solana dApp integration — giving everyday users full control of their assets through an interface that never feels intimidating.",
  techStack: [
    { layer: "Blockchain", technology: "Solana" },
    { layer: "Wallet Architecture", technology: "Non-Custodial" },
    { layer: "Frontend", technology: "React / Next.js" },
    { layer: "Wallet Integration", technology: "Phantom / Solflare" },
  ],
  services: [
    "Wallet Architecture & Development",
    "Solana dApp Integration",
    "Web3 Security Engineering",
    "Ongoing Development Partnership",
  ],
  ctaHeadline: "Building a Crypto Wallet?",
  ctaText:
    "Tech Leafe builds secure, non-custodial wallets with seamless Solana integration — designed for everyday users.",
  ctaHref: "/#contact",
};

export default function RockWalletPage() {
  return <CaseStudyDetail data={rockWalletData} />;
}
