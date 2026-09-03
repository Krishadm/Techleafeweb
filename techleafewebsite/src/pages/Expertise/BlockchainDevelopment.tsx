import { Box, Container, Typography } from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import blockchainImage from "../../assets/blockchain-hero.png";
import Footer from "../../component/Footer";

const BlockchainDevelopment = () => {
  return (
    <>
    <Box className="blockchain-page">
      <style>{`
        .blockchain-page {
          min-height: 100vh;
          background-color: #000000;
          color: #ffffff;
          font-family: "Public Sans", sans-serif;
        }

        /* ================= HERO ================= */

        .blockchain-hero {
          padding: 100px 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .hero-label {
          color: #1D620C;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          color: #ffffff;
          font-size: 72px;
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 700;
          margin: 0 0 28px 0;
        }

        .hero-title-green {
          color: #1D620C;
        }

        .hero-description {
          max-width: 650px;
          color: #aeb8bc;
          font-size: 19px;
          line-height: 1.7;
          margin: 0;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .primary-button {
          padding: 14px 28px;
          border-radius: 6px;
          border: 1px solid #1D620C;
          background-color: #1D620C;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .primary-button:hover {
          background-color: #000000;
          color: #ffffff;
        }

        .secondary-button {
          padding: 14px 28px;
          border-radius: 6px;
          border: 1px solid #1D620C;
          background-color: #000000;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .secondary-button:hover {
          background-color: #1D620C;
          color: #ffffff;
        }

/* ================= BLOCKCHAIN VISUAL ================= */

.blockchain-visual {
  width: 100%;
  height: 520px;
  border: 1px solid #1D620C;
  border-radius: 16px;
  overflow: hidden;
  background-color: #000000;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.blockchain-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

        /* ================= STATS ================= */

        .stats-section {
          background-color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          min-height: 260px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          // padding: 30px 20px;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 15%;
          height: 70%;
          width: 1px;
        }

        .stat-icon {
          width: 105px;
          height: 105px;
          border-radius: 50%;
          border: 1px solid #1D620C;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D620C;
          background-color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          margin-bottom: 25px;
        }

        .stat-icon svg {
          font-size: 48px;
          color: #1D620C;
        }

        .stat-number {
          color: #ffffff;
          font-size: 52px;
          line-height: 1;
          font-weight: 700;
          margin: 0 0 12px 0;
          letter-spacing: -0.03em;
        }

        .stat-number span {
          color: #1D620C;
        }

        .stat-label {
          color: #aeb8bc;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.12em;
          line-height: 1.5;
          text-align: center;
        }

        /* ================= COMMON SECTION ================= */

        .section-label {
          color: #1D620C;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-title {
          color: #ffffff;
          font-size: 56px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin: 0 0 48px 0;
        }

        .section-title-green {
          color: #1D620C;
        }

        /* ================= WHY BLOCKCHAIN ================= */

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .why-card {
          padding: 32px;
          min-height: 220px;
          border: 1px solid #1D620C;
          border-radius: 10px;
          background-color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .why-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid #1D620C;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D620C;
          background-color: #000000;
          margin-bottom: 24px;
        }

        .why-title {
          color: #ffffff;
          font-size: 21px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .why-description {
          color: #aeb8bc;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        /* =========================
           WHAT'S INCLUDED
        ========================= */

        .included-section {
          padding: 100px 0;
          background-color: #000000;
        }

        .included-header {
          margin-bottom: 50px;
        }

        .included-label {
          color: #1D620C;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0 0 18px 0;
        }

        .included-title {
          color: #ffffff;
          font-size: 56px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.04em;
          margin: 0 0 20px 0;
        }

        .included-title span {
          color: #1D620C;
        }

        .included-description {
          color: #aeb8bc;
          font-size: 17px;
          line-height: 1.7;
          max-width: 800px;
          margin: 0;
        }

        /* =========================
           SERVICE CARDS
        ========================= */

        .included-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .included-card {
          min-height: 430px;
          padding: 38px 32px 30px 32px;
          border: 1px solid #1D620C;
          border-radius: 12px;
          background-color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          transition:
            box-shadow 0.3s ease,
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .included-card:hover {
          background-color: #000000;
          box-shadow:
            inset 0 0 25px rgba(29, 98, 12, 0.35),
            0 8px 25px rgba(0, 0, 0, 0.4);
          transform: translateY(-5px);
        }

        /* =========================
           CARD ICON
        ========================= */

        .included-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1px solid #1D620C;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1D620C;
          background-color: #000000;
          box-shadow: 0 0 18px rgba(29, 98, 12, 0.35);
          margin-bottom: 28px;
          transition: all 0.3s ease;
        }

        .included-card:hover .included-icon {
          box-shadow:
            inset 0 0 15px rgba(29, 98, 12, 0.6),
            0 0 22px rgba(29, 98, 12, 0.45);
        }

        .included-icon svg {
          font-size: 34px;
          color: #1D620C;
        }

        /* =========================
           CARD CONTENT
        ========================= */

        .included-card-title {
          color: #ffffff;
          font-size: 25px;
          line-height: 1.25;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .included-card-description {
          color: #aeb8bc;
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        /* =========================
           CARD BOTTOM
        ========================= */

        .included-card-bottom {
          margin-top: auto;
          padding-top: 25px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 15px;
        }

        .included-technologies {
          color: #1D620C;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* =========================
           ARROW BUTTON
        ========================= */

        .included-arrow {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 50%;
          border: 1px solid #1D620C;
          background-color: #000000;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .included-arrow svg {
          font-size: 21px;
        }

        .included-arrow:hover {
          background-color: #000000;
          color: #ffffff;
          box-shadow:
            inset 0 0 15px rgba(29, 98, 12, 0.7),
            0 0 18px rgba(29, 98, 12, 0.4);
        }

        /* ================= TECHNOLOGIES ================= */

        .technology-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          padding: 0 100px;
        }

        .technology {
          padding: 12px 20px;
          border: 1px solid #1D620C;
          border-radius: 5px;
          color: #ffffff;
          background-color: #000000;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .technology:hover {
          color: #ffffff;
          background-color: #000000;
          box-shadow: inset 0 0 20px rgba(29, 98, 12, 0.8);
        }

        /* ================= CTA ================= */

        .cta-section {
          padding: 100px 0;
          background-color: #000000;
        }

        .cta-box {
          text-align: center;
          padding: 70px 40px;
          border: 1px solid #1D620C;
          border-radius: 12px;
          background-color: #000000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        .cta-label {
          color: #1D620C;
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cta-title {
          color: #ffffff;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 16px 0;
        }

        .cta-description {
          color: #aeb8bc;
          max-width: 650px;
          margin: 0 auto 32px auto;
          line-height: 1.7;
        }

        /* ================= RESPONSIVE 900px ================= */

        @media (max-width: 900px) {

          .blockchain-hero {
            padding: 70px 0;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .hero-title {
            font-size: 56px;
          }

          .blockchain-visual {
            height: 420px;
          }

          .section-title {
            font-size: 48px;
          }

          .service-title {
            font-size: 26px;
          }

          .cta-title {
            font-size: 44px;
          }

          /* STATS */

          .stats-section {
            padding: 50px 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-item {
            min-height: 240px;
          }

          .stat-item:nth-child(2)::after {
            display: none;
          }

          .stat-item:nth-child(1)::after,
          .stat-item:nth-child(3)::after {
            display: block;
          }

          .stat-number {
            font-size: 42px;
          }

          .stat-icon {
            width: 85px;
            height: 85px;
          }

          .stat-icon svg {
            font-size: 40px;
          }

          /* WHAT'S INCLUDED */

          .included-section {
            padding: 80px 0;
          }

          .included-title {
            font-size: 48px;
          }

          .included-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .included-card {
            min-height: 410px;
            padding: 32px 28px 28px 28px;
          }

          .included-card-title {
            font-size: 24px;
          }

          .included-card-description {
            font-size: 15px;
          }

          .included-technologies {
            font-size: 13px;
          }
                      .technology-list{
          padding: 0 20px;}
        }

        /* ================= RESPONSIVE 600px ================= */

        @media (max-width: 600px) {

          .blockchain-hero {
            padding: 55px 0;
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-description {
            font-size: 16px;
          }

          .blockchain-visual {
            height: 320px;
            border-radius: 12px;
          }

          .blockchain-image {
            object-fit: cover;
            object-position: center;
          }

          .visual-box {
            width: 55px;
            height: 55px;
          }


          /* STATS */

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-item {
            min-height: 220px;
            // padding: 30px 15px;
          }

          .stat-item:not(:last-child)::after {
            display: none;
          }

          .stat-number {
            font-size: 38px;
          }

          .stat-icon {
            width: 75px;
            height: 75px;
            margin-bottom: 20px;
          }

          .stat-icon svg {
            font-size: 34px;
          }

          .stat-label {
            font-size: 12px;
          }

          /* COMMON */

          .section-title {
            font-size: 38px;
          }

          /* WHY BLOCKCHAIN */

          .why-grid {
            grid-template-columns: 1fr;
          }

          .why-card {
            min-height: auto;
          }

          /* WHAT'S INCLUDED */

          .included-section {
            padding: 70px 0;
          }

          .included-header {
            margin-bottom: 35px;
          }

          .included-label {
            font-size: 13px;
          }

          .included-title {
            font-size: 38px;
          }

          .included-description {
            font-size: 15px;
          }

          .included-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .included-card {
            min-height: auto;
            padding: 30px 25px 25px 25px;
          }

          .included-card-title {
            font-size: 23px;
          }

          .included-card-description {
            font-size: 14px;
          }

          .included-icon {
            width: 65px;
            height: 65px;
            margin-bottom: 22px;
          }

          .included-technologies {
            font-size: 13px;
          }

          .included-arrow {
            width: 42px;
            height: 42px;
            min-width: 42px;
          }

          /* CTA */

          .cta-section {
            padding: 70px 0;
          }

          .cta-box {
            padding: 45px 24px;
          }

          .cta-title {
            font-size: 34px;
          }
        }

        /* ================= RESPONSIVE 450px ================= */

        @media (max-width: 450px) {

            .blockchain-visual {
              height: 260px;
              border-radius: 10px;
            }

          .included-section {
            padding: 55px 0;
          }

          .included-title {
            font-size: 32px;
          }

          .included-card-title {
            font-size: 21px;
          }

          .included-card-description {
            font-size: 14px;
          }

          .included-technologies {
            font-size: 13px;
          }

          .included-arrow {
            width: 42px;
            height: 42px;
            min-width: 42px;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <Box className="blockchain-hero">
        <Container maxWidth="xl">
          <Box className="hero-grid">

            <Box>
              <Typography className="hero-label">
                Blockchain Development
              </Typography>

              <Typography component="h1" className="hero-title">
                Engineering
                <br />

                <span className="hero-title-green">
                  decentralized
                </span>

                <br />

                systems.
              </Typography>

              <Typography className="hero-description">
                We design, audit and deploy production-ready blockchain
                infrastructure — from secure smart contracts and
                high-performance DApps to wallets, token systems and
                decentralized protocols.
              </Typography>

              <Box className="hero-buttons">
                <Box
                  component="button"
                  className="primary-button"
                >
                  Start a project
                </Box>

                <Box
                  component="button"
                  className="secondary-button"
                >
                  Explore services
                </Box>
              </Box>
            </Box>

            {/* BLOCKCHAIN VISUAL */}

            <Box className="blockchain-visual">
              <Box
                component="img"
                src={blockchainImage}
                alt="Blockchain Development"
                className="blockchain-image"
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          STATS
      ===================================================== */}

      <Box className="stats-section">
        <Container maxWidth="xl">
          <Box className="stats-grid">

            <Box className="stat-item">
              <Typography className="stat-number">
                150<span>+</span>
              </Typography>

              <Typography className="stat-label">
                SMART CONTRACTS DEPLOYED
              </Typography>
            </Box>

            <Box className="stat-item">
              <Typography className="stat-number">
                $500M<span>+</span>
              </Typography>

              <Typography className="stat-label">
                CLIENT ASSETS SECURED
              </Typography>
            </Box>

            <Box className="stat-item">
              <Typography className="stat-number">
                0
              </Typography>

              <Typography className="stat-label">
                EXPLOITS RECORDED
              </Typography>
            </Box>

            <Box className="stat-item">
              <Typography className="stat-number">
                99.9<span>%</span>
              </Typography>

              <Typography className="stat-label">
                RPC NODE UPTIME
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* =====================================================
          WHY BLOCKCHAIN
      ===================================================== */}

      <Box className="blockchain-section">
        <Container maxWidth="xl">

          <Typography className="section-label">
            Why Blockchain Development
          </Typography>

          <Typography component="h2" className="section-title">
            Build trust into
            <br />

            <span className="section-title-green">
              the infrastructure.
            </span>
          </Typography>

          <Box className="why-grid">

            <Box className="why-card">
              <Box className="why-icon">
                <SecurityIcon />
              </Box>

              <Typography className="why-title">
                Zero-Knowledge Cryptography
              </Typography>

              <Typography className="why-description">
                Verify data validity without exposing sensitive business
                information using modern cryptographic architectures.
              </Typography>
            </Box>

            <Box className="why-card">
              <Box className="why-icon">
                <AccountBalanceWalletIcon />
              </Box>

              <Typography className="why-title">
                Automated Trustless Escrow
              </Typography>

              <Typography className="why-description">
                Replace expensive intermediaries with self-executing smart
                contracts that settle transactions automatically.
              </Typography>
            </Box>

            <Box className="why-card">
              <Box className="why-icon">
                <VerifiedIcon />
              </Box>

              <Typography className="why-title">
                Immutable Compliance Trails
              </Typography>

              <Typography className="why-description">
                Create tamper-evident records for institutional transfers,
                supply chains and administrative actions.
              </Typography>
            </Box>

            <Box className="why-card">
              <Box className="why-icon">
                <SpeedIcon />
              </Box>

              <Typography className="why-title">
                Sub-Second L2 Execution
              </Typography>

              <Typography className="why-description">
                Use optimized Layer-2 architectures to reduce gas costs
                while maintaining high transaction throughput.
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>

      {/* =====================================================
          WHAT'S INCLUDED
      ===================================================== */}

      <Box className="included-section">
        <Container maxWidth="xl">

          <Box className="included-header">

            <Typography className="included-label">
              What's included
            </Typography>

            <Typography
              component="h2"
              className="included-title"
            >
              Inside blockchain{" "}
              <span>development.</span>
            </Typography>

            <Typography className="included-description">
              From architecture to deployment, we cover everything you
              need to build secure, scalable and production-ready
              blockchain solutions.
            </Typography>

          </Box>

          {/* SERVICE CARDS */}

          <Box className="included-grid">

            {/* CARD 1 */}

            <Box className="included-card">

              <Box className="included-icon">
                <DescriptionOutlinedIcon />
              </Box>

              <Typography
                component="h3"
                className="included-card-title"
              >
                Smart Contract Audit &amp;
                Formal Verification
              </Typography>

              <Typography className="included-card-description">
                We write and audit smart contracts in Solidity and
                Rust with static analysis, fuzz testing and manual
                peer review.
              </Typography>

              <Box className="included-card-bottom">

                <Typography className="included-technologies">
                  Solidity &amp; Rust auditing • Gas optimization •
                  ERC-20 / ERC-721 / ERC-1155 • Manual code review
                </Typography>

                <Box
                  component="button"
                  className="included-arrow"
                  type="button"
                >
                  <ArrowForwardIcon />
                </Box>

              </Box>

            </Box>

            {/* CARD 2 */}

            <Box className="included-card">

              <Box className="included-icon">
                <LayersOutlinedIcon />
              </Box>

              <Typography
                component="h3"
                className="included-card-title"
              >
                Scalable DApp Front-End &amp;
                Subgraph Indexing
              </Typography>

              <Typography className="included-card-description">
                Build responsive Web3 applications using React,
                Next.js and Ethers.js with decentralized storage
                and indexing.
              </Typography>

              <Box className="included-card-bottom">

                <Typography className="included-technologies">
                  The Graph • IPFS / Pinata • Low-latency Web3 UX •
                  WalletConnect
                </Typography>

                <Box
                  component="button"
                  className="included-arrow"
                  type="button"
                >
                  <ArrowForwardIcon />
                </Box>

              </Box>

            </Box>

            {/* CARD 3 */}

            <Box className="included-card">

              <Box className="included-icon">
                <AccountBalanceWalletOutlinedIcon />
              </Box>

              <Typography
                component="h3"
                className="included-card-title"
              >
                Non-Custodial Wallets &amp;
                Account Abstraction
              </Typography>

              <Typography className="included-card-description">
                Simplify Web3 onboarding through multi-chain
                wallets, social login and account abstraction.
              </Typography>

              <Box className="included-card-bottom">

                <Typography className="included-technologies">
                  MetaMask • WalletConnect • Biometric security •
                  Multi-chain assets
                </Typography>

                <Box
                  component="button"
                  className="included-arrow"
                  type="button"
                >
                  <ArrowForwardIcon />
                </Box>

              </Box>

            </Box>

          </Box>

        </Container>
      </Box>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <Box className="blockchain-section">
        <Container maxWidth="xl">

          <Typography className="section-label">
            Technologies
          </Typography>

          <Typography component="h2" className="section-title">
            What we build it with.
          </Typography>

          <Box className="technology-list">

            {[
              "Ethereum",
              "Polygon",
              "Solidity",
              "TypeScript",
              "Arbitrum",
              "Solana",
              "Rust",
              "Hardhat",
              "Foundry",
              "Ethers.js",
              "Web3.js",
              "IPFS",
              "Pinata",
              "The Graph",
              "Chainlink",
              "Node.js",
              "React",
              "Next.js",
            ].map((technology) => (
              <Box
                key={technology}
                className="technology"
              >
                {technology}
              </Box>
            ))}

          </Box>
        </Container>
      </Box>

      {/* =====================================================
          CTA
      ===================================================== */}

      <Box className="cta-section">
        <Container maxWidth="md">

          <Box className="cta-box">

            <Typography className="cta-label">
              Ready to build?
            </Typography>

            <Typography component="h2" className="cta-title">
              Architect your
              <br />
              blockchain advantage.
            </Typography>

            <Typography className="cta-description">
              Talk directly with our blockchain engineers about your next
              decentralized product.
            </Typography>

            <Box
              component="button"
              className="primary-button"
            >
              Let's build together
            </Box>

          </Box>

        </Container>
      </Box>

    </Box>
    <Footer />
    </>
  );
};

export default BlockchainDevelopment;