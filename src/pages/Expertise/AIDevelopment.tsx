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
import AppImage from "../../assets/aidevelopment.png"
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiNextdotjs,
  SiSolidity,
  SiRuby,
  SiTypescript,
} from "react-icons/si";

import PsychologyIcon from "@mui/icons-material/Psychology";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Footer from "../../components/Footer/Footer";
import "./ServiceDevelopment.css";
const WHY_CARDS = [
  {
    title: "Intelligent Automation",
    body:
      "Automate repetitive tasks and business workflows using intelligent, self-correcting AI systems.",
  },
  {
    title: "Grounded, Not Guessing",
    body:
      "Chatbot and agent responses stay grounded in your own verified documents, with source attribution.",
  },
  {
    title: "Private by Default",
    body:
      "Deploy inside your own cloud tenant so proprietary data never leaves your perimeter.",
  },
  {
    title: "Business Growth",
    body:
      "Use AI to improve productivity, efficiency, scalability, and long-term growth, not just novelty.",
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
    id: "AI Workflow Automation & Agentic Networks",
    index: "01 / 03",
    title: "AI Workflow Automation & Agentic Networks",
    body:
      "We deploy self-correcting multi-agent systems that triage tasks, validate compliance, and process documents around the clock, cutting the operational drag of manual review.",
    bullets: [
      "Intelligent document parsing (OCR / IDP)",
      "Predictive process monitoring",
      "Multi-agent workflow orchestration (CrewAI, LangGraph)",
      "Automated resolution before downtime hits",
    ],
  },
  {
    id: "Enterprise RAG Chatbots",
    index: "02 / 03",
    title: "Enterprise RAG Chatbots",
    body:
      "We turn your manuals, PDFs, and databases into an active, instant-response knowledge base for employees and customers — answers stay grounded in your own documents.",
    bullets: [
      "Hybrid vector search (Pinecone, Qdrant)",
      "Source-attributed answers",
      "Deployed on WhatsApp, Slack, Teams, or embedded in your product  ",
      "Built for internal or customer-facing use",
    ],
  },
  {
    id: "Predictive Machine Learning",
    index: "03 / 03",
    title: "Predictive Machine Learning",
    body:
      "We move you from reactive firefighting to proactive planning — forecasting demand, detecting fraud, and flagging quality issues in real time.",
    bullets: [
      "Demand & financial forecasting",
      "Real-time anomaly & fraud detection",
      "Computer vision for quality inspection",
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
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "#EE4C2C",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "#FF6F00",
  },
  {
    name: "LangChain & CrewAI",
    icon: SiLangchain,
    color: "#1C3C3C",
  },
  {
    name: "Pinecone & Qdrant",
    icon: StorageIcon,
    color: "#5B5BD6",
  },
  {
    name: "AWS SageMaker",
    icon: CloudIcon,
    color: "#FF9900",
  },
  {
    name: "OpenAI",
    icon: SmartToyIcon,
    color: "#FFFFFF",
  },
  {
    name: "NLP",
    icon: PsychologyIcon,
    color: "#35A51C",
  },
  {
    name: "Computer Vision",
    icon: VisibilityIcon,
    color: "#35A51C",
  },
  {
    name: "Next.js & Flutter",
    icon: SiNextdotjs,
    color: "#FFFFFF",
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
];

const FAQS = [
  {
    q: "How do you keep our data from leaking into public AI models?",
    a:
      "Where it matters, we deploy inside your own private cloud (VPC) rather than calling public model APIs, so proprietary data stays inside your perimeter.",
  },
  {
    q: "How do you reduce chatbot hallucination?",
    a:
      "Responses are grounded in your own indexed documents through hybrid vector search, with source attribution — the model is answering from your data, not guessing.",
  },
  {
    q: "Do we own the fine-tuned model afterwards?",
    a:
      "Yes — for private fine-tuning engagements, you retain full ownership of the model weights, code, and data pipelines we build.",
  },
  {
    q: "How long does an AI project typically take?",
    a:
      "A single chatbot or automation workflow usually takes a few weeks; a broader multi-agent system or fine-tuned private model runs longer, depending on your data readiness.",
  },
];
/* =========================================================
   CSS
========================================================= */


/* =========================================================
   COMPONENT
========================================================= */

const AIDevelopmentServices: React.FC = () => {
  const [openFaq, setOpenFaq] =
    useState<string | false>(false);


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
              sx={{ fontFamily: '"DM Sans", sans-serif' }}
            >
            </Breadcrumbs>

            {/* HERO GRID */}

            <Box className="tl-hero-grid">

              {/* LEFT */}

              <Box>

                <div className="tl-eyebrow">
                  Extension of our core — think, automate, innovate
                </div>

                <Typography component="h1" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
                  Turn raw business data into an operations engine.
{" "}
                  <em>
                    built to hold up.
                  </em>
                </Typography>

                <Typography className="tl-lede" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
                 We replace manual operational bottlenecks with AI agents, grounded RAG knowledge bases, and private fine-tuned LLMs built
                  for your own data — not generic wrappers around a public API.
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
              WHY THIS MATTERS
            </div>

            <Typography component="h2" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
              Why AI Development
            </Typography> 

            <Box className="tl-grid-3">

              {WHY_CARDS.map((card) => (
                <Box
                  className="tl-card"
                  key={card.title}
                >

                  <Typography component="h3" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {card.title}
                  </Typography>

                  <Typography component="p" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
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

            <Typography component="h2" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
              Inside ai development
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

                    <Typography component="h3" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
                      {service.title}
                    </Typography>

                    <Typography component="p" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
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

        
            <Typography component="h2" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
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

            <Typography component="h2" sx={{ fontFamily: '"DM Sans", sans-serif' }}>
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

export default AIDevelopmentServices;
