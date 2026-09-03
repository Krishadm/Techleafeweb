import { Outlet, ScrollRestoration } from "react-router-dom";
import WhatsAppButton from "../pages/WhatsAppButton";
import { Box } from "@mui/material";
import Header from "../pages/Header";


const MainLayout = () => {
  return (
    <Box>
        <ScrollRestoration />
      <Header />
        
      <Box component="main">
        <Outlet />
      </Box>
      <WhatsAppButton/>
    </Box>
  );
}

export default MainLayout;
