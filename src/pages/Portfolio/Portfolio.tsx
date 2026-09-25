import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import type { ReactNode } from "react";
import "./Portfolio.css";

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

function BuildCard({
  icon,
  title,
  description,
  index,
}: {
  icon: ReactNode;
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
      className={`pp-style-1 ${visible ? "is-visible" : ""}`} data-reveal-index={index}
    >
      <Box
        className="build-card-icon pp-style-2"
        
      >
        {icon}
      </Box>

      <Typography
        className="pp-style-3"
      >
        {title}
      </Typography>

      <Typography
        className="pp-style-4"
      >
        {description}
      </Typography>
    </Box>
  );
}

function ScrollReveal({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
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
      className={`pp-style-5 ${visible ? "is-visible" : ""} ${className}`} data-reveal-index={index}
    >
      {children}
    </Box>
  );
}

const liveProjects = [
  {
    name: "Crab Coin",

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
        className="pp-style-6"
      >
          <Box
          className="pp-style-7"
        >
          <Box
            component="img"
            src={project.image}
            alt={project.name}
            className="pp-style-8"
          />
        </Box>

          <Box className="pp-style-9">
          <Typography
            className="pp-style-10"
          >
            {project.name}
          </Typography>
          <Typography
            className="pp-style-11"
          >
            {project.description}
          </Typography>
        </Box>

          <Box
          className="pp-style-12"
        >
          <Box
            className="pp-style-13"
          >
            <Box
              className="pp-style-14"
            />
            <Typography
              className="pp-style-15"
            >
              {project.status}
            </Typography>
          </Box>
          <Typography
            className="pp-style-16"
          >
            {project.tags}
          </Typography>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

const caseStudies = [
  {
    label: "CRAB COIN",
    headline: "Engineering a blazingly fast Solana token ecosystem",
    tags: ["Blockchain", "Solana"],
    description:
      "The client needed more than a quick meme-coin launch — a credible, audit-ready token built for long-term reliability. We engineered secure smart contracts in Rust and Anchor, tuned the architecture for Solana's high throughput, and built scalable infrastructure to support future utility and staking.",
    href: "/crabCoin",
  },
  {
    label: "ROCK WALLET",
    headline: "Building a secure, non-custodial crypto wallet with seamless UX",
    tags: ["Web3", "Wallet"],
    description:
      "The client needed users to stay in full control of their assets without crypto feeling intimidating. We built a non-custodial wallet architecture with high-speed Solana dApp integration, applying enterprise-grade security while keeping the interface simple enough for non-technical, everyday users.",
    href: "/rockWallet",
  },
  {
    label: "SUPER HERO WALLET",
    headline: "Scaling secure wallet infrastructure without slowing down",
    tags: ["Web3", "Wallet"],
    description:
      "The client needed a partner who could scale their wallet's infrastructure without compromising security or losing pace with growth. We built a security-first architecture designed to hold up under increasing demand, resolving complex technical challenges along the way while keeping communication tight through every phase.",
    href: "/superHero",
  },
];

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
        className={`pp-style-17 ${isLast ? "is-last-case-study" : ""}`}
      >
          <Box>
          <Typography
            className="pp-style-18"
          >
            {study.label}
          </Typography>
          <Typography
            className="pp-style-19"
          >
            {study.headline}
          </Typography>
          <Box className="pp-style-20">
            {study.tags.map((tag) => (
              <Box
                key={tag}
                className="pp-style-21"
              >
                {tag}
              </Box>
            ))}
          </Box>
        </Box>

          <Box>
          <Typography
            className="pp-style-22"
          >
            {study.description}
          </Typography>
          <Box
            component={RouterLink}
            to={study.href}
            className="pp-style-23"
          >
            View
            <Box
              component="span"
              className="view-arrow pp-style-24"
              
            >
              →
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

interface LeadershipMember {
  quote: any;
  photo: string;
  name: string;
  title: string;
  subtitle?: string;
  bio: ReactNode[];
}

const leadershipMembers: LeadershipMember[] = [
  {

    photo: "/assets/team/psv-headshot.jpg",
    name: "P. S. Vigneshwaran",
    title: "Chief Executive Officer (CEO)",
    bio: [
      <>
        With a background spanning enterprise IT infrastructure, software engineering, and
        high-performance Web3 architecture, P.S.Vigneshwaran <strong>led Tech Leafe Technologies
          in 2020</strong> to build secure, scalable solutions powered by Blockchain and AI. His
        engineering work includes <strong>two proprietary Layer-2 blockchain frameworks and three
          multi-chain cryptocurrency exchanges</strong>, backed by an academic foundation in BCA,
        MCA, MSCA, and BBA. He believes technology is only as powerful as the trust and efficiency
        it delivers — a principle that shapes every product Tech Leafe ships.
      </>,
    ],
    quote: undefined
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
    quote: undefined
  },
];

function LeadershipBlock({ member, index }: { member: LeadershipMember; index: number }) {
  return (
    <ScrollReveal index={index} className="pp-style-25">
      <Box
        className="pp-style-26"
      >
          <Box
          className="pp-style-27"
        >
          <Box
            component="img"
            src={member.photo}
            alt={member.name}
            className="pp-style-28"
          />
        </Box>

          <Typography
          className="pp-style-29"
        >
          {member.name}
        </Typography>
        <Typography
          className="pp-style-30"
        >
          {member.title}
        </Typography>
        {member.subtitle && (
          <Typography
            className="pp-style-31"
          >
            {member.subtitle}
          </Typography>
        )}

          <Box className="pp-style-32">
          {member.bio.map((paragraph, pIndex) => (
            <Typography
              key={pIndex}
              className={`pp-style-33 ${pIndex === member.bio.length - 1 && !member.quote ? "is-last-bio-no-quote" : ""}`}
            >
              {paragraph}
            </Typography>
          ))}

          {member.quote && (
            <Box
              className="pp-style-34"
            >
              <Typography
                className="pp-style-35"
              >
                {member.quote.label}
              </Typography>
              <Typography
                className="pp-style-36"
              >
                &ldquo;{member.quote.text}&rdquo;
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </ScrollReveal>
  );
}

interface TeamMember {

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

interface StopPoint {
  x: number;
  y: number;
  r: number;
}

interface RowGroup {
  y: number;
  items: StopPoint[];
}

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
      className={`team-stop ${visible ? "is-visible" : ""}`}
      data-team-index={index}
    >
      <div ref={avatarRef} className="team-stop-avatar">
        <div className="team-stop-ring">
          <img className="team-stop-img" src={stop.photo} alt={stop.name} />
        </div>
      </div>

      <div className="team-stop-card">
        {stop.role && <p className="team-stop-role">{stop.role}</p>}
        <p className="team-stop-name">{stop.name}</p>
        <p className="team-stop-desc">{stop.description}</p>
      </div>
    </div>
  );
};

function TeamJourneyRoad({ members }: { members: TeamMember[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
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

  const badge = firstPoint
    ? {
        left: Math.max(0, firstPoint.x - 112),
        top: Math.max(0, firstPoint.y - firstPoint.r - 46),
        width: 100,
        height: 34,
      }
    : null;

  useEffect(() => {
    const node = badgeRef.current;
    if (!node || !badge) return;

    node.style.setProperty("--badge-left", `${badge.left}px`);
    node.style.setProperty("--badge-top", `${badge.top}px`);
    node.style.setProperty("--badge-width", `${badge.width}px`);
  }, [badge?.left, badge?.top, badge?.width]);

  return (
    <Box ref={containerRef} className="pp-style-37">
      {size.width > 0 && (
        <Box
          component="svg"
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="pp-style-38"
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

      {badge && (
        <Box
          ref={badgeRef}
          className="pp-style-39"
        >
          <Typography
            className="pp-style-40"
          >
            Our Journey
            <br />
            Starts Here
          </Typography>
        </Box>
      )}

      <Box
        className="pp-style-41"
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

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <Box className="pp-style-42">
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

function SliderArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className={direction === "left" ? "slider-arrow-left" : ""}
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

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const node = scrollerRef.current;
      if (!node) return;
      node.scrollTo({ left: centerIndex * getStep(), behavior: "auto" });
    });
    return () => cancelAnimationFrame(id);

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

  return (
    <Box>
      <Box className="pp-style-43">
        <Box
          role="button"
          tabIndex={0}
          aria-label="Previous testimonial"
          onClick={prev}
          onKeyDown={(e) => e.key === "Enter" && prev()}
          className="pp-arrow-button"
        >
          <SliderArrowIcon direction="left" />
        </Box>

          <Box
          ref={scrollerRef}
          onScroll={handleScroll}
          className="pp-style-44"
        >
          {testimonials.map((t, i) => (
            <Box
              key={i}
              data-voice-card
              className="pp-style-45 voice-card" data-active={i === activeIndex}
            >
              <Box>
                <StarRating rating={t.rating} size={14} />
                <Typography
                  className="pp-style-46"
                >
                  &ldquo;{t.quote}&rdquo;
                </Typography>
              </Box>

              <Box className="pp-style-47">
                <Box
                  className="pp-style-48"
                />
                <Typography
                  className="pp-style-49"
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
          className="pp-arrow-button"
        >
          <SliderArrowIcon direction="right" />
        </Box>
      </Box>

      <Box className="pp-style-50">
        {testimonials.map((_, i) => (
          <Box
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            onKeyDown={(e) => e.key === "Enter" && goTo(i)}
            className={`voice-dot ${i === activeIndex ? "is-active" : ""}`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default function PortfolioPage() {
  return (

    <>
    <Box
      className="portfolio-page pp-style-52"
    >
      <Box
        className="pp-style-53"
        aria-hidden="true"
      />

      <Container
        maxWidth={false}
        className="pp-style-54"
      >
          <Box className="pp-style-55">
              <Box
            className="pp-style-56"
          >
            BLOCKCHAIN · AI · APP DEVELOPMENT
          </Box>

              <Typography
            variant="h1"
            className="pp-style-57"
          >
            We build the systems
            <Box
              component="span"
              className="pp-style-58"
            >
              your idea needs to run.
            </Box>
          </Typography>

              <Typography
            className="pp-style-59"
          >
            TechLeafe Technologies is a startup team that builds across
            blockchain, AI, and app development — plus the web, design,
            and SEO work that gets a product in front of people.
          </Typography>
        </Box>

          <Box
          className="pp-style-63"
          aria-hidden="true"
        >
          <Box
            component="svg"
            viewBox="0 0 400 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pp-style-64"
          >
                  <Box
              component="path"
              d="M 145 410 C 35 300 45 125 200 30"
              className="pp-style-65"
            />

                  <Box
              component="path"
              d="M 200 30 C 355 125 365 300 255 410"
              className="pp-style-66"
            />

                  <Box
              component="path"
              d="M 115 235 C 145 180 180 130 200 95"
              className="pp-style-67"
            />

                  <Box
              component="path"
              d="M 200 95 L 200 205"
              className="pp-style-68"
            />

                  <Box
              component="path"
              d="M 200 115 C 220 160 255 195 285 235"
              className="pp-style-69"
            />

                  <Box
              component="path"
              d="M 200 205 C 188 250 172 295 155 335"
              className="pp-style-70"
            />

                  <Box
              component="path"
              d="M 200 205 C 212 250 228 295 245 335"
              className="pp-style-71"
            />

                  <Box
              component="circle"
              cx="200"
              cy="30"
              r="4.8"
              className="pp-style-72"
            />

            <Box
              component="circle"
              cx="145"
              cy="410"
              r="4.8"
              className="pp-style-73"
            />

            <Box
              component="circle"
              cx="255"
              cy="410"
              r="4.8"
              className="pp-style-74"
            />

            <Box
              component="circle"
              cx="115"
              cy="235"
              r="4.8"
              className="pp-style-75"
            />

            <Box
              component="circle"
              cx="285"
              cy="235"
              r="4.8"
              className="pp-style-76"
            />
          </Box>
        </Box>
      </Container>


      <Container
        id="mission"
        maxWidth={false}
        className="pp-style-77"
      >
          <Typography
          className="pp-style-78"
        >
          MISSION &amp; VISION
        </Typography>

          <Box
          className="pp-style-79"
        >
              <Box
            className="pp-style-80"
          >
                  <Box
              className="pp-style-81"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                          <circle
                  cx="24"
                  cy="24"
                  r="16"
                  stroke="#20A914"
                  strokeWidth="2.2"
                />
                          <circle
                  cx="24"
                  cy="24"
                  r="10"
                  stroke="#20A914"
                  strokeWidth="2"
                />
                          <circle cx="24" cy="24" r="3.5" fill="#20A914" />
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

                  <Typography
              className="pp-style-82"
            >
              MISSION
            </Typography>

                  <Typography
              className="pp-style-83"
            >
              Make advanced technology usable, not just available.
            </Typography>

                  <Typography
              className="pp-style-84"
            >
              Blockchain, AI, and modern app infrastructure are powerful, but
              most businesses can&apos;t access them without a huge budget or a
              huge team. We close that gap — building with the same technology
              larger companies use, sized and priced for teams that are still
              growing.
            </Typography>
          </Box>

              <Box
            className="pp-style-85"
          >
                  <Box
              className="pp-style-86"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                          <path
                  d="M 10 24 C 15 15 33 15 38 24 C 33 33 15 33 10 24 Z"
                  stroke="#20A914"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                          <circle cx="24" cy="24" r="4.5" fill="#20A914" />
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

                  <Typography
              className="pp-style-87"
            >
              VISION
            </Typography>

                  <Typography
              className="pp-style-88"
            >
              A studio businesses come back to, not just hire once.
            </Typography>

                  <Typography
              className="pp-style-89"
            >
              We&apos;re building TechLeafe to be the technical team companies
              keep coming back to as they grow — from first prototype to
              production system — instead of switching vendors every time their
              needs change.
            </Typography>
          </Box>
        </Box>
      </Container>


      <Container
        id="what-we-build"
        maxWidth={false}
        className="pp-style-90"
      >
          <Typography
          className="pp-style-91"
        >
          WHAT WE BUILD
        </Typography>

          <Typography
          className="pp-style-92"
        >
          We don&apos;t hand you off between departments. The same team that
          scopes your project builds it.
        </Typography>

          <Box
          className="pp-style-93"
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


      <Container
        id="live-projects"
        maxWidth={false}
        className="pp-style-94"
      >
          <Typography
          className="pp-style-95"
        >
          REAL-TIME PROJECTS
        </Typography>

          <Typography
          className="pp-style-96"
        >
          What we&apos;re building right now.
        </Typography>

          <Typography
          className="pp-style-97"
        >
          A live look at work in progress across the studio.
        </Typography>

          <Box className="pp-style-98">
          {liveProjects.map((project, index) => (
            <LiveProjectRow key={project.name} project={project} index={index} />
          ))}
        </Box>
      </Container>


      <Container
        id="case-studies"
        maxWidth={false}
        className="pp-style-99"
      >
          <Typography
          className="pp-style-100"
        >
          CASE STUDIES
        </Typography>

          <Typography
          className="pp-style-101"
        >
          Work we&apos;ve shipped.
        </Typography>

          <Box
          className="pp-style-102"
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


      <Container
        id="leadership"
        maxWidth={false}
        className="pp-style-103"
      >
          <Typography
          className="pp-style-104"
        >
          LEADERSHIP
        </Typography>

          <Typography
          className="pp-style-105"
        >
          From the Director&apos;s Desk
        </Typography>

          <Typography
          className="pp-style-106"
        >
          Innovating at the Intersection of Blockchain, AI &amp; Future Technologies.
        </Typography>

          <Box
          className="pp-style-107"
        >
          {leadershipMembers.map((member, index) => (
            <LeadershipBlock key={member.name} member={member} index={index} />
          ))}
        </Box>
      </Container>


      <Container
        id="team"
        maxWidth={false}
        className="pp-style-108"
      >
          <Typography
          className="pp-style-109"
        >
          OUR TEAM
        </Typography>

          <Typography
          className="pp-style-110"
        >
          The People Behind Our Progress
        </Typography>

          <Typography
          className="pp-style-111"
        >
          A talented team of thinkers, builders and problem-solvers committed to
          delivering excellence every day.
        </Typography>

          <TeamJourneyRoad members={teamMembers} />

          <Box
          className="pp-style-112"
        >
          <Box
            className="pp-style-113"
          />
          <Typography
            className="pp-style-114"
          >
            Stronger Together
          </Typography>
          <Typography
            className="pp-style-115"
          >
            Continuing our journey towards innovation and excellence.
          </Typography>
        </Box>
      </Container>

      <Box
        className="pp-style-116"
        aria-hidden="true"
      />

      <Container
        id="voices"
        maxWidth={false}
        className="pp-style-117"
      >
          <Typography
          className="pp-style-118"
        >
          VOICES OF OUR CLIENTS
        </Typography>

          <Typography
          className="pp-style-119"
        >
          What it&apos;s like to work with us.
        </Typography>

        <VoicesSlider />
      </Container>
    </Box>
    <Footer/>

    </>
  );
}