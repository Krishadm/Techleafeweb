import { useState } from "react";
import { AppBar,Box,Button,Drawer,IconButton,List,ListItemButton,
ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo1.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Expertise", to: "/expertise" },
  { label: "About us", to: "/about" },
  { label: "Blog/Article", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#000000",
        backgroundImage: "none",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
          py: 1,
        }}
      >
        {/* Logo — fixed width so the center math stays balanced */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", minWidth: { md: 160 } }}
        >
          <Box
            component="img"
            // src={logo}
            alt="Tech Leafe Technologies"
            sx={{ height: { xs: 40, sm: 48, md: 56 }, width: "auto", objectFit: "contain" }}
          />
        </Box>

        {/* Desktop nav — centered in the remaining space */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 3,
              flex: 1,
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  "&:hover": { color: "#3ecf6e", backgroundColor: "transparent" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Spacer — mirrors the logo's width so the nav box is truly centered */}
        {!isMobile && <Box sx={{ minWidth: { md: 160 } }} />}

        {/* Mobile menu button */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#fff" }} aria-label="open menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: { sx: { backgroundColor: "#000", color: "#fff", width: 240 } },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                "&:hover": { color: "#3ecf6e" },
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;