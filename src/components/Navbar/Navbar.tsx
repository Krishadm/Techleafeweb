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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import ExpertiseDropdown from "../Expertise/ExpertiseDropdown";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Blog/Article", to: "/blog" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact us", to: "/contact" },
];

const MOBILE_EXPERTISE_ITEMS = [
  {
    label: "Blockchain Development",
    to: "expertise/blockchainDevelopment",
  },
  {
    label: "AI Development",
    to: "expertise/aiDevelopmentServices",
  },
  {
    label: "Web & App Development",
    to: "expertise/appDevelopment",
  },
];

const EXPERTISE_ANIM_MS = 350; // must match the exit animation duration in ExpertiseDropdown.tsx

const Navbar = () => {
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
      if (
        expertiseRef.current &&
        !expertiseRef.current.contains(e.target as Node)
      ) {
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
      const t = setTimeout(
        () => setExpertiseRendered(false),
        EXPERTISE_ANIM_MS
      );

      return () => clearTimeout(t);
    }
  }, [expertiseOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar position="sticky" elevation={0} className="header-appbar">
      <Toolbar className="header-toolbar">
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          className="header-logo-link"
        >
          <Box
            component="img"
            src={logo}
            alt="Tech Leafe Technologies"
            className="header-logo"
          />
        </Box>

        {/* DESKTOP NAVIGATION */}
        {!isMobile && (
          <Box className="header-desktop-nav">
            {/* HOME */}
            <Button
              component={Link}
              to="/"
              disableRipple
              className={`header-nav-button ${
                !expertiseOpen && location.pathname === "/"
                  ? "header-nav-active"
                  : ""
              }`}
            >
              Home
            </Button>

            {/* EXPERTISE */}
            <Box
              ref={expertiseRef}
              className="header-expertise-wrapper"
            >
              <Button
                type="button"
                disableRipple
                onClick={() => setExpertiseOpen((v) => !v)}
                className={`header-nav-button header-expertise-button ${
                  expertiseOpen ||
                  location.pathname.startsWith("/expertise")
                    ? "header-nav-active"
                    : ""
                }`}
              >
                Expertise

                <Box className="header-expertise-arrow-wrapper">
                  <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className={`header-expertise-arrow ${
                      expertiseOpen
                        ? "header-expertise-arrow-open"
                        : "header-expertise-arrow-closed"
                    }`}
                  >
                    <path d="M9 6l6 6-6 6" />
                  </Box>
                </Box>
              </Button>

              {expertiseRendered && (
                <ExpertiseDropdown
                  open={expertiseOpen}
                  onNavigate={() => setExpertiseOpen(false)}
                />
              )}
            </Box>

            {/* OTHER NAVIGATION LINKS */}
            {navLinks.slice(1).map((link) => (
              <Button
                key={link.to}
                component={Link}
                to={link.to}
                disableRipple
                className={`header-nav-button ${
                  !expertiseOpen && location.pathname === link.to
                    ? "header-nav-active"
                    : ""
                }`}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {/* DESKTOP RIGHT SPACER */}
        {!isMobile && <Box className="header-desktop-spacer" />}

        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            className="header-menu-button"
            aria-label="open menu"
          >
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
            className: "header-mobile-drawer",
          },
        }}
      >
        {/* TOP BAR: LOGO + CLOSE */}
        <Box className="header-mobile-topbar">
          <Box
            component={Link}
            to="/"
            onClick={() => setDrawerOpen(false)}
            className="header-mobile-logo-link"
          >
            <Box
              component="img"
              src={logo}
              alt="Tech Leafe Technologies"
              className="header-mobile-logo"
            />
          </Box>

          <IconButton
            onClick={() => setDrawerOpen(false)}
            className="header-close-button"
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* MOBILE NAVIGATION */}
        <List className="header-mobile-list">
          {/* HOME */}
          <ListItemButton
            component={Link}
            to="/"
            className={`header-mobile-nav-item ${
              !mobileExpertiseOpen && location.pathname === "/"
                ? "header-mobile-nav-active"
                : ""
            }`}
          >
            <ListItemText
              primary="Home"
              slotProps={{
                primary: {
                  className: "header-mobile-primary-text",
                },
              }}
            />
          </ListItemButton>

          {/* EXPERTISE */}
          <ListItemButton
            onClick={() => setMobileExpertiseOpen((v) => !v)}
            className={`header-mobile-nav-item ${
              mobileExpertiseOpen ||
              location.pathname.startsWith("/expertise")
                ? "header-mobile-nav-active"
                : ""
            }`}
          >
            <ListItemText
              primary="Expertise"
              slotProps={{
                primary: {
                  className: "header-mobile-primary-text",
                },
              }}
            />

            <KeyboardArrowDownIcon
              className={`header-mobile-expertise-icon ${
                mobileExpertiseOpen
                  ? "header-mobile-expertise-icon-open"
                  : ""
              }`}
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
                className="header-mobile-expertise-item"
              >
                <ListItemText
                  primary={d.label}
                  slotProps={{
                    primary: {
                      className: "header-mobile-expertise-text",
                    },
                  }}
                />
              </ListItemButton>
            ))}

          {/* OTHER NAVIGATION LINKS */}
          {navLinks.slice(1).map((link) => (
            <ListItemButton
              key={link.to}
              component={Link}
              to={link.to}
              className={`header-mobile-nav-item ${
                !mobileExpertiseOpen &&
                location.pathname === link.to
                  ? "header-mobile-nav-active"
                  : ""
              }`}
            >
              <ListItemText
                primary={link.label}
                slotProps={{
                  primary: {
                    className: "header-mobile-primary-text",
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
