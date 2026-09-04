import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

// ============== Scroll-Reveal Wrapper (fade + slide up on view) ==============
function ScrollReveal({
  children,
  index = 0,
  sx = {},
}: {
  children: React.ReactNode;
  index?: number;
  sx?: Record<string, unknown>;
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition:
          `opacity 0.55s ease ${index * 0.07}s, ` +
          `transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.07}s`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ============== Small Check-Mark Icon (used in "The Challenge" list) ==============
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="12" cy="12" r="10" stroke="#20A914" strokeWidth="1.6" />
      <path
        d="M7.5 12.5 L10.5 15.5 L16.5 9"
        stroke="#20A914"
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
    <Typography
      sx={{
        fontFamily: "'Istok Web', sans-serif",
        fontSize: { xs: "13px", sm: "14px" },
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "#20A914",
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  );
}

// ============== Dashed Divider (matches the rest of the site) ==============
function Divider() {
  return (
    <Box
      sx={{
        width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
        mx: "auto",
        my: { xs: 4, md: 6 },
        height: "1px",
        background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
        opacity: 0.85,
      }}
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

export default function CaseStudyDetail({ data }: { data: CaseStudyDetailData }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(
            circle at 50% 0%,
            rgba(15, 98, 3, 0.22),
            transparent 28rem
          ),
          #000000
        `,
        color: "#ffffff",
        position: "relative",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Green Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: "-10% auto auto 50%",
          width: "600px",
          height: "350px",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "rgba(18, 109, 5, 0.14)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* ================= HERO ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 4, sm: 5, md: 6 },
          pb: { xs: 4, md: 5 },
        }}
      >
        {/* Eyebrow pill */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: "28px",
            px: "14px",
            py: "3px",
            border: "1.5px solid #157a08",
            borderRadius: "999px",
            color: "#20A914",
            background: "rgba(0, 17, 0, 0.45)",
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 600,
            letterSpacing: "0.12em",
            lineHeight: 1,
            textTransform: "uppercase",
            mb: { xs: 2.5, md: 3 },
          }}
        >
          {data.eyebrow}
        </Box>

        {/* Headline */}
        <Typography
          variant="h1"
          sx={{
            margin: 0,
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "28px", sm: "36px", md: "42px" },
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#ffffff",
            mb: { xs: 2, md: 2.5 },
          }}
        >
          {data.title}
          <Box component="span" sx={{ color: "#20A914" }}>
            : {data.headline}
          </Box>
        </Typography>

        {/* Intro paragraph */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "15px", sm: "17px" },
            lineHeight: 1.6,
            color: "#c9c9c9",
            maxWidth: "720px",
            mb: { xs: 4, md: 5 },
            opacity: 0.92,
          }}
        >
          {data.intro}
        </Typography>

        {/* Meta stats row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: `repeat(${data.meta.length}, 1fr)` },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {data.meta.map((item) => (
            <Box
              key={item.label}
              sx={{
                p: { xs: 1.75, md: 2 },
                border: "1px solid rgba(32, 169, 20, 0.25)",
                borderRadius: "12px",
                background: "rgba(10, 22, 10, 0.4)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Istok Web', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#8f8f8f",
                  mb: 0.5,
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Istok Web', sans-serif",
                  fontSize: { xs: "13.5px", md: "14.5px" },
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
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
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <ScrollReveal>
          <Eyebrow>Project Overview</Eyebrow>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: { xs: "15px", sm: "16px" },
              lineHeight: 1.75,
              color: "#c9c9c9",
              maxWidth: "760px",
              opacity: 0.92,
            }}
          >
            {data.overview}
          </Typography>
        </ScrollReveal>
      </Container>

      <Divider />

      {/* ================= THE CHALLENGE ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <ScrollReveal>
          <Eyebrow>The Challenge</Eyebrow>
          <Typography
            sx={{
              fontFamily: "'Francois One', sans-serif",
              fontSize: { xs: "20px", sm: "22px" },
              fontWeight: 400,
              color: "#ffffff",
              mb: 2.5,
              maxWidth: "620px",
            }}
          >
            {data.challengeLabel}
          </Typography>
        </ScrollReveal>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {data.challenge.map((point, index) => (
            <ScrollReveal key={point} index={index}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                <CheckIcon />
                <Typography
                  sx={{
                    fontFamily: "'Istok Web', sans-serif",
                    fontSize: { xs: "14.5px", sm: "15px" },
                    lineHeight: 1.6,
                    color: "#c9c9c9",
                    maxWidth: "680px",
                    opacity: 0.92,
                  }}
                >
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
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <ScrollReveal>
          <Eyebrow>{data.approachLabel}</Eyebrow>
        </ScrollReveal>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 2, md: 2.5 },
            mt: { xs: 1, md: 1.5 },
          }}
        >
          {data.approach.map((item, index) => (
            <ScrollReveal key={item.title} index={index}>
              <Box
                sx={{
                  p: { xs: 2.25, md: 2.5 },
                  borderRadius: "14px",
                  border: "1px solid rgba(32, 169, 20, 0.22)",
                  background: "rgba(10, 22, 10, 0.35)",
                  height: "100%",
                  transition:
                    "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, transform 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(32, 169, 20, 0.7)",
                    background: "rgba(15, 42, 12, 0.5)",
                    boxShadow: "0 0 22px rgba(32, 169, 20, 0.2)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Francois One', sans-serif",
                    fontSize: "16px",
                    color: "#20A914",
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Istok Web', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#c9c9c9",
                    opacity: 0.92,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ================= RESULTS (pull-quote) ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 2, md: 3 },
        }}
      >
        <ScrollReveal>
          <Eyebrow>Results</Eyebrow>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 4 },
              borderRadius: "16px",
              border: "1px solid rgba(32, 169, 20, 0.3)",
              background: "rgba(10, 22, 10, 0.45)",
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                top: { xs: 8, md: 12 },
                left: { xs: 16, md: 22 },
                fontFamily: "'Francois One', sans-serif",
                fontSize: { xs: "48px", md: "64px" },
                color: "rgba(32, 169, 20, 0.35)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              “
            </Box>
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontStyle: "italic",
                fontSize: { xs: "15.5px", sm: "17px" },
                lineHeight: 1.7,
                color: "#e6e6e6",
                position: "relative",
                zIndex: 1,
                pl: { xs: 1, md: 2 },
              }}
            >
              {data.result}
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>

      {/* ================= TECH STACK (optional) ================= */}
      {data.techStack && data.techStack.length > 0 && (
        <>
          <Divider />
          <Container
            maxWidth={false}
            sx={{
              maxWidth: "1000px",
              position: "relative",
              zIndex: 1,
              px: { xs: 2.5, sm: 4, md: 5 },
              pb: { xs: 2, md: 3 },
            }}
          >
            <ScrollReveal>
              <Eyebrow>Tech Stack</Eyebrow>
              <Box
                sx={{
                  border: "1px solid rgba(32, 169, 20, 0.22)",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                {data.techStack.map((row, index) => (
                  <Box
                    key={row.layer}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      px: { xs: 2, md: 2.5 },
                      py: 1.5,
                      borderBottom:
                        index === data.techStack!.length - 1
                          ? "none"
                          : "1px solid rgba(32, 169, 20, 0.18)",
                      background:
                        index % 2 === 0 ? "rgba(10, 22, 10, 0.35)" : "transparent",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Istok Web', sans-serif",
                        fontSize: "13.5px",
                        fontWeight: 700,
                        color: "#8f8f8f",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {row.layer}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Istok Web', sans-serif",
                        fontSize: "14px",
                        color: "#ffffff",
                      }}
                    >
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
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <ScrollReveal>
          <Eyebrow>Services Provided</Eyebrow>
          <Box sx={{ display: "flex", gap: 1.25, flexWrap: "wrap" }}>
            {data.services.map((service) => (
              <Box
                key={service}
                sx={{
                  px: "14px",
                  py: "7px",
                  borderRadius: "999px",
                  border: "1px solid rgba(32, 169, 20, 0.5)",
                  fontFamily: "'Istok Web', sans-serif",
                  fontSize: "13px",
                  color: "#20A914",
                }}
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
        sx={{
          maxWidth: "1000px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pb: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <ScrollReveal>
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: "20px",
              border: "1px solid rgba(32, 169, 20, 0.3)",
              background: "rgba(10, 22, 10, 0.4)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Francois One', sans-serif",
                fontSize: { xs: "22px", sm: "26px" },
                fontWeight: 400,
                color: "#ffffff",
                mb: 1.5,
              }}
            >
              {data.ctaHeadline}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: { xs: "14.5px", sm: "15.5px" },
                lineHeight: 1.6,
                color: "#c9c9c9",
                maxWidth: "560px",
                mx: "auto",
                mb: 3,
                opacity: 0.9,
              }}
            >
              {data.ctaText}
            </Typography>
            <Button
              component="a"
              href={data.ctaHref}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                minWidth: { xs: "160px", sm: "190px" },
                height: "50px",
                px: "24px",
                background: "#1D620C",
                color: "#ffffff",
                border: "none",
                borderRadius: "999px",
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: 700,
                lineHeight: 1,
                textTransform: "none",
                cursor: "pointer",
                boxShadow: "none",
                transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  background: "#1e8511",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(31, 137, 17, 0.3)",
                },
              }}
            >
              <span>Start Your Project</span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: 400, lineHeight: 1 }}>
                →
              </span>
            </Button>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}