import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
// import { ContactPage } from "@mui/icons-material";
import PortfolioPage from "../pages/PortfolioPage";
import CrabCoinPage from "../pages/Crabcoinpage";
import RockWalletPage from "../pages/Rockwalletpage";
import SuperHeroPage from "../pages/Superheropage";

import BlockchainDevelopment from "../pages/Expertise/BlockchainDevelopment";


import NotFoundPage from "../pages/Filenotfound";
// import Footer from "../component/Footer";
import AIDevelopmentServices from "../pages/Expertise/AIDevelopmentServices";
import MainLayout from "../layouts/MainLayout";
import AppDevelopmentPage from "../pages/Expertise/WebAppDevelopment";
import BlogDetail from "../pages/BlogDetail";
import Blog from "../pages/Blog";
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
        path:"/expertise/blockchain-development", 
        element:<BlockchainDevelopment />
      },
      {
        path: "/expertise/AIDevelopmentServices",
        element: <AIDevelopmentServices />,
      },
      {
        path: "/expertise/appdevelopment",
        element: <AppDevelopmentPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetail />,
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
        path: "crab-coin",
        element: <CrabCoinPage />,
      },
      {
        path: "rockwallet",
        element: <RockWalletPage />,
      },
      {
        path: "super-hero",
        element: <SuperHeroPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);