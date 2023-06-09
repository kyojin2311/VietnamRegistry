import { Outlet } from "@remix-run/react";
import MainNavigation from "../components/UI/MainNavigation";
import { getOwnInfo } from "../services/APIAction.server";
import { useLoaderData } from "@remix-run/react";
export default function HomeLayout() {
  const userData = useLoaderData();
  return (
    <div className="page" style={{ overflow: "auto" }}>
      <MainNavigation></MainNavigation>
      <section className="p-4 xl:ml-64 min-h-screen dark:bg-gray-900 ">
        <Outlet context={userData} />
      </section>
    </div>
  );
}
export async function loader({ request }) {
  try{
  const data = await getOwnInfo(request);
  return data; }
  catch(err){
    throw new Error("Not found");
  }
}
