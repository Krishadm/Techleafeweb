import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "919345955510";
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about your services.";

const WhatsAppButton = () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <Box className="whatsapp-floating-wrapper">
      <IconButton
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-floating-button"
      >
        <WhatsAppIcon className="whatsapp-floating-icon" />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;