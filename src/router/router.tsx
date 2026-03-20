import { createBrowserRouter } from "react-router-dom";

import {
  LazyPageNotFound,
  LazyBaseLayout,
  LazyHomepage,
  LazyErrorBoundary,
  LazyInspiration,
  LazyContact,
  LazyAbout,
  LazyBlog,
  LazyBlogDetail,
} from "./routes";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <LazyPageNotFound />,
  },

  {
    element: <LazyBaseLayout />,
    children: [
      {
        path: "/",
        errorElement: <LazyErrorBoundary />,
        element: <LazyHomepage />,
      },
      {
        path: "/inspiration",
        errorElement: <LazyErrorBoundary />,
        element: <LazyInspiration />,
      },
      {
        path: "/contact",
        errorElement: <LazyErrorBoundary />,
        element: <LazyContact />,
      },
      {
        path: "/about",
        errorElement: <LazyErrorBoundary />,
        element: <LazyAbout />,
      },
      {
        path: "/blog",
        errorElement: <LazyErrorBoundary />,
        element: <LazyBlog />,
      },
      {
        path: "/blog/:slug",
        errorElement: <LazyErrorBoundary />,
        element: <LazyBlogDetail />,
      }
    ],
  },
]);
