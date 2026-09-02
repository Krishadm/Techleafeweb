import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import type {
  TouchEvent,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
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

const HeroSection = () => {
  const services = [
    {
      number: "",
      title: "Blockchain",
      heading: "Decentralized Apps, Smart Contracts & Web3",
      description:
        "Build secure, audit-ready decentralized ecosystems. From EVM and Solana smart contracts to custom dApps, DeFi platforms, and tokenomics design, we deliver transparent Web3 infrastructure built for transactional security and scale.",
      features: [
        "Solidity & Rust smart contract audits",
        "DApp front-ends with subgraph indexing",
        "Non-custodial wallets & account abstraction",
      ],
      buttonText: "View Blockchain Development",
    },
    {
      number: "",
      title: "AI",
      heading: "Custom Enterprise AI & LLM Solutions",
      description:
        "Unlock the power of your internal business data with zero data leakage. We design production-ready Retrieval-Augmented Generation (RAG) pipelines, autonomous AI agents, and private open-source LLM fine-tuning to automate complex corporate workflows.",
      features: [
        "Grounded, source-attributed RAG chatbots",
        "Multi-agent workflow automation",
        "Private fine-tuned LLMs, hosted in your cloud",
      ],
      buttonText: "View AI Solutions",
    },
    {
      number: "",
      title: "App",
      heading: "Full-Stack Web Engineering & Mobile Apps",
      description:
        "Turn your ideas into fast, intuitive software. We develop cross-platform iOS & Android applications and cloud-native full-stack web platforms engineered for low latency and a seamless user experience.",
      features: [
        "Flutter & React Native mobile apps",
        "Next.js, Node.js full-stack web platforms",
        "UI/UX, e-commerce, SEO, and ongoing support",
      ],
      buttonText: "View App Development",
    },
  ];

  return (
    <Box
    sx={{
      bgcolor: "#000",
      color: "#fff",
      py: 7,
      width: "100%",
      maxWidth: "1600px",
      px: { xs: 2, sm: 4, md: 11 },
      boxSizing: "border-box",
    }}
  >

      {/* Heading */}
      <Typography
        sx={{
          mt: 2,
          color: "#298911",
          fontWeight: 600,

          "&::before": {
            content: '""',
            display: "inline-block",
            width: "7px",
            height: "7px",
            backgroundColor: "red",
            marginRight: "6px",
            verticalAlign: "middle",
          },
        }}
      >
        WHAT WE BUILD
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mt: 2,
          mb: 5, // gap before cards
          fontSize:40,
        }}
      >
        Three disciplines, one engineering pipeline.
      </Typography>

      {/* Grid starts here */}
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.number}>
            <Card
              sx={{
                backgroundColor: "#061F03",
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
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                 {service.number ? `${service.number} — ` : ""}{service.title}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 2,
                    color: "#1d620c",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {service.heading}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#ffffff",
                    fontSize: "18px",
                    lineHeight: 1.5,
                    fontFamily:"IStok Web",

                  }}
                >
                  {service.description}
                </Typography>

                <Box
                  sx={{
                    height: "120px",
                  }}
                >
                  <Box
                    component="ul"
                    sx={{
                      mt: 2,
                      pl: 2,
                      color: "#fff",
                     

                    }}
                  >
                    {service.features?.map((feature, index) => (
                      <li key={index}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "16px",
                            fontFamily:"IStok Web",
                          }}
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
                {/* Button goes here */}
            <Button
  variant="contained"
  sx={{
    mt: "auto",
    width: "100%",
    minWidth: 0,
    borderRadius: "30px",
    textTransform: "capitalize",
    backgroundColor: "#0e5e03",
    color: "#fff",
    fontSize: { xs: "14px", sm: "15px" },
    px: { xs: 1.5, sm: 2 },
    py: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "6px", sm: "10px" },

     // Hover effect
    transition: "transform 0.3s ease, box-shadow 0.3s ease",

    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    },
  }}
