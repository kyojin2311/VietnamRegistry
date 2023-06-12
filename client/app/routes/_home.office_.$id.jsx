import { json, redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import ListOfStaff from "../components/Office/UserTable";
import OfficeChart from "../components/Office/OfficeChart";
import OfficeExpired from "../components/Office/OfficeExpired";
export default function OfficeDetailPage() {
  const data = useLoaderData();
  const officeName = useLoaderData().staff.name;
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <div className="col-span-3">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 max-h-3/5">
            <OfficeChart office={officeName} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900">
        <OfficeExpired />
      </div>
      <div className="px-4 pt-6">
        <ListOfStaff />
      </div>
      <Outlet context={data} />
    </>
  );
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");

  const url =
    "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car";
  const data2023 = {
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
  };
  const expired = {
    status: "soon",
    city: "",
    info: "0",
  };
  const responseStaff = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data2023),
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
  const resExpired = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" +
      params.id +
      "/outdatecar",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(expired),
    }
  );
  const staff = await responseStaff.json();
  const resdata2023 = await response2023.json();
  const resdata2022 = await response2022.json();
  const resdata2021 = await response2021.json();
  const expiredRes = await resExpired.json();
  const returnData = json({
    staff: staff[0],
    Data2023: resdata2023,
    Data2022: resdata2022,
    Data2021: resdata2021,
    expired: expiredRes,
  });
  return returnData;
}

export function shouldRevalidate() {
  return true;
}
