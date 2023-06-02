import { ClientOnly } from "remix-utils";
import Spinner from "../../util/Loading";
import ChartCom from "./Chart.client";
import { useLoaderData, Link } from "@remix-run/react";
export default function ChartPanel() {
  const loaderdata = useLoaderData().NewData;
  const data = {
    options: {
      chart: {
        id: "Analysis For Registrations in 2023",

        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        height: "400px",
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
        labels: {
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"],
          },
        },
      },
      yaxis: {
        min: 0,
        forceNiceScale: true,
        labels: {
          align: "center",
          style: {
            fontSize: "12px",
            colors: ["#FFFFFF"],
          },
        },
      },
      stroke: {
        curve: "smooth",
      },
      theme: {
        mode: "light",
        palette: "palette1",
        monochrome: {
          enabled: true,
          color: "#255aee",
          shadeTo: "dark",
          shadeIntensity: 0.65,
        },
      },
    },
    series: [
      {
        name: "New Registration",
        data: loaderdata.data.map((ld) => ld.count),
      },
    ],
  };

  return (
    <div
      className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700 2xl:col-span-2 shadow-sm rounded-lg border-gray-200"
      style={{ height: "850px" }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex-shrink-0 dark:text-white text-xl font-bold leading-none">
          Tổng số đăng kiểm năm : {loaderdata.year}
        </div>
        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
          Tổng: {loaderdata.total}
        </div>
      </div>
      {/* style={{ minHeight: "435px" }} */}
      <div className="main-chart">
        <ClientOnly fallback={<Spinner />}>
          {() => <ChartCom data={data} />}
        </ClientOnly>
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
