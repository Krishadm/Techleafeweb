import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  SiEthereum,
  SiPolygon,
  SiSolidity,
  SiRuby,
  SiTypescript,
  SiSolana,
  SiIpfs,
  SiGraphql,
  SiChainlink,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

import AppImage from "../assets/blockchain-hero.png";
import Footer from "../../component/Footer";

const WHY_CARDS = [
  {
    title: "Zero-Knowledge Cryptography",
    body:
      "Verify data validity without exposing sensitive business information, using ZK-rollups, asymmetric encryption, and modern consensus protocols.",
  },
  {
    title: "Automated Trustless Escrow",
    body:
      "Replace expensive intermediaries with self-executing smart contracts that settle payments on verified milestone completion.",
  },
  {
    title: "Immutable Compliance Trails",
    body:
      "Log institutional transfers, supply chain steps, and administrative actions onto tamper-evident ledgers for real-time auditing.",
  },
  {
    title: "Sub-Second L2 Execution",
    body:
      "Bypass high mainnet gas fees using optimized Layer-2 architectures built for high transaction throughput.",
  },
];

interface ServiceBlock {
  id: string;
  index: string;
  title: string;
  body: string;
  bullets: string[];
}

const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    id: "Smart Contract Audit & Formal Verification",
    index: "01 / 03",
    title: "Smart Contract Audit & Formal Verification",
    body:
      "We write and audit smart contracts in Solidity and Rust. Our review pipeline combines static code analysis, automated fuzz testing, and manual line-by-line review to catch reentrancy bugs, flash-loan vectors, and logic flaws before mainnet deployment.",
    bullets: [
      "Solidity & Rust auditing",
      "Gas consumption optimization",
      "ERC-20 / ERC-721 / ERC-1155 standards",
      "Manual peer code review",
    ],
  },
  {
    id: "Scalable DApp Front-End & Subgraph Indexing",
    index: "02 / 03",
    title: "Scalable DApp Front-End & Subgraph Indexing",
    body:
      "We build responsive Web3 applications with React, Next.js, and Ethers.js. Pairing decentralized front-ends with custom GraphQL subgraphs and IPFS storage gets you Web2-grade speed with real Web3 decentralization.",
    bullets: [
      "The Graph protocol indexing",
      "Decentralized storage (IPFS / Pinata)",
      "Low-latency Web3 UX",
      "Wallet-connect flows users already know",
    ],
  },
  {
    id: "Non-Custodial Wallets & Account Abstraction",
    index: "03 / 03",
    title: "Non-Custodial Wallets & Account Abstraction",
    body:
      "We simplify Web3 onboarding for your users — smooth authentication, multi-chain mobile wallets, and social-login abstraction (ERC-4337) that removes gas-fee friction for non-technical users.",
    bullets: [
      "MetaMask & WalletConnect SDKs",
      "Biometric mobile app security",
      "Social-login Web3 onboarding",
      "Multi-chain asset support",
    ],
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
}

const STACK: Technology[] = [
  {
    name: "Ethereum",
    icon: SiEthereum,
    color: "#627EEA",
  },
  {
    name: "Polygon",
    icon: SiPolygon,
    color: "#8247E5",
  },
  {
    name: "Solidity",
    icon: SiSolidity,
    color: "#8C8C8C",
  },
  {
    name: "Ruby",
    icon: SiRuby,
    color: "#CC342D",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Arbitrum",
    icon: SiEthereum,
    color: "#28A0F0",
  },
  {
    name: "Solana (Rust)",
    icon: SiSolana,
    color: "#9945FF",
  },
  {
    name: "Hardhat / Foundry",
    icon: SiSolidity,
    color: "#F7C948",
  },
  {
    name: "Ethers.js / Web3.js",
    icon: SiEthereum,
    color: "#627EEA",
  },
  {
    name: "IPFS & Pinata",
    icon: SiIpfs,
    color: "#65C2CB",
  },
  {
    name: "The Graph",
    icon: SiGraphql,
    color: "#E10098",
  },
  {
    name: "Chainlink Oracles",
    icon: SiChainlink,
    color: "#375BD2",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "React / Next.js",
    icon: SiReact,
    color: "#61DAFB",
  },
];

