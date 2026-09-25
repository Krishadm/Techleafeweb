import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  {
    name: "Blockchain Development",
    path: "/expertise/blockchainDevelopment",
  },
  {
    name: "AI Development",
    path: "/expertise/aiDevelopmentServices",
  },
  {
    name: "Web & App Development",
    path: "/expertise/appDevelopment",
  },
];

const Footer: React.FC = () => {
  return (
    <Box id="footer" component="footer" className="footer">
      <Container maxWidth="lg" className="footer-container">
        <Grid container spacing={3}>

          {/* =========================
              COMPANY
          ========================= */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="h5"
              className="footer-company-title"
            >
              TechLeafe
            </Typography>

            <Typography
              variant="body2"
              className="footer-description"
            >
              We build modern, responsive and innovative digital solutions
              that help businesses grow and succeed.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box className="footer-social-icons">

              {/* Facebook */}
              <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=61593430346026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-icon facebook-icon"
              >
                <FacebookIcon />
              </IconButton>

              {/* Instagram */}
              <IconButton
                component="a"
                href="https://www.instagram.com/tech_leafe_technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-icon instagram-icon"
              >
                <InstagramIcon />
              </IconButton>

              {/* LinkedIn */}
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/tech-leafe-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon linkedin-icon"
              >
                <LinkedInIcon />
              </IconButton>

              {/* Twitter / X */}
              <IconButton
                component="a"
                href="https://x.com/TechLeafe_India"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="footer-social-icon twitter-icon"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* =========================
              QUICK LINKS
          ========================= */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="h6"
              className="footer-section-title"
            >
              Quick Links
            </Typography>

            {quickLinks.map((item) => (
              <Link
                key={item.name}
                component={RouterLink}
                to={item.path}
                underline="none"
                className="footer-link"
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* =========================
              EXPERTISE
          ========================= */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              className="footer-section-title"
            >
              Expertise
            </Typography>

            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                component={RouterLink}
                to={service.path}
                underline="none"
                className="footer-link"
              >
                {service.name}
              </Link>
            ))}
          </Grid>

          {/* =========================
              CONTACT
          ========================= */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              className="footer-section-title"
            >
              Contact Us
            </Typography>

            <Typography
              variant="body2"
              className="footer-contact-text"
            >
              <LocationOnIcon className="footer-location-icon" />
              100 Feet Road, Selaiyur, Tambaram, Chennai – 600073
            </Typography>

            <Typography
              variant="body2"
              className="footer-contact-text"
            >
              📧 admin@techleafe.com
            </Typography>

            <Typography
              variant="body2"
              className="footer-contact-text"
            >
              📞 +91 93459 55510
            </Typography>
          </Grid>
        </Grid>

        {/* =========================
            DIVIDER
        ========================= */}
        <Divider className="footer-divider" />

        {/* =========================
            COPYRIGHT
        ========================= */}
        <Box className="footer-bottom">
          <Typography
            variant="body2"
            className="footer-copyright"
          >
            © {new Date().getFullYear()} TechLeafe. All rights reserved.
          </Typography>

          <Box className="footer-legal-links">
            <Typography
              variant="body2"
              className="footer-legal-text"
            >
              Privacy Policy
            </Typography>

            <Typography
              variant="body2"
              className="footer-legal-text"
            >
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;