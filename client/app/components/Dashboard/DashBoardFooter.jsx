import { Link, useLoaderData } from "@remix-run/react";
import { Tooltip } from "flowbite-react";
export default function DashBoardFooter() {
  const expired = useLoaderData().ExpiredData;
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
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-white">
            {expired.data.soon}
          </span>
        </div>
        <div className="w-full" style={{ minHeight: "155px" }}>
          <Link
            to="expiredsoon"
            className="font-bold text-xl dark:text-blue-500  text-base"
          >
            View Full List Of Cars:
          </Link>
        </div>
      </div>
      <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <Tooltip
            style="light"
            placement="right"
            animation="duration-500"
            content="Number of cars have already expired and need to regis again"
          >
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
              Expired Registration:
            </h3>
          </Tooltip>

          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-white">
            {expired.data.expired}
          </span>
        </div>
        <div className="w-full" style={{ minHeight: "155px" }}></div>
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="w-full">
          <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
            Expired Registration:
          </h3>
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark: text-white">
            {expired.data.expired}
          </span>
        </div>
        <div className="w-full" style={{ minHeight: "155px" }}></div>
      </div>
    </>
  );
}
