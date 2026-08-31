import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#0f172a",
        backgroundImage: "none",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5, minWidth: 120 }}>
          Techleafe
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            flex: 1,
            mx: 2,
          }}
        >
          <Button component={Link} to="/" color="inherit" sx={{ textTransform: "none" }}>
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit" sx={{ textTransform: "none" }}>
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit" sx={{ textTransform: "none" }}>
            Contact
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            borderRadius: 999,
            textTransform: "none",
            background: "linear-gradient(135deg, #7c3aed 0%, #22c55e 100%)",
            boxShadow: "none",
            px: 2.5,
            minWidth: 120,
          }}
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
