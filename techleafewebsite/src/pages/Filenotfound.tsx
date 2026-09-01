import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import robotImage from "../assets/404-robot.png";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        minHeight: { xs: "calc(100vh - 72px)", md: "calc(100vh - 88px)" },
        display: "flex",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 4, md: 4 },
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left: text content */}
        <Box sx={{ textAlign: { xs: "center", md: "left" }, order: { xs: 2, md: 1 } }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 800,
              fontSize: { xs: "72px", sm: "96px", md: "120px" },
              lineHeight: 1,
              mb: 2,
            }}
          >
            404
          </Typography>

          <Box
            sx={{
              width: { xs: "160px", md: "220px" },
              height: "4px",
              background: "linear-gradient(90deg, #298911, transparent)",
              mx: { xs: "auto", md: 0 },
              mb: 3,
            }}
          />

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: { xs: "22px", sm: "26px", md: "30px" },
              mb: 2,
            }}
          >
            Oops! You ran out of oxygen!
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.65)",
              fontSize: { xs: "15px", md: "17px" },
              lineHeight: 1.6,
              mb: 4,
              maxWidth: "360px",
              mx: { xs: "auto", md: 0 },
            }}
          >
            The page you are looking for doesn't exist or has been moved.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            sx={{
              color: "#ffffff",
              borderColor: "rgba(255,255,255,0.4)",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "14px", md: "16px" },
              px: { xs: 3, md: 4 },
              py: { xs: 1, md: 1.3 },
              "&:hover": {
                borderColor: "#ffffff",
                backgroundColor: "rgba(255,255,255,0.06)",
              },
            }}
          >
            Back to Home Page
          </Button>
        </Box>

        {/* Right: robot illustration */}
        <Box sx={{ order: { xs: 1, md: 2 }, width: { xs: "70%", sm: "55%", md: "45%" }, maxWidth: "560px" }}>
          <Box
            component="img"
            src={robotImage}
            alt="Astronaut robot floating with bubbles"
            sx={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;


