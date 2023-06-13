import { useOutletContext } from "@remix-run/react";
import AddForm from "../components/AddStaffForm";
import { addStaff } from "../services/APIAction.server";
import PageModal from "../util/PageModal";
import { reFormatDate } from "../util/formatDate";
export function meta() {
  return [{ title: "Add Staff" }];
}
export default function AddStaffPage() {
  const context = useOutletContext();
  return (
    <PageModal title="Provide credentials information to add users">
      <AddForm data={context.staff.name} />
    </PageModal>
  );
}
export async function action({ request, params }) {
  const formData = await request.formData();
  var isAdmin;
  if (formData.get("workFor") === "Cục đăng kiểm Việt Nam") {
    isAdmin = 1;
  } else {
    isAdmin = 0;
  }
  const data = {
    email: formData.get("email"),
    name: formData.get("name"),
    workFor: formData.get("workFor"),
    dob: reFormatDate(formData.get("dob")),
    ssn: formData.get("SSN"),
    phone: formData.get("phone"),
    password: "12345678",
    isAdmin: isAdmin,
  };
  return await addStaff(request, data, params);
}
