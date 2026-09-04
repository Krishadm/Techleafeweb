import {
  Box,
  Button,
  Container,
  Typography,
  keyframes,
} from "@mui/material";
import Footer from "../component/Footer";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// SVG Stroke Animation Keyframes - draws once and stays static
const drawLeafPath = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const popNodeDot = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 1;
    transform: scale(1.35);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// ============== "What We Build" Icons (thin neon-green line icons) ==============
const iconStrokeProps = {
  stroke: "#20A914",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function BlockchainIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <rect x="18" y="6" width="12" height="12" rx="2" {...iconStrokeProps} />
      <rect x="6" y="30" width="12" height="12" rx="2" {...iconStrokeProps} />
      <rect x="30" y="30" width="12" height="12" rx="2" {...iconStrokeProps} />
      <path d="M24 18 L24 24 L12 24 L12 30" {...iconStrokeProps} />
      <path d="M24 24 L36 24 L36 30" {...iconStrokeProps} />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="5" {...iconStrokeProps} />
      <path d="M33 24 L41 24" {...iconStrokeProps} />
      <path d="M30 30 L36 36" {...iconStrokeProps} />
      <path d="M24 33 L24 41" {...iconStrokeProps} />
      <path d="M18 30 L12 36" {...iconStrokeProps} />
      <path d="M15 24 L7 24" {...iconStrokeProps} />
      <path d="M18 18 L12 12" {...iconStrokeProps} />
      <path d="M24 15 L24 7" {...iconStrokeProps} />
      <path d="M30 18 L36 12" {...iconStrokeProps} />
    </svg>
  );
}

function AppDevIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <rect x="15" y="6" width="18" height="36" rx="3" {...iconStrokeProps} />
      <path d="M20 20 L16 24 L20 28" {...iconStrokeProps} />
      <path d="M28 20 L32 24 L28 28" {...iconStrokeProps} />
      <line x1="21" y1="36" x2="27" y2="36" {...iconStrokeProps} />
    </svg>
  );
}

function WebDevIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <rect x="6" y="10" width="36" height="26" rx="3" {...iconStrokeProps} />
      <line x1="6" y1="18" x2="42" y2="18" {...iconStrokeProps} />
      <circle cx="11" cy="14" r="1.2" fill="#20A914" />
      <circle cx="15" cy="14" r="1.2" fill="#20A914" />
      <circle cx="19" cy="14" r="1.2" fill="#20A914" />
      <line x1="12" y1="30" x2="36" y2="30" {...iconStrokeProps} />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <rect x="6" y="10" width="36" height="24" rx="3" {...iconStrokeProps} />
      <line x1="18" y1="40" x2="30" y2="40" {...iconStrokeProps} />
      <line x1="24" y1="34" x2="24" y2="40" {...iconStrokeProps} />
      <path d="M14 27 L22 19 L27 24 L34 15" {...iconStrokeProps} />
      <circle cx="34" cy="15" r="1.5" fill="#20A914" />
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48">
      <circle cx="21" cy="21" r="12" {...iconStrokeProps} />
      <line x1="30" y1="30" x2="40" y2="40" {...iconStrokeProps} />
      <path d="M15 22 L18 18 L21 24 L24 16 L27 22" {...iconStrokeProps} strokeWidth={1.6} />
    </svg>
  );
}

// ============== "What We Build" Card Data ==============
const buildCards = [
  {
    icon: <BlockchainIcon />,
    title: "Blockchain Development",
    description:
      "Smart contracts and decentralized applications (dApps) built for real use cases — from proof of concept to a production-ready blockchain system.",
  },
  {
    icon: <AiIcon />,
    title: "AI Solutions",
    description:
      "Custom AI development and automation tools that save time or create measurable value, built around your workflow instead of a generic model.",
  },
  {
    icon: <AppDevIcon />,
    title: "App Development",
    description:
      "Native and cross-platform mobile app development, built on clean architecture so it scales as your user base grows.",
  },
  {
    icon: <WebDevIcon />,
    title: "Web Development",
    description:
      "Fast, reliable websites and web applications, custom-built around what your business actually needs rather than a template.",
  },
  {
    icon: <UiUxIcon />,
    title: "UI/UX Design",
    description:
      "User interface and user experience design that's easy to navigate and looks like it belongs to your brand, not a stock design kit.",
  },
  {
    icon: <SeoIcon />,
    title: "SEO Optimization",
    description:
      "Technical SEO, on-page optimization, and search-visibility improvements so the product we build actually gets found on Google.",
  },
];

// ============== "What We Build" Card (scroll-reveal + hover glow) ==============
function BuildCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        p: { xs: 2.75, md: 3.25 },
        borderRadius: "16px",
        border: "1px solid rgba(32, 169, 20, 0.25)",
        background: "rgba(10, 22, 10, 0.4)",
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition:
          `opacity 0.55s ease ${index * 0.08}s, ` +
          `transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, ` +
          "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
        "&:hover": {
          borderColor: "rgba(32, 169, 20, 0.75)",
          background: "rgba(15, 42, 12, 0.55)",
          boxShadow:
            "0 0 26px rgba(32, 169, 20, 0.25), 0 10px 26px rgba(0, 0, 0, 0.35)",
          transform: "translateY(-4px)",
          "& .build-card-icon": {
            transform: "scale(1.12)",
            filter: "drop-shadow(0 0 10px rgba(32, 169, 20, 0.7))",
          },
        },
      }}
    >
      <Box
        className="build-card-icon"
        sx={{
          width: 42,
          height: 42,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease, filter 0.3s ease",
          filter: "drop-shadow(0 0 6px rgba(32, 169, 20, 0.35))",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          fontFamily: "'Francois One', sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#ffffff",
        }}
      >
        {title}
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
        {description}
      </Typography>
    </Box>
  );
}

// ============== Generic Scroll-Reveal Wrapper (fade + slide up on view) ==============
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

