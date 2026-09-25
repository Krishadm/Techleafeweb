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

import AppImage from "../../assets/blockchain-hero.png";
import Footer from "../../components/Footer/Footer";
import "./ServiceDevelopment.css";

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
   CSS
========================================================= */


/* =========================================================
   COMPONENT
========================================================= */

const BlockchainDevelopment: React.FC = () => {
  const [openFaq, setOpenFaq] =
    useState<string | false>(false);

  // const [metricsVisible, setMetricsVisible] =
  //   useState(false);

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
              Why this matters
            </div>

            <Typography component="h2">
              Why Blockchain Development
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
              Inside blockchain development
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

export default BlockchainDevelopment;
