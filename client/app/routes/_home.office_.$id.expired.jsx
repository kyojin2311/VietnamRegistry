import ExpiredOfficeTable from "../components/Office/ExpiredOffice";
import { requireUserSession } from "../services/auth.server";
export default function OfficeExpiredPage() {
  return <ExpiredOfficeTable />;
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const url =
    "https://registrytotal.herokuapp.com/api/office/" +
    params.id +
    "/outdatecar";
  const dataPass_1 = {
    status: "expired",
    city: "",
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
