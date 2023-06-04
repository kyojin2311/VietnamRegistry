import CarPage from "../components/CarPage";
import { requireUserSession } from "../services/auth.server";
export default function CarInfoPage() {
  return <CarPage />;
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const numberplate = params.numberPlate;
  const fetchData = {
    plate: numberplate,
  };
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/car/plate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(fetchData),
    }
  );
  const resData = await response.json();
  // console.log(resData);
  return resData;
}
