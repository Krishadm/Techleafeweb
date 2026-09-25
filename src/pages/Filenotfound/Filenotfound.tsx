import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import robotImage from "../../assets/404-robot.png";

import "./Filenotfound.css";

const NotFoundPage = () => {
  return (
    <Box className="not-found-page">
      <Box className="not-found-container">

        {/* Left: text content */}
        <Box className="not-found-content">
          <Typography className="not-found-title">
            404
          </Typography>

          <Box className="not-found-line" />

          <Typography className="not-found-heading">
            Oops! You ran out of oxygen!
          </Typography>

          <Typography className="not-found-description">
            The page you are looking for doesn't exist or has been moved.
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            className="not-found-button"
          >
            Back to Home Page
          </Button>
        </Box>

        {/* Right: robot illustration */}
        <Box className="not-found-image-wrapper">
          <Box
            component="img"
            src={robotImage}
            alt="Astronaut robot floating with bubbles"
            className="not-found-image"
          />
        </Box>

      </Box>
    </Box>
  );
};

export default NotFoundPage;