import { redirect } from "@remix-run/node";
import ProvinceBox from "../components/Analystics/ProvinceBoxModal";
import province from '../util/province.json'
export default function AnalysticsPage() {
  return (
    <>
      <ProvinceBox />
    </>
  );
}

export async function action ({request}) {
    const formData = await request.formData();
    const p = formData.get('province');
    const data = province.filter((a) => a.name === p)[0];
    console.log(data);
    return redirect(`/analystics/${data.codename}`);
}