import CaseStudyDetail, { type CaseStudyDetailData } from "./Casestudydetail";

const superHeroData: CaseStudyDetailData = {
  backHref: "/portfolio#case-studies",
  eyebrow: "Web3 & Blockchain Case Study",
  title: "Super Hero Wallet",
  headline: "Scaling Secure Crypto Infrastructure with Confidence",
  intro:
    "How Tech Leafe helped Super Hero Wallet scale smoothly through proactive engineering, technical expertise, and a security-first build.",
  meta: [
    { label: "Client", value: "Super Hero Wallet" },
    { label: "Industry", value: "Web3 / Crypto Wallets" },
    { label: "Focus", value: "Wallet Scaling & Infrastructure" },
    { label: "Services", value: "Development & Security Engineering" },
  ],
  overview:
    "Super Hero Wallet needed a development partner capable of scaling its infrastructure without compromising on security or reliability. Tech Leafe stepped in to support the wallet's growth, solving complex technical challenges along the way and keeping communication tight throughout every phase of development.",
  challengeLabel: "As Super Hero Wallet grew, the team needed a partner who could deliver:",
  challenge: [
    "Infrastructure that could scale reliably as user demand increased",
    "Strong, consistent security standards across every layer of the product",
    "Fast resolution of complex technical challenges without slowing down growth",
    "Clear, proactive communication throughout the development process",
  ],
  approachLabel: "Our Development Approach",
  approach: [
    {
      title: "Scalable Architecture",
      description:
        "Infrastructure engineered to handle growth smoothly as user demand scaled up.",
    },
    {
      title: "Security-First Engineering",
      description:
        "Consistent security standards applied across the wallet's core systems.",
    },
    {
      title: "Proactive Communication",
      description:
        "Close collaboration with the Super Hero Wallet team at every phase of development.",
    },
    {
      title: "Complex Problem-Solving",
      description:
        "Technical challenges resolved efficiently to keep development moving forward.",
    },
  ],
  result:
    "Super Hero Wallet scaled its infrastructure smoothly, backed by a security-first foundation and a development partner that solved complex challenges quickly — supporting the wallet's growth without disruption to users.",
  services: [
    "Wallet Infrastructure Scaling",
    "Web3 Security Engineering",
    "Technical Problem-Solving",
    "Ongoing Development Support",
  ],
  ctaHeadline: "Scaling a Web3 Product?",
  ctaText:
    "Tech Leafe helps crypto wallets and Web3 products scale securely — with proactive engineering support at every phase.",
  ctaHref: "/#contact",
};

export default function SuperHeroPage() {
  return <CaseStudyDetail data={superHeroData} />;
}