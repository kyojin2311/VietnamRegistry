import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faGauge,
  faRightFromBracket,
  faBuilding,
  faCar,
  faCertificate,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
import { ClientOnly } from "remix-utils";
import Spinner from "../../util/Loading";
export default function MainNavigation() {
  const data = useLoaderData();
  const { isAdmin } = data;
  const [hide, setHide] = useState(false);
  const hideMedia = () => {
    setHide(!hide);
  };
  const clickOut = () => {
    setHide(!hide);
  };
  return (
    <ClientOnly fallback={<Spinner />}>
      {() => (
        <>
          <button
            onClick={hideMedia}
            aria-controls="sidebar"
            className="fixed top-5 left-5 text-gray-600 dark:bg-gray-800 rounded cursor-pointer xl:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              id="toggleSidebarMobileHamburger"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <aside
            id="default-sidebar"
            className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 xl:translate-x-0  ${
              hide ? "" : "-translate-x-64"
            }`}
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <Link
                prefetch="intent"
                to="/"
                className="flex items-center pl-2.5 mb-5"
              >
                <img src={logo} alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
              </Link>

              <ul className="space-y-2 font-medium">
                <li>
                  <Link
                    // prefetch="render"
                    to="/"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faGauge} size="lg" />
                    {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="curentcolor"
                  height="1.25em"
                  viewBox="0 0 512 512"
                >
                  <path fillRule="evenodd" clipRule='evenodd' d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg> */}
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                {isAdmin === 1 && (
                  <li>
                    <Link
                      to="/analystics"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FontAwesomeIcon icon={faChartLine} size="lg" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Analytics
                      </span>
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/car"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faCar} size="lg" />
                    <span className="flex-1 ml-3 whitespace-nowrap">Cars</span>
                  </Link>
                </li>
                {isAdmin === 1 && (
                  <li>
                    <Link
                      to="/office"
                      prefetch="render"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FontAwesomeIcon icon={faBuilding} size="lg" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Centre
                      </span>
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to="/Inspections"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faCertificate} size="lg" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Inspections
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch="render"
                    to="/info"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                    <span className="ml-3">About</span>
                  </Link>
                </li>
                <li>
                  <Form method="post" action="/logout">
                    <button
                      type="submit"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end"
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Sign Out
                      </span>
                    </button>
                  </Form>
                </li>
              </ul>
            </div>
          </aside>
          <div
            className={`fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90 ${
              hide ? "" : "hidden"
            }`}
            onClick={clickOut}
            id="sidebarBackdrop"
          ></div>
        </>
      )}
    </ClientOnly>
  );
}
