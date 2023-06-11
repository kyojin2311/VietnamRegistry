import { useLoaderData } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import Spinner from "../../util/Loading";
import ChartCom from "../../util/Chart.client";
import { Link } from "@remix-run/react";
export default function ProvinceChart() {
  const province = useLoaderData().province;
  const { Data2021, Data2022, Data2023 } = useLoaderData();
  const [year, setYear] = useState(2023);
  const [chartdata, setChartData] = useState(Data2023);
  useEffect(() => {
    if (year === 2022) {
      setChartData(Data2022);
    }
    if (year === 2021) {
      setChartData(Data2021);
    }
    if (year === 2023) {
      setChartData(Data2023);
    }
  }, [year]);
  const handleClick2023 = () => {
    setYear(2023);
  };
  const handleClick2022 = () => {
    setYear(2022);
  };
  const handleClick2021 = () => {
    setYear(2021);
  };
  const chartData = {
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
        toolbar: {
          show: false,
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
    <>
      <div className="items-center justify-between pb-4 border-b border-gray-200 sm:flex dark:border-gray-700">
        <div className="w-full mb-4 sm:mb-0">
          <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
            Total Registrations at:
          </h3>
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
            {province}
          </span>
          <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            In: {year}
          </p>
        </div>
        <div className="w-full max-w-lg text-right dark:text-green-400 font-lg">
          Tổng: {chartdata.total}
        </div>
      </div>
      <div className="w-full">
        <ClientOnly fallback={<Spinner />}>
          {() => <ChartCom data={chartData} />}
        </ClientOnly>
      </div>
      <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
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
    </>
  );
}
