import ResetBox from "../components/UI/ResetBox";
import { json, redirect } from "@remix-run/node";
export default function ResetPage() {
  return <ResetBox />;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = {
    newpassword: formData.get("newpassword"),
    confirmpassword: formData.get("cfpassword"),
  };
  const response = await fetch(
    "https://registrytotal.herokuapp.com/api/staff/reset-password/" +
      params.token +
      "/" +
      params.userId,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  const resData = await response.json();
  if (resData === "Password reset Successfully") {
    return redirect("/login");
  } else {
    return json({ message: resData });
  }
}
