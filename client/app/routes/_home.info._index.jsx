import OwnInfo from "../components/About/OwnInfo";

export default function Infopage() {
  return <OwnInfo />;
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
