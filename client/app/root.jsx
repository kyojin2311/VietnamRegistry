import { cssBundleHref } from "@remix-run/css-bundle";
import ShareStyles from "~/styles/ShareStyles.css";
import styles from "./styles/tailwind.css";
import { useGlobalTransitionStates } from "remix-utils";
import {
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
// export const links = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),{rel: "stylesheet", href: shareStyle}, {rel:'stylesheet', href:'https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'}
// ];
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css",
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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body className="dark">
        {spinner}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
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
      <div className="dark m-auto">
        <h1 className="font-bold dark:text-red-600">Error</h1>
        <p>{error.message}</p>
        <p onClick={backHandler}>Please back to the previous page</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
