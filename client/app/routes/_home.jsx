import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import NaviStyles from "~/styles/MainNavigation.css";
import { getUserInfo, requireUserSession } from "../services/auth.server";

export default function HomeLayout() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <section className="home">
        <Outlet />
      </section>
    </>
  );
}
export async function loader({ request }) {

  const response = await requireUserSession(request);

  console.log('blo');
  console.log(response);
  const data = await getUserInfo(response);
  return data;
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: NaviStyles,
    },
  ];
}
