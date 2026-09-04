import React, { useState } from "react";

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
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AndroidIcon from "@mui/icons-material/Android";
import ApiIcon from "@mui/icons-material/Api";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";

import AppImage from "../../assets/App Development.png";
import Footer from "../../component/Footer";

/* =========================================================
   WHY CARDS
========================================================= */

const WHY_CARDS = [
  {
    title: "Cross-Platform Development",
    body:
      "Single codebase deployments for iOS and Android with Flutter and React Native — up to 40% less development overhead.",
  },
  {
    title: "Native Performance & Security",
    body:
      "Device hardware integrations, biometric authentication, and encrypted local storage where the app needs them.",
  },
  {
    title: "Offline-First Architecture",
    body:
      "Local database sync (SQLite / WatermelonDB) so the app stays usable on a weak or dropped connection.",
  },
  {
    title: "Ongoing Support",
    body:
      "Long-term success through maintenance, updates, performance monitoring, and technical support.",
  },
];

/* =========================================================
   SERVICE BLOCKS
========================================================= */

interface ServiceBlock {
  id: string;
  index: string;
  title: string;
  body: string;
  bullets: string[];
}

const SERVICE_BLOCKS: ServiceBlock[] = [
  {
    id: "native-app-development",
    index: "01 / 06",
    title: "Native App Development",
    body:
      "Build high-performance applications specifically designed for iOS and Android platforms, delivering a seamless and optimized user experience.",
    bullets: [
      "iOS-specific and Android-specific builds",
      "Optimized for each platform's conventions",
      "Performance tuned per device class",
    ],
  },
  {
    id: "ui-ux-strategy-and-design",
    index: "02 / 06",
    title: "UI/UX Strategy & Design",
    body:
      "Create intuitive, visually engaging, and user-centric interfaces that enhance usability and maximize customer satisfaction.",
    bullets: [
      "Interfaces designed around real user flows",
      "Usability considered from the first screen",
      "Visual design tied to your brand",
    ],
  },
  {
    id: "backend-and-cloud-development",
    index: "03 / 06",
    title: "Backend & Cloud Development",
    body:
      "Build secure and scalable backend systems with cloud integration, real-time data synchronization, and robust infrastructure.",
    bullets: [
      "Cloud-hosted, scalable backends",
      "Real-time data synchronization",
      "Infrastructure built to hold up under load",
    ],
  },
  {
    id: "api-and-third-party-integrations",
    index: "04 / 06",
    title: "API & Third-Party Integrations",
    body:
      "Connect your application with payment gateways, social platforms, CRMs, analytics tools, and other external services.",
    bullets: [
      "Payment gateway integrations",
      "CRM and analytics connections",
      "Social platform sign-in and sharing",
    ],
  },
  {
    id: "cross-platform-app-development",
    index: "05 / 06",
    title: "Cross-Platform App Development",
    body:
      "Develop applications that work flawlessly across multiple platforms while reducing development time and costs.",
    bullets: [
      "Shared codebase where it makes sense",
      "Reduced development time and cost",
      "Consistent behavior across devices",
    ],
  },
  {
    id: "app-maintenance-and-support",
    index: "06 / 06",
    title: "App Maintenance & Support",
    body:
      "Ensure long-term success through regular updates, performance optimization, security enhancements, and ongoing technical support.",
    bullets: [
      "Regular updates and patching",
      "Performance optimization over time",
      "Security enhancements as threats evolve",
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
    name: "Flutter",
    icon: CodeIcon,
    color: "#02569B",
  },
  {
    name: "React Native",
    icon: PhoneIphoneIcon,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: DataObjectIcon,
    color: "#3178C6",
  },
  {
    name: "Solidity",
    icon: AccountBalanceWalletIcon,
    color: "#8C8C8C",
  },
  {
    name: "Ruby",
    icon: CodeIcon,
    color: "#CC342D",
  },
  {
    name: "Android",
    icon: AndroidIcon,
    color: "#3DDC84",
  },
  {
    name: "Express.js",
    icon: ApiIcon,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: DnsIcon,
    color: "#339933",
  },
  {
    name: "PostgreSQL",
    icon: StorageIcon,
    color: "#4169E1",
  },
  {
    name: "Git/GitHub",
    icon: GitHubIcon,
    color: "#FFFFFF",
  },
];

/* =========================================================
   FAQS
========================================================= */

const FAQS = [
  {
    q: "Flutter or React Native — which do you recommend?",
    a:
      "It depends on your team and goals — both give you a single codebase for iOS and Android. We'll recommend one based on your existing stack, timeline, and any native features the app needs.",
  },
  {
    q: "Can the app work without an internet connection?",
    a:
      "Yes, where it matters — we build offline-first data sync (SQLite / WatermelonDB) so core functionality keeps working on a weak or dropped connection.",
  },
  {
    q: "Do you handle App Store and Play Store submission?",
    a:
      "Yes — build, submission, and the review process are part of a standard engagement.",
  },
  {
    q: "What happens after launch?",
    a:
      "Ongoing maintenance, updates, performance monitoring, and security patching are available as a continuing arrangement, not a one-time handoff.",
  },
];

/* =========================================================
   CSS
========================================================= */

const pageStyles = `
  /* =========================================================
     GOOGLE FONT
  ========================================================= */

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');


  /* =========================================================
     ROOT VARIABLES
  ========================================================= */

  :root {
    --tl-bg: #000000;
    --tl-bg-soft: #050505;
    --tl-fg: #ffffff;
    --tl-muted: #cfcfcf;
    --tl-accent: #35a51c;
    --tl-accent-light: #35a51c;
    --tl-border: rgba(29, 98, 12, 0.55);
  }


  /* =========================================================
     GLOBAL
  ========================================================= */

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
    font-family: "DM Sans" !important;
  }

  body {
    overflow-x: hidden;
    font-family: "DM Sans" !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  /* =========================================================
     FORCE DM SANS
  ========================================================= */

  .tl-root,
  .tl-root *,
  .tl-root h1,
  .tl-root h2,
  .tl-root h3,
  .tl-root h4,
  .tl-root h5,
  .tl-root h6,
  .tl-root p,
  .tl-root span,
  .tl-root div,
  .tl-root li,
  .tl-root a,
  .tl-root button,
  .tl-root input,
  .tl-root textarea,
  .tl-root label {
    font-family: "DM Sans" !important;
  }

  .tl-root .MuiTypography-root {
    font-family: "DM Sans" !important;
  }

  .tl-root .MuiBreadcrumbs-root,
  .tl-root .MuiBreadcrumbs-root * {
    font-family: "DM Sans" !important;
  }

  .tl-root .MuiAccordion-root,
  .tl-root .MuiAccordionSummary-root,
  .tl-root .MuiAccordionSummary-root *,
  .tl-root .MuiAccordionSummary-content,
  .tl-root .MuiAccordionDetails-root,
  .tl-root .MuiAccordionDetails-root * {
    font-family: "DM Sans" !important;
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
    font-family: "DM Sans" !important;
  }


  /* =========================================================
     WRAPPER
  ========================================================= */

  .tl-wrap {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  }


  /* =========================================================
     ANIMATIONS
  ========================================================= */

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
    font-family: "DM Sans" !important;
  }

  .tl-breadcrumb a:hover {
    color: var(--tl-accent-light);
  }

  .tl-breadcrumb-current {
    color: var(--tl-fg);
    font-size: 13px;
    font-family: "DM Sans" !important;
  }


  /* =========================================================
     HERO
  ========================================================= */

  .tl-hero {
    padding-bottom: 24px;
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
    font-family: "DM Sans" !important;
  }

  .tl-hero h1 {
    margin: 0 0 20px;
    color: var(--tl-fg);
    font-size: clamp(32px, 4.5vw, 48px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -1px;
    font-family: "DM Sans" !important;
  }

  .tl-hero h1 em {
    color: var(--tl-accent-light);
    font-style: normal;
    font-family: "DM Sans" !important;
  }

  .tl-lede {
    max-width: 52ch;
    margin: 0 0 32px;
    color: var(--tl-muted);
    font-size: 17px;
    line-height: 1.6;
    font-family: "DM Sans" !important;
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
     SECTIONS
  ========================================================= */

  .tl-section {
    padding: 40px 0;
  }

  .tl-section-soft {
    padding: 32px 0 32px;
    background: var(--tl-bg-soft);
  }

  .tl-section h2,
  .tl-section-soft h2 {
    margin: 0 0 40px;
    color: var(--tl-fg);
    font-size: clamp(26px, 3.5vw, 36px);
    font-weight: 700;
    line-height: 1.2;
    font-family: "DM Sans" !important;
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
    color: var(--tl-fg);
    font-size: 17px;
    font-weight: 700;
    line-height: 1.35;

    transition:
      transform 0.3s ease,
      color 0.3s ease;

    font-family: "DM Sans" !important;
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
    font-family: "DM Sans" !important;
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

    font-family: "DM Sans" !important;
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

    font-family: "DM Sans" !important;
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

    font-family: "DM Sans" !important;
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

    font-family: "DM Sans" !important;
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
     TECHNOLOGIES
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

  .tl-tech-container {
    width: 100%;

    max-width: 1140px;

    margin: 0 auto;

    padding: 0 24px;
  }

  .tl-tech-section h2 {
    text-align: center;

    margin: 0 0 28px;

    color: #ffffff;

    font-size:
      clamp(27px, 3.5vw, 36px);

    font-weight: 700;
    line-height: 1.2;

    font-family: "DM Sans" !important;
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

  .tl-tech-track {
    display: flex;

    width: max-content;

    gap: 14px;

    animation:
      tlTechnologyMove 28s linear infinite;

    will-change: transform;
  }

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

    font-family: "DM Sans" !important;
  }

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

  .tl-tech-item span {
    font-family: "DM Sans" !important;
  }

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

  .tl-tech-marquee:hover .tl-tech-track {
    animation-play-state: paused;
  }


  /* =========================================================
     FAQ
  ========================================================= */

  .tl-section-soft {
    background-color: #000000;
  }

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

    font-family: "DM Sans" !important;
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
    font-weight: 600;

    font-family: "DM Sans" !important;
  }

  .tl-faq-summary *,
  .tl-faq-summary .MuiAccordionSummary-content {
    font-family: "DM Sans" !important;
  }

  .tl-faq-icon {
    color: #1e8511 !important;

    font-size: 22px !important;

    transition:
      transform 0.2s ease;
  }

  .tl-faq-details {
    font-family: "DM Sans" !important;
  }

  .tl-faq-details p {
    margin: 0;

    color:
      var(--tl-muted);

    font-size: 14px;
    line-height: 1.6;

    font-family: "DM Sans" !important;
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

    .tl-section,
    .tl-section-soft {
      padding: 32px 0;
    }

    .tl-service-block-grid {
      grid-template-columns: 1fr;
      gap: 24px;
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

    .tl-faq-container {
      padding: 0 16px;
    }

    .tl-faq-summary {
      min-height:
        68px !important;

      font-size: 14px;
      line-height: 1.4;
    }

    .tl-faq-details p {
      font-size: 13px;
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
    useState<string | false>(FAQS[0].q);

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

              <a href="/">
                Home
              </a>

              <a href="/services">
                Services
              </a>

              <span className="tl-breadcrumb-current">
                App Development
              </span>

            </Breadcrumbs>


            {/* HERO GRID */}

            <Box className="tl-hero-grid">

              {/* LEFT */}

              <Box>

                <div className="tl-eyebrow">
                  EXTENSION OF OUR CORE — MOBILE-FIRST DELIVERY
                </div>

                <Typography component="h1">
                  Ideas turned into{" "}
                  <em>
                    scalable digital products.
                  </em>
                </Typography>

                <Typography className="tl-lede">
                  A slow or clunky app costs you users.
                  We build cross-platform iOS and
                  Android applications engineered for
                  offline resilience, native-feeling
                  performance, and interfaces people
                  actually enjoy using.
                </Typography>

              </Box>


              {/* RIGHT IMAGE */}

              <Box className="tl-hero-photo">

                <img
                  src={AppImage}
                  alt="App development dashboard"
                />

              </Box>

            </Box>

          </Container>

        </Box>


        {/* =====================================================
            WHY APP DEVELOPMENT
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
              Why App Development
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


      {/* FOOTER */}

      <Footer />
    </>
  );
};

export default AppDevelopmentPage;