import React, {  useState } from "react";

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
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AndroidIcon from "@mui/icons-material/Android";
import ApiIcon from "@mui/icons-material/Api";
import DnsIcon from "@mui/icons-material/Dns";
import StorageIcon from "@mui/icons-material/Storage";
import GitHubIcon from "@mui/icons-material/GitHub";

import AppImage from "../../assets/App Development.png";
import Footer from "../../components/Footer/Footer";
import "./ServiceDevelopment.css";

/* =========================================================
   WHY CARDS
========================================================= */

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

/* =========================================================
   SERVICE BLOCKS
========================================================= */

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
    name: "Flutter",
    icon: CodeIcon,
    color: "#02569B",
  },
  {
    name: "React Native",
    icon: PhoneIphoneIcon,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: DataObjectIcon,
    color: "#3178C6",
  },
  {
    name: "Solidity",
    icon: AccountBalanceWalletIcon,
    color: "#8C8C8C",
  },
  {
    name: "Ruby",
    icon: CodeIcon,
    color: "#CC342D",
  },
  {
    name: "Android",
    icon: AndroidIcon,
    color: "#3DDC84",
  },
  {
    name: "Express.js",
    icon: ApiIcon,
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: DnsIcon,
    color: "#339933",
  },
  {
    name: "PostgreSQL",
    icon: StorageIcon,
    color: "#4169E1",
  },
  {
    name: "Git/GitHub",
    icon: GitHubIcon,
    color: "#FFFFFF",
  },
];

/* =========================================================
   FAQS
========================================================= */

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

/* =========================================================
   CSS
========================================================= */


/* =========================================================
   COMPONENT
========================================================= */

const AppDevelopmentPage: React.FC = () => {
  const [openFaq, setOpenFaq] =
    useState<string | false>(FAQS[0].q);

  //const [metricsVisible, setMetricsVisible] =
    // useState(false);

  //const metricsRef =
    //useRef<HTMLDivElement | null>(null);


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
            >

             

            </Breadcrumbs>


            {/* HERO GRID */}

            <Box className="tl-hero-grid">

              {/* LEFT */}

              <Box>

                <div className="tl-eyebrow">
                  EXTENSION OF OUR CORE — MOBILE-FIRST DELIVERY
                </div>

                <Typography component="h1">
                  Ideas turned into{" "}
                  <em>
                    scalable digital products.
                  </em>
                </Typography>

                <Typography className="tl-lede">
                  A slow or clunky app costs you users.
                  We build cross-platform iOS and
                  Android applications engineered for
                  offline resilience, native-feeling
                  performance, and interfaces people
                  actually enjoy using.
                </Typography>

              </Box>


              {/* RIGHT IMAGE */}

              <Box className="tl-hero-photo">

                <img
                  src={AppImage}
                  alt="App development dashboard"
                />

              </Box>

            </Box>

          </Container>

        </Box>


        {/* =====================================================
            WHY APP DEVELOPMENT
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

          <Container
            className="tl-tech-container"
            maxWidth={false}
            disableGutters
          >

            <Typography component="h2">
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

            <Typography component="h2">
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


      {/* FOOTER */}

      <Footer />
    </>
  );
};

export default AppDevelopmentPage;
