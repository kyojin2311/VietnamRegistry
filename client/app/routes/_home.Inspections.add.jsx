
import InspectionsAddForm from "../components/InspectionAdd";
import { requireUserSession } from "../services/auth.server";

export default function inspectionAdd() {
  return <InspectionsAddForm></InspectionsAddForm>;
}

export async function action ({request}) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const formData = await request.formData();
  const data  = {
    NumberPlate: formData.get("carNumberPlate"),
    Type: formData.get("Type"),
    Mark: formData.get("Mark"),
    ModelCode: formData.get("ModelCode"), 
    EngineNumber: formData.get("EngineNumber"),
    ChassisNumber: formData.get("ChassisNumber"), 
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
   EngineDisplacement: formData.get("EngineDisplacement"),
   maxOutputToRpmRatio: formData.get("maxOutputToRpmRatio"),
   numberOfTiresAndTireSize: formData.get("numberOfTiresAndTireSize"),
  }
  const response = await fetch ();
  return null;
}