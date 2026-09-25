import { useState, useRef, useEffect, useCallback } from "react";
import type {
  TouchEvent,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

import "./HeroSection.css";

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

const HeroSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      key: "blockchain",
      title: "Blockchain",
      heading: "Decentralized Apps, Smart Contracts & Web3",
      description:
        "Build secure, audit-ready decentralized ecosystems. From EVM and Solana smart contracts to custom dApps, DeFi platforms, and tokenomics design, we deliver transparent Web3 infrastructure built for transactional security and scale.",
      icon: <ViewInArOutlinedIcon sx={{ fontSize: { xs: 34, sm: 40 } }} />,
      path: "expertise/blockchainDevelopment",
    },
    {
      key: "ai",
      title: "AI",
      heading: "Custom Enterprise AI & LLM Solutions",
      description:
        "Unlock the power of your internal business data with zero data leakage. We design production-ready Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agents, and private open-source LLM fine-tuning to automate complex corporate workflows.",
      icon: <PsychologyOutlinedIcon sx={{ fontSize: { xs: 34, sm: 40 } }} />,
      path: "expertise/aiDevelopmentServices",
    },
    {
      key: "app",
      title: "App",
      heading: "Full-Stack Web Engineering & Mobile Apps",
      description:
        "Turn your ideas into fast, intuitive software. We develop cross-platform iOS & Android applications and cloud-native full-stack web platforms engineered for low latency and a seamless user experience.",
      icon: (
        <PhoneIphoneOutlinedIcon sx={{ fontSize: { xs: 34, sm: 40 } }} />
      ),
      path: "expertise/appDevelopment",
    },
  ];

  return (
    <Box className="hero-section">
      {/* Heading */}
      <Typography className="hero-eyebrow">
        WHAT WE BUILD
      </Typography>

      <Typography
        variant="h3"
        className="hero-heading"
      >
        Three disciplines, one engineering pipeline.
      </Typography>

      {/* Grid starts here */}
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.key}>
            <Card className="service-card">
              <CardContent className="service-card-content">
                {/* Icon */}
                <Box
                  className="service-icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  className="service-heading"
                >
                  {service.heading}
                </Typography>

                <Typography className="service-description">
                  {service.description}
                </Typography>

                {/* Explore More button */}
                <Button
                  onClick={() => navigate(service.path)}
                  variant="contained"
                  aria-label={`Explore more about ${service.title}`}
                  className="explore-button"
                >
                  <Box component="span">Explore More</Box>

                  <Box
                    component="span"
                    className="explore-arrow"
                  >
                    →
                  </Box>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Our Methodology - carousel section */}
      <MethodologySection />
    </Box>
  );
};

const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Architecture & Feasibility",
    description:
      "Protocol selection, tokenomics modeling, and consensus framework mapping.",
  },
  {
    number: "02",
    title: "Blueprinting",
    description:
      "Interface standards, role-based access design, and technical wireframes.",
  },
  {
    number: "03",
    title: "Testnet Simulation",
    description:
      "Testnet deployment, RPC node setup, and indexing before anything touches mainnet.",
  },
  {
    number: "04",
    title: "Security Audit",
    description:
      "Static analysis, automated fuzz testing, and manual peer code review.",
  },
  {
    number: "05",
    title: "Mainnet Release",
    description:
      "Deployment, multi-sig setup where relevant, and ongoing performance monitoring.",
  },
];

const AUTOPLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 50;

