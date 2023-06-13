import { useLoaderData } from "@remix-run/react";
import { Tooltip } from "flowbite-react";
import { Link } from "@remix-run/react";
export default function ProvinceExpired() {
  const expired = useLoaderData().expired;
  return (
    <>
      <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <Tooltip
            style="light"
            placement="right"
            animation="duration-500"
            content="Number of cars will be expired in less than 30 days"
          >
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
              Expired soon Registration:
            </h3>
          </Tooltip>
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500">
            {expired.data.soon}
          </span>
        </div>
        <div className="w-full dark:text-right">
          <Link
            to="expiredsoon"
            className="inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
          >
            View Full List Of Cars
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
      <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <Tooltip
            style="light"
            placement="right"
            animation="duration-500"
            content="Number of cars will be expired in less than 30 days"
          >
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
              Expired Registration:
            </h3>
          </Tooltip>
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-green-500">
            {expired.data.expired}
          </span>
        </div>
        <div className="w-full dark:text-right">
          <Link
            to="expired"
            className="inline-flex items-center p-2 text-lg font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
          >
            View Full List Of Cars
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
    </>
  );
}
