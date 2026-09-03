import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  Stack,
  Chip,
  
} from '@mui/material';
import {
  Psychology,
  AutoAwesome,
  Memory,
  Code,
  IntegrationInstructions,
  RocketLaunch,
  ArrowForward
} from '@mui/icons-material';
import Footer from '../../component/Footer';

// --- Types ---
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// --- Data ---
const services: ServiceItem[] = [
  {
    icon: <Psychology fontSize="large" color="primary" />,
    title: 'Custom Machine Learning Models',
    description: 'Tailored predictive algorithms and ML solutions built to solve your unique business challenges using state-of-the-art frameworks.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn']
  },
  {
    icon: <AutoAwesome fontSize="large" color="primary" />,
    title: 'Generative AI Solutions',
    description: 'Harness LLMs, fine-tuned foundational models, and Retrieval-Augmented Generation (RAG) to automate workflows and enhance interactions.',
    tags: ['OpenAI API', 'LangChain', 'Llama 3', 'Vector DBs']
  },
  {
    icon: <Memory fontSize="large" color="primary" />,
    title: 'Computer Vision Systems',
    description: 'Automated visual data processing for object detection, facial recognition, image classification, and real-time video analytics.',
    tags: ['OpenCV', 'YOLO', 'Image Processing', 'Edge AI']
  },
  {
    icon: <Code fontSize="large" color="primary" />,
    title: 'Natural Language Processing (NLP)',
    description: 'Extract insights from text data with sentiment analysis, semantic search, intelligent chatbots, and multi-language translation.',
    tags: ['BERT', 'NLTK', 'Text Mining', 'Entity Recognition']
  },
  {
    icon: <IntegrationInstructions fontSize="large" color="primary" />,
    title: 'AI Integration & API Development',
    description: 'Seamlessly integrate third-party AI features into your existing software infrastructure via secure REST APIs and microservices.',
    tags: ['REST / GraphQL', 'FastAPI', 'Cloud Deployment', 'Microservices']
  },
  {
    icon: <RocketLaunch fontSize="large" color="primary" />,
    title: 'MLOps & AI Maintenance',
    description: 'Ensure model reliability, continuously monitor performance drift, automate retraining pipelines, and optimize latency.',
    tags: ['Kubeflow', 'Docker', 'CI/CD Pipelines', 'Model Drift']
  }
];

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Feasibility',
    description: 'We evaluate your business goals, assess data availability, and define strategic objectives to build a viable AI roadmap.'
  },
  {
    number: '02',
    title: 'Data Preparation & Engineering',
    description: 'Raw data is cleaned, structured, labeled, and prepared to train high-performing algorithms with minimal bias.'
  },
  {
    number: '03',
    title: 'Model Building & Fine-Tuning',
    description: 'We select appropriate architectures, run extensive experiments, and tune parameters to achieve maximal precision.'
  },
  {
    number: '04',
    title: 'Integration & Deployment',
    description: 'Models are deployed into secure cloud environments or edge devices and integrated seamlessly into your applications.'
  }
];

// --- Main Component ---
export const AIDevelopmentServices: React.FC = () => {

  return (
    <>
    <Box sx={{ bgcolor: 'black', color: 'text.primary' }}>
      {/* Hero Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: 'black',
          color: "#1D620C",
          py: { xs: 8, md: 12 },
          borderRadius: 0,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: { xs: '100%', md: '66%' } }}>
            {/* <Chip
              label="Next-Gen AI Engineering"
              color="primary"
              size="small"
              sx={{ mb: 2, fontWeight: 600 }}
            /> */}
            <Typography variant="h6" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
Next-Gen AI Engineering
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              AI Development Services
            </Typography>
            <Typography
  variant="h6"
  sx={{
    opacity: 0.85,
    mb: 4,
    fontWeight: 300,
    color: "#ffffff",
  }}
>
  Transform your operations with scalable, custom artificial intelligence,
  machine learning, and generative AI solutions designed for high performance.
</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              {/* <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForward />}
              >
                Schedule a Consultation
              </Button> */}
              <Button variant="outlined" color="inherit" size="large" endIcon={<ArrowForward />}>
               Schedule a Consultation
              </Button>
              <Button variant="outlined" color="inherit" size="large">
                Explore Case Studies
              </Button>
            </Stack>
          </Box>
        </Container>
      </Paper>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
  variant="h2"
  sx={{
    color: "white",
    fontWeight: 700,
  }}
>
  Our Core AI Capabilities
</Typography>
         <Typography
  variant="body1"
  sx={{
    maxWidth: "600px",
    mx: "auto",
    color: "#1D620C",
  }}
>
  From experimental concepts to production-level systems, we deliver scalable AI capabilities.
</Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 4
          }}
        >
          {services.map((service, index) => (
           <Card
  key={index}
  sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    border: '1px solid #1D620C',
    borderRadius: 2,
    color:'white',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 0 20px rgba(62, 207, 110, 0.25)',
    },
  }}
>
              <CardContent  sx={{ flexGrow: 1 }}>
             <Box
  sx={{
    mb: 2,
    color: '#1D620C',
    '& svg': {
      color: '#1D620C',
    },
  }}
>
  {service.icon}
</Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
                  {service.tags.map((tag, tagIndex) => (
                    <Chip
  key={tagIndex}
  label={tag}
  size="small"
  variant="outlined"
  sx={{
    color: '#1D620C !important',
    borderColor: '#1D620C',
    backgroundColor: 'transparent',

    '& .MuiChip-label': {
      color: '#1D620C !important',
    },
  }}
/>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Development Process Section */}
      <Box sx={{ bgcolor: 'black', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
  variant="h3"
  sx={{
    color: "#1D620C",
    fontWeight: 700,
  }}
>
  Our Development Process
</Typography>
<Typography
  variant="body1"
  sx={{
    maxWidth: "600px",
    mx: "auto",
    color: "#ffffff",
  }}
>
   A structured approach ensuring high reliability, performance, and alignment with business KPIs.
</Typography>
            {/* <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              A structured approach ensuring high reliability, performance, and alignment with business KPIs.
            </Typography> */}
          </Box>

          <Box
            sx={{
              
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 4
            }}
          >
            {processSteps.map((step, index) => (
              <Paper
  key={index}
  elevation={1}
  sx={{
    p: 3,
    height: '100%',
    position: 'relative',
    borderRadius: 2,
    bgcolor: 'black',
    border: '1px solid #1D620C',
    color: 'white',
  }}
>
                <Typography
                  variant="h3"
                  component="span"
                  color="primary.light"
                  sx={{ opacity: 0.5, display: 'block', mb: 1, fontWeight: 800 }}
                >
                  {step.number}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Paper
          elevation={4}
          sx={{
            variant: 'outlined',
            p: { xs: 4, md: 8 },
            bgcolor: 'black',
            color: '#1D620C',
            borderRadius: 3,
            textAlign: 'center'
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Build Your AI Solution?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '650px', mx: 'auto', mb: 4, fontWeight: 400 }}>
            Let’s turn your vision into intelligent software. Book a discovery call with our AI engineering team today.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
  backgroundColor: "#000000",
  color: "#ffffff",
  border: "1px solid #1D620C",
  "&:hover": {
    backgroundColor: "#000000",
    borderColor: "#1D620C",
  },
}}
          >
            Get Started Now
          </Button>
        </Paper>
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default AIDevelopmentServices;
