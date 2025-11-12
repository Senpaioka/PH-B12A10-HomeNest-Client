import { useRouteError, Link } from "react-router";
import { FaSadTear } from "react-icons/fa";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-6">
      {/* Error Icon */}
      <div className="bg-error/10 text-error p-6 rounded-full mb-6">
        <FaSadTear className="w-14 h-14" />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">
        Oops! Something went wrong
      </h1>
      <p className="text-gray-500 mb-6 max-w-md">
        {error?.status === 404
          ? "We couldn’t find the page you were looking for."
          : "An unexpected error has occurred. Please try again later."}
      </p>

      {/* Error Details */}
      {error?.statusText || error?.message ? (
        <p className="text-sm text-gray-400 mb-8 italic">
          {error.statusText || error.message}
        </p>
      ) : null}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link to="/" className="btn btn-primary text-white w-full sm:w-auto">
          Go Home
        </Link>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-outline w-full sm:w-auto"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
