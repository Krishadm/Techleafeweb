import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./CaseStudy.css";

// ============== Scroll-Reveal Wrapper (fade + slide up on view) ==============
function ScrollReveal({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      className={`case-study-reveal ${
        visible ? "case-study-reveal--visible" : ""
      }`}
      style={
        {
          "--reveal-delay": `${index * 0.07}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </Box>
  );
}

// ============== Small Check-Mark Icon ==============
function CheckIcon() {
  return (
    <svg
      className="case-study-check-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="var(--green-icon)"
        strokeWidth="1.6"
      />
      <path
        d="M7.5 12.5 L10.5 15.5 L16.5 9"
        stroke="var(--green-icon)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ============== Section Eyebrow ==============
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Typography className="case-study-eyebrow">
      {children}
    </Typography>
  );
}

// ============== Dashed Divider ==============
function Divider() {
  return (
    <Box
      className="case-study-divider"
      aria-hidden="true"
    />
  );
}

// ============== Data Shape ==============
export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyApproachItem {
  title: string;
  description: string;
}

export interface CaseStudyTechRow {
  layer: string;
  technology: string;
}

export interface CaseStudyDetailData {
  backHref?: string;
  eyebrow: string;
  title: string;
  headline: string;
  intro: string;
  meta: CaseStudyMeta[];
  overview: string;
  challengeLabel: string;
  challenge: string[];
  approachLabel: string;
  approach: CaseStudyApproachItem[];
  result: string;
  techStack?: CaseStudyTechRow[];
  services: string[];
  ctaHeadline: string;
  ctaText: string;
  ctaHref: string;
}

export default function CaseStudyDetail({
  data,
}: {
  data: CaseStudyDetailData;
}) {
  return (
    <Box className="case-study-page">
      {/* Background Green Glow */}
      <Box
        className="case-study-background-glow"
        aria-hidden="true"
      />

      {/* ================= HERO ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-hero"
      >
        {/* Eyebrow pill */}
        <Box className="case-study-eyebrow-pill">
          {data.eyebrow}
        </Box>

        {/* Headline */}
        <Typography
          variant="h1"
          className="case-study-headline"
        >
          {data.title}
          <Box
            component="span"
            className="case-study-headline-highlight"
          >
            : {data.headline}
          </Box>
        </Typography>

        {/* Intro paragraph */}
        <Typography className="case-study-intro">
          {data.intro}
        </Typography>

        {/* Meta stats row */}
        <Box
          className="case-study-meta-grid"
          style={
            {
              "--meta-count": data.meta.length,
            } as React.CSSProperties
          }
        >
          {data.meta.map((item) => (
            <Box
              key={item.label}
              className="case-study-meta-card"
            >
              <Typography className="case-study-meta-label">
                {item.label}
              </Typography>

              <Typography className="case-study-meta-value">
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ================= PROJECT OVERVIEW ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-section"
      >
        <ScrollReveal>
          <Eyebrow>Project Overview</Eyebrow>

          <Typography className="case-study-body-text case-study-overview-text">
            {data.overview}
          </Typography>
        </ScrollReveal>
      </Container>

      <Divider />

      {/* ================= THE CHALLENGE ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-section"
      >
        <ScrollReveal>
          <Eyebrow>The Challenge</Eyebrow>

          <Typography className="case-study-section-title">
            {data.challengeLabel}
          </Typography>
        </ScrollReveal>

        <Box className="case-study-challenge-list">
          {data.challenge.map((point, index) => (
            <ScrollReveal
              key={point}
              index={index}
            >
              <Box className="case-study-challenge-item">
                <CheckIcon />

                <Typography className="case-study-body-text case-study-challenge-text">
                  {point}
                </Typography>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ================= OUR APPROACH ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-section"
      >
        <ScrollReveal>
          <Eyebrow>{data.approachLabel}</Eyebrow>
        </ScrollReveal>

        <Box className="case-study-approach-grid">
          {data.approach.map((item, index) => (
            <ScrollReveal
              key={item.title}
              index={index}
            >
              <Box className="case-study-approach-card">
                <Typography className="case-study-approach-title">
                  {item.title}
                </Typography>

                <Typography className="case-study-body-text case-study-approach-description">
                  {item.description}
                </Typography>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ================= RESULTS ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-section"
      >
        <ScrollReveal>
          <Eyebrow>Results</Eyebrow>

          <Box className="case-study-result-card">
            <Box
              className="case-study-result-quote"
              aria-hidden="true"
            >
              “
            </Box>

            <Typography className="case-study-result-text">
              {data.result}
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>

      {/* ================= TECH STACK ================= */}
      {data.techStack && data.techStack.length > 0 && (
        <>
          <Divider />

          <Container
            maxWidth={false}
            className="case-study-container case-study-section"
          >
            <ScrollReveal>
              <Eyebrow>Tech Stack</Eyebrow>

              <Box className="case-study-tech-table">
                {data.techStack.map((row, index) => (
                  <Box
                    key={row.layer}
                    className={`case-study-tech-row ${
                      index === data.techStack!.length - 1
                        ? "case-study-tech-row--last"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "case-study-tech-row--alternate"
                        : ""
                    }`}
                  >
                    <Typography className="case-study-tech-layer">
                      {row.layer}
                    </Typography>

                    <Typography className="case-study-tech-value">
                      {row.technology}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </ScrollReveal>
          </Container>
        </>
      )}

      <Divider />

      {/* ================= SERVICES PROVIDED ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-services-section"
      >
        <ScrollReveal>
          <Eyebrow>Services Provided</Eyebrow>

          <Box className="case-study-services-list">
            {data.services.map((service) => (
              <Box
                key={service}
                className="case-study-service-pill"
              >
                {service}
              </Box>
            ))}
          </Box>
        </ScrollReveal>
      </Container>

      {/* ================= CTA ================= */}
      <Container
        maxWidth={false}
        className="case-study-container case-study-cta-section"
      >
        <ScrollReveal>
          <Box className="case-study-cta-card">
            <Typography className="case-study-cta-headline">
              {data.ctaHeadline}
            </Typography>

            <Typography className="case-study-cta-text">
              {data.ctaText}
            </Typography>

            <Button
              component="a"
              href={data.ctaHref}
              className="case-study-cta-button"
            >
              <span>Start Your Project</span>

              <span className="case-study-cta-arrow">
                →
              </span>
            </Button>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}