>
  <Box
    component="span"
    sx={{
      textAlign: "center",
    }}
  >
    {service.buttonText}
  </Box>

  <Box
    component="span"
    sx={{
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      fontSize: { xs: "20px", sm: "24px" },
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

/* -------------------------------------------------------------------------- */
/* Our Methodology — center-mode ("coverflow") carousel                       */
/* Active card sits full-size and fully opaque in front, overlapping the      */
/* prev/next cards which sit behind it, scaled down and faded.                */
/*                                                                            */
/* IMPORTANT: we track an *unbounded* virtual `position` (rather than a       */
/* modulo-wrapped index) and key each rendered slot by its virtual index.     */
/* That guarantees every click only ever shifts each visible card by exactly */
/* one slot, in the direction clicked - so left and right always animate     */
/* identically instead of one direction occasionally "teleporting" a card    */
/* across the whole stage when the real index wraps from 0 to length-1 (or   */
/* vice versa).                                                              */
/* -------------------------------------------------------------------------- */

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

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
const SWIPE_THRESHOLD = 50; // px needed to trigger a slide change

const MethodologySection = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // < 600
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900

  // Card + layout sizing per breakpoint
const cardWidth = isXs ? 270 : isSm ? 300 : 340;
const cardHeight = isXs ? 240 : isSm ? 260 : 240;
  // Symmetric "coverflow" stack: the active card sits centered and full
  // size, with cards peeking on BOTH sides, shrinking/fading with distance -
  // matching the reference (active card + 2 receding cards on each side).
  const overlapFactor = isXs ? 0.62 : isSm ? 0.58 : 0.5;

  const length = methodologySteps.length;

  // `position` is an unbounded integer: it just keeps incrementing or
  // decrementing as the user (or autoplay) moves forward/back. The *real*
  // step index shown is derived from it via modulo. Because it never wraps
  // itself, every card slot moves by exactly one step per click - no more
  // "wrap teleport" in either direction.
  const [position, setPosition] = useState(0);
  const activeIndex = ((position % length) + length) % length;

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);

  const goNext = useCallback(() => setPosition((p) => p + 1), []);
  const goPrev = useCallback(() => setPosition((p) => p - 1), []);

  // Jump to an arbitrary real step index (e.g. clicking a peeking card or a
  // dot). Moves via the *shortest* wrap direction so the animation still
  // only travels the minimum number of slots instead of jumping.
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
    [length]
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

  // Show the active card plus up to 2 cards receding on each side. On
  // mobile there isn't room to peek either side without clipping/overlap,
  // so show only the single active card there.
  const maxSide = isXs ? 0 : 2;
  const sideCount = Math.min(maxSide, Math.floor((length - 1) / 2));
  const visibleOffsets = Array.from(
    { length: sideCount * 2 + 1 },
    (_, i) => i - sideCount
  );

  return (
    <Box sx={{ mt: 10 }}>
      {/* Eyebrow label */}
      <Typography
        sx={{
          mt: 2,
          color: "#298911",
          fontWeight: 600,
          "&::before": {
            content: '""',
            display: "inline-block",
            width: "7px",
            height: "7px",
            backgroundColor: "red",
            marginRight: "6px",
            verticalAlign: "middle",
          },
        }}
      >
        OUR METHODOLOGY
      </Typography>

      <Typography variant="h3"
       sx={{
         mt: 2,
         fontSize:40,
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
          fontFamily:"IStok Web",
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
            // Virtual index is unbounded and unique per "physical" card
            // instance over time - this is what we key on, so React keeps
            // reusing (and smoothly animating) the same DOM node as it
            // shifts by one slot, instead of remounting it when the real
            // step index wraps around.
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
                  transition:
                    "transform 0.45s ease, opacity 0.45s ease",
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
                  boxShadow: isActive
                    ? "0 20px 40px rgba(0,0,0,0.55)"
                    : "none",
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
                    fontFamily:"IStok Web",
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
                    fontFamily:"IStok Web",
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
            position: "absolute",
            left: { xs: 4, md: 12 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "#0B3306",
            border: "1px solid #178B0B",
            color: "#fff",
            width: 40,
            height: 40,
            "&:hover": { backgroundColor: "#178B0B" },
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
            position: "absolute",
            right: { xs: 4, md: 12 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            backgroundColor: "#0B3306",
            border: "1px solid #178B0B",
            color: "#fff",
            width: 40,
            height: 40,
            "&:hover": { backgroundColor: "#178B0B" },
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
