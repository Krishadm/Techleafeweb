import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/MainLayout";
import AboutPage from "../components/pages/AboutPage";
import ContactPage from "../components/pages/ContactPage";
import HomePage from "../components/pages/HomePage";

const router = createBrowserRouter([
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

export default router;
