import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import WhatsAppButton from "./WhatsAppButton";


const MainLayout = () => {
  return (
    <Box>
      <Header />
        
      <Box component="main">
        <Outlet />
      </Box>
      <WhatsAppButton/>
    </Box>
  );
};

export default MainLayout;
