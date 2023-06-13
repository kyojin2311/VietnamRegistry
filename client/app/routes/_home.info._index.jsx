import { ClientOnly } from "remix-utils";
import OwnInfo from "../components/About/OwnInfo";
import Spinner from "../util/Loading";

export default function Infopage() {
  return <ClientOnly fallback={<Spinner />}>{() => <OwnInfo />}</ClientOnly>;
}

export function meta({ matches }) {
  return [{ title: `${matches[1].data.data.name}` }];
}
// export async function loader({ request }) {
//   try {
//     const data = await getOwnInfo(request);
//     return data;
//   } catch (err) {
//     throw new Error("Not found");
//   }
// }