const FAQS = [
  {
    q: "Which blockchain ecosystems do you support?",
    a:
      "We engineer solutions across EVM-compatible networks (Ethereum, Polygon, Arbitrum, Optimism, BNB Chain, Avalanche) as well as Solana (Rust) and private enterprise ledgers like Hyperledger Fabric.",
  },
  {
    q: "How do you reduce the risk of a smart contract getting exploited?",
    a:
      "A layered review pipeline: automated Slither/Mythril scans, unit testing with Foundry/Hardhat, formal verification where it matters, and a manual peer audit before anything reaches mainnet.",
  },
  {
    q: "How long does a complete Web3 dApp project take?",
    a:
      "A focused smart contract suite or wallet integration typically runs 3–5 weeks. Full-scale multi-chain dApps with custom indexers run 8–14 weeks, depending on scope.",
  },
  {
    q: "Where is Tech Leafe Technologies located for in-person meetings?",
    a:
      "Our development hub is at 100 Feet Road, Camp Road Junction, Selaiyur, Tambaram, Chennai. We host in-person technical reviews locally and work with remote clients globally.",
  },
];

/* =========================================================
   COUNT UP COMPONENT
========================================================= */

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  startAnimation: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  startAnimation,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = easedProgress * end;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startAnimation]);

  return (
    <>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
};

/* =========================================================
   ARROW
========================================================= */

