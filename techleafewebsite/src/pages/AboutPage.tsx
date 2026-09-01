import { Box, Container, Typography } from "@mui/material";

// vision & mission icon
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

// teams icon
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

// images
import aboutimg1 from "../assets/about_page_assest/about_img_1.png";
import aboutimg2 from "../assets/about_page_assest/about_img_2.png";
import aboutimg3 from "../assets/about_page_assest/about_img_3.png";
import aboutimg4 from "../assets/about_page_assest/about_img_4.png";

// re-usable components
import InfoCard from "../component/About_reusable_components/InfoCard";

const AboutPage = () => {

  // teams card details
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
             MAIN SECTION
          ========================= */

          .about-page {
            min-height: 100vh;
            background-color: #000000;
            color: #ffffff;
            padding: 55px 0;
          }

          .about-container {
            max-width: 1200px;
          }


          /* =========================
             TOP SECTION
          ========================= */

          .about-top {
            display: flex;
            align-items: start;
            justify-content: space-between;
            gap: 70px;
          }


          /* =========================
             LEFT CONTENT
          ========================= */

          .about-content {
            width: 43%;
          }

          .about-label {
            color: #1D620C;
            font-weight: 700 !important;
            font-size: 15px !important;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 20px !important;
          }

          .about-title {
            font-size: 45px !important;
            font-weight: 700 !important;
            line-height: 1.15 !important;
            margin-bottom: 22px !important;
          }

          .about-title span {
            color: #1D620C;
          }

          .about-description {
            color: #aeb8bc;
            font-size: 18px !important;
            line-height: 1.7 !important;
            max-width: 500px;
          }


          /* =========================
             IMAGE COLLAGE
          ========================= */

          .about-images {
            width: 55%;
            max-width: 600px;
            position: relative;
          }

          .image-row {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
          }

          .about-image {
            height: 190px;
            object-fit: cover;
            border-radius: 10px;
            display: block;
          }

          .image-1 {
            width: 46%;
          }

          .image-2 {
            width: 54%;
          }

          .image-3 {
            width: 54%;
          }

          .image-4 {
            width: 46%;
          }


          /* =========================
             CENTER LOGO
          ========================= */

          .center-logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 75px;
            height: 75px;
            background-color: #1d620ce0;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 35px;
            z-index: 2;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          }


          /* =========================
             INFO CARDS
          ========================= */

          .info-cards {
            display: flex;
            gap: 15px;
            margin: 55px 0;
          }

          .info-card-wrapper {
            flex: 1;
          }


          /* =========================
             ABOUT SECTION
          ========================= */

          .about-section {
            margin-bottom: 55px;
          }


          /* =========================
             HEADING
          ========================= */

          .teams-heading {
            margin-bottom: 35px;
          }


          /* =========================
             GRID
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

            .about-title {
              font-size: 38px !important;
            }

            .about-image {
              height: 160px;
            }

            .center-logo {
              width: 65px;
              height: 65px;
              font-size: 30px;
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

            .about-label {
              font-size: 13px !important;
              margin-bottom: 15px !important;
            }

            .about-title {
              font-size: 32px !important;
              line-height: 1.2 !important;
            }

            .about-description {
              font-size: 14px !important;
            }

            .about-images {
              width: 100%;
              max-width: 100%;
            }

            .about-image {
              height: 140px;
            }

            .center-logo {
              width: 58px;
              height: 58px;
              font-size: 26px;
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

            .about-title {
              font-size: 28px !important;
            }

            .about-image {
              height: 110px;
              border-radius: 8px;
            }

            .image-row {
              gap: 7px;
              margin-bottom: 7px;
            }

            .center-logo {
              width: 50px;
              height: 50px;
              font-size: 22px;
              border-radius: 9px;
            }
          }
        `}
      </style>

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


            {/* IMAGE COLLAGE */}
            <Box className="about-images">

              {/* ROW 1 */}
              <Box className="image-row">

                <Box
                  component="img"
                  src={aboutimg1}
                  alt="Team working"
                  className="about-image image-1"
                />

                <Box
                  component="img"
                  src={aboutimg2}
                  alt="Team collaboration"
                  className="about-image image-2"
                />

              </Box>


              {/* ROW 2 */}
              <Box className="image-row">

                <Box
                  component="img"
                  src={aboutimg3}
                  alt="Developers working"
                  className="about-image image-3"
                />

                <Box
                  component="img"
                  src={aboutimg4}
                  alt="Team discussion"
                  className="about-image image-4"
                />

              </Box>


              {/* CENTER LOGO */}
              <Box className="center-logo">
                ◈
              </Box>

            </Box>

          </Box>


          {/* MISSION & VISION */}
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


          {/* HOW WE WORK */}
          <Box className="about-section">

            <Typography variant="h6" className="about-label">
              How we work
            </Typography>

            <Typography className="about-title">
              A professional team that works closely together.
            </Typography>

            <Typography sx={{ marginBottom: 4 }}>
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

            <Typography>
              That collaboration is also how we keep
              improving — cross-pollinating patterns we learn
              auditing a smart contract into how we ground an AI
              system's outputs, and vice versa. Neither field stays
              still for long, and we'd rather stay close to both than
              specialize narrowly in one and fall behind on the other.
            </Typography>

          </Box>


          {/* WHY TECH LEAFE */}
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
                <InfoCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}

            </Box>

          </Box>

        </Container>
      </Box>
    </>
  );
};

export default AboutPage;