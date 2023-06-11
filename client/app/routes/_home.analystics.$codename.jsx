import { json, redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import provincedata from "../util/province.json";
import OfficeByProvince from "../components/Analystics/OfficeListbyProvince";

export default function ProvinceAna() {
  return (
    <div>
      <OfficeByProvince />
    </div>
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
  const url = "https://registrytotal.herokuapp.com/api/office/own/car";
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
    body: JSON.stringify(fetch1),
  });
  const response2021 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch1),
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
  const Data2023 = await response2023.json();
  const Data2022 = await response2022.json();
  const Data2021 = await response2021.json();
  const office = await responseOffice.json();
  return json({
    office: office,
    Data2021: Data2021,
    Data2022: Data2022,
    Data2023: Data2023,
  });
}
