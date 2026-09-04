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
      path: "/expertise/blockchain-development",
    },
    {
      key: "ai",
      title: "AI",
      heading: "Custom Enterprise AI & LLM Solutions",
      description:
        "Unlock the power of your internal business data with zero data leakage. We design production-ready Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agents, and private open-source LLM fine-tuning to automate complex corporate workflows.",
      icon: <PsychologyOutlinedIcon sx={{ fontSize: { xs: 34, sm: 40 } }} />,
      path: "/expertise/AIDevelopmentServices",
    },
    {
      key: "app",
      title: "App",
      heading: "Full-Stack Web Engineering & Mobile Apps",
      description:
        "Turn your ideas into fast, intuitive software. We develop cross-platform iOS & Android applications and cloud-native full-stack web platforms engineered for low latency and a seamless user experience.",
      icon: <PhoneIphoneOutlinedIcon sx={{ fontSize: { xs: 34, sm: 40 } }} />,
      path: "/expertise/appdevelopment",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#000",
        color: "#fff",
        pt: 3,
        pb: 6,
        width: "100%",
        maxWidth: "1600px",
        px: { xs: 2, sm: 4, md: 11 },
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          mt: 0,
          color: "#298911",
          fontWeight: 600,
        }}
      >
        WHAT WE BUILD
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 1.5,
          mb: 4, // gap before cards
          fontSize: { xs: 32, sm: 36, md: 40 },
          lineHeight: 1.15,
        }}
      >
        Three disciplines, one engineering pipeline.
      </Typography>

      {/* Grid starts here */}
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.key}>
            <Card
              sx={{
                backgroundColor: "#000000",
                border: "1px solid #178B0B",
                borderRadius: "20px",
                color: "#fff",
                height: "100%",
                // Hover effect
                transition: "transform 0.3s ease, box-shadow 0.3s ease",

                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                  p: { xs: 3, sm: 4 },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    color: "#20A914",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    mb: 2,
                  }}
                  aria-hidden="true"
                >
                  {service.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: { xs: "22px", sm: "24px" },
                    lineHeight: 1.3,
                  }}
                >
                  {service.heading}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "16px",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </Typography>

                {/* Explore More button */}
                <Button
                  onClick={() => navigate(service.path)}
                  variant="contained"
                  aria-label={`Explore more about ${service.title}`}
                  sx={{
                    mt: 3,
                    alignSelf: "flex-start",
                    width: { xs: "100%", sm: "auto" },
                    minWidth: 0,
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    backgroundColor: "#0e5e03",
                    color: "#fff",
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",

                    // Hover effect
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",

                    "&:hover": {
                      backgroundColor: "#178B0B",
                      transform: "scale(1.03)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                    },
                    "&:focus-visible": {
                      outline: "2px solid #20A914",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  <Box component="span">Explore More</Box>

                  <Box
                    component="span"
                    sx={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      fontSize: { xs: "18px", sm: "20px" },
                      lineHeight: 1,
                      position: "relative",
                      top: "-1px",
                    }}
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
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // < 600
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900

  // Card + layout sizing per breakpoint
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

  const goNext = useCallback(() => setPosition((p) => p + 1), []);
  const goPrev = useCallback(() => setPosition((p) => p - 1), []);

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

  // --- Drag / swipe (touch + mouse) ---
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
    if (dragDeltaX.current > SWIPE_THRESHOLD) goPrev();
    else if (dragDeltaX.current < -SWIPE_THRESHOLD) goNext();
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
    if (dragStartX.current !== null) moveDrag(e.clientX);
  };
  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => {
    if (dragStartX.current !== null) endDrag();
    setIsPaused(false);
  };
  const maxSide = isXs ? 0 : 2;
  const sideCount = Math.min(maxSide, Math.floor((length - 1) / 2));
  const visibleOffsets = Array.from(
    { length: sideCount * 2 + 1 },
    (_, i) => i - sideCount,
  );

  return (
    <Box sx={{ mt: 10 }}>
      {/* Eyebrow label */}
      <Typography
        sx={{
          mt: 2,
          color: "#298911",
          fontWeight: 600,
        }}
      >
        OUR METHODOLOGY
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 2,
          fontSize: 40,
        }}
      >
        The 5-step security-first lifecycle.
      </Typography>

      <Typography
        sx={{
          mt: 2,
          mb: 6,
          maxWidth: "720px",
          color: "rgba(255,255,255,0.75)",
          fontSize: "18px",
          lineHeight: 1.6,
        }}
      >
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
        sx={{
          position: "relative",
          outline: "none",
          "&:focus-visible": {
            boxShadow: "0 0 0 2px #178B0B",
            borderRadius: "8px",
          },
        }}
      >
        {/* Stage - fixed height viewport that holds the absolutely
            positioned, overlapping cards */}
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          sx={{
            position: "relative",
            height: cardHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            overflow: "hidden",
          }}
        >
          {visibleOffsets.map((slotOffset) => {
            const virtualIndex = position + slotOffset;
            const realIndex = ((virtualIndex % length) + length) % length;
            const step = methodologySteps[realIndex];

            const offset = virtualIndex - position; // always equals slotOffset
            const distance = Math.abs(offset);
            const isActive = distance === 0;
            const offsetPx = offset * cardWidth * overlapFactor;
            const scale = 1 - distance * 0.14;
            const opacity = Math.max(2 - distance * 0.32, 0.28);

            return (
              <Box
                key={virtualIndex}
                onClick={() => !isActive && goTo(realIndex)}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: cardWidth,
                  height: cardHeight,
                  transform: `translate(calc(-50% + ${offsetPx}px), -50%) scale(${scale})`,
                  transition: "transform 0.45s ease, opacity 0.45s ease",
                  opacity,
                  zIndex: 10 - distance,
                  cursor: isActive ? "grab" : "pointer",
                  background:
                    "linear-gradient(160deg, #0B3306 0%, #041A02 100%)",
                  border: "1px solid #178B0B",
                  borderRadius: "10px",
                  p: { xs: 2, sm: 3 },
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: isActive ? "0 20px 40px rgba(0,0,0,0.55)" : "none",
                }}
              >
                <Typography
                  sx={{ color: "#ffffff", fontSize: "18px", fontWeight: 700 }}
                >
                  {step.number}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    color: "#20A914",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Arrow controls */}
        <IconButton
          onClick={goPrev}
          aria-label="Previous methodology step"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "#0B3306",
            border: "1px solid #178B0B",
            color: "#fff",
            width: 40,
            height: 40,
            "&:hover": {
              backgroundColor: "#178B0B",
              // bor
            },
          }}
        >
          <PlayArrowIcon
            sx={{
              transform: "rotate(180deg)",
              fontSize: 24,
            }}
          />
        </IconButton>

        <IconButton
          onClick={goNext}
          aria-label="Next methodology step"
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "#0B3306",
            border: "1px solid #178B0B",
            color: "#fff",
            width: 40,
            height: 40,
            "&:hover": {
              backgroundColor: "#178B0B",
            },
          }}
        >
          <PlayArrowIcon
            sx={{
              fontSize: 24,
            }}
          />
        </IconButton>
      </Box>

      {/* Dot indicators */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 4 }}>
        {methodologySteps.map((step, i) => (
          <Box
            key={step.number}
            component="button"
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={activeIndex === i}
            onClick={() => goTo(i)}
            sx={{
              width: activeIndex === i ? 22 : 8,
              height: 8,
              borderRadius: "4px",
              border: "none",
              p: 0,
              cursor: "pointer",
              backgroundColor: activeIndex === i ? "#20A914" : "#2b2b2b",
              transition: "all 0.30s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
