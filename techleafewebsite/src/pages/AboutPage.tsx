import { Box, Container, Typography } from "@mui/material";

// vision & mission icon
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

// feature card icons
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

// technology image
import about_page from "../assets/about_page.png";

// reusable components
import InfoCard from "../component/AboutComponent/InfoCard";
import FeatureCard from "../component/AboutComponent/FeatureCard";
import Footer from "../component/Footer";

const AboutPage = () => {
  // =========================
  // FEATURE CARD DETAILS
  // =========================


  //testing
  const cards = [
    {
      icon: <GroupsOutlinedIcon />,
      title: "Experienced Team",
      description:
        "Senior engineers, not a bench of juniors learning on your project.",
    },
    {
      icon: <CodeOutlinedIcon />,
      title: "Modern Tech & Frameworks",
      description:
        "We use the latest technologies to build scalable applications.",
    },
    {
      icon: <SecurityOutlinedIcon />,
      title: "Secure & Scalable Solutions",
      description:
        "Security, performance and scalability built into every solution.",
    },
    {
      icon: <TrackChangesOutlinedIcon />,
      title: "Client-Focused Approach",
      description:
        "Your goals drive our process and decision-making.",
    },
    {
      icon: <AccountBalanceWalletOutlinedIcon />,
      title: "Affordable Pricing",
      description:
        "Quality solutions that fit your budget.",
    },
    {
      icon: <AccessTimeOutlinedIcon />,
      title: "Timely Delivery",
      description:
        "On-time delivery without compromising quality.",
    },
  ];

  return (
    <>
      <style>
        {`
          /* =========================
             MAIN PAGE
          ========================= */

          .about-page {
            min-height: 100vh;
            background-color: #000000;
            color: #ffffff;
            padding: 55px 0;
          }

          /* =========================
             CONTAINER
          ========================= */

          .about-container {
            max-width: 1200px;
          }

          /* =========================
             TOP SECTION
          ========================= */

          .about-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 70px;
          }

          /* =========================
             LEFT CONTENT
          ========================= */

          .about-content {
            width: 43%;
          }

          /* =========================
             TECHNOLOGY IMAGE
          ========================= */

          .about-images {
            width: 55%;
            max-width: 600px;
            position: relative;
          }

          .about-technology-image {
            width: 100%;
            height: 380px;
            display: block;
            object-fit: cover;
            border-radius: 14px;
            border: 1px solid #1D620C;
            box-sizing: border-box;

            box-shadow:
              0 10px 35px rgba(29, 98, 12, 0.12);

            transition:
              transform 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }

          /* =========================
             IMAGE HOVER
          ========================= */

          .about-technology-image:hover {
            border-color: #20a914;

            box-shadow:
              0 12px 35px rgba(29, 98, 12, 0.20);
          }

          /* =========================
             MISSION & VISION
          ========================= */

          .info-cards {
            display: flex;
            gap: 15px;
            margin: 55px 0;
          }

          .info-card-wrapper {
            flex: 1;
            min-width: 0;
          }

          /* =========================
             ABOUT SECTION
          ========================= */

          .about-section {
            margin-bottom: 55px;
          }

          /* =========================
             TEAMS HEADING
          ========================= */

          .teams-heading {
            margin-bottom: 35px;
          }

          /* =========================
             FEATURE GRID
          ========================= */

          .teams-grid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }

          /* =========================
             TABLET
          ========================= */

          @media (max-width: 900px) {
            .about-page {
              padding: 45px 0;
            }

            .about-top {
              gap: 40px;
            }

            .about-images {
              width: 55%;
            }

            .about-technology-image {
              height: 320px;
            }

            .teams-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* =========================
             MOBILE
          ========================= */

          @media (max-width: 700px) {
            .about-page {
              padding: 35px 0;
            }

            .about-top {
              flex-direction: column;
              align-items: stretch;
              gap: 40px;
            }

            .about-content {
              width: 100%;
            }

            .about-images {
              width: 100%;
              max-width: 100%;
            }

            .about-technology-image {
              width: 100%;
              height: auto;
              aspect-ratio: 16 / 9;
              object-fit: cover;
              border-radius: 12px;
            }

            .info-cards {
              flex-direction: column;
              margin-top: 40px;
            }

            .teams-heading {
              margin-bottom: 25px;
            }

            .teams-grid {
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }

          /* =========================
             SMALL MOBILE
          ========================= */

          @media (max-width: 450px) {
            .about-technology-image {
              border-radius: 10px;
            }

            .info-cards {
              gap: 12px;
            }
          }
        `}
      </style>

      {/* =========================
          ABOUT PAGE
      ========================= */}

      <Box className="about-page">
        <Container className="about-container">

          {/* TOP SECTION */}
          <Box className="about-top">

            {/* LEFT CONTENT */}
            <Box className="about-content">

              <Typography className="about-label">
                About Us
              </Typography>

              <Typography
                component="h1"
                className="about-title"
              >
                A team driven by{" "}
                <span>passion</span>{" "}
                for emerging technology.
              </Typography>

              <Typography className="about-description">
                We constantly learn, experiment and push our standards
                higher. So every project we ship is better than the one
                before.
              </Typography>

            </Box>

            {/* TECHNOLOGY IMAGE */}
            <Box className="about-images">
              <Box
                component="img"
                src={about_page}
                alt="Blockchain, AI and application development"
                className="about-technology-image"
              />
            </Box>

          </Box>

          {/* =========================
              MISSION & VISION
          ========================= */}

          <Box className="info-cards">

            <Box className="info-card-wrapper">
              <InfoCard
                icon={<AirplaneTicketIcon />}
                title="Our Mission"
                description="To help startups and enterprises adopt AI and blockchain responsibly through secure, scalable and production-ready engineering."
              />
            </Box>

            <Box className="info-card-wrapper">
              <InfoCard
                icon={<BrightnessHighIcon />}
                title="Our Vision"
                description="To build an engineering culture that continuously learns, experiments and raises the standard for every product we ship."
              />
            </Box>

          </Box>

          {/* =========================
              HOW WE WORK
          ========================= */}

          <Box className="about-section">

            <Typography
              variant="h6"
              className="about-label"
            >
              How we work
            </Typography>

            <Typography className="about-title">
              A professional team that works closely together.
            </Typography>

            <Typography
              className="about-body-text"
              sx={{ marginBottom: 4 }}
            >
              Blockchain and AI move fast, and neither discipline
              rewards working in isolation — a smart contract
              decision affects the front-end team, and an AI
              system's data pipeline affects the infrastructure
              it runs on. We keep engineers across blockchain, AI,
              and application development talking to each other
              on every project, so security reviews, model design,
              and product decisions inform one another instead of
              happening in separate silos.
            </Typography>

            <Typography className="about-body-text">
              That collaboration is also how we keep
              improving — cross-pollinating patterns we learn
              auditing a smart contract into how we ground an AI
              system's outputs, and vice versa. Neither field stays
              still for long, and we'd rather stay close to both than
              specialize narrowly in one and fall behind on the other.
            </Typography>

          </Box>

          {/* =========================
              WHY TECH LEAFE
          ========================= */}

          <Box className="about-section">

            <Box className="teams-heading">

              <Typography className="about-label">
                WHY TECH LEAFE
              </Typography>

              <Typography className="about-title">
                Six reasons teams choose to work with us.
              </Typography>

            </Box>

            <Box className="teams-grid">

              {cards.map((card, index) => (
                <FeatureCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}

            </Box>

          </Box>

        </Container>

        <Footer />

      </Box>
    </>
  );
};

export default AboutPage;