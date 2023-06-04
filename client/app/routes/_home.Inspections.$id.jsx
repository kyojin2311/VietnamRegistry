import InspectionsForm from "../components/InspectionsForm";
import { getInspections } from "../services/APIAction.server";
import { useLoaderData } from "@remix-run/react";

export default function InpectionsPage() {
  const data = useLoaderData();
  console.log(data);
  return <InspectionsForm data={data} />;
}
export async function loader({ request, params }) {
  return await getInspections(params, request);
}
