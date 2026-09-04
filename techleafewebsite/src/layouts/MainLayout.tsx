import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import WhatsAppButton from "../pages/WhatsAppButton";
import { Box } from "@mui/material";
import Header from "../pages/Header";

const MainLayout = () => {
  const { pathname } = useLocation();

  // Reset scroll to the top of the page on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box>
      <Header />

      <Box component="main">
        <Outlet />
      </Box>
      <WhatsAppButton/>
    </Box>
  );
}

export default MainLayout;