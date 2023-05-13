import { NavLink, Link, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGauge, faChartLine, faUserPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export default function MainNavigation() {
  //Take Loader data from the _home.jsx loader for fixing what admin and nonadmin can do in the NavBar
  const data = useLoaderData();
  const { isAdmin } = data;
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
              <Link
                to="/info"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
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
            {/* <li>
              <Link
                to="/info"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </Link>
            </li> */}
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
