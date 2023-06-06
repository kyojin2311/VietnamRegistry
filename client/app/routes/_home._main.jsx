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
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        <ChartPanel />
        <RecentRegistrations />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <DashBoardFooter />
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
  const url_2 = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
  const dataPass_1 = {
    status: "soon",
    city: "",
    info: "0",
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
  const response_3 = await fetch(url_2, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass_1),
  });
  const resData = await response.json();
  const resData2 = await response_2.json();
  const resData3 = await response_3.json();
  return json({
    NewData: resData,
    recentList: resData2,
    ExpiredData: resData3,
  });
}
