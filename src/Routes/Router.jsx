import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../Pages/Home/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
