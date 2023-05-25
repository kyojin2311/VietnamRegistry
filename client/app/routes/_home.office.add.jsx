import AddOfficeForm from "../components/AddOfficeForm";
import { addOffice, adminCheck } from "../services/APIAction.server";

export default function AddOfficePage() {
  return <AddOfficeForm />;
}

export async function loader({ request }) {
  try {
    const data = await adminCheck(request);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const fetchData = {
    name: formData.get("OfficeName"),
    address: formData.get("Address"),
    hotline: formData.get("Hotline"),
    hotmail: formData.get("Hotmail"),
  };
  try {
    const data = await addOffice(request, fetchData);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
