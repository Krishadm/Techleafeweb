import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WHATSAPP_NUMBER = "919345955510";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about your services.";

const WhatsAppButton = () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Box sx={{ position: "fixed", bottom: { xs: 16, md: 24 }, right: { xs: 16, md: 24 }, zIndex: 1300 }}>
      <IconButton
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        sx={{
          width: 56,
          height: 56,
          backgroundColor: "#25D366",
          color: "#fff",
          boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
          transition: "transform 0.2s ease",
          "&:hover": { backgroundColor: "#1DA851", transform: "scale(1.06)" },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;