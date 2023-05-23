import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import { getOwnInfo } from "../services/APIAction.server";

export default function HomeLayout() {
  return (
    <div className="page">
      <MainNavigation></MainNavigation>
      <section className="p-4 sm:ml-64 min-h-screen dark:bg-gray-900">
      {/* <section className="p-4 relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen "> */}
        <Outlet />
      </section>
    </div>
  );
}
export async function loader({ request }) {
  return await getOwnInfo(request);
}