// ============== "Live Projects" Data ==============
const liveProjects = [
  {
    name: "Crab Coin",
    // TODO: point to the real project thumbnail asset once it's added to /assets
    image: "/assets/projects/crab-coin.png",
    status: "LIVE",
    tags: "Blockchain · AI",
    description:
      "Blazingly fast transactions on Solana paired with top-tier development from Tech Leafe. Crab Coin isn't just another project; it's a well-built ecosystem backed by a solid team.",
  },
  {
    name: "Rock Wallet",
    image: "/assets/projects/rock-wallet.png",
    status: "Live",
    tags: "Blockchain · Web3",
    description:
      "Full-stack Web3 and blockchain development for RockWallet — from wallet architecture to on-chain integrations. Not a one-off build, but an ongoing development partnership.",
  },
  {
    name: "Super Hero Wallet",
    image: "/assets/projects/super-hero-wallet.png",
    status: "Live",
    tags: "Blockchain · Web3",
    description:
      "Full-stack Web3 development for Super Hero Wallet — scaling secure infrastructure without slowing down growth. Security-first engineering, backed by proactive, hands-on support.",
  },
];

// ============== "Live Projects" Row (thumbnail + status pill + tags) ==============
function LiveProjectRow({
  project,
  index,
}: {
  project: (typeof liveProjects)[number];
  index: number;
}) {
  return (
    <ScrollReveal index={index}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 2, sm: 3 },
          py: { xs: 3, md: 3.25 },
          px: { xs: 1.5, md: 2 },
          borderBottom: "1px solid rgba(32, 169, 20, 0.18)",
          borderRadius: "12px",
          transition:
            "background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
          "&:hover": {
            background: "rgba(20, 45, 15, 0.35)",
            boxShadow: "0 0 24px rgba(32, 169, 20, 0.15)",
            transform: "translateX(4px)",
          },
        }}
      >
        {/* Thumbnail */}
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
            border: "1px solid rgba(32, 169, 20, 0.3)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>

        {/* Title + Description */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: "'Francois One', sans-serif",
              fontSize: "17px",
              color: "#ffffff",
              mb: 0.5,
            }}
          >
            {project.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "14px",
              lineHeight: 1.6,
              color: "#c9c9c9",
              maxWidth: "560px",
              opacity: 0.92,
            }}
          >
            {project.description}
          </Typography>
        </Box>

        {/* Status Pill + Tags */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: { xs: "center", md: "flex-end" },
            gap: 1,
            minWidth: { md: "140px" },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              px: "10px",
              py: "4px",
              borderRadius: "999px",
              background: "rgba(32, 169, 20, 0.15)",
              border: "1px solid rgba(32, 169, 20, 0.45)",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#20A914",
                boxShadow: "0 0 6px rgba(32, 169, 20, 0.9)",
              }}
            />
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#20A914",
                textTransform: "uppercase",
                fontFamily: "'Istok Web', sans-serif",
              }}
            >
              {project.status}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "12px",
              color: "#9a9a9a",
            }}
          >
            {project.tags}
          </Typography>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

// ============== "Case Studies" Data ==============
const caseStudies = [
  {
    label: "CRAB COIN",
    headline: "Engineering a blazingly fast Solana token ecosystem",
    tags: ["Blockchain", "Solana"],
    description:
      "The client needed more than a quick meme-coin launch — a credible, audit-ready token built for long-term reliability. We engineered secure smart contracts in Rust and Anchor, tuned the architecture for Solana's high throughput, and built scalable infrastructure to support future utility and staking.",
    href: "/crab-coin",
  },
  {
    label: "ROCK WALLET",
    headline: "Building a secure, non-custodial crypto wallet with seamless UX",
    tags: ["Web3", "Wallet"],
    description:
      "The client needed users to stay in full control of their assets without crypto feeling intimidating. We built a non-custodial wallet architecture with high-speed Solana dApp integration, applying enterprise-grade security while keeping the interface simple enough for non-technical, everyday users.",
    href: "/rockwallet",
  },
  {
    label: "SUPER HERO WALLET",
    headline: "Scaling secure wallet infrastructure without slowing down",
    tags: ["Web3", "Wallet"],
    description:
      "The client needed a partner who could scale their wallet's infrastructure without compromising security or losing pace with growth. We built a security-first architecture designed to hold up under increasing demand, resolving complex technical challenges along the way while keeping communication tight through every phase.",
    href: "/super-hero",
  },
];

