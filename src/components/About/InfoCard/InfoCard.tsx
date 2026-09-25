
import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

import "./InfoCard.css";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const InfoCard = ({
  icon,
  title,
  description,
}: InfoCardProps) => {
  return (
    <Box className="info-card">

      {/* ICON */}
      <Box className="info-card-icon">
        {icon}
      </Box>

      {/* CONTENT */}
      <Box className="info-card-content">

        <Typography className="info-card-title">
          {title}
        </Typography>

        <Typography className="info-card-description">
          {description}
        </Typography>

      </Box>

    </Box>
  );
};

export default InfoCard;

