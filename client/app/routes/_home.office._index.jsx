import OfficeList from "../components/OfficeList";
import { requireUserSession } from "../services/auth.server";
export default function OfficePage() {
  return <OfficeList />;
}

export async function loader({ request }) {
  const response = await requireUserSession(request);
  if (!response) return redirect("/login");
  const data = await fetch("https://registrytotal.herokuapp.com/api/office", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${response}`,
      "content-type": "application/json",
    },
  });
  const resData = await data.json();
//   console.log(resData);
  return resData;
}
