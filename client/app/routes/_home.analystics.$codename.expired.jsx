import ExpiredProvinceTable from "../components/Analystics/ExpiredProvince";
import { requireUserSession } from "../services/auth.server";
import provincedata from "../util/province.json";
export default function ProvinceExpired() {
  return <ExpiredProvinceTable />;
}

export async function loader({ request,params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const codename = params.codename;
  const province = provincedata.filter((a) => a.codename === codename)[0].name;
  const url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
  const dataPass_1 = {
    status: "expired",
    city: province,
    info: "1",
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass_1),
  });
  const resData = await response.json();
  return resData;
}
