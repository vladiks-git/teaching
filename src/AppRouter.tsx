import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MainLayout from "./layouts/MainLayout";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";
import { routes } from "./consts/routes";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: `/${routes.AUTH}`,
      element: <AuthPage />,
    },

    {
      path: routes.MAIN,
      element: (
        <ProtectedPage>
          <MainLayout />
        </ProtectedPage>
      ),

      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: routes.FAVOURITE,
          element: <FavoritePage />,
        },
      ],
    },
    {
      path: "*",
      element: <h4>404</h4>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
