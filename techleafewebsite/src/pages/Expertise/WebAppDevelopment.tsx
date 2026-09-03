import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Link as MuiLink,
  Breadcrumbs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import AppImage from "../../assets/App Development.png";
import Footer from "../../component/Footer";

/* DATA*/

const METRICS = [
  {
    value: "99.9%",
    label: "Uptime & reliability",
  },
  {
    value: "<100ms",
    label: "Average API latency",
  },
  {
    value: "100/100",
    label: "Lighthouse performance target",
  },
];

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

const STACK = [
  "Flutter",
  "React Native",
  "TypeScript",
  "Solidity",
  "Ruby",
  "Android",
  "Express.js",
  "Node.js",
  "PostgreSQL",
  "Git/GitHub",
];

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

/*ARROW*/

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

/*CSS*/

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

  /* ROOT*/

  .tl-root {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    color: var(--tl-fg);
    background: var(--tl-bg);
    font-family: "Inter", "Segoe UI", Roboto, sans-serif;
  }

  .tl-wrap {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /*ANIMATIONS*/

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

  /* BREADCRUMB*/

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

  /*HERO*/

  .tl-hero {
    padding-bottom: 56px;
    border-bottom: 1px solid var(--tl-accent);
  }

  .tl-hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    align-items: center;
    gap: 48px;
  }

  .tl-hero-grid > div:first-child {
    animation: tlFadeLeft 0.8s ease both;
  }

  .tl-eyebrow {
    margin-bottom: 16px;
    color: var(--tl-accent-light);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
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

  /*  HERO IMAGE*/

  .tl-hero-photo {
    width: 100%;
    animation: tlFadeRight 0.8s ease 0.15s both;
  }

  .tl-hero-photo img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    border: 1px solid var(--tl-accent);
    border-radius: 16px;
    object-fit: cover;

    animation: tlFloat 5s ease-in-out 1s infinite;

    transition:
      transform 0.4s ease,
      border-color 0.4s ease,
      box-shadow 0.4s ease;
  }

  .tl-hero-photo img:hover {
    animation-play-state: paused;
    transform: scale(1.02);
    border-color: var(--tl-accent-light);
    box-shadow: 0 20px 50px rgba(29, 98, 12, 0.25);
  }

  /*BUTTONS*/

  .tl-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    animation: tlFadeUp 0.8s ease 0.3s both;
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
    background: var(--tl-accent) !important;
  }

  .tl-btn-primary:hover {
    transform: translateY(-4px);
    background: #24790f !important;
    box-shadow: 0 10px 25px rgba(29, 98, 12, 0.3);
  }

  .tl-btn-ghost {
    color: var(--tl-fg) !important;
    background: transparent !important;
    border: 1px solid #333333 !important;
  }

  .tl-btn-ghost:hover {
    transform: translateY(-4px);
    color: var(--tl-accent-light) !important;
    border-color: var(--tl-accent-light) !important;
  }

  .arrow-cta {
    display: inline-flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .tl-btn-primary:hover .arrow-cta,
  .tl-btn-ghost:hover .arrow-cta {
    transform: translateX(5px);
  }

  /* METRICS*/

  .tl-metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 56px;
  }

  .tl-metric-card {
    position: relative;
    min-width: 0;
    min-height: 125px;
    padding: 28px 24px;

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

    border: 1px solid var(--tl-border);
    border-radius: 16px;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .tl-metric-card:nth-child(1) {
    animation: tlFadeUp 0.6s ease 0.15s both;
  }

  .tl-metric-card:nth-child(2) {
    animation: tlFadeUp 0.6s ease 0.3s both;
  }

  .tl-metric-card:nth-child(3) {
    animation: tlFadeUp 0.6s ease 0.45s both;
  }

  .tl-metric-card::after {
    content: "";
    position: absolute;
    right: 15%;
    bottom: 0;
    left: 15%;
    height: 2px;

    background: var(--tl-accent-light);

    transform: scaleX(0);
    transition: transform 0.35s ease;
  }

  .tl-metric-card:hover {
    transform: translateY(-8px);
    border-color: var(--tl-accent-light);
    box-shadow: 0 15px 40px rgba(29, 98, 12, 0.18);
  }

  .tl-metric-card:hover::after {
    transform: scaleX(1);
  }

  .tl-mn {
    margin-bottom: 10px;
    color: var(--tl-accent-light);
    font-size: clamp(27px, 3vw, 34px);
    font-weight: 800;
    line-height: 1;

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .tl-metric-card:hover .tl-mn {
    color: #ffffff;
    transform: scale(1.06);
  }

  .tl-ml {
    color: var(--tl-muted);
    font-size: 13px;
    line-height: 1.4;
    text-align: center;
  }

  /*  SECTIONS*/

  .tl-section {
    padding: 72px 0;
  }

  .tl-section-soft {
    padding: 72px 0;
    background: var(--tl-bg-soft);
    border-top: 1px solid rgba(29, 98, 12, 0.35);
    border-bottom: 1px solid rgba(29, 98, 12, 0.35);
  }

  .tl-section h2,
  .tl-section-soft h2 {
    margin: 0 0 40px;
    color: var(--tl-fg);
    font-size: clamp(26px, 3.5vw, 36px);
    font-weight: 700;
    line-height: 1.2;
  }

  /*  WHY CARDS */

  .tl-grid-3 {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }

  .tl-card {
    min-width: 0;
    padding: 24px;
    background: #000000;
    border: 1px solid var(--tl-accent);
    border-radius: 14px;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease,
      box-shadow 0.35s ease;
  }

  .tl-card:hover {
    transform: translateY(-8px);
    border-color: var(--tl-accent-light);
    box-shadow: 0 15px 35px rgba(29, 98, 12, 0.18);
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
  }

  .tl-card:hover h3 {
    color: var(--tl-accent-light);
    transform: translateX(3px);
  }

  .tl-card p {
    margin: 0;
    color: var(--tl-muted);
    font-size: 14px;
    line-height: 1.6;
  }

  /* SERVICES*/

  .tl-service-block {
    padding: 40px 0;
    border-top: 1px solid rgba(29, 98, 12, 0.4);

    transition:
      padding-left 0.3s ease,
      border-color 0.3s ease;
  }

  .tl-service-block:first-of-type {
    border-top: 0;
  }

  .tl-service-block:hover {
    padding-left: 10px;
    border-color: rgba(53, 165, 28, 0.8);
  }

  .tl-service-block-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 40px;
  }

  .tl-service-index {
    margin-bottom: 12px;
    color: var(--tl-accent-light);
    font-size: 13px;
    font-weight: 600;

    transition:
      transform 0.3s ease,
      letter-spacing 0.3s ease;
  }

  .tl-service-block:hover .tl-service-index {
    transform: translateX(4px);
    letter-spacing: 1px;
  }

  .tl-service-block h3 {
    margin: 0 0 12px;
    color: var(--tl-fg);
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  .tl-service-block:hover h3 {
    color: var(--tl-accent-light);
    transform: translateX(3px);
  }

  .tl-service-block p {
    margin: 0;
    color: var(--tl-muted);
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

    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

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
    background: var(--tl-accent-light);

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
    box-shadow: 0 0 10px rgba(53, 165, 28, 0.8);
  }

  /* TECHNOLOGIES */

  .tl-stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .tl-stack-chip {
    padding: 8px 16px;
    color: var(--tl-accent-light);
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;

    border: 1px solid var(--tl-accent);
    border-radius: 999px;

    transition:
      transform 0.3s ease,
      color 0.3s ease,
      background-color 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .tl-stack-chip:hover {
    transform: translateY(-5px);
    color: #ffffff;
    background: var(--tl-accent);
    border-color: var(--tl-accent-light);
    box-shadow: 0 8px 20px rgba(29, 98, 12, 0.25);
  }

  /* CTA*/

  .tl-cta-band {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding: 48px;

    background: var(--tl-bg-soft);
    border: 1px solid var(--tl-accent);
    border-radius: 16px;

    animation: tlGlow 4s ease-in-out infinite;

    transition:
      transform 0.35s ease,
      border-color 0.35s ease;
  }

  .tl-cta-band:hover {
    transform: translateY(-6px);
    border-color: var(--tl-accent-light);
  }

  .tl-cta-band h2 {
    margin: 0 0 8px;
    color: var(--tl-fg);
    font-size: 26px;
  }

  .tl-cta-band p {
    max-width: 48ch;
    margin: 0;
    color: var(--tl-muted);
    line-height: 1.6;
  }

  /* FAQ */

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
    color: var(--tl-fg) !important;
    background: transparent !important;
    border-bottom: 1px solid rgba(29, 98, 12, 0.4);

    box-shadow: none !important;

    transition:
      padding-left 0.3s ease,
      border-color 0.3s ease !important;
  }

  .tl-faq-accordion::before {
    display: none;
  }

  .tl-faq-accordion:hover {
    padding-left: 6px;
    border-color: var(--tl-accent-light);
  }

  .tl-faq-summary {
    min-height: 60px !important;
    color: #ffffff !important;
    font-size: 15px;
    font-weight: 600;
  }

  .tl-faq-icon {
    color: var(--tl-accent-light) !important;

    transition: transform 0.3s ease;
  }

  .tl-faq-accordion.Mui-expanded .tl-faq-icon {
    transform: rotate(180deg);
  }

  .tl-faq-details p {
    margin: 0;
    color: var(--tl-muted);
    font-size: 14px;
    line-height: 1.6;
  }

  /*TABLET */

  @media (max-width: 1000px) {
    .tl-wrap {
      padding: 0 28px;
    }

    .tl-hero-grid {
      gap: 32px;
    }

    .tl-grid-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
  }

  /* MOBILE */

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
  }

  /* SMALL MOBILE*/

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

    .tl-stack-row {
      gap: 8px;
    }

    .tl-stack-chip {
      padding: 7px 12px;
      font-size: 12px;
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
      min-height: 56px !important;
      font-size: 14px;
      line-height: 1.4;
    }

    .tl-faq-details p {
      font-size: 13px;
    }
  }

  /*VERY SMALL PHONES*/

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

    .tl-cta-band {
      padding: 24px 16px;
    }
  }

  /* ACCESSIBILITY*/

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

