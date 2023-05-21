import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faGauge,
  faChartLine,
  faUserPlus,
  faRightFromBracket,
  faBuilding,
  faUser,
  faCar,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
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
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to="/info" className="flex items-center pl-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>

          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/main"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-700"
              >
                <FontAwesomeIcon icon={faGauge} size="lg" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faChartLine} size="lg" />
                <span className="flex-1 ml-3 whitespace-nowrap">Analytics</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={toggleHandler}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                <span
                  className="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item="true"
                >
                  Search
                </span>
                <svg
                  sidebar-toggle-item="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 ${toggle ? "" : "hidden"}`}
              >
                {isAdmin === 1 && (
                  <li>
                    <Link
                      to="/office"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faCar} size="lg" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Inspections
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            {isAdmin === 1 && (
              <li>
                <Link
                  to="/addStaff"
                  className="flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faUserPlus} size="lg" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add Staff
                  </span>
                </Link>
              </li>
            )}
            {isAdmin === 1 && (
              <li>
                <Link
                  to="/office/add"
                  className="flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faBuilding} size="lg" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add Centre
                  </span>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/Inspections/add"
                className="flex items-center self-end p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faFileLines} size="lg" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {" "}
                  Create Inspections
                </span>
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
