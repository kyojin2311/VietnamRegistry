import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./styles/tailwind.css";
import { ClientOnly, html, useGlobalTransitionStates } from "remix-utils";
import linksvg from "./images/404.svg";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { useRouteError, isRouteErrorResponse } from "@remix-run/react";
import Spinner from "./util/Loading";
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export function meta() {
  return [{ title: "Vietnam Registry" }];
}
export default function App() {
  let states = useGlobalTransitionStates();
  let spinner = "";
  if (states.includes("submitting") || states.includes("loading")) {
    spinner = (
      <Spinner className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2" />
    );
  }
  return (
    <html lang="en" style={{ overflow: "auto" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark">
        <Outlet scrollBehavior="smooth" />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {spinner}
      </body>
    </html>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();
  const backHandler = () => {
    const navigate = useNavigate();
    return navigate("..");
  };
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <html lang="en" style={{ overflow: "auto" }}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="dark">
          <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
              <div className="block md:max-w-lg">
                <img src={linksvg} alt="astronaut image" />
              </div>
              <div className="text-center xl:max-w-4xl">
                <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                  Page not found
                </h1>
                <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
                  {error.message}
                </p>
                <Link
                  to="/"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </body>
      </html>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