const ArrowCta: React.FC = () => (
  <span className="arrow-cta" aria-hidden="true">
    <svg
      viewBox="0 0 26 14"
      width="26"
      height="14"
      fill="none"
    >
      <path
        d="M1 7H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14 1L21 7L14 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/* =========================================================
   CSS
========================================================= */

const pageStyles = `
  :root {
    --tl-bg: #000000;
    --tl-bg-soft: #050505;
    --tl-fg: #ffffff;
    --tl-muted: #cfcfcf;
    --tl-accent: #1d620c;
    --tl-accent-light: #35a51c;
    --tl-border: rgba(29, 98, 12, 0.55);
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    background: var(--tl-bg);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  /* =========================================================
     ROOT
  ========================================================= */

  .tl-root {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    color: var(--tl-fg);
    background: var(--tl-bg);

    font-family:
      "Inter",
      "Segoe UI",
      Roboto,
      sans-serif;
  }

  .tl-wrap {
    width: 100%;
    max-width: 1140px;

    margin: 0 auto;

    padding: 0 24px;
  }

  /* =========================================================
     ANIMATIONS
  ========================================================= */

  @keyframes tlFadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes tlFadeLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes tlFadeRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes tlFloat {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes tlGlow {
    0%,
    100% {
      box-shadow: 0 0 0 rgba(53, 165, 28, 0);
    }

    50% {
      box-shadow: 0 0 25px rgba(53, 165, 28, 0.15);
    }
  }

  @keyframes tlNumberGlow {
    0% {
      text-shadow: 0 0 0 rgba(53, 165, 28, 0);
    }

    50% {
      text-shadow:
        0 0 10px rgba(53, 165, 28, 0.35),
        0 0 25px rgba(53, 165, 28, 0.15);
    }

    100% {
      text-shadow: 0 0 0 rgba(53, 165, 28, 0);
    }
  }

  /* =========================================================
     BREADCRUMB
  ========================================================= */

  .tl-breadcrumb {
    margin: 32px 0 24px;

    overflow-x: auto;

    white-space: nowrap;

    font-size: 13px;
  }

  .tl-breadcrumb a {
    color: #999999;

    text-decoration: none;

    transition: color 0.3s ease;
  }

  .tl-breadcrumb a:hover {
    color: var(--tl-accent-light);
  }

  .tl-breadcrumb-current {
    color: var(--tl-fg);

    font-size: 13px;
  }

  /* =========================================================
     HERO
  ========================================================= */

  .tl-hero {
    padding-bottom: 56px;
  }

  .tl-hero-grid {
    display: grid;

    grid-template-columns:
      minmax(0, 1.1fr)
      minmax(0, 0.9fr);

    align-items: center;

    gap: 48px;
  }

  .tl-hero-grid > div:first-child {
    animation:
      tlFadeLeft 0.8s ease both;
  }

  .tl-eyebrow {
    margin-bottom: 16px;

    color: var(--tl-accent-light);

    font-size: 13px;

    font-weight: 600;

    line-height: 1.4;
    text-transform: uppercase;
  }

  .tl-hero h1 {
    margin: 0 0 20px;

    color: var(--tl-fg);

    font-size: clamp(32px, 4.5vw, 48px);

    font-weight: 700;

    line-height: 1.15;

    letter-spacing: -1px;
  }

  .tl-hero h1 em {
    color: var(--tl-accent-light);

    font-style: normal;
  }

  .tl-lede {
    max-width: 52ch;

    margin: 0 0 32px;

    color: var(--tl-muted);

    font-size: 17px;

    line-height: 1.6;
  }

  /* =========================================================
     HERO IMAGE
  ========================================================= */

  .tl-hero-photo {
    width: 100%;

    animation:
      tlFadeRight 0.8s ease 0.15s both;
  }

  .tl-hero-photo img {
    display: block;

    width: 100%;

    max-width: 100%;

    height: auto;

    border: 1px solid var(--tl-accent);

    border-radius: 16px;

    object-fit: cover;

    animation:
      tlFloat 5s ease-in-out 1s infinite;

    transition:
      transform 0.4s ease,
      border-color 0.4s ease,
      box-shadow 0.4s ease;
  }

  .tl-hero-photo img:hover {
    animation-play-state: paused;

    transform: scale(1.02);

    border-color: var(--tl-accent-light);

    box-shadow:
      0 20px 50px rgba(29, 98, 12, 0.25);
  }

  /* =========================================================
     BUTTONS
  ========================================================= */

  .tl-hero-actions {
    display: flex;

    flex-wrap: wrap;

    gap: 16px;

    animation:
      tlFadeUp 0.8s ease 0.3s both;
  }

  .tl-btn-primary,
  .tl-btn-ghost {
    min-height: 46px;

    padding: 12px 24px !important;

    border-radius: 999px !important;

    text-transform: none !important;

    font-weight: 600 !important;

    display: inline-flex !important;

    align-items: center;

    justify-content: center;

    gap: 8px;

    transition:
      transform 0.3s ease,
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease,
      box-shadow 0.3s ease !important;
  }

  .tl-btn-primary {
    color: #ffffff !important;

    background:
      var(--tl-accent) !important;
  }

  .tl-btn-primary:hover {
    transform: translateY(-4px);

    background: #24790f !important;

    box-shadow:
      0 10px 25px rgba(29, 98, 12, 0.3);
  }

  .tl-btn-ghost {
    color: var(--tl-fg) !important;

    background: transparent !important;

    border:
      1px solid #333333 !important;
  }

  .tl-btn-ghost:hover {
    transform: translateY(-4px);

    color: var(--tl-accent-light) !important;

    border-color:
      var(--tl-accent-light) !important;
  }

  .arrow-cta {
    display: inline-flex;

    align-items: center;

    transition:
      transform 0.3s ease;
  }

  .tl-btn-primary:hover .arrow-cta,
  .tl-btn-ghost:hover .arrow-cta {
    transform: translateX(5px);
  }

  /* =========================================================
     METRICS
  ========================================================= */

  .tl-metrics-grid {
    display: grid;

    grid-template-columns:
      repeat(3, 1fr);

    gap: 24px;

    margin-top: 56px;
  }

  .tl-metric-card {
    position: relative;

    min-width: 0;

    min-height: 80px;

    padding: 24px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    overflow: hidden;

    background:
      linear-gradient(
        145deg,
        rgba(255, 255, 255, 0.035),
        rgba(255, 255, 255, 0.01)
      );

    border:
      1px solid var(--tl-border);

    border-radius: 16px;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .tl-metric-card:nth-child(1) {
    animation:
      tlFadeUp 0.6s ease 0.15s both;
  }

  .tl-metric-card:nth-child(2) {
    animation:
      tlFadeUp 0.6s ease 0.3s both;
  }

  .tl-metric-card:nth-child(3) {
    animation:
      tlFadeUp 0.6s ease 0.45s both;
  }

  .tl-metric-card::before {
    content: "";

    position: absolute;

    width: 120px;

    height: 120px;

    top: -70px;

    right: -60px;

    border-radius: 50%;

    background:
      rgba(53, 165, 28, 0.08);

    filter: blur(10px);

    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }

  .tl-metric-card:hover::before {
    transform: scale(2);

    opacity: 0.8;
  }

  .tl-metric-card::after {
    content: "";

    position: absolute;

    right: 15%;

    bottom: 0;

    left: 15%;

    height: 2px;

    background:
      var(--tl-accent-light);

    transform: scaleX(0);

    transition:
      transform 0.35s ease;
  }

  .tl-metric-card:hover {
    transform: translateY(-8px);

    border-color:
      var(--tl-accent-light);
  }

  .tl-metric-card:hover::after {
    transform: scaleX(1);
  }

  .tl-mn {
    position: relative;

    z-index: 1;

    margin-bottom: 12px;

    color:
      var(--tl-accent-light);

    font-size:
      clamp(27px, 3vw, 34px);

    font-weight: 800;

    line-height: 1;

    letter-spacing: -0.5px;

    animation:
      tlNumberGlow 2s ease-in-out;

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .tl-metric-card:hover .tl-mn {
    color: #ffffff;

    transform: scale(1.06);
  }

  .tl-ml {
    position: relative;

    z-index: 1;

    color:
      var(--tl-muted);

    font-size: 13px;

    line-height: 1.4;

    text-align: center;
  }

  /* =========================================================
     SECTIONS
  ========================================================= */

  .tl-section {
    padding: 72px 0;
  }

  .tl-section-soft {
    padding: 72px 0;
  }

  .tl-section h2,
  .tl-section-soft h2 {
    margin: 0 0 40px;

    color:
      var(--tl-fg);

    font-size:
      clamp(26px, 3.5vw, 36px);

    font-weight: 700;

    line-height: 1.2;
  }

  /* =========================================================
     WHY CARDS
  ========================================================= */

  .tl-grid-3 {
    display: grid;

    grid-template-columns:
      repeat(4, minmax(0, 1fr));

    gap: 24px;
  }

  .tl-card {
    min-width: 0;

    padding: 24px;

    background: #000000;

    border:
      1px solid var(--tl-accent);

    border-radius: 14px;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .tl-card:hover {
    transform: translateY(-8px);

    border-color:
      var(--tl-accent-light);

    box-shadow:
      0 15px 35px rgba(29, 98, 12, 0.18);
  }

  .tl-card h3 {
    margin: 0 0 10px;

    color:
      var(--tl-fg);

    font-size: 17px;

    font-weight: 700;

    line-height: 1.35;

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .tl-card:hover h3 {
    color:
      var(--tl-accent-light);

    transform:
      translateX(3px);
  }

  .tl-card p {
    margin: 0;

    color:
      var(--tl-muted);

    font-size: 14px;

    line-height: 1.6;
  }

  /* =========================================================
     SERVICES
  ========================================================= */

  .tl-service-block {
    padding: 40px 0;

    border-top:
      1px solid rgba(29, 98, 12, 0.4);

    transition:
      padding-left 0.3s ease,
      border-color 0.3s ease;
  }

  .tl-service-block:first-of-type {
    border-top: 0;
  }

  .tl-service-block:hover {
    padding-left: 10px;

    border-color:
      rgba(53, 165, 28, 0.8);
  }

  .tl-service-block-grid {
    display: grid;

    grid-template-columns:
      minmax(0, 1.2fr)
      minmax(0, 0.8fr);

    gap: 40px;
  }

  .tl-service-index {
    margin-bottom: 12px;

    color:
      var(--tl-accent-light);

    font-size: 13px;

    font-weight: 600;

    transition:
      transform 0.3s ease,
      letter-spacing 0.3s ease;
  }

  .tl-service-block:hover .tl-service-index {
    transform:
      translateX(4px);

    letter-spacing: 1px;
  }

  .tl-service-block h3 {
    margin: 0 0 12px;

    color:
      var(--tl-fg);

    font-size: 22px;

    font-weight: 700;

    line-height: 1.3;

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .tl-service-block:hover h3 {
    color:
      var(--tl-accent-light);

    transform:
      translateX(3px);
  }

  .tl-service-block p {
    margin: 0;

    color:
      var(--tl-muted);

    font-size: 15px;

    line-height: 1.6;
  }

  .tl-bullet-grid {
    align-self: center;

    margin: 0;

    padding: 0;

    list-style: none;
  }

  .tl-bullet-grid li {
    position: relative;

    padding: 10px 0 10px 24px;

    color: #d8d8d8;

    font-size: 14px;

    line-height: 1.5;

    border-bottom:
      1px solid rgba(255, 255, 255, 0.06);

    transition:
      padding-left 0.3s ease,
      color 0.3s ease;
  }

  .tl-bullet-grid li::before {
    content: "";

    position: absolute;

    top: 17px;

    left: 0;

    width: 8px;

    height: 8px;

    border-radius: 50%;

    background:
      var(--tl-accent-light);

    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .tl-bullet-grid li:hover {
    padding-left: 30px;

    color: #ffffff;
  }

  .tl-bullet-grid li:hover::before {
    transform: scale(1.4);

    box-shadow:
      0 0 10px rgba(53, 165, 28, 0.8);
  }

  /* =========================================================
     TECHNOLOGIES - FULL WIDTH
  ========================================================= */

  .tl-tech-section {
    position: relative;

    width: 100%;

    padding: 58px 0 60px;

    background: #000000;

    border-top:
      1px solid rgba(29, 98, 12, 0.35);

    border-bottom:
      1px solid rgba(29, 98, 12, 0.35);

    overflow: hidden;
  }

  /*
     Heading container keeps the same alignment
     as the rest of your website.
  */

  .tl-tech-container {
    width: 100%;

    max-width: 1140px;

    margin: 0 auto;

    padding: 0 24px;
  }

  // .tl-tech-section .tl-eyebrow {
  //   margin-bottom: 14px;
  // }

  .tl-tech-section h2 {
     text-align : center;  
    margin: 0 0 28px;

    color: #ffffff;

    font-size:
      clamp(27px, 3.5vw, 36px);

    font-weight: 700;

    line-height: 1.2;
  }

  /* =========================================================
     TECHNOLOGY MARQUEE
  ========================================================= */

  .tl-tech-marquee {
    position: relative;

    width: 100%;

    overflow: hidden;

    padding: 4px 0 8px;
  }

  /*
     Left fade
  */

  .tl-tech-marquee::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;

    width: 100px;

    z-index: 3;

    pointer-events: none;

    background:
      linear-gradient(
        to right,
        #000000,
        transparent
      );
  }

  /*
     Right fade
  */

  .tl-tech-marquee::after {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;
    right: 0;

    width: 100px;

    z-index: 3;

    pointer-events: none;

    background:
      linear-gradient(
        to left,
        #000000,
        transparent
      );
  }

  /*
     Track containing duplicated technologies.
     Duplicating the list creates the infinite effect.
  */

  .tl-tech-track {
    display: flex;

    width: max-content;

    gap: 14px;

    animation:
      tlTechnologyMove 28s linear infinite;

    will-change: transform;
  }

  /*
     Individual technology pill
  */

  .tl-tech-item {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    min-width: max-content;

    padding: 9px 16px;

    color: #d8d8d8;

    background:
      rgba(255, 255, 255, 0.025);

    border:
      1px solid rgba(255, 255, 255, 0.14);

    border-radius: 999px;

    font-size: 13px;

    font-weight: 600;

    white-space: nowrap;

    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      background-color 0.3s ease,
      color 0.3s ease,
      box-shadow 0.3s ease;
  }

  /*
     Hover effect
  */

  .tl-tech-item:hover {
    transform:
      translateY(-4px);

    color: #ffffff;

    background:
      rgba(255, 255, 255, 0.07);

    border-color:
      rgba(255, 255, 255, 0.35);

    box-shadow:
      0 8px 25px rgba(0, 0, 0, 0.4);
  }

  /*
     Technology icon
  */

  .tl-tech-icon {
    width: 18px;

    height: 18px;

    flex-shrink: 0;

    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .tl-tech-item:hover .tl-tech-icon {
    transform:
      scale(1.15);
  }

  /*
     Infinite horizontal animation
  */

  @keyframes tlTechnologyMove {
    from {
      transform:
        translateX(0);
    }

    to {
      transform:
        translateX(-50%);
    }
  }

  /*
     Pause animation when mouse is over technology row
  */

  .tl-tech-marquee:hover .tl-tech-track {
    animation-play-state: paused;
  }

  /* =========================================================
     CTA
  ========================================================= */

  .tl-cta-band {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 32px;

    padding: 48px;

    background:
      var(--tl-bg-soft);

    border:
      1px solid var(--tl-accent);

    border-radius: 16px;

    animation:
      tlGlow 4s ease-in-out infinite;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease;
  }

  .tl-cta-band:hover {
    transform:
      translateY(-6px);

    border-color:
      var(--tl-accent-light);
  }

  .tl-cta-band h2 {
    margin: 0 0 8px;

    color:
      var(--tl-fg);

    font-size: 26px;
  }

  .tl-cta-band p {
    max-width: 48ch;

    margin: 0;

    color:
      var(--tl-muted);

    line-height: 1.6;
  }

  /* =========================================================
     FAQ
  ========================================================= */

  .tl-faq-container {
    width: 100%;

    max-width: 820px !important;

    margin: 0 auto;

    padding: 0 24px;
  }

  .tl-faq-list {
    margin-top: 16px;
  }

  .tl-faq-accordion {
    color:
      var(--tl-fg) !important;

    background:
      transparent !important;

    border-bottom:
      1px solid rgba(29, 98, 12, 0.4);

    box-shadow:
      none !important;

    transition:
      padding-left 0.3s ease,
      border-color 0.3s ease !important;
  }

  .tl-faq-accordion::before {
    display: none;
  }

  .tl-faq-accordion:hover {
    padding-left: 6px;

    border-color:
      var(--tl-accent-light);
  }

  .tl-faq-summary {
    min-height:
      76px !important;

    padding: 8px 0 !important;

    color:
      #ffffff !important;

    font-size: 15px;
  
    font-weight: 200;
  }

  .tl-faq-icon {
    color:
      var(--tl-accent-light) !important;

    font-size: 22px !important;
  }

  .tl-faq-details p {
    margin: 0;

    color:
      var(--tl-muted);

    font-size: 14px;

    line-height: 1.6;
  }

  /* =========================================================
     TABLET
  ========================================================= */

  @media (max-width: 1000px) {

    .tl-wrap {
      padding: 0 28px;
    }

    .tl-hero-grid {
      gap: 32px;
    }

    .tl-grid-3 {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));
    }

    .tl-service-block-grid {
      gap: 28px;
    }

    .tl-metrics-grid {
      gap: 16px;
    }

    .tl-cta-band {
      padding: 40px;
    }

    .tl-tech-container {
      padding: 0 28px;
    }
  }

  /* =========================================================
     MOBILE
  ========================================================= */

  @media (max-width: 800px) {

    .tl-wrap {
      padding: 0 20px;
    }

    .tl-hero {
      padding-bottom: 40px;
    }

    .tl-hero-grid {
      grid-template-columns: 1fr;

      gap: 36px;
    }

    .tl-hero-photo {
      order: 2;
    }

    .tl-hero-actions {
      width: 100%;

      flex-direction: column;
    }

    .tl-btn-primary,
    .tl-btn-ghost {
      width: 100%;
    }

    .tl-metrics-grid {
      grid-template-columns: 1fr;

      gap: 14px;

      margin-top: 40px;
    }

    .tl-section,
    .tl-section-soft {
      padding: 52px 0;
    }

    .tl-service-block-grid {
      grid-template-columns: 1fr;

      gap: 24px;
    }

    .tl-cta-band {
      flex-direction: column;

      align-items: stretch;

      padding: 32px 24px;
    }

    .tl-cta-band .tl-btn-primary {
      width: 100%;
    }

    /* TECHNOLOGIES MOBILE */

    .tl-tech-section {
      padding: 48px 0 50px;
    }

    .tl-tech-container {
      padding: 0 20px;
    }

    .tl-tech-section h2 {
      margin-bottom: 24px;
    }

    .tl-tech-track {
      gap: 10px;

      animation-duration: 24s;
    }

    .tl-tech-item {
      padding: 8px 13px;

      gap: 7px;

      font-size: 12px;
    }

    .tl-tech-icon {
      width: 16px;

      height: 16px;
    }

    .tl-tech-marquee::before,
    .tl-tech-marquee::after {
      width: 45px;
    }
  }

  /* =========================================================
     SMALL MOBILE
  ========================================================= */

  @media (max-width: 600px) {

    .tl-wrap {
      padding: 0 16px;
    }

    .tl-breadcrumb {
      margin: 20px 0;

      font-size: 12px;
    }

    .tl-eyebrow {
      font-size: 12px;
    }

    .tl-hero h1 {
      font-size: 32px;
    }

    .tl-lede {
      font-size: 15px;
    }

    .tl-hero-photo img {
      border-radius: 12px;
    }

    .tl-grid-3 {
      grid-template-columns: 1fr;

      gap: 16px;
    }

    .tl-card {
      padding: 20px;
    }

    .tl-section,
    .tl-section-soft {
      padding: 44px 0;
    }

    .tl-section h2,
    .tl-section-soft h2 {
      margin-bottom: 26px;

      font-size: 28px;
    }

    .tl-service-block {
      padding: 30px 0;
    }

    .tl-service-block h3 {
      font-size: 20px;
    }

    .tl-service-block p {
      font-size: 14px;
    }

    .tl-bullet-grid li {
      font-size: 13px;
    }

    /* TECHNOLOGY */

    .tl-tech-section {
      padding: 42px 0 46px;
    }

    .tl-tech-container {
      padding: 0 16px;
    }

    .tl-tech-section h2 {
      font-size: 28px;

      margin-bottom: 22px;
    }

    .tl-tech-item {
      padding: 7px 12px;

      font-size: 11px;
    }

    .tl-tech-icon {
      width: 15px;

      height: 15px;
    }

    .tl-tech-marquee::before,
    .tl-tech-marquee::after {
      width: 30px;
    }

    .tl-cta-band {
      padding: 28px 20px;

      border-radius: 12px;
    }

    .tl-cta-band h2 {
      font-size: 23px;
    }

    .tl-cta-band p {
      font-size: 14px;
    }

    .tl-faq-container {
      padding: 0 16px;
    }

    .tl-faq-summary {
      min-height:
        56px !important;

      font-size: 14px;

      line-height: 1.4;
    }

    .tl-faq-details p {
      font-size: 13px;
    }

    .tl-mn {
      font-size: 30px;
    }
  }

  /* =========================================================
     VERY SMALL PHONES
  ========================================================= */

  @media (max-width: 380px) {

    .tl-wrap {
      padding: 0 14px;
    }

    .tl-hero h1 {
      font-size: 29px;
    }

    .tl-lede {
      font-size: 14px;
    }

    .tl-section h2,
    .tl-section-soft h2 {
      font-size: 25px;
    }

    .tl-tech-section h2 {
      font-size: 25px;
    }

    .tl-tech-item {
      padding: 6px 10px;

      font-size: 10px;
    }

    .tl-tech-icon {
      width: 14px;

      height: 14px;
    }

    .tl-cta-band {
      padding: 24px 16px;
    }

    .tl-mn {
      font-size: 28px;
    }
  }

  /* =========================================================
     ACCESSIBILITY
  ========================================================= */

  @media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
      animation-duration:
        0.01ms !important;

      animation-iteration-count:
        1 !important;

      transition-duration:
        0.01ms !important;

      scroll-behavior:
        auto !important;
    }
  }
`;

/* =========================================================
   COMPONENT
========================================================= */

const AppDevelopmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] =
    useState<string | false>(false);

  const [metricsVisible, setMetricsVisible] =
    useState(false);

  const metricsRef =
    useRef<HTMLDivElement | null>(null);

  /* =========================================================
     METRICS INTERSECTION OBSERVER
  ========================================================= */

  useEffect(() => {
    const element = metricsRef.current;

    if (!element) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (entry.isIntersecting) {
            setMetricsVisible(true);

            observer.unobserve(element);
          }
        },
        {
          threshold: 0.35,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      <Box className="tl-root">

        <style>
          {pageStyles}
        </style>

        {/* =====================================================
            HERO
        ===================================================== */}

        <Box
          component="section"
          className="tl-hero"
        >
          <Container
            className="tl-wrap"
            maxWidth={false}
            disableGutters
          >

            {/* BREADCRUMB */}

            <Breadcrumbs
              className="tl-breadcrumb"
              separator="/"
            >
            </Breadcrumbs>

            {/* HERO GRID */}

            <Box className="tl-hero-grid">

              {/* LEFT */}

              <Box>

                <div className="tl-eyebrow">
                  Core discipline — build, secure, decentralize
                </div>

                <Typography component="h1">
                  Engineering decentralized protocols{" "}
                  <em>
                    built to hold up.
                  </em>
                </Typography>

                <Typography className="tl-lede">
                  Tech Leafe Technologies designs, audits, 
                  and deploys production-ready Web3 
                  infrastructure from our Chennai 
                  engineering hub — bridging enterprise 
                  software practices with gas-optimized 
                  EVM smart contracts, high-speed dApps, 
                  and zero-knowledge security patterns.
                </Typography>

              </Box>

              {/* RIGHT IMAGE */}

              <Box className="tl-hero-photo">

                <img
                  src={AppImage}
                  alt="App development dashboard"
                  loading="lazy"
                />

              </Box>

            </Box>

          </Container>
        </Box>

        {/* =====================================================
            WHY BLOCKCHAIN DEVELOPMENT
        ===================================================== */}

        <Box
          component="section"
          className="tl-section-soft"
        >
          <Container
            className="tl-wrap"
            maxWidth={false}
            disableGutters
          >

            <div className="tl-eyebrow">
              WHY BLOCKCHAIN DEVELOPMENT
            </div>

            <Typography component="h2">
              Build trust into the infrastructure.
            </Typography> 

            <Box className="tl-grid-3">

              {WHY_CARDS.map((card) => (
                <Box
                  className="tl-card"
                  key={card.title}
                >

                  <Typography component="h3">
                    {card.title}
                  </Typography>

                  <Typography component="p">
                    {card.body}
                  </Typography>

                </Box>
              ))}

            </Box>

          </Container>
        </Box>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <Box
          component="section"
          id="details"
          className="tl-section"
        >
          <Container
            className="tl-wrap"
            maxWidth={false}
            disableGutters
          >

            <div className="tl-eyebrow">
              What&apos;s included
            </div>

            <Typography component="h2">
              Inside app development
            </Typography>

            {SERVICE_BLOCKS.map((service) => (
              <Box
                className="tl-service-block"
                id={service.id}
                key={service.id}
              >

                <Box className="tl-service-block-grid">

                  <Box>

                    <div className="tl-service-index">
                      {service.index}
                    </div>

                    <Typography component="h3">
                      {service.title}
                    </Typography>

                    <Typography component="p">
                      {service.body}
                    </Typography>

                  </Box>

                  <ul className="tl-bullet-grid">

                    {service.bullets.map(
                      (bullet) => (
                        <li key={bullet}>
                          {bullet}
                        </li>
                      )
                    )}

                  </ul>

                </Box>

              </Box>
            ))}

          </Container>
        </Box>

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <Box
          component="section"
          className="tl-tech-section"
        >

          {/* Heading */}

          <Container
            className="tl-tech-container"
            maxWidth={false}
            disableGutters
          >

        
            <Typography component="h2">
              What we build it with
            </Typography>

          </Container>

          {/* FULL WIDTH MOVING ROW */}

          <Box className="tl-tech-marquee">

            <Box className="tl-tech-track">

              {[
                ...STACK,
                ...STACK,
              ].map(
                (technology, index) => {

                  const Icon =
                    technology.icon;

                  return (
                    <div
                      className="tl-tech-item"
                      key={`${technology.name}-${index}`}
                    >

                      <Icon
                        className="tl-tech-icon"
                        style={{
                          color:
                            technology.color,
                        }}
                      />

                      <span>
                        {technology.name}
                      </span>

                    </div>
                  );
                }
              )}

            </Box>

          </Box>

        </Box>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <Box
          component="section"
          className="tl-section-soft"
        >

          <Container
            maxWidth={false}
            disableGutters
            className="tl-faq-container"
          >

            <div className="tl-eyebrow">
              Q&amp;A
            </div>

            <Typography component="h2">
              Questions about this service
            </Typography>

            <Box className="tl-faq-list">

              {FAQS.map((faq) => (
                <Accordion
                  key={faq.q}
                  className="tl-faq-accordion"
                  expanded={
                    openFaq === faq.q
                  }
                  onChange={(
                    _,
                    expanded
                  ) => {
                    setOpenFaq(
                      expanded
                        ? faq.q
                        : false
                    );
                  }}
                  disableGutters
                >

                  <AccordionSummary
                    className="tl-faq-summary"
                    expandIcon={
                      openFaq === faq.q ? (
                        <RemoveIcon
                          className="tl-faq-icon"
                        />
                      ) : (
                        <AddIcon
                          className="tl-faq-icon"
                        />
                      )
                    }
                  >
                    {faq.q}
                  </AccordionSummary>

                  <AccordionDetails
                    className="tl-faq-details"
                  >
                    <p>
                      {faq.a}
                    </p>
                  </AccordionDetails>

                </Accordion>
              ))}

            </Box>

          </Container>
        </Box>

      </Box>

      <Footer />
    </>
  );
};

export default AppDevelopmentPage;