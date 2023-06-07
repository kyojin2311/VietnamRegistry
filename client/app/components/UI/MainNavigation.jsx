import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGauge,
  faUserPlus,
  faRightFromBracket,
  faBuilding,
  faCar,
  faCertificate,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/logo.png";
export default function MainNavigation() {
  //Take Loader data from the _home.jsx loader for fixing what admin and nonadmin can do in the NavBar
  const data = useLoaderData();
  const { isAdmin } = data;
  const [toggle, setIsToggle] = useState(false);
  const toggleHandler = () => {
    setIsToggle(!toggle);
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 -translate-x-64 xl:translate-x-0"
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
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
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
                  <span className="flex-1 ml-3 whitespace-nowrap">Centre</span>
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
              <Link
                to="/logout"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 self-end"
              >
                <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
