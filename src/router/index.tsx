import { createBrowserRouter } from "react-router-dom";
//home page
import HomePage from "../pages/Home/Home";
//expertise pages
import BlockchainDevelopment from "../pages/Expertise/BlockchainDevelopment";
import AIDevelopmentServices from "../pages/Expertise/AIDevelopment";
import AppDevelopmentPage from "../pages/Expertise/WebAppDevelopment";
//about page
import AboutPage from "../pages/About/About";
//blog page
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail/BlogDetail";
//portfolio pages
import PortfolioPage from "../pages/Portfolio/Portfolio";
import CrabCoinPage from "../pages/Portfolio/Crabcoin/Crabcoin";
import RockWalletPage from "../pages/Portfolio/Rockwallet/Rockwallet";
import SuperHeroPage from "../pages/Portfolio/Superhero/Superhero";
//contact page
import ContactPage from "../pages/Contact/Contact";
//not found page
import NotFoundPage from "../pages/Filenotfound/Filenotfound";
//layout
import MainLayout from "../layouts/MainLayout";

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
        path: "expertise/blockchainDevelopment",
        element: <BlockchainDevelopment />,
      },
      {
        path: "expertise/aiDevelopmentServices",
        element: <AIDevelopmentServices />,
      },
      {
        path: "expertise/appDevelopment",
        element: <AppDevelopmentPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
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
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "crabCoin",
        element: <CrabCoinPage />,
      },
      {
        path: "rockWallet",
        element: <RockWalletPage />,
      },
      {
        path: "superHero",
        element: <SuperHeroPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);