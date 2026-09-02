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

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const quickLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "UI/UX Design", path: "/services/ui-ux" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "SEO", path: "/services/seo" },
];


const Footer: React.FC = () => {
  return (
    <Box
      id="footer" // <-- ADD THIS LINE HERE
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "#1D620C",
        mt: 8,
      }}
    > 
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
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

            <Box sx={{ mt: 3 }}>
              <IconButton 
  component="a" 
  href="https://www.facebook.com/profile.php?id=61593430346026" 
  target="_blank" 
  rel="noopener noreferrer" 
  sx={{ color: "#fff" }}
>
  <FacebookIcon />
</IconButton>
              <IconButton 
  component="a" 
  href="https://www.instagram.com/tech_leafe_technologies" 
  target="_blank" 
  rel="noopener noreferrer" 
  sx={{ color: "#fff" }}
>
  <InstagramIcon />
</IconButton>
              <IconButton 
  component="a" 
  href="https://www.linkedin.com/company/tech-leafe-technologies" 
  target="_blank" 
  rel="noopener noreferrer" 
  sx={{ color: "#fff" }}
>
  <LinkedInIcon />
</IconButton>
              <IconButton 
  component="a" 
  href="https://x.com/TechLeafe_India" 
  target="_blank" 
  rel="noopener noreferrer" 
  sx={{ color: "#fff" }}
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
                href={item.path}
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

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>

            {serviceLinks.map((service) => (
              <Link
                key={service.name}
                href={service.path}
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
              📍 Chennai, Tamil Nadu
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#bdbdbd", mb: 1.5 }}
            >
              📧 support@techleafe.com
            </Typography>
             <Typography variant="body2" sx={{ color: "#bdbdbd" }}>
              📞 +91 98765 43210
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#444" }} />

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

          <Box>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "#999",
                mr: 3,
                "&:hover": { color: "#fff" },
              }}
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              underline="none"
              sx={{
                color: "#999",
                "&:hover": { color: "#fff" },
              }}
            >
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;