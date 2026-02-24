import { createBrowserRouter } from "react-router-dom";

import { LazyPageNotFound, LazyBaseLayout, LazyHomepage, LazyErrorBoundary } from "./routes";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <LazyPageNotFound />,
  },

  {
    element: <LazyBaseLayout />,
    children: [
      // onboarding
      {
        path: "/",
        errorElement: <LazyErrorBoundary />,
        element: <LazyHomepage />,
      },
    ],
  },
]);
