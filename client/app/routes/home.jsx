import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import NaviStyles from "~/styles/MainNavigation.css";

export default function HomeLayout () {
    return <>
        <MainNavigation></MainNavigation>
        <section className="home"><Outlet /></section>
    </>
}
export function links() {
  return[{
    rel:'stylesheet',
    href: NaviStyles
  }]
}