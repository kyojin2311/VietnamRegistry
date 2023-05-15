import {
  Link,
  useLoaderData,
  useMatches,
  useRouteLoaderData,
  Form,
} from "@remix-run/react";
import OwnInfo from "../components/OwnInfo";

export default function Infopage() {
  const matches = useMatches();
  const info = matches.find((match) => match.id === "routes/_home").data;
  const { name, SSN, dateOfBirth, phone } = info.data;
  var date = new Date(dateOfBirth);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  
  return (
    <OwnInfo />
  );
}


