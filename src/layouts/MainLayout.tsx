import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@mui/material";

import Header from "../components/Navbar/Navbar";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

const MainLayout = () => {
  const { pathname } = useLocation();

  // Reset scroll to the top of the page on every route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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