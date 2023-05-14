import AddForm from "../components/AddStaffForm";
import { requireUserSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";

export function meta (){
  return[{title: "Add Staff"}] 
}
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
  export async function action ({request}) {
    const formData = await request.formData();
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      workFor: formData.get("workFor")
    };
    console.log(data);
    return null;
  }