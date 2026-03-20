// src/router/routes.tsx
import About from "@/pages/About";
import React, { Suspense } from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => (
  <div className="h-[80vh] w-full flex items-center justify-center">
    <ScaleLoader
      color="#2E7D32BF"
      height={45}
      width={10}
      radius={4}
      margin={2}
    />
  </div>
);

// Layouts
const BaseLayout = React.lazy(() => import("@/components/Layouts/BaseLayout"));
// const ProtectedLayout = React.lazy(() => import("@/components/Layouts/ProtectedLayout"));

// Pages
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));
const Homepage = React.lazy(() => import("@/pages/Homepage"));
const ErrorBoundary = React.lazy(() => import("@/components/ErrorBoundary"));
const Inspiration = React.lazy(() => import("@/pages/Inspiration"));
const Contact = React.lazy(() => import("@/pages/Contact"));

// Dynamically loaded components
export const LazyBaseLayout = () => (
  <Suspense fallback={<Loader />}>
    <BaseLayout />
  </Suspense>
);
export const LazyPageNotFound = () => (
  <Suspense fallback={<Loader />}>
    <PageNotFound />
  </Suspense>
);
export const LazyHomepage = () => (
  <Suspense fallback={<Loader />}>
    <Homepage />
  </Suspense>
);
export const LazyErrorBoundary = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary />
  </Suspense>
);
export const LazyInspiration = () => (
  <Suspense fallback={<Loader />}>
    <Inspiration />
  </Suspense>
);

export const LazyContact = () => (
  <Suspense fallback={<Loader />}>
    <Contact />
  </Suspense>
);

export const LazyAbout = () => (
  <Suspense fallback={<Loader />}>
    <About />
  </Suspense>
)
