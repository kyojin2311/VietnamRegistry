import { redirect, json } from "@remix-run/node";
import SearchModal from "../components/CarPage/searchCarModal.client";
import { requireUserSession } from "../services/auth.server";
import { findCarbyNumberPlate } from "../services/APIAction.server";
import CarPageDefault from "../components/CarPage/CarPageDefault";
import { ClientOnly } from "remix-utils";
import Spinner from "../util/Loading";
import { Outlet } from "@remix-run/react";
export default function CarIndex() {
  return (
    <>
      <ClientOnly fallback={<Spinner />}>{() => <SearchModal />}</ClientOnly>
      <CarPageDefault />
    </>
  );
}
export async function loader({ request }) {
  const token = requireUserSession(request);
  if (!token) return redirect("/login");
  else return null;
}
export async function action({ request }) {
  const formData = await request.formData();
  const numberPlate = formData.get("NumberPlate");
  try {
    const data = await findCarbyNumberPlate(request, numberPlate);
    return data;
  } catch (error) {
    return json({ message: error.message });
  }
}
