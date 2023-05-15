import AddForm from "../components/AddStaffForm";
import { requireUserSession } from "../services/auth.server";
import { redirect,json } from "@remix-run/node";

function reformatDate(dateStr) {
  var dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[1] + "/" + dArr[2] + "/" + dArr[0]; //ex output: "18/01/10"
}
export function meta() {
  return [{ title: "Add Staff" }];
}
export default function addStaffPage() {
  return <AddForm />;
}
//loader for loading all the office the Staff can workFor
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
  return resData;
}
export async function action({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor"),
    dob: reformatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
    password: "12345678",
    isAdmin: 0,
  };
  console.log(data);
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/addStaff",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  console.log(resData);
  if (resData !== "SUCCEED") {
    return json({ message: resData });
  }

  return redirect("/main");
}
