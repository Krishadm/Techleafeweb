import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";



const MainLayout = () => {
  return (
    <Box>
      <Header />

      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
