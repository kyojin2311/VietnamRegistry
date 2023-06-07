import { Button } from "flowbite-react";
import InspectionsForm from "../components/Inspections/InspectionsForm";
import { getInspections } from "../services/APIAction.server";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function InpectionsPage() {
  const data = useLoaderData();
  const componentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
  });
  const pageStyle = `"
  @page {
    size: A4 landscape;
  }
"`;
  return (
    <>
      <div>
        <style>{pageStyle}</style>
        <div ref={componentsRef}>
          <InspectionsForm data={data} />
        </div>
      </div>
      <Button className="mt-5" onClick={handlePrint}>
        Print
      </Button>
    </>
  );
}
export async function loader({ request, params }) {
  return await getInspections(params, request);
}
