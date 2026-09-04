import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
// import { ContactPage } from "@mui/icons-material";
import MainLayout from "../layouts/MainLayout";
import ContactPage from "../pages/ContactPage";

import NotFoundPage from "../pages/Filenotfound";
import PortfolioPage from "../pages/PortfolioPage";
import CrabCoinPage from "../pages/Crabcoinpage";
import RockWalletPage from "../pages/Rockwalletpage";
import SuperHeroPage from "../pages/Superheropage";


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