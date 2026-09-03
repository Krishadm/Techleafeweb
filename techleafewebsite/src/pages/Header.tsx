import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import ExpertiseDropdown from "../component/ExpertiseDropdown";
import { DISCIPLINES } from "../data/servicesData";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Blog/Article", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const expertiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (expertiseRef.current && !expertiseRef.current.contains(e.target as Node)) {
        setExpertiseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setExpertiseOpen(false);
    setMobileExpertiseOpen(false);
  }, [location.pathname]);

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
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", minWidth: { md: 160 } }}
        >
          <Box
            component="img"
            src={logo}
            alt="Tech Leafe Technologies"
            sx={{ height: { xs: 40, sm: 48, md: 56 }, width: "auto", objectFit: "contain" }}
          />
        </Box>

        {/* Desktop nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, flex: 1 }}>
            <Button
              component={Link}
              to="/"
              disableRipple
              sx={{
                position: "relative",
                color: !expertiseOpen && location.pathname === "/" ? "#3ecf6e" : "#fff",
                textTransform: "none",
                fontWeight: 500,
                fontSize: 14,
                borderRadius: 0,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 4,
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#3ecf6e",
                  transform: !expertiseOpen && location.pathname === "/" ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              Home
            </Button>

            <Box ref={expertiseRef} sx={{ position: "relative" }}>
              <Button
                type="button"
                disableRipple
                onClick={() => setExpertiseOpen((v) => !v)}
                sx={{
                  position: "relative",
                  color: expertiseOpen || location.pathname.startsWith("/services") ? "#3ecf6e" : "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "transparent" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 4,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#3ecf6e",
                    transform:
                      expertiseOpen || location.pathname.startsWith("/services") ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                Expertise
              </Button>
              {expertiseOpen && <ExpertiseDropdown onNavigate={() => setExpertiseOpen(false)} />}
            </Box>

            {navLinks.slice(1).map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                disableRipple
                sx={{
                  position: "relative",
                  color: !expertiseOpen && location.pathname === link.to ? "#3ecf6e" : "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  "&:hover": { backgroundColor: "transparent" },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 4,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#3ecf6e",
                    transform: !expertiseOpen && location.pathname === link.to ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {!isMobile && <Box sx={{ minWidth: { md: 160 } }} />}

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
        slotProps={{ paper: { sx: { backgroundColor: "#000", color: "#fff", width: 260 } } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItemButton
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: !mobileExpertiseOpen && location.pathname === "/" ? "#3ecf6e" : "#fff",
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton
            onClick={() => setMobileExpertiseOpen((v) => !v)}
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: mobileExpertiseOpen || location.pathname.startsWith("/services") ? "#3ecf6e" : "#fff",
            }}
          >
            <ListItemText primary="Expertise" />
          </ListItemButton>
          {mobileExpertiseOpen &&
            DISCIPLINES.flatMap((d) => d.services).map((s) => (
              <ListItemButton
                key={s.slug}
                component={Link}
                to={`/services/${s.slug}`}
                onClick={() => {
                  setDrawerOpen(false);
                  setMobileExpertiseOpen(false);
                }}
                sx={{ pl: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <ListItemText primary={s.label} sx={{ fontSize: 14 }} />
              </ListItemButton>
            ))}

          {navLinks.slice(1).map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                color: !mobileExpertiseOpen && location.pathname === link.to ? "#3ecf6e" : "#fff",
              }}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;