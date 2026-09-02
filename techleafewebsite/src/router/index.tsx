import { createBrowserRouter } from "react-router-dom";

import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
import PortfolioPage from "../pages/PortfolioPage";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import NotFoundPage from "../pages/Filenotfound";
import AIDevelopmentServices from "../pages/Expertise/AIDevelopmentServices";
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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
      },
      {
        path: "services/ai-development",
        element: <AIDevelopmentServices />,
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