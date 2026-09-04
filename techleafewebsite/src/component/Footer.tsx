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

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Blockchain Development", path: "/expertise/blockchain-development" },
  { name: "AI Development", path: "/expertise/AIDevelopmentServices" },
  { name: "Web & App Development", path: "/expertise/appdevelopment" },
 
];

const Footer: React.FC = () => {
  return (
    <Box
      id="footer" // <-- ADD THIS LINE HERE
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "#1D620C",
        mt: 1,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {/* Company */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              TechLeafe
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#bdbdbd",
                lineHeight: 1.8,
                maxWidth: 350,
              }}
            >
              We build modern, responsive and innovative digital solutions
              that help businesses grow and succeed.
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=61593430346026"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#fff", backgroundColor: "#1877F2" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/tech_leafe_technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#fff",
                    background: "linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/tech-leafe-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#fff", backgroundColor: "#0A66C2" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/TechLeafe_India"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                sx={{
                  color: "#fff",
                  "&:hover": { color: "#fff", backgroundColor: "#1DA1F2" },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>

            {quickLinks.map((item) => (
              <Link
                key={item.name}
                component={RouterLink}
                to={item.path}
                underline="none"
                sx={{
                  display: "block",
                  color: "#bdbdbd",
                  mb: 1.2,
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Grid>

          {/* Expertise */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Expertise
            </Typography>

            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                component={RouterLink}
                to={service.path}
                underline="none"
                sx={{
                  display: "block",
                  color: "#bdbdbd",
                  mb: 1.2,
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {service.name}
              </Link>
            ))}
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#bdbdbd", mb: 1.5 }}
            >
              <LocationOnIcon sx={{ fontSize: "1.1rem", verticalAlign: "middle", mr: 0.5 }} />
              100 Feet Road, Selaiyur, Tambaram, Chennai – 600073
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#bdbdbd", mb: 1.5 }}
            >
              📧 admin@techleafe.com
            </Typography>
             <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
              <Link href="tel:+919345955510" sx={{ color: "#bdbdbd" }}>
                📞 +91 93459 55510
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2.5, borderColor: "#444" }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#999", textAlign: "center" }}
          >
            © {new Date().getFullYear()} TechLeafe. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography variant="body2" sx={{ color: "#999" }}>
              Privacy Policy
            </Typography>

            <Typography variant="body2" sx={{ color: "#999" }}>
              Terms & Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;