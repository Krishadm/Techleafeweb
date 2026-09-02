import {
  Box,
  Button,
  Container,
  Typography,
  keyframes,
} from "@mui/material";

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

export default function PortfolioPage() {
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

      {/* ================= HERO SECTION ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1240px",
          position: "relative",
          zIndex: 1,
          px: { xs: 2.5, sm: 4, md: 5 },
          pt: { xs: 2, sm: 2.5, md: 3 },
          pb: { xs: 5, md: 7 },
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

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 2.5 },
              flexWrap: "wrap",
            }}
          >
            {/* Primary CTA */}
            <Button
              component="a"
              href="#contact"
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
              <span>Start a project</span>
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                →
              </span>
            </Button>

            {/* Secondary CTA */}
            <Button
              component="a"
              href="#what-we-build"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: { xs: "160px", sm: "190px" },
                height: "50px",
                px: "24px",
                border: "2px solid #157a08",
                background: "rgba(0, 17, 0, 0.4)",
                color: "#20A914",
                borderRadius: "999px",
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: 700,
                lineHeight: 1,
                textTransform: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "#20A914",
                  background: "rgba(32, 169, 20, 0.15)",
                  color: "#ffffff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(32, 169, 20, 0.2)",
                },
              }}
            >
              See what we build
            </Button>
          </Box>
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
    </Box>
  );
}
