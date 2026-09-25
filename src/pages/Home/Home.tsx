import { Box } from "@mui/material";
import HeroBanner from "../../components/Home/HeroBanner/HeroBanner";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";



const HomePage = () => {
  return (
   <Box>
    <HeroBanner/>
    <HeroSection/>
    <Footer/>
   </Box>
  );
};

export default HomePage;
