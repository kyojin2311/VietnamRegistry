import { ClientOnly } from "remix-utils";
import Spinner from "../../util/Loading";
import ChartCom from "./Chart.client";
import { useLoaderData, Link } from "@remix-run/react";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
export default function ChartPanel() {
  const { Datain2023, Datain2022, Datain2021 } = useLoaderData();
  const [year, setYear] = useState(2023);
  const [chartdata, setChartData] = useState(Datain2023);
  useEffect(() => {
    if (year === 2022) {
      setChartData(Datain2022);
    }
    if (year === 2021) {
      setChartData(Datain2021);
    }
    if (year === 2023) {
      setChartData(Datain2023);
    }
  }, [year]);
  console.log(Datain2022);
  const handleClick2023 = () => {
    setYear(2023);
  };
  const handleClick2022 = () => {
    setYear(2022);
  };
  const handleClick2021 = () => {
    setYear(2021);
  };

  const data = {
    options: {
      chart: {
        id: `Analysis For Registrations in ${year}`,

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
      },

      xaxis: {
        categories: chartdata.data.map((ld) => ld.month),
        labels: {
          align: "center",
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
        data: chartdata.data.map((ld) => ld.count),
      },
    ],
  };

  return (
    <div className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700 shadow-sm rounded-lg border-gray-200 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex-shrink-0 dark:text-white text-xl font-bold leading-none">
          Tổng số đăng kiểm năm : {year}
        </div>
        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
          Tổng: {chartdata.total}
        </div>
      </div>
      <div className="main-chart">
        <ClientOnly fallback={<Spinner />}>
          {() => <ChartCom data={data} />}
        </ClientOnly>
      </div>
      <div className="flex items-center justify-between pt-3 mt-2 border-t border-gray-200 dark:border-gray-700 sm:pt-6">
        <div className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <Dropdown inline label={`${year}`}>
            <Dropdown.Item onClick={handleClick2023}>Năm 2023</Dropdown.Item>
            <Dropdown.Item onClick={handleClick2022}>Năm 2022</Dropdown.Item>
            <Dropdown.Item onClick={handleClick2021}>Năm 2021</Dropdown.Item>
          </Dropdown>
        </div>
        {year === 2023 && (
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
        )}
      </div>
    </div>
  );
}
