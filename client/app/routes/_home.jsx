import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import NaviStyles from "~/styles/MainNavigation.css";
import { getUserInfo, requireUserSession } from "../services/auth.server";
import { redirect } from "@remix-run/node";

export default function HomeLayout() {
  return (
    <div className="page">
      <MainNavigation></MainNavigation>
      <section className="p-4 sm:ml-64">
        <Outlet />
      </section>
    </div>
  );
}
export async function loader({ request }) {
  // console.log(request);
  const response = await requireUserSession(request);
  if (!response) return redirect("/login");
  // console.log('blo');
  // console.log(response);
  const data = await fetch("https://registrytotal.herokuapp.com/api/staff", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${response}`,
      "content-type": "application/json",
    },
  });
  const resData = await data.json();
  console.log(resData);
  return resData;
}
