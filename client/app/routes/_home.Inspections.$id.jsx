import InspectionsForm from "../components/Inspections/InspectionsForm";
import { getInspections } from "../services/APIAction.server";
import { useLoaderData } from "@remix-run/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Staff from "../components/Inspections/registedStaff";

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
      <Staff data={data.regisStaff} office={data.regisPlace.name} />
      <div>
        <style>{pageStyle}</style>
        <ol className="flex items-center justify-self-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-green-300 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 mb-6">
          <li className="flex items-center text-primary-700 dark:text-green-300">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-700 rounded-full shrink-0 dark:border-green-400">
              2
            </span>
            GIẤY CHỨNG NHẬN KIỂM ĐỊNH
            <span className="hidden sm:inline-flex sm:ml-2">
              (CARS REGISTRATIONS)
            </span>{" "}
            <span className="text-right sm:ml-10 hover:cursor-pointer" onClick={handlePrint}>
              <FontAwesomeIcon icon={faPrint} />
            </span>
          </li>{" "}
        </ol>
        <div ref={componentsRef}>
          <InspectionsForm data={data} />
        </div>
      </div>
    </>
  );
}
export async function loader({ request, params }) {
  return await getInspections(params, request);
}
