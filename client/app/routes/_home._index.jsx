import { getOwnInfo } from "../services/APIAction.server";
import link from "../images/light.jpg";
import ChartCom from "../components/Chart.client";
import { requireUserSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Spinner from "../util/Loading";
import { Suspense } from "react";
import { ClientOnly } from "remix-utils";
import styles from "../styles/tailwind.css";
import Chart2 from "../components/ChartFromChartjs";
export const meta = () => {
  return [{ title: "VietNam Registry" }];
};

export default function MainPage() {
  const loaderdata = useLoaderData();

  // const data = {
  //   options: {
  //     chart: {
  //       id: "basic-bar",

  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         animateGradually: {
  //           enabled: true,
  //           delay: 150,
  //         },
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 350,
  //         },
  //       },
  //     },
  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar", "Apr", "May"],
  //     },
  //     stroke: {
  //       curve: "straight",
  //     },
  //     theme: {
  //       mode: "light",
  //       palette: "palette1",
  //       monochrome: {
  //         enabled: true,
  //         color: "#255aee",
  //         shadeTo: "dark",
  //         shadeIntensity: 0.65,
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "series-1",
  //       data: loaderdata.data.map((ld) => ld.count),
  //     },
  //   ],
  // };

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
            {/* <ClientOnly>
              <div>
                {typeof window !== "undefined" ? (
                  <ChartCom data={data} />
                ) : (
                  <Fallback />
                )}
              </div>
            </ClientOnly> */}
            {/* <ClientOnly fallback={<Spinner />}>
             {() => <ChartCom data={data} />}
            </ClientOnly> */}
            <Chart2 data={loaderdata.data} />
          </div>
        </div>
        <div className="p-4 bg-white border dark:bg-gray-800 sm:p-6 dark:border-gray-700  shadow-sm rounded-lg border-gray-200">
          <img src={link} className="h-auto w-auto" />
        </div>
      </div>
    </div>
  );
}

export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const info = await getOwnInfo(request);
  console.log(info);
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
  const resData = await response.json();
  console.log(resData);
  return resData;
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
