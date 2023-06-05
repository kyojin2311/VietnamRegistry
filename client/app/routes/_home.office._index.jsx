import OfficeList from "../components/Office/OfficeList";
import { getAllOffice } from "../services/APIAction.server";
export default function OfficePage() {
  return (
    <>
      <OfficeList />;
    </>
  );
}

export async function loader({ request }) {
  return await getAllOffice(request);
}
