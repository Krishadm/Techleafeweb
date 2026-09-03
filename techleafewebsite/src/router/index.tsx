import { createBrowserRouter } from "react-router-dom";

import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import PortfolioPage from "../pages/PortfolioPage";

import BlockchainDevelopment from "../pages/Expertise/BlockchainDevelopment";

import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import NotFoundPage from "../pages/Filenotfound";
import AIDevelopmentServices from "../pages/Expertise/AIDevelopmentServices";
import MainLayout from "../layouts/MainLayout";
import AppDevelopmentPage from "../pages/Expertise/WebAppDevelopment";

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
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },

      /* BLOG LIST PAGE */
      {
        path: "blog",
        element: <Blog />,
      },

      /* BLOG DETAIL PAGE */
      {
        path: "blog/:slug",
        element: <BlogDetail />,
      },


      /* KEEP THIS LAST */
      {
        path: "*",
        element: <NotFoundPage />,
      },

    ],
  },
]);