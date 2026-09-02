import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";
// import { ContactPage } from "@mui/icons-material";
import MainLayout from "../layouts/MainLayout";
import AIDevelopmentServices from "../pages/Expertise/AIDevelopmentServices";
import NotFoundPage from "../pages/Filenotfound";
import PortfolioPage from "../pages/PortfolioPage";


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
        {path: "/expertise/ai-development",
  element: <AIDevelopmentServices />,
},
       {
        path: "*",
        element: <NotFoundPage />,
      }, 
      

    ],
  },
]);
