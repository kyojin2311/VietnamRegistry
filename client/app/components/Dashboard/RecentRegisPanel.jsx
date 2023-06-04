import { useLoaderData, Link } from "@remix-run/react";
import { formatDate } from "../../util/formatDate";
export default function RecentRegistrations() {
  const lists = useLoaderData().recentList;
  return (
    <div
      className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700  shadow-sm rounded-lg border-gray-200 overflow-y-auto"
      style={{ height: "850px" }}
    >
      <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white">
        Recent Registrations
      </h3>
      <ul
        key="list_tr"
        className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-blue-400"
      >
        <li className="w-full inline-block p-5 rounded-tl-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600">
          Registrations
        </li>
        <li className="w-full inline-block p-5 rounded-tr-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600">
          Date
        </li>
      </ul>
      <div className="pt-4">
        <ul
          key="list"
          className="divine-y divide-gray-200 dark:divide-gray-700 "
        >
          {lists.map((item) => (
            <li key={item._id} className="py-3 sm:py-4">
              <Link to={`/Inspections/${item.regisNum}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center min-w-0">
                    <div className="ml-3">
                      <div className="font-medium text-grey-900 truncate dark: text-white">
                        {item.car.numberPlate}
                      </div>
                      <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark: text-green-400">
                        {item.regisNum}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {formatDate(item.regisDate)}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6">
        <div className="inline-flex p-2"></div>
        <div className="flex-shrink-0 ">
          <Link className="inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            Full Report
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
