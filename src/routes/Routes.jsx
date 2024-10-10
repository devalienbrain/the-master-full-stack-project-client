import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import PrivatePage from "../pages/PrivatePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import RegisterPage from "../pages/RegisterPage";
import AllUsers from "../pages/dashboardPages/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/public",
        element: <PublicPage />,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <PrivatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "allUsers",
        element: <AllUsers />,
      },
    ],
  },
]);

export default router;
