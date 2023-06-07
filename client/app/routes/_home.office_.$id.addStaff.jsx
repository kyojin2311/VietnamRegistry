import { useOutletContext } from "@remix-run/react";
import AddForm from "../components/AddStaffForm";
import { addStaff } from "../services/APIAction.server";
import PageModal from "../util/PageModal";
function reformatDate(dateStr) {
  var dArr = dateStr.split("-"); // ex input: "2010-01-18"
  return dArr[1] + "/" + dArr[2] + "/" + dArr[0]; //ex output: "18/01/10"
}
export function meta() {
  return [{ title: "Add Staff" }];
}
export default function addStaffPage() {
  const context = useOutletContext();
  console.log(context);

  return (
    <PageModal title="Provide credentials information to add users">
      <AddForm data={context.staff.name} />
    </PageModal>
  );
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
