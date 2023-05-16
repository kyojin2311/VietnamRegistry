import { redirect } from "@remix-run/node";
import InspectionsForm from "../components/InspectionsForm";
import { requireUserSession } from "../services/auth.server";

export default function InpectionsPage() {
  return <InspectionsForm />;
}
export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  console.log(params.id);
  const url = "https://registrytotal.herokuapp.com/api/inspection/" + params.id;
  console.log(url);
  const response = await fetch(url,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const resData = await response.json();
  // console.log(resData);
  return resData;
}
