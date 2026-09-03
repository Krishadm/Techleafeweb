import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
// import { ContactPage } from "@mui/icons-material";
import PortfolioPage from "../pages/PortfolioPage";

import BlockchainDevelopment from "../pages/Expertise/BlockchainDevelopment";

// import Blog from "../pages/Blog";
// import BlogDetail from "../pages/BlogDetail";
import NotFoundPage from "../pages/Filenotfound";
<<<<<<< HEAD
import Footer from "../component/Footer";
=======
import AIDevelopmentServices from "../pages/Expertise/AIDevelopmentServices";
>>>>>>> df696cd500b9fd1dddeabd7643ed4e50aaf7a6a3
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
<<<<<<< HEAD
      
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
      {
        path: "footer",
        element: <Footer/>,
      },

      /* KEEP THIS LAST */
      {
=======
       {
>>>>>>> df696cd500b9fd1dddeabd7643ed4e50aaf7a6a3
        path: "*",
        element: <NotFoundPage />,
      }, 
    ],
  },
]);
