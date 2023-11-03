import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthPage />,
    },
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
