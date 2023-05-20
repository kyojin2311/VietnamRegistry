import InspectionsForm from "../components/InspectionsForm";
import { getInspections } from "../services/APIAction.server";

export default function InpectionsPage() {
  return <InspectionsForm />;
}
export async function loader({ request, params }) {
  return await getInspections(params, request);
}
