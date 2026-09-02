import { useEffect, useRef, useState } from "react";
import { AppBar,Box,Button,Drawer,IconButton,List,ListItemButton,
ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import ExpertiseDropdown from "../component/ExpertiseDropdown";
import { DISCIPLINES } from "../data/servicesData";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Blog/Article", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
            src={logo}
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
            <Button component={Link} to="/" sx={{ color: "#fff", textTransform: "none", fontWeight: 500, fontSize: 14, "&:hover": { color: "#3ecf6e", backgroundColor: "transparent" } }}>
              Home
            </Button>

            {/* Expertise — click-to-toggle only, no separate page. Hovering
                still previews the dropdown; clicking the button itself
                closes it instantly if it's already open (or opens it if
                closed) rather than navigating anywhere. */}
            <Box ref={expertiseRef} sx={{ position: "relative" }}>
              <Button
                type="button"
                onClick={() => setExpertiseOpen((v) => !v)}
                sx={{ color: expertiseOpen ? "#3ecf6e" : "#fff", textTransform: "none", fontWeight: 500, fontSize: 14, "&:hover": { color: "#3ecf6e", backgroundColor: "transparent" } }}
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
          paper: { sx: { backgroundColor: "#000", color: "#fff", width: 260 } },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <ListItemButton component={Link} to="/" onClick={() => setDrawerOpen(false)} sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", "&:hover": { color: "#3ecf6e" } }}>
            <ListItemText primary="Home" />
          </ListItemButton>

          {/* Expertise — expands inline in the mobile drawer instead of a floating panel */}
          <ListItemButton
            onClick={() => setMobileExpertiseOpen((v) => !v)}
            sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", "&:hover": { color: "#3ecf6e" } }}
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
                sx={{ pl: 4, borderTop: "1px solid rgba(255,255,255,0.05)", "&:hover": { color: "#3ecf6e" } }}
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
};

export default Header;
