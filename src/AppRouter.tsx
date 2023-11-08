import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import MainLayout from "./layouts/MainLayout";
import ProtectedPage from "./components/ProtectedPage/ProtectedPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthPage />,
    },
    {
      path: "/",
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
          path: "favorite",
          element: <FavoritePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
