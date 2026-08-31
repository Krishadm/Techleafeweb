import { Box, Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          About1
        </Typography>
        <Typography variant="body1">
          We build modern digital experiences with clean design and thoughtful user journeys.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