const MethodologySection = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isAbove1200 = useMediaQuery("(min-width: 1201px)");

  const cardWidth = isXs ? 270 : isSm ? 300 : 340;
  const cardHeight = isXs ? 240 : isSm ? 260 : 240;
  const overlapFactor = isXs ? 0.62 : isSm ? 0.58 : 0.5;

  const length = methodologySteps.length;

  const [position, setPosition] = useState(0);
  const activeIndex = ((position % length) + length) % length;

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);

  const goNext = useCallback(() => {
    setPosition((p) => p + 1);
  }, []);

  const goPrev = useCallback(() => {
    setPosition((p) => p - 1);
  }, []);

  const goTo = useCallback(
    (targetRealIndex: number) => {
      setPosition((p) => {
        const currentReal = ((p % length) + length) % length;
        let delta = targetRealIndex - currentReal;

        if (delta > length / 2) delta -= length;
        if (delta < -length / 2) delta += length;

        return p + delta;
      });
    },
    [length],
  );

  // Autoplay
  useEffect(() => {
    if (isPaused) return;

    const id = setInterval(goNext, AUTOPLAY_DELAY);

    return () => clearInterval(id);
  }, [isPaused, goNext]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };

  // Drag / swipe
  const startDrag = (clientX: number) => {
    dragStartX.current = clientX;
    dragDeltaX.current = 0;
    setIsDragging(true);
    setIsPaused(true);
  };

  const moveDrag = (clientX: number) => {
    if (dragStartX.current === null) return;

    dragDeltaX.current = clientX - dragStartX.current;
  };

  const endDrag = () => {
    if (dragStartX.current === null) return;

    if (dragDeltaX.current > SWIPE_THRESHOLD) {
      goPrev();
    } else if (dragDeltaX.current < -SWIPE_THRESHOLD) {
      goNext();
    }

    dragStartX.current = null;
    dragDeltaX.current = 0;
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) =>
    startDrag(e.touches[0].clientX);

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) =>
    moveDrag(e.touches[0].clientX);

  const handleTouchEnd = () => endDrag();

  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    startDrag(e.clientX);
  };

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (dragStartX.current !== null) {
      moveDrag(e.clientX);
    }
  };

  const handleMouseUp = () => endDrag();

  const handleMouseLeave = () => {
    if (dragStartX.current !== null) {
      endDrag();
    }

    setIsPaused(false);
  };

  /*
    Responsive cards:

    Above 1200px  = 5 cards
    900px-1200px  = 3 cards
    Below 900px   = 1 card
  */
  const sideCount = isAbove1200 ? 2 : isMdUp ? 1 : 0;

  const visibleOffsets = Array.from(
    { length: sideCount * 2 + 1 },
    (_, i) => i - sideCount,
  );

  return (
    <Box className="methodology-section">
      {/* Eyebrow label */}
      <Typography className="methodology-eyebrow">
        OUR METHODOLOGY
      </Typography>

      <Typography
        variant="h3"
        className="methodology-heading"
      >
        The 5-step security-first lifecycle.
      </Typography>

      <Typography className="methodology-description">
        A structured engineering process we run on every blockchain and AI
        engagement, designed to catch problems long before they reach
        production.
      </Typography>

      {/* Carousel */}
      <Box
        role="region"
        aria-roledescription="carousel"
        aria-label="Our methodology steps"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className="methodology-carousel"
      >
        {/* Stage */}
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className="methodology-stage"
          sx={{
            height: cardHeight,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {visibleOffsets.map((slotOffset) => {
            const virtualIndex = position + slotOffset;

            const realIndex =
              ((virtualIndex % length) + length) % length;

            const step = methodologySteps[realIndex];

            const offset = virtualIndex - position;
            const distance = Math.abs(offset);
            const isActive = distance === 0;

            const offsetPx =
              offset * cardWidth * overlapFactor;

            const scale = 1 - distance * 0.14;

            const opacity = Math.max(
              2 - distance * 0.32,
              0.28,
            );

            return (
              <Box
                key={virtualIndex}
                onClick={() =>
                  !isActive && goTo(realIndex)
                }
                className="methodology-card"
                sx={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `translate(calc(-50% + ${offsetPx}px), -50%) scale(${scale})`,
                  opacity,
                  zIndex: 10 - distance,
                  cursor: isActive ? "grab" : "pointer",
                  boxShadow: isActive
                    ? "0 20px 40px rgba(0,0,0,0.55)"
                    : "none",
                }}
              >
                <Typography className="methodology-number">
                  {step.number}
                </Typography>

                <Typography className="methodology-card-title">
                  {step.title}
                </Typography>

                <Typography className="methodology-card-description">
                  {step.description}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Previous arrow */}
        <IconButton
          onClick={goPrev}
          aria-label="Previous methodology step"
          className="methodology-arrow methodology-arrow-prev"
        >
          <PlayArrowIcon
            sx={{
              transform: "rotate(180deg)",
              fontSize: 24,
            }}
          />
        </IconButton>

        {/* Next arrow */}
        <IconButton
          onClick={goNext}
          aria-label="Next methodology step"
          className="methodology-arrow methodology-arrow-next"
        >
          <PlayArrowIcon
            sx={{
              fontSize: 24,
            }}
          />
        </IconButton>
      </Box>

      {/* Dot indicators */}
      <Box className="methodology-dots">
        {methodologySteps.map((step, i) => (
          <Box
            key={step.number}
            component="button"
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={activeIndex === i}
            onClick={() => goTo(i)}
            className={`methodology-dot ${
              activeIndex === i
                ? "methodology-dot-active"
                : ""
            }`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;