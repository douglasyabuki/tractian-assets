import { useRouteError } from "react-router-dom";
import { NotFoundPage } from "../../pages/not-found/NotFound";

interface RouteError extends Error {
  status?: number;
}

export const RootErrorBoundary = () => {
  const error = useRouteError() as RouteError;

  const { status } = error;

  return (
    <div className="layout">
      {status === 404 ? (
        <NotFoundPage />
      ) : (
        <main className="page-container">
          <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 px-4 py-3 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
            <h1 className="text-center text-xl sm:text-2xl lg:text-3xl">
              Uh oh, something went terribly wrong 😩
            </h1>
            <pre>{error.message || JSON.stringify(error)}</pre>
            <button onClick={() => (window.location.href = "")}>
              Click here to reload the app
            </button>
          </div>
        </main>
      )}
    </div>
  );
};
