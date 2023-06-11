import { json, redirect } from "@remix-run/node";
import { requireUserSession } from "../services/auth.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import ListOfStaff from "../components/Office/UserTable";
export default function OfficeDetailPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <ListOfStaff />
      <Outlet context={data} />
    </>
  );
}

export async function loader({ request, params }) {
  const token = await requireUserSession(request);
  if (!token) return redirect("/login");
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/office/" + params.id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const url =
    "https://registrytotal.herokuapp.com/api/office/" + params.id + "/car";
  const dataPass = {
    time: "2023",
    city: "",
  };
  const response_2 = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataPass),
  });

  const data = await response.json();
  const data2 = await response_2.json();
  const returnData = json({ staff: data[0] }, { car: data2 });
  return returnData;
}
