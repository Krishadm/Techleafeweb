import { useEffect, useRef, useState } from "react";
import {AppBar, Box,Button,Drawer,IconButton,List,ListItemButton,ListItemText,Toolbar,useMediaQuery,useTheme,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import ExpertiseDropdown from "../component/ExpertiseDropdown";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Blog/Article", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

const MOBILE_EXPERTISE_ITEMS = [
  { label: "Blockchain Development", to: "/expertise/blockchain-development" },
  { label: "AI Development", to: "/expertise/AIDevelopmentServices" },
  { label: "Web & App Development", to: "/expertise/appdevelopment" },
];

const EXPERTISE_ANIM_MS = 350; // must match the exit animation duration in ExpertiseDropdown.tsx

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [expertiseRendered, setExpertiseRendered] = useState(false);
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
    setDrawerOpen(false);
  }, [location.pathname]);

  // Keep the dropdown mounted a little longer than `expertiseOpen` so the
  // closing (zoom-out) animation has time to actually play before unmount.
  useEffect(() => {
    if (expertiseOpen) {
      setExpertiseRendered(true);
    } else if (expertiseRendered) {
      const t = setTimeout(() => setExpertiseRendered(false), EXPERTISE_ANIM_MS);
      return () => clearTimeout(t);
    }
  }, [expertiseOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const navBtnBase = {
  position: "relative" as const,
  display: "flex",
  alignItems: "center",
  height: "20px",
  lineHeight: "20px",
  textTransform: "none" as const,
  fontWeight: 500,
  fontSize: 14,
  fontFamily: '"DM Sans", sans-serif',
  borderRadius: 0,
  backgroundColor: "transparent",
  "&:hover": { backgroundColor: "transparent" },
};

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
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", minWidth: { md: 160 } }}>
          <Box
            component="img"
            src={logo}
            alt="Tech Leafe Technologies"
            sx={{ height: { xs: 40, sm: 48, md: 56 }, width: "auto", objectFit: "contain" }}
          />
        </Box>

        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, flex: 1 }}>
            <Button
              component={Link}
              to="/"
              disableRipple
              sx={{
                ...navBtnBase,
                color: !expertiseOpen && location.pathname === "/" ? "#35A51C" : "#fff",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -6,
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#35A51C",
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
                  ...navBtnBase,
                  gap: 0.6,
                  color: expertiseOpen || location.pathname.startsWith("/expertise") ? "#35A51C" : "#fff",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -6,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#35A51C",
                    transform:
                      expertiseOpen || location.pathname.startsWith("/expertise") ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  },
                }}
              >
                Expertise
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 12,
                    height: 12,
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    sx={{
                      width: 11,
                      height: 11,
                      transform: expertiseOpen ? "rotate(0deg)" : "rotate(90deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </Box>
                </Box>
              </Button>
              {expertiseRendered && (
                <ExpertiseDropdown open={expertiseOpen} onNavigate={() => setExpertiseOpen(false)} />
              )}
            </Box>

            {navLinks.slice(1).map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                disableRipple
                sx={{
                  ...navBtnBase,
                  color: !expertiseOpen && location.pathname === link.to ? "#35A51C" : "#fff",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -6,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#35A51C",
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

      {/* FULL-SCREEN MOBILE MENU */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#0a0a0a",
              color: "#fff",
              width: "100vw",
              height: "100dvh",
              maxWidth: "100vw",
            },
          },
        }}
      >
        {/* Top bar: logo + close */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Box
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box component="img" src={logo} alt="Tech Leafe Technologies" sx={{ height: 40, width: "auto" }} />
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, pt: 1, overflowY: "auto" }}>
          <ListItemButton
            component={Link}
            to="/"
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              py: 2,
              color: !mobileExpertiseOpen && location.pathname === "/" ? "#35A51C" : "#fff",
            }}
          >
            <ListItemText primary="Home" slotProps={{ primary: { sx: { fontSize: 18, fontWeight: 500 } } }} />
          </ListItemButton>

          <ListItemButton
            onClick={() => setMobileExpertiseOpen((v) => !v)}
            sx={{
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              py: 2,
              color: mobileExpertiseOpen || location.pathname.startsWith("/expertise") ? "#35A51C" : "#fff",
            }}
          >
            <ListItemText primary="Expertise" slotProps={{ primary: { sx: { fontSize: 18, fontWeight: 500 } } }} />
            <KeyboardArrowDownIcon
              sx={{
                transform: mobileExpertiseOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </ListItemButton>

          {/* Only the 3 top-level disciplines — same as desktop dropdown */}
          {mobileExpertiseOpen &&
            MOBILE_EXPERTISE_ITEMS.map((d) => (
              <ListItemButton
                key={d.to}
                component={Link}
                to={d.to}
                onClick={() => {
                  setDrawerOpen(false);
                  setMobileExpertiseOpen(false);
                }}
                sx={{ pl: 4, py: 1.5, borderBottom: "1px solid rgba(255,255,255,0.05)" }}
              >
                <ListItemText primary={d.label} slotProps={{ primary: { sx: { fontSize: 15, color: "#ccc" } } }} />
              </ListItemButton>
            ))}

          {navLinks.slice(1).map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              sx={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                py: 2,
                color: !mobileExpertiseOpen && location.pathname === link.to ? "#35A51C" : "#fff",
              }}
            >
              <ListItemText primary={link.label} slotProps={{ primary: { sx: { fontSize: 18, fontWeight: 500 } } }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;