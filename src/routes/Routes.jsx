import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import PrivatePage from "../pages/PrivatePage";
import LoginPage from "../pages/LoginPage";
import LoginLayout from "../layout/LoginLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
