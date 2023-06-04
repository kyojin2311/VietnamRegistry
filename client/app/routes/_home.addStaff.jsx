import { useLoaderData } from "@remix-run/react";
import AddForm from "../components/AddStaffForm";
import { addStaff, getAllOffice } from "../services/APIAction.server";
function reformatDate(dateStr) {
  var dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[1] + "/" + dArr[2] + "/" + dArr[0]; //ex output: "18/01/10"
}
export function meta() {
  return [{ title: "Add Staff" }];
}
export default function addStaffPage() {
  const data = useLoaderData();
  return <AddForm data = {data} />;
}
//loader for loading all the office the Staff can workFor
export async function loader({ request }) {
  try {
    const data = await getAllOffice(request);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`${error.message}`);
  }
}
export async function action({ request }) {
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
  return await addStaff(request, data);
}