// ============== "Case Studies" Row (label + headline + tags | description + link) ==============
function CaseStudyRow({
  study,
  index,
  isLast,
}: {
  study: (typeof caseStudies)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <ScrollReveal index={index}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
          gap: { xs: 2, md: 5 },
          py: { xs: 3.5, md: 4 },
          px: { xs: 2.5, md: 3.5 },
          borderBottom: isLast ? "none" : "1px solid rgba(32, 169, 20, 0.18)",
          transition: "background 0.25s ease",
          "&:hover": {
            background: "rgba(20, 45, 15, 0.3)",
          },
        }}
      >
        {/* Left: label, headline, tags */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8f8f8f",
              mb: 1.25,
            }}
          >
            {study.label}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Francois One', sans-serif",
              fontSize: { xs: "19px", md: "21px" },
              lineHeight: 1.3,
              color: "#ffffff",
              mb: 2,
              maxWidth: "380px",
            }}
          >
            {study.headline}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {study.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  px: "10px",
                  py: "3px",
                  borderRadius: "999px",
                  border: "1px solid rgba(32, 169, 20, 0.5)",
                  fontSize: "12px",
                  color: "#20A914",
                  fontFamily: "'Istok Web', sans-serif",
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right: description + view link */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "14.5px",
              lineHeight: 1.7,
              color: "#c9c9c9",
              mb: 2,
              maxWidth: "620px",
              opacity: 0.92,
            }}
          >
            {study.description}
          </Typography>
          <Box
            component={RouterLink}
            to={study.href}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#20A914",
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              "&:hover .view-arrow": {
                transform: "translateX(4px)",
              },
            }}
          >
            View
            <Box
              component="span"
              className="view-arrow"
              sx={{ transition: "transform 0.2s ease", display: "inline-block" }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

// ============== "Leadership" Data ==============
interface LeadershipMember {
  photo: string;
  name: string;
  title: string;
  subtitle?: string;
  bio: React.ReactNode[];
}

const leadershipMembers: LeadershipMember[] = [
  {
    // TODO: point to the real headshot asset once it's added to /assets
    photo: "/assets/team/psv-headshot.jpg",
    name: "P. S. Vigneshwaran",
    title: "Chief Executive Officer (CEO)",
    bio: [
      <>
        With a background spanning enterprise IT infrastructure, software engineering, and
        high-performance Web3 architecture, P. S. Vigneshwaran <strong>led Tech Leafe Technologies
        in 2020</strong> to build secure, scalable solutions powered by Blockchain and AI. His
        engineering work includes <strong>two proprietary Layer-2 blockchain frameworks and three
        multi-chain cryptocurrency exchanges</strong>, backed by an academic foundation in BCA,
        MCA, MSCA, and BBA. He believes technology is only as powerful as the trust and efficiency
        it delivers — a principle that shapes every product Tech Leafe ships.
      </>,
    ],
  },
  {
    photo: "/assets/team/tmari-headshot.jpg",
    name: "T. Mari",
    title: "Chief Operating Officer (COO)",
    bio: [
      <>
        A dynamic entrepreneur and strategic leader with <strong>20+ years of experience across
        business, real estate, technology, and operations</strong>, T. Mari drives Tech Leafe
        Technologies&apos; <strong>strategic and financial direction</strong> — bringing deep expertise in
        strategic planning, investor relations, and organizational leadership. He also serves as a
        Director at Maco Internet Laboratories, and holds a Bachelor of Business Administration
        (BBA) that grounds his practical experience in long-term planning, business development,
        and sustainable growth.
      </>,
    ],
  },
];

// ============== "Leadership" Member Block ==============
function LeadershipBlock({ member, index }: { member: LeadershipMember; index: number }) {
  return (
    <ScrollReveal index={index} sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          height: "100%",
          p: { xs: 2.5, sm: 3, md: 3.25 },
          borderRadius: "20px",
          border: "1px solid rgba(32, 169, 20, 0.22)",
          background: "rgba(10, 22, 10, 0.4)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: "rgba(32, 169, 20, 0.5)",
            boxShadow: "0 0 26px rgba(32, 169, 20, 0.15)",
          },
        }}
      >
        {/* Circular photo — its own line, fully vertical stack */}
        <Box
          sx={{
            width: { xs: 84, sm: 92, md: 96 },
            height: { xs: 84, sm: 92, md: 96 },
            borderRadius: "50%",
            overflow: "hidden",
            border: "1px solid rgba(32, 169, 20, 0.35)",
            background: "#ffffff",
            mb: 2,
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              borderColor: "rgba(32, 169, 20, 0.8)",
              boxShadow: "0 0 18px rgba(32, 169, 20, 0.3)",
            },
          }}
        >
          <Box
            component="img"
            src={member.photo}
            alt={member.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>

        {/* Name / title / subtitle — stacked beneath the photo */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "18px", md: "19px" },
            color: "#ffffff",
            mb: 0.3,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#20A914",
            lineHeight: 1.5,
          }}
        >
          {member.title}
        </Typography>
        {member.subtitle && (
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "12.5px",
              fontStyle: "italic",
              color: "#9a9a9a",
              mt: 0.4,
            }}
          >
            {member.subtitle}
          </Typography>
        )}

        {/* Bio */}
        <Box sx={{ width: "100%", mt: { xs: 2, md: 2.25 } }}>
          {member.bio.map((paragraph, pIndex) => (
            <Typography
              key={pIndex}
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: { xs: "14.5px", sm: "15px" },
                lineHeight: 1.75,
                color: "#c9c9c9",
                opacity: 0.92,
                mb: pIndex === member.bio.length - 1 ? 0 : 2,
                "& strong": { color: "#20A914", fontWeight: 700 },
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </ScrollReveal>
  );
}

// ============== "Our Team" Data ==============
interface TeamMember {
  // TODO: point to the real headshot asset once it's added to /assets/team
  photo: string;
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    photo: "/assets/team/dhamini.jpg",
    name: "Dhamini",
    role: "HR & Admin",
    description: "Supports our people, culture and operations for smooth growth.",
  },
  {
    photo: "/assets/team/arunthathi.jpg",
    name: "Arunthathi",
    role: "Web Developer",
    description: "Develops responsive and high-performance websites focused on usability.",
  },
  {
    photo: "/assets/team/monisha-begam.jpg",
    name: "Monisha Begam",
    role: "Web Developer",
    description: "Transforms designs and ideas into functional, elegant and user-friendly websites.",
  },
  {
    photo: "/assets/team/avinesha.jpg",
    name: "Avinesha",
    role: "UI/UX Designer",
    description: "Designs intuitive experiences that make technology simple, engaging and effective.",
  },
  {
    photo: "/assets/team/jerlin-renisa.jpg",
    name: "Jerlin Renisa",
    role: "App Developer",
    description: "Develops AI-powered mobile apps that deliver smart solutions and exceptional user experiences.",
  },
  {
    photo: "/assets/team/arthi.jpg",
    name: "Arthi",
    role: "Web Developer",
    description: "Creates clean, functional websites focused on performance and usability.",
  },
  {
    photo: "/assets/team/sowmiya.jpg",
    name: "Sowmiya",
    role: "Web Developer",
    description: "Builds responsive digital experiences that deliver value to our clients.",
  },
  {
    photo: "/assets/team/harinipriya.jpg",
    name: "Harinipriya",
    role: "Full Stack Developer",
    description: "Builds scalable web applications and turns ideas into real products.",
  },
  {
    photo: "/assets/team/harshita-sharma.jpg",
    name: "Harshita Sharma",
    role: "Full Stack AI Engineer",
    description: "Develops end-to-end solutions across frontend, backend and architecture.",
  },
  {
    photo: "/assets/team/raja.jpg",
    name: "Raja",
    role: "Web Developer",
    description: "Builds and maintains reliable, high-performance websites for our clients.",
  },
  {
    photo: "/assets/team/arul.jpg",
    name: "Arul",
    role: "Senior Web Developer",
    description: "Leads complex web builds end-to-end, turning ambitious specs into fast, reliable, production-ready products.",
  },
  {
    photo: "/assets/team/Krishna Kanth. S.jpg",
    name: "Krishna Kanth. S",   
    role: "Software Developer",
    description: "Brings deep full-stack expertise to architect and ship scalable, high-performance web applications.",
  },
];

// ============== "Our Team" — small icons for the journey road ==============
function FlagPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 2 L6 22" stroke="#20A914" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M6 3 L17 3 L14 6.5 L17 10 L6 10 Z"
        fill="#20A914"
        stroke="#20A914"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ============== "Our Team" — a single stop on the road ==============
interface RoadStop {
  key: string;
  photo?: string;
  name: string;
  role?: string;
  description: string;
}

