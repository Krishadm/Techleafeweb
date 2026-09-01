import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
// import { ContactPage } from "@mui/icons-material";
import MainLayout from "../layouts/MainLayout";
import ContactPage from "../pages/ContactPage";

import NotFoundPage from "../pages/Filenotfound";


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
        path: "*",
        element: <NotFoundPage />,
      }, 
    ],
  },
]);