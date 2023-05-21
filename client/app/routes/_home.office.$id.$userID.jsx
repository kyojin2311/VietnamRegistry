import StaffInfo from "../components/StaffInfo";
import { getStaffbyId } from "../services/APIAction.server";

export default function StaffInfoPage() {
  return <StaffInfo />;
}
export async function loader({ request, params }) {
  try {
    const data = await getStaffbyId(request, params.userID);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
