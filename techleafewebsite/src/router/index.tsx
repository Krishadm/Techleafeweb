import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
// import { ContactPage } from "@mui/icons-material";
import MainLayout from "../layouts/MainLayout";


import NotFoundPage from "../pages/Filenotfound";
import PortfolioPage from "../pages/PortfolioPage";

import BlockchainDevelopment from "../pages/Expertise/BlockchainDevelopment";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
        {
        path: "portfolio",
        element: <PortfolioPage />,
      },
            {
        path:"/expertise/blockchain-development", 
        element:<BlockchainDevelopment />
      },
       {
        path: "*",
        element: <NotFoundPage />,
      }, 

    ],
  },
]);
