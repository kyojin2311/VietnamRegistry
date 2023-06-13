import { requireUserSession } from "../services/auth.server";
import ExpiredTable from "../components/Dashboard/Expired";
export default function Expired() {
  return <ExpiredTable />;
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
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
