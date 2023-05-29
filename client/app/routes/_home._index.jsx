import { getOwnInfo } from "../services/APIAction.server";
import link from "../images/light.jpg";
import ChartCom from "../components/Chart.client";
import { requireUserSession } from "../services/auth.server";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Spinner from "../util/Loading";
import { ClientOnly } from "remix-utils";
import { formatDate } from "../util/formatDate";
export const meta = () => {
  return [{ title: "VietNam Registry" }];
};

export default function MainPage() {
  const loaderdata = useLoaderData().ChartData;
  const lists = useLoaderData().recentList;
  const data = {
    options: {
      chart: {
        id: "basic-bar",

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
        name: "series-1",
        data: loaderdata.data.map((ld) => ld.count),
      },
    ],
  };
  return (
    <div className="px-4 pt-6">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700 2xl:col-span-2 shadow-sm rounded-lg border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0 dark:text-white text-xl font-bold leading-none">
              Tổng số đăng kiểm năm : {loaderdata.year}
            </div>
            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              Tổng: {loaderdata.total}
            </div>
          </div>
          <div className="main-chart" style={{ minHeight: "435px" }}>
            <ClientOnly fallback={<Spinner />}>
              {() => <ChartCom data={data} />}
            </ClientOnly>
          </div>
          <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 dark:border-gray-700 sm:pt-6">
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
        <div className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700  shadow-sm rounded-lg border-gray-200">
          <h3 className="flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Recent Registrations
          </h3>
          <ul
            key="list_tr"
            className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-blue-400"
          >
            <li className="w-full inline-block p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600">
              Registrations
            </li>
            <li className="w-full inline-block p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 dark:border-blue-500 dark:bg-gray-700 dark:hover:bg-gray-600">
              Date
            </li>
          </ul>
          <div className="pt-4">
            <ul
              key="list"
              className="divine-y divide-gray-200 dark:divide-gray-700"
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
        </div>
      </div>
    </div>
  );
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const info = await getOwnInfo(request);
  const url =
    "https://registrytotal.herokuapp.com/api/office/" +
    info.workFor._id +
    "/car";
  const dataPass = {
    time: "2023",
    city: "",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass),
  });
  const response_2 = await fetch(
    "https://registrytotal.herokuapp.com/api/office/recentregis",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const resData = await response.json();
  const resData2 = await response_2.json();
  // console.log(resData2);

  return json({ ChartData: resData, recentList: resData2 });
}
