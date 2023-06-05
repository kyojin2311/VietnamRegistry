import OfficeList from "../components/Office/OfficeList";
import { adminCheck, getAllOffice } from "../services/APIAction.server";
export default function OfficePage() {
  return (
    <>
      <OfficeList />;
    </>
  );
}

export async function loader({ request }) {
  try {
    const data = await adminCheck(request);
    return await getAllOffice(request);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
