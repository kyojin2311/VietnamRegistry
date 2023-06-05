import { useOutletContext } from "@remix-run/react";
import OwnInfo from "../components/About/OwnInfo";

export default function Infopage() {
  return <OwnInfo />;
}

export function meta({ matches }) {
  return [{ title: `${matches[1].data.data.name}` }];
}
