import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
    return <div>An error occurred. See console for details.</div>;
};

export default ErrorBoundary;
