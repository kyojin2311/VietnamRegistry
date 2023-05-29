import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/MainNavigation";
import { getOwnInfo } from "../services/APIAction.server";
import { useLoaderData } from "@remix-run/react";
export default function HomeLayout() {
  const userData = useLoaderData();
  return (
    <div className="page" style={{ overflow: "auto" }}>
      <MainNavigation></MainNavigation>
      <section className="p-4 sm:ml-64 min-h-screen dark:bg-gray-900">
        {/* <section className="p-4 relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 min-h-screen "> */}
        <Outlet context={userData} />
      </section>
    </div>
  );
}
export async function loader({ request }) {
  const data = await getOwnInfo(request);
  return data;
}
// export function links() {
//   return [
//     {
//       rel: "stylesheet",
//       href: styles,
//     },
//   ];
// }
