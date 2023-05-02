import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "../constants/appRoutes.constants";
import PagesLayout from "../layouts/Pages/Pages";

const HomePage = React.lazy(() => import("../HomePage"));
const ProdutosPage = React.lazy(() => import("../ProdutosPage"));
const HoteisPage = React.lazy(() => import("../HoteisPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: AppRoutes.HOME,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: AppRoutes.HOTEIS,
        element: (
          <Suspense>
            <HoteisPage />
          </Suspense>
        ),
      },
      {
        path: AppRoutes.PRODUTOS,
        element: (
          <Suspense>
            <ProdutosPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
