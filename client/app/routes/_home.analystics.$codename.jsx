import { json, redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import provincedata from "../util/province.json";
import OfficeByProvince from "../components/Analystics/OfficeListbyProvince";
import ProvinceChart from "../components/Analystics/ProvinceChart";
import ProvinceExpired from "../components/Analystics/ProvinceExpired";
import { Outlet } from "@remix-run/react";

export default function ProvinceAna() {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <div className="col-span-3">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 max-h-3/5">
            <ProvinceChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900">
        <ProvinceExpired />
      </div>
      <div className="px-4 pt-6">
        <OfficeByProvince />
      </div>
      <Outlet />
    </>
  );
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const codename = params.codename;
  const province = provincedata.filter((a) => a.codename === codename)[0].name;
  const fetch1 = {
    time: "2023",
    city: province,
  };
  const fetch2 = {
    time: "2022",
    city: province,
  };
  const fetch3 = {
    time: "2021",
    city: province,
  };
  const fetch4 = {
    province: province,
  };
  const fetch5 = {
    status: "soon",
    city: province,
    info: "0",
  };
  const url = "https://registrytotal.herokuapp.com/api/office/own/car";
  const url_2 = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
  const response2023 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch1),
  });
  const response2022 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch2),
  });
  const response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch3),
  });
  const responseOffice = await fetch(
    "https://registrytotal.herokuapp.com/api/office/province",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(fetch4),
    }
  );
  const expiredResponse = await fetch(url_2, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch5),
  });
  const Data2023 = await response2023.json();
  const Data2022 = await response2022.json();
  const Data2021 = await response2021.json();
  const office = await responseOffice.json();
  const expired = await expiredResponse.json();
  console.log(expired);
  return json({
    office: office,
    Data2021: Data2021,
    Data2022: Data2022,
    Data2023: Data2023,
    province: province,
    expired: expired,
  });
}