const TeamMemberStop = ({
  stop,
  index,
  avatarRef,
}: {
  stop: RoadStop;
  index: number;
  avatarRef: (node: HTMLDivElement | null) => void;
}) => {
  const stopRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = stopRef.current;
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
    <div
      ref={stopRef}
      className="team-stop"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionDelay: `${index * 0.045}s`,
      }}
    >
      {/* Avatar / icon badge — measured for the road-path SVG. Plain HTML +
          real CSS :hover (see <TeamStopStyles> below) so the zoom is a
          genuine browser hover effect, not an MUI/JS approximation. The
          ring's transform-origin is pinned to the bottom, so on hover it
          zooms upward only — it can never grow down into the card/name. */}
      <div ref={avatarRef} className="team-stop-avatar">
        <div className="team-stop-ring">
          <img className="team-stop-img" src={stop.photo} alt={stop.name} />
        </div>
      </div>

      {/* Compact info card — name / role always visible, description clamps
          to 2 lines by default and opens up fully on hover of the photo OR
          the card (real CSS :hover on the shared .team-stop parent). */}
      <div className="team-stop-card">
        {stop.role && <p className="team-stop-role">{stop.role}</p>}
        <p className="team-stop-name">{stop.name}</p>
        <p className="team-stop-desc">{stop.description}</p>
      </div>
    </div>
  );
};

// Real CSS (not MUI sx) for the team-stop hover behavior, so it's a genuine
// browser :hover — reliable across the photo and the card, and immune to
// the negative-margin/z-index overlap between them. Rendered once.
function TeamStopStyles() {
  return (
    <style>{`
      .team-stop {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .team-stop:hover {
        z-index: 5;
      }
      .team-stop-avatar {
        position: relative;
        width: 64px;
        height: 64px;
        z-index: 2;
        margin-bottom: -16px;
      }
      @media (min-width: 600px) {
        .team-stop-avatar { width: 74px; height: 74px; }
      }
      @media (min-width: 900px) {
        .team-stop-avatar { width: 86px; height: 86px; }
      }
      .team-stop-ring {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 2.5px solid rgba(32, 169, 20, 0.85);
        background: #0a120a;
        box-shadow: 0 0 0 4px rgba(4, 12, 4, 0.9), 0 0 10px rgba(32, 169, 20, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0.8);
        transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.25s ease, box-shadow 0.25s ease;
      }
      .team-stop:hover .team-stop-ring {
        transform: translateY(-10px) scale(1.08);
        border-color: rgba(32, 169, 20, 1);
        box-shadow: 0 0 0 4px rgba(4, 12, 4, 0.9), 0 0 14px rgba(32, 169, 20, 0.6);
      }
      .team-stop-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .team-stop-card {
        width: 100%;
        border-radius: 10px;
        border: 1px solid rgba(32, 169, 20, 0.22);
        background: rgba(9, 16, 9, 0.75);
        padding: 26px 8.8px 8.8px;
        text-align: center;
        position: relative;
        z-index: 1;
        transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      }
      .team-stop:hover .team-stop-card {
        border-color: rgba(32, 169, 20, 0.6);
        background: rgba(16, 34, 14, 0.65);
        box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
      }
      .team-stop-role {
        font-family: 'Istok Web', sans-serif;
        font-size: 11px;
        font-weight: 700;
        color: #20A914;
        margin: 0 0 2px;
      }
      .team-stop-name {
        font-family: 'Francois One', sans-serif;
        font-size: 13.5px;
        color: #ffffff;
        line-height: 1.25;
        margin: 0 0 4px;
      }
      .team-stop-desc {
        font-family: 'Istok Web', sans-serif;
        font-size: 10.75px;
        line-height: 1.45;
        color: #9aa39a;
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 16px;
        transition: color 0.25s ease, max-height 0.35s ease;
      }
      .team-stop:hover .team-stop-desc {
        color: #d3d8d3;
        -webkit-line-clamp: unset;
        line-clamp: unset;
        overflow: visible;
        text-overflow: clip;
        max-height: 160px;
      }
    `}</style>
  );
}

// ============== "Our Team" — the winding road that connects every stop ==============
type StopPoint = { x: number; y: number; r: number };
type RowGroup = { y: number; items: StopPoint[] };