/*COMPONENT*/

const AppDevelopmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | false>(
    FAQS[0].q
  );

  return (
    <>
      <Box className="tl-root">
        <style>{pageStyles}</style>

        {/* HERO */}
        <Box component="section" className="tl-hero">
          <Container
            className="tl-wrap"
            maxWidth={false}
            disableGutters
          >
            <Breadcrumbs
              className="tl-breadcrumb"
              separator="/"
            >
              <MuiLink href="/" underline="none">
                Home
              </MuiLink>

              <MuiLink href="/expertise" underline="none">
                Expertise
              </MuiLink>

              <Typography
                component="span"
                className="tl-breadcrumb-current"
              >
                App Development
              </Typography>
            </Breadcrumbs>

            <Box className="tl-hero-grid">
              <Box>
                <div className="tl-eyebrow">
                  Extension of our core — mobile-first delivery
                </div>

                <Typography component="h1">
                  Ideas turned into{" "}
                  <em>scalable digital products.</em>
                </Typography>

                <Typography className="tl-lede">
                  A slow or clunky app costs you users. We build
                  cross-platform iOS and Android applications
                  engineered for offline resilience, native-feeling
                  performance, and interfaces people actually enjoy
                  using.
                </Typography>

                <Box className="tl-hero-actions">
                  <Button
                    href="/contact"
                    className="tl-btn-primary"
                  >
                    Start a project
                    <ArrowCta />
                  </Button>

                  <Button
                    href="#details"
                    className="tl-btn-ghost"
                  >
                    See what&apos;s included
                    <ArrowCta />
                  </Button>
                </Box>
              </Box>

              <Box className="tl-hero-photo">
                <img
                  src={AppImage}
                  alt="App development dashboard"
                  loading="lazy"
                />
              </Box>
            </Box>

            {/* METRICS */}
            <Box className="tl-metrics-grid">
              {METRICS.map((metric) => (
                <Box
                  className="tl-metric-card"
                  key={metric.label}
                >
                  <div className="tl-mn">
                    {metric.value}
                  </div>

                  <div className="tl-ml">
                    {metric.label}
                  </div>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* WHY APP DEVELOPMENT */}
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

        {/* SERVICES */}
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
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ))}
          </Container>
        </Box>

        {/* TECHNOLOGIES */}
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
              Technologies
            </div>

            <Typography component="h2">
              What we build it with
            </Typography>

            <Box className="tl-stack-row">
              {STACK.map((technology) => (
                <span
                  className="tl-stack-chip"
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </Box>
          </Container>
        </Box>

        {/* CTA */}
        <Box
          component="section"
          className="tl-section"
        >
          <Container
            className="tl-wrap"
            maxWidth={false}
            disableGutters
          >
            <Box className="tl-cta-band">
              <Box>
                <Typography component="h2">
                  Ready to build an app?
                </Typography>

                <Typography component="p">
                  Partner with Tech Leafe Technologies to build
                  a mobile application that helps your business
                  connect, grow, and succeed.
                </Typography>
              </Box>

              <Button
                href="/contact"
                className="tl-btn-primary"
              >
                Let&apos;s build together
                <ArrowCta />
              </Button>
            </Box>
          </Container>
        </Box>

        {/* FAQ */}
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
                  expanded={openFaq === faq.q}
                  onChange={(_, expanded) => {
                    setOpenFaq(
                      expanded ? faq.q : false
                    );
                  }}
                  disableGutters
                >
                  <AccordionSummary
                    className="tl-faq-summary"
                    expandIcon={
                      <ExpandMoreIcon className="tl-faq-icon" />
                    }
                  >
                    {faq.q}
                  </AccordionSummary>

                  <AccordionDetails className="tl-faq-details">
                    <p>{faq.a}</p>
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