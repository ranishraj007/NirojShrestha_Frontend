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
  LazyProject,
  LazyProjectDetail,
  LazyArticles,
  LazyArticleDetail,
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
      },
      {
        path: "/projects",
        errorElement: <LazyErrorBoundary />,
        element: <LazyProject />,
      },
      {
        path: "/projects/:slug",
        errorElement: <LazyErrorBoundary />,
        element: <LazyProjectDetail />,
      },
      {
        path: "/articles",
        errorElement: <LazyErrorBoundary />,
        element: <LazyArticles />,
      },
      {
        path: "/articles/:slug",
        errorElement: <LazyErrorBoundary />,
        element: <LazyArticleDetail />,
      },
    ],
  },
]);
