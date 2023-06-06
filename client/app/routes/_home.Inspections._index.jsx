import SearchModal from "../components/Inspections/searchInspectionsModal.client";
import { findInspectionsById } from "../services/APIAction.server";
import { json } from "@remix-run/node";
export default function InspectionSearchPage() {
  return <SearchModal />;
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("InspectId");
  try {
    const data = await findInspectionsById(request, id);
    return data;
  } catch (error) {
    return json({ message: error.message });
  }
}
