import { requireUserSession } from "../services/auth.server";
import { json, redirect } from "@remix-run/node";
import ChartPanel from "../components/Dashboard/ChartSection";
import RecentRegistrations from "../components/Dashboard/RecentRegisPanel";
import DashBoardFooter from "../components/Dashboard/DashBoardFooter";
import { Outlet } from "@remix-run/react";
export const meta = () => {
  return [{ title: "VietNam Registry" }];
};

export default function MainPage() {
  return (
    <div className="px-4 pt-6 overflow-y-auto">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ChartPanel />
          <DashBoardFooter />
        </div>
        <div className="w-full col-span-2 xl:col-span-1">
          <RecentRegistrations />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const url = "https://registrytotal.herokuapp.com/api/office/own/car";
  const dataPass = {
    time: "2023",
    city: "",
  };
  const data2022 = {
    time: "2022",
    city: "",
  };
  const data2021 = {
    time: "2021",
    city: "",
  }
  const url_2 = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
  const dataPass_1 = {
    status: "soon",
    city: "",
    info: "0",
  };
  const response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass),
  });
  const response2022 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data2022),
  });
  const response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data2021),
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
  const response_3 = await fetch(url_2, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass_1),
  });
  const resData = await response2023.json();
  const resData2022 = await response2022.json();
  const resData2021 = await response2021.json();
  const resData2 = await response_2.json();
  const resData3 = await response_3.json();
  return json({
    Datain2023: resData,
    Datain2022: resData2022,
    Datain2021: resData2021,
    recentList: resData2,
    ExpiredData: resData3,
  });
}
