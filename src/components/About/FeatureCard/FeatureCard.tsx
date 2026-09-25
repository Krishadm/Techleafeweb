import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import "./FeatureCard.css";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
<Box className="feature-card">

        {/* ICON */}
        <Box className="feature-card-icon">
          {icon}
        </Box>

        {/* CONTENT */}
        <Box className="feature-card-content">

          <Typography className="feature-card-title">
            {title}
          </Typography>

          <Typography className="feature-card-description">
            {description}
          </Typography>

        </Box>

    </Box>
  );
};

export default FeatureCard;