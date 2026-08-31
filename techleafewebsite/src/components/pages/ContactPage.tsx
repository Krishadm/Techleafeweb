import { Box, Container, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1">
          Reach out to us for partnerships, questions, and project discussions.
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactPage;
