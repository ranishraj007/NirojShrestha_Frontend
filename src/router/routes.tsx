// src/router/routes.tsx
import React, { Suspense } from "react";

const Loader = () => <div>Loading...</div>

// Layouts
const BaseLayout = React.lazy(() => import("@/components/Layouts/BaseLayout"));
// const ProtectedLayout = React.lazy(() => import("@/components/Layouts/ProtectedLayout"));

// Pages
const PageNotFound = React.lazy(() => import("@/pages/PageNotFound"));
const Homepage = React.lazy(() => import("@/pages/Homepage"));
const ErrorBoundary = React.lazy(() => import("@/components/ErrorBoundary"));


// Dynamically loaded components
export const LazyBaseLayout = () => <Suspense fallback={<Loader />}><BaseLayout /></Suspense>
export const LazyPageNotFound = () => <Suspense fallback={<Loader />}><PageNotFound /></Suspense>
export const LazyHomepage = () => <Suspense fallback={<Loader />}><Homepage /></Suspense>
export const LazyErrorBoundary = () => <Suspense fallback={<Loader />}><ErrorBoundary /></Suspense>
