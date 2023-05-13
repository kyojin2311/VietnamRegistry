import AddForm from "../components/AddStaffForm";
import { requireUserSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";
export default function addStaffPage() {
    return <AddForm />
}
//loader for loading all the office the Staff can workFor
export async function loader({request}) {
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
    return resData;
  }