function TeamJourneyRoad({ members }: { members: TeamMember[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const avatarNodes = useRef<(HTMLDivElement | null)[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [rows, setRows] = useState<RowGroup[]>([]);

  const stops: RoadStop[] = members.map((m) => ({
    key: m.name,
    photo: m.photo,
    name: m.name,
    role: m.role,
    description: m.description,
  }));

  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      if (!container) return;
      const containerRect = container.getBoundingClientRect();

      const points: (StopPoint | null)[] = avatarNodes.current.map((node) => {
        if (!node) return null;
        const r = node.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top,
          r: r.width / 2,
        };
      });

      const grouped: RowGroup[] = [];
      points.forEach((p) => {
        if (!p) return;
        let row = grouped.find((g) => Math.abs(g.y - p.y) < 20);
        if (!row) {
          row = { y: p.y, items: [] };
          grouped.push(row);
        }
        row.items.push(p);
      });
      grouped.forEach((g) => g.items.sort((a, b) => a.x - b.x));
      grouped.sort((a, b) => a.y - b.y);

      setRows(grouped);
      setSize({ width: containerRect.width, height: containerRect.height });
    }

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    const t = setTimeout(measure, 150); // catch late image/font layout shifts

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
      clearTimeout(t);
    };
  }, [members.length]);

  // Solid horizontal segments (+ waypoint dots) within each row, and rounded
  // elbow connectors that drop from the end of one row into the same side
  // of the next row (right → right, then left → left, alternating) —
  // the boustrophedon "road" pattern.
  const segments: { x1: number; y1: number; x2: number; y2: number; mx: number; my: number }[] = [];
  const elbows: { d: string }[] = [];

  rows.forEach((row) => {
    for (let i = 0; i < row.items.length - 1; i++) {
      const a = row.items[i];
      const b = row.items[i + 1];
      segments.push({
        x1: a.x + a.r,
        y1: a.y,
        x2: b.x - b.r,
        y2: b.y,
        mx: (a.x + b.x) / 2,
        my: (a.y + b.y) / 2,
      });
    }
  });

  for (let r = 0; r < rows.length - 1; r++) {
    const exitRight = r % 2 === 0;
    const current = rows[r];
    const next = rows[r + 1];
    if (!current.items.length || !next.items.length) continue;
    const from = exitRight ? current.items[current.items.length - 1] : current.items[0];
    const to = exitRight ? next.items[next.items.length - 1] : next.items[0];
    // Exit and enter from the side of each avatar (not top/bottom) and bow
    // well clear of the ring, so the connector reads as one continuous loop
    // curling around the edge of the grid — matching the reference image.
    const bow = (exitRight ? 1 : -1) * (from.r + 34);
    const fromX = exitRight ? from.x + from.r : from.x - from.r;
    const toX = exitRight ? to.x + to.r : to.x - to.r;
    const outerX = (exitRight ? Math.max(fromX, toX) : Math.min(fromX, toX)) + bow;
    const d =
      `M ${fromX} ${from.y} ` +
      `C ${outerX} ${from.y}, ${outerX} ${to.y}, ${toX} ${to.y}`;
    elbows.push({ d });
  }

  const firstRow = rows[0];
  const firstPoint = firstRow && firstRow.items[0];
  // Badge geometry for the "Our Journey Starts Here" tag + its curve into stop 1
  const badge = firstPoint
    ? {
        left: Math.max(0, firstPoint.x - 112),
        top: Math.max(0, firstPoint.y - firstPoint.r - 46),
        width: 100,
        height: 34,
      }
    : null;

  return (
    <Box ref={containerRef} sx={{ position: "relative" }}>
      <TeamStopStyles />
      {/* Road overlay — solid path, waypoint dots, elbow curves, flag */}
      {size.width > 0 && (
        <Box
          component="svg"
          viewBox={`0 0 ${size.width} ${size.height}`}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
            overflow: "visible",
          }}
        >
          <defs>
            <filter id="roadGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#roadGlow)">
            {segments.map((s, i) => (
              <line
                key={`seg-${i}`}
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke="#20A914"
                strokeWidth={3.5}
                strokeLinecap="round"
              />
            ))}
            {elbows.map((e, i) => (
              <path key={`elbow-${i}`} d={e.d} fill="none" stroke="#20A914" strokeWidth={3.5} strokeLinecap="round" />
            ))}

            {/* Curve from the start badge into the first stop */}
            {badge && firstPoint && (
              <path
                d={`M ${badge.left + badge.width} ${badge.top + badge.height - 6} C ${
                  badge.left + badge.width + 20
                } ${badge.top + badge.height + 10}, ${firstPoint.x - firstPoint.r - 18} ${
                  firstPoint.y
                }, ${firstPoint.x - firstPoint.r} ${firstPoint.y}`}
                fill="none"
                stroke="#20A914"
                strokeWidth={3.5}
                strokeLinecap="round"
              />
            )}
          </g>

          {segments.map((s, i) => (
            <circle
              key={`dot-${i}`}
              cx={s.mx}
              cy={s.my}
              r={5.5}
              fill="#050d05"
              stroke="#20A914"
              strokeWidth={2}
            />
          ))}

          {/* Start flag, just above the badge */}
          {badge && (
            <g transform={`translate(${badge.left + 14}, ${badge.top - 30})`}>
              <line x1={0} y1={4} x2={0} y2={28} stroke="#20A914" strokeWidth={2.5} strokeLinecap="round" />
              <foreignObject x={-2} y={-14} width={16} height={16}>
                <FlagPinIcon />
              </foreignObject>
            </g>
          )}
        </Box>
      )}

      {/* Start label */}
      {badge && (
        <Box
          sx={{
            position: "absolute",
            left: badge.left,
            top: badge.top,
            width: badge.width,
            px: 1,
            py: 0.6,
            borderRadius: "7px",
            border: "1px solid rgba(32, 169, 20, 0.4)",
            background: "rgba(10, 22, 10, 0.85)",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: "9.5px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#e6e6e6",
            }}
          >
            Our Journey
            <br />
            Starts Here
          </Typography>
        </Box>
      )}

      {/* Stops — a plain responsive grid; the SVG above measures whatever
          rows/columns it renders and connects them at any breakpoint */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          columnGap: { xs: 1.5, sm: 2, md: 3 },
          rowGap: { xs: 4.5, sm: 5, md: 6 },
          alignItems: "start",
          position: "relative",
          zIndex: 2,
          pt: { xs: 4.5, md: 5.5 },
        }}
      >
        {stops.map((stop, index) => (
          <TeamMemberStop
            key={stop.key}
            stop={stop}
            index={index}
            avatarRef={(node) => {
              avatarNodes.current[index] = node;
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

// ============== "Voices" Star Rating Icon ==============
function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <Box sx={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24">
          <path
            d="M12 2.5 L14.9 8.6 L21.5 9.5 L16.75 14.05 L17.9 20.6 L12 17.5 L6.1 20.6 L7.25 14.05 L2.5 9.5 L9.1 8.6 Z"
            fill={n <= rating ? "#20A914" : "none"}
            stroke={n <= rating ? "#20A914" : "rgba(255,255,255,0.22)"}
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </Box>
  );
}

// ============== "Voices" Arrow Icon ==============
function SliderArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      style={{ transform: direction === "left" ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M9 5 L16 12 L9 19"
        stroke="#20A914"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// ============== "Voices of Our Clients" Data ==============
interface Testimonial {
  rating: number;
  quote: string;
  author: string;
  source?: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Tech Leaf is the best developer for Web3 products! Outstanding infrastructure, phenomenal support, and total commitment to the Web3 community. They'll always be my #1 choice.",
    author: "Yan",
    source: "Singapore",
  },
  {
    rating: 5,
    quote:
      "Tech Leaf nailed the developer execution. $CRAB moves fast on Solana with almost zero fees.",
    author: "@SolanaTrader",
  },
  {
    rating: 5,
    quote:
      "Clean integration on Solana. Tech Leaf has built a strong foundation for the Crab Coin ecosystem.",
    author: "DevCommunity_99",
  },
  {
    rating: 4,
    quote: "Smooth experience. Looking forward to new utility releases from Tech Leaf!",
    author: "Holder_0x45",
  },
];

// ============== "Voices" Slider — compact multi-card carousel ==============
// Cards are laid out in a horizontal scroll track (native snap-scroll, so
// touch/trackpad swipe works for free); the arrows just step the track by
// one card. The active (front-most) card gets the neon-green highlight.
function VoicesSlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const count = testimonials.length;
  const centerIndex = Math.floor((count - 1) / 2);
  const [activeIndex, setActiveIndex] = useState(centerIndex);

  const getStep = () => {
    const node = scrollerRef.current;
    if (!node) return 0;
    const card = node.querySelector<HTMLElement>("[data-voice-card]");
    if (!card) return node.clientWidth;
    const style = window.getComputedStyle(node);
    const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const goTo = (i: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const clamped = Math.max(0, Math.min(i, count - 1));
    node.scrollTo({ left: clamped * getStep(), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  // On mount, jump straight to the center card (no animation) so it's the
  // one highlighted by default instead of the first card on the left.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const node = scrollerRef.current;
      if (!node) return;
      node.scrollTo({ left: centerIndex * getStep(), behavior: "auto" });
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const handleScroll = () => {
    const node = scrollerRef.current;
    if (!node) return;
    const step = getStep();
    if (!step) return;
    const idx = Math.round(node.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(idx, count - 1)));
  };

  const arrowButtonSx = {
    width: { xs: 32, sm: 38 },
    height: { xs: 32, sm: 38 },
    borderRadius: "50%",
    border: "1px solid rgba(32, 169, 20, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    flexShrink: 0,
    background: "rgba(10, 22, 10, 0.4)",
    transition:
      "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease",
    "&:hover": {
      borderColor: "rgba(32, 169, 20, 0.9)",
      background: "rgba(32, 169, 20, 0.14)",
      boxShadow: "0 0 16px rgba(32, 169, 20, 0.35)",
      transform: "scale(1.06)",
    },
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, sm: 1.5 } }}>
        <Box
          role="button"
          tabIndex={0}
          aria-label="Previous testimonial"
          onClick={prev}
          onKeyDown={(e) => e.key === "Enter" && prev()}
          sx={arrowButtonSx}
        >
          <SliderArrowIcon direction="left" />
        </Box>

        {/* Scroll track */}
        <Box
          ref={scrollerRef}
          onScroll={handleScroll}
          sx={{
            flex: 1,
            display: "flex",
            gap: "16px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              data-voice-card
              sx={{
                flex: { xs: "0 0 92%", sm: "0 0 47%", md: "0 0 31.5%" },
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: { xs: 190, sm: 200 },
                p: { xs: 2.25, sm: 2.5 },
                borderRadius: "14px",
                border:
                  i === activeIndex
                    ? "1px solid rgba(32, 169, 20, 0.55)"
                    : "1px solid rgba(32, 169, 20, 0.15)",
                background:
                  i === activeIndex ? "rgba(22, 58, 16, 0.4)" : "rgba(255, 255, 255, 0.02)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
            >
              <Box>
                <StarRating rating={t.rating} size={14} />
                <Typography
                  sx={{
                    fontFamily: "'Istok Web', sans-serif",
                    fontStyle: "italic",
                    fontSize: { xs: "13.5px", sm: "14px" },
                    lineHeight: 1.6,
                    color: "#d6d6d6",
                    mt: 1.25,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#20A914",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Istok Web', sans-serif",
                    fontSize: "12.5px",
                    color: "#9a9a9a",
                  }}
                >
                  {t.author}
                  {t.source ? ` — ${t.source}` : ""}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          role="button"
          tabIndex={0}
          aria-label="Next testimonial"
          onClick={next}
          onKeyDown={(e) => e.key === "Enter" && next()}
          sx={arrowButtonSx}
        >
          <SliderArrowIcon direction="right" />
        </Box>
      </Box>

      {/* Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: { xs: 2.5, md: 3 } }}>
        {testimonials.map((_, i) => (
          <Box
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            onKeyDown={(e) => e.key === "Enter" && goTo(i)}
            sx={{
              width: i === activeIndex ? 20 : 7,
              height: 7,
              borderRadius: "999px",
              background: i === activeIndex ? "#20A914" : "rgba(255, 255, 255, 0.2)",
              boxShadow: i === activeIndex ? "0 0 8px rgba(32, 169, 20, 0.85)" : "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function PortfolioPage() {
  return (
    // <Box sx={{ zoom: 0.9 }}>
    <>
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

      {/* ================= HERO SECTION ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 2.5, md: 3 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          alignItems: "center",
          gap: { xs: 4, md: 4 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ maxWidth: { xs: "100%", md: "600px" } }}>
          {/* Top Pill / Eyebrow */}
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
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 600,
              letterSpacing: "0.12em",
              lineHeight: 1,
              textTransform: "uppercase",
              mb: { xs: 2, md: 2.5 },
            }}
          >
            BLOCKCHAIN · AI · APP DEVELOPMENT
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              margin: 0,
              fontFamily: "'Francois One', sans-serif",
              fontSize: { xs: "32px", sm: "44px", md: "50px" },
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "normal",
              color: "#ffffff",
              mb: { xs: 2, md: 2.5 },
            }}
          >
            We build the systems
            <Box
              component="span"
              sx={{
                display: "block",
                color: "#20A914",
                fontWeight: 400,
                mt: 0.5,
              }}
            >
              your idea needs to run.
            </Box>
          </Typography>

          {/* Description Copy */}
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "'Istok Web', sans-serif",
              fontSize: { xs: "15px", sm: "17px" },
              fontWeight: 400,
              lineHeight: 1.55,
              mb: { xs: 3, md: 4 },
              maxWidth: "520px",
              opacity: 0.9,
            }}
          >
            TechLeafe Technologies is a startup team that builds across
            blockchain, AI, and app development — plus the web, design,
            and SEO work that gets a product in front of people.
          </Typography>

        </Box>

        {/* Right Column: Properly Proportioned, Natural Leaf SVG */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            filter: "drop-shadow(0 0 12px rgba(32, 169, 20, 0.4))",
          }}
          aria-hidden="true"
        >
          <Box
            component="svg"
            viewBox="0 0 400 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              width: "100%",
              maxWidth: { xs: "280px", sm: "330px", md: "370px" },
              height: "auto",
              maxHeight: "430px",
              overflow: "visible",
              "& path": {
                fill: "none",
                stroke: "#20A914",
                strokeWidth: 2.4,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: `${drawLeafPath} 2s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
              },
              "& circle": {
                fill: "#20A914",
                opacity: 0,
                animation: `${popNodeDot} 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
              },
            }}
          >
            {/* Outer Left Curve */}
            <Box
              component="path"
              d="M 145 410 C 35 300 45 125 200 30"
              sx={{ animationDelay: "0.1s !important" }}
            />

            {/* Outer Right Curve */}
            <Box
              component="path"
              d="M 200 30 C 355 125 365 300 255 410"
              sx={{ animationDelay: "0.3s !important" }}
            />

            {/* Upper Left Inner Vein */}
            <Box
              component="path"
              d="M 115 235 C 145 180 180 130 200 95"
              sx={{ animationDelay: "0.6s !important" }}
            />

            {/* Center Vertical Spine */}
            <Box
              component="path"
              d="M 200 95 L 200 205"
              sx={{ animationDelay: "0.5s !important" }}
            />

            {/* Upper Right Inner Vein */}
            <Box
              component="path"
              d="M 200 115 C 220 160 255 195 285 235"
              sx={{ animationDelay: "0.8s !important" }}
            />

            {/* Lower Left Vein Branch */}
            <Box
              component="path"
              d="M 200 205 C 188 250 172 295 155 335"
              sx={{ animationDelay: "1.0s !important" }}
            />

            {/* Lower Right Vein Branch */}
            <Box
              component="path"
              d="M 200 205 C 212 250 228 295 245 335"
              sx={{ animationDelay: "1.0s !important" }}
            />

            {/* 5 Leaf Nodes (Glowing Green Dots) */}
            <Box
              component="circle"
              cx="200"
              cy="30"
              r="4.8"
              sx={{
                animationDelay: "1.1s !important",
                transformOrigin: "200px 30px",
              }}
            />

            <Box
              component="circle"
              cx="145"
              cy="410"
              r="4.8"
              sx={{
                animationDelay: "0.1s !important",
                transformOrigin: "145px 410px",
              }}
            />

            <Box
              component="circle"
              cx="255"
              cy="410"
              r="4.8"
              sx={{
                animationDelay: "1.6s !important",
                transformOrigin: "255px 410px",
              }}
            />

            <Box
              component="circle"
              cx="115"
              cy="235"
              r="4.8"
              sx={{
                animationDelay: "0.7s !important",
                transformOrigin: "115px 235px",
              }}
            />

            <Box
              component="circle"
              cx="285"
              cy="235"
              r="4.8"
              sx={{
                animationDelay: "1.3s !important",
                transformOrigin: "285px 235px",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 2, md: 3 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= MISSION & VISION SECTION ================= */}
      <Container
        id="mission"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 3, md: 4 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 5, md: 7 },
          }}
        >
          MISSION &amp; VISION
        </Typography>

        {/* Two-Column Grid: Mission on Left, Vision on Right with Green Vertical Divider */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 0 },
            alignItems: "stretch",
          }}
        >
          {/* Left Column: MISSION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              pr: { xs: 0, md: 6, lg: 8 },
              borderRight: {
                xs: "none",
                md: "1px solid rgba(32, 169, 20, 0.45)",
              },
              borderBottom: {
                xs: "1px solid rgba(32, 169, 20, 0.3)",
                md: "none",
              },
              pb: { xs: 6, md: 2 },
            }}
          >
            {/* Target Bullseye Icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                filter: "drop-shadow(0 0 8px rgba(32, 169, 20, 0.4))",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring */}
                <circle
                  cx="24"
                  cy="24"
                  r="16"
                  stroke="#20A914"
                  strokeWidth="2.2"
                />
                {/* Middle Ring */}
                <circle
                  cx="24"
                  cy="24"
                  r="10"
                  stroke="#20A914"
                  strokeWidth="2"
                />
                {/* Center Bullseye */}
                <circle cx="24" cy="24" r="3.5" fill="#20A914" />
                {/* Arrow hitting Bullseye */}
                <path
                  d="M 33 15 L 25 23"
                  stroke="#20A914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 33 15 L 37 11 M 33 15 L 30 12 M 33 15 L 36 18"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>

            {/* Sub-label */}
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#20A914",
                mb: 2,
              }}
            >
              MISSION
            </Typography>

            {/* Headline */}
            <Typography
              sx={{
                fontFamily: "'Francois One', sans-serif",
                fontSize: { xs: "22px", sm: "24px", md: "26px" },
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#ffffff",
                mb: 2.5,
                maxWidth: "460px",
              }}
            >
              Make advanced technology usable, not just available.
            </Typography>

            {/* Description Paragraph */}
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: { xs: "15px", sm: "16px" },
                fontWeight: 400,
                lineHeight: 1.65,
                color: "#d6d6d6",
                maxWidth: "480px",
                opacity: 0.92,
              }}
            >
              Blockchain, AI, and modern app infrastructure are powerful, but
              most businesses can&apos;t access them without a huge budget or a
              huge team. We close that gap — building with the same technology
              larger companies use, sized and priced for teams that are still
              growing.
            </Typography>
          </Box>

          {/* Right Column: VISION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              pl: { xs: 0, md: 6, lg: 8 },
              pt: { xs: 2, md: 0 },
              pb: { xs: 2, md: 2 },
            }}
          >
            {/* Radiant Eye Icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                filter: "drop-shadow(0 0 8px rgba(32, 169, 20, 0.4))",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Eye outline */}
                <path
                  d="M 10 24 C 15 15 33 15 38 24 C 33 33 15 33 10 24 Z"
                  stroke="#20A914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Iris/Pupil */}
                <circle cx="24" cy="24" r="4.5" fill="#20A914" />
                {/* Upper radiant lashes */}
                <line
                  x1="24"
                  y1="12"
                  x2="24"
                  y2="7"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="16"
                  y1="14"
                  x2="13"
                  y2="10"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="14"
                  x2="35"
                  y2="10"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Lower radiant lashes */}
                <line
                  x1="24"
                  y1="36"
                  x2="24"
                  y2="41"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="16"
                  y1="34"
                  x2="13"
                  y2="38"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="32"
                  y1="34"
                  x2="35"
                  y2="38"
                  stroke="#20A914"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Box>

            {/* Sub-label */}
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#20A914",
                mb: 2,
              }}
            >
              VISION
            </Typography>

            {/* Headline */}
            <Typography
              sx={{
                fontFamily: "'Francois One', sans-serif",
                fontSize: { xs: "22px", sm: "24px", md: "26px" },
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#ffffff",
                mb: 2.5,
                maxWidth: "460px",
              }}
            >
              A studio businesses come back to, not just hire once.
            </Typography>

            {/* Description Paragraph */}
            <Typography
              sx={{
                fontFamily: "'Istok Web', sans-serif",
                fontSize: { xs: "15px", sm: "16px" },
                fontWeight: 400,
                lineHeight: 1.65,
                color: "#d6d6d6",
                maxWidth: "480px",
                opacity: 0.92,
              }}
            >
              We&apos;re building TechLeafe to be the technical team companies
              keep coming back to as they grow — from first prototype to
              production system — instead of switching vendors every time their
              needs change.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 2, md: 3 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= WHAT WE BUILD SECTION ================= */}
      <Container
        id="what-we-build"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          WHAT WE BUILD
        </Typography>

        {/* Intro Line */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "15px", sm: "16px" },
            lineHeight: 1.6,
            color: "#d6d6d6",
            maxWidth: "620px",
            mb: { xs: 4, md: 5 },
            opacity: 0.92,
          }}
        >
          We don&apos;t hand you off between departments. The same team that
          scopes your project builds it.
        </Typography>

        {/* Card Grid: 3 columns desktop, 2 tablet, 1 mobile */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.25, md: 2.5 },
          }}
        >
          {buildCards.map((card, index) => (
            <BuildCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 4, md: 6 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= LIVE PROJECTS SECTION ================= */}
      <Container
        id="live-projects"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.5, md: 1 },
          }}
        >
          REAL-TIME PROJECTS
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "26px", sm: "30px", md: "34px" },
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#ffffff",
            mb: 1.5,
          }}
        >
          What we&apos;re building right now.
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "15px", sm: "16px" },
            color: "#c9c9c9",
            opacity: 0.9,
            mb: { xs: 4, md: 5 },
          }}
        >
          A live look at work in progress across the studio.
        </Typography>

        {/* Project Rows */}
        <Box sx={{ borderTop: "1px solid rgba(32, 169, 20, 0.18)" }}>
          {liveProjects.map((project, index) => (
            <LiveProjectRow key={project.name} project={project} index={index} />
          ))}
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 4, md: 6 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= CASE STUDIES SECTION ================= */}
      <Container
        id="case-studies"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          CASE STUDIES
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "26px", sm: "30px", md: "34px" },
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#ffffff",
            mb: { xs: 4, md: 5 },
          }}
        >
          Work we&apos;ve shipped.
        </Typography>

        {/* Case Study Card */}
        <Box
          sx={{
            border: "1px solid rgba(32, 169, 20, 0.22)",
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgba(10, 22, 10, 0.35)",
          }}
        >
          {caseStudies.map((study, index) => (
            <CaseStudyRow
              key={study.label}
              study={study}
              index={index}
              isLast={index === caseStudies.length - 1}
            />
          ))}
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 4, md: 6 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= LEADERSHIP SECTION ================= */}
      <Container
        id="leadership"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          LEADERSHIP
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "26px", sm: "30px", md: "34px" },
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#ffffff",
            mb: 1.5,
          }}
        >
          From the Director&apos;s Desk
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "15px", sm: "16px" },
            color: "#c9c9c9",
            opacity: 0.9,
            mb: { xs: 2, md: 3 },
            maxWidth: "640px",
          }}
        >
          Innovating at the Intersection of Blockchain, AI &amp; Future Technologies.
        </Typography>

        {/* Leadership Members — split into a 2-column card grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            alignItems: "stretch",
            gap: { xs: 3, md: 3.5 },
          }}
        >
          {leadershipMembers.map((member, index) => (
            <LeadershipBlock key={member.name} member={member} index={index} />
          ))}
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      {/* <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 4, md: 6 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      /> */}

      {/* ================= OUR TEAM SECTION ================= */}
      <Container
        id="team"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 3, md: 4 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.5, md: 2 },
          }}
        >
          OUR TEAM
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "26px", sm: "30px", md: "34px" },
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#ffffff",
            mb: 1.5,
          }}
        >
          The People Behind Our Progress
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "15px", sm: "16px" },
            color: "#c9c9c9",
            opacity: 0.9,
            maxWidth: "620px",
            mb: { xs: 4, md: 5.5 },
          }}
        >
          A talented team of thinkers, builders and problem-solvers committed to
          delivering excellence every day.
        </Typography>

        {/* Team Journey Road — winding path of small avatar stops, 4/3/2 columns */}
        <TeamJourneyRoad members={teamMembers} />

        {/* Stronger Together — closing statement */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 5, md: 6 },
            textAlign: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: { xs: "160px", md: "220px" },
              height: "1px",
              background:
                "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
              opacity: 0.7,
            },
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#20A914",
              boxShadow: "0 0 12px rgba(32, 169, 20, 0.9)",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Francois One', sans-serif",
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: 400,
              color: "#ffffff",
              mb: 1,
            }}
          >
            Stronger Together
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Istok Web', sans-serif",
              fontSize: { xs: "14.5px", sm: "15.5px" },
              color: "#c9c9c9",
              opacity: 0.9,
              maxWidth: "480px",
              mx: "auto",
            }}
          >
            Continuing our journey towards innovation and excellence.
          </Typography>
        </Box>
      </Container>

      {/* Dashed Green Divider Between Sections */}
      <Box
        sx={{
          width: { xs: "calc(100% - 32px)", md: "min(1100px, calc(100% - 48px))" },
          mx: "auto",
          my: { xs: 2, md: 3 },
          height: "1px",
          background: "repeating-linear-gradient(to right, #1b850e 0 8px, transparent 8px 13px)",
          opacity: 0.85,
        }}
        aria-hidden="true"
      />

      {/* ================= VOICES OF OUR CLIENTS SECTION ================= */}
      <Container
        id="voices"
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, md: 3 },
          pb: { xs: 2, md: 3 },
        }}
      >
        {/* Section Header / Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'Istok Web', sans-serif",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#20A914",
            mb: { xs: 1.25, md: 1.5 },
            textAlign: "center",
          }}
        >
          VOICES OF OUR CLIENTS
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Francois One', sans-serif",
            fontSize: { xs: "26px", sm: "30px", md: "34px" },
            fontWeight: 400,
            lineHeight: 1.25,
            color: "#ffffff",
            mb: { xs: 2.75, md: 3.5 },
            textAlign: "center",
          }}
        >
          What it&apos;s like to work with us.
        </Typography>

        <VoicesSlider />
      </Container>
    </Box>
    <Footer/>


//testing
    </>
  );
}