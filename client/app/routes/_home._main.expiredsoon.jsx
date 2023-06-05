import { requireUserSession } from "../services/auth.server";
import { getOwnInfo } from "../services/APIAction.server";
import ExpiredSoonTable from "../components/Dashboard/ExpiredSoon";
export default function ExpiredSoon() {
  return <ExpiredSoonTable />;
}
export async function loader({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  // const info = await getOwnInfo(request);
  const url = "https://registrytotal.herokuapp.com/api/office/own/outdatecar";
  const dataPass_1 = {
    status: "soon",
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
  console.log(resData);
  return resData;
}
