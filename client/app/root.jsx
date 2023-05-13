import { cssBundleHref } from "@remix-run/css-bundle";
import ShareStyles from "~/styles/ShareStyles.css";
import styles from "./styles/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

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

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
