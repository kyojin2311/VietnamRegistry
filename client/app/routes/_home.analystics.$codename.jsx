import { redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import provincedata from "../util/province.json";

export default function ProvinceAna() {
  return <div>Chuwa cos j</div>;
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const codename = params.codename;
  const province = provincedata.filter((a) => a.codename === codename)[0].name;
  console.log(province);
  const fetch1 = {
    time: "2023",
    city: province,
  };
  const url = "https://registrytotal.herokuapp.com/api/office/own/car";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fetch1),
  });
  const resData = await response.json();
  console.log(resData);
  return resData;
}
