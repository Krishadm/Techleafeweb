import { createBrowserRouter } from "react-router-dom";
import HomePage from "../component/HomePage";
import AboutPage from "../pages/AboutPage";
import { ContactPage } from "@mui/icons-material";
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
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);