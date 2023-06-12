import { useLoaderData, useMatches } from "@remix-run/react";
import InspectionsAddForm from "../components/Inspections/InspectionAdd";
import { requireUserSession } from "../services/auth.server";
import { redirect, json } from "@remix-run/node";
import { reFormatDate } from "../util/formatDate";

export default function inspectionAdd() {
  const data = useLoaderData();
  return <InspectionsAddForm data={data}></InspectionsAddForm>;
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
  console.log(resData);
  return resData;
}
export async function action({ request }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const formData = await request.formData();
  const data = {
    ownername: formData.get("OwnerName"),
    owneremail: formData.get("Email"),
    ownerphone: formData.get("Phone"),
    ownerssn: formData.get("SSN"),
    ownerdob: reFormatDate(formData.get("DOB")),
    carNumberPlate: formData.get("carNumberPlate"),
    Type: formData.get("Type"),
    Mark: formData.get("Mark"),
    certDate: formData.get("CertDate"),
    certNum: formData.get("CertNum"),
    ModelCode: formData.get("ModelCode"),
    EngineNumber: formData.get("EngineNumber"),
    ChassisNumber: formData.get("ChassisNumber"),
    purpose: formData.get("Purpose"),
    bought: formData.get("BoughtPlace"),
    ManufacturedYear: formData.get("ManufacturedYear"),
    ManufacturedCountry: formData.get("ManufacturedCountry"),
    WheelFormula: formData.get("WheelFormula"),
    WheelTread: formData.get("WheelTread"),
    OverallDimension: formData.get("OverallDimension"),
    LuggageContainer: formData.get("LuggageContainer"),
    WheelBase: formData.get("WheelBase"),
    KerbMass: formData.get("KerbMass"),
    AuthorizedPayload: formData.get("AuthorizedPayload"),
    AuthorizedTotalMass: formData.get("AuthorizedTotalMass"),
    AuthorizedTowedMass: formData.get("AuthorizedTowedMass"),
    CarriedNo: formData.get("CarriedNo"),
    FuelType: formData.get("FuelType"),
    engineDisplacement: formData.get("EngineDisplacement"),
    maxOutputToRpmRatio: formData.get("maxOutputToRpmRatio"),
    numberOfTiresAndTireSize: formData.get("numberOfTiresAndTireSize"),
  };
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/inspection/add",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  console.log(resData);
  if (resData.status === "SUCCEEDED") {
    return redirect(`/Inspections/${resData.regisNum}`);
  } else {
    return json({ message: resData });
  }
